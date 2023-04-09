# API3反代

想要自己搭建ChatGPT官方API反向代理吗？以下是一些相关信息。

作者提供的开箱即用方式：[搭建ChatGPT官方API反向代理](https://ikechan8370.com/archives/da-jian-chatgpt-guan-fang-fan-xiang-dai-li)

## 使用docker

在这里我给出一种使用docker再加一层nginx代理的搭建方式

::: danger 注意

使用此方式前您需已安装好docker-compose

:::

> 老喜欢用docker了 —— Err0r

在一个文件夹下新建`docker-compose.yml`，内容如下：

```yml

version: '3'

services:
  chatgpt-proxy:
    image: geyinchi/node-chatgpt-proxy
    container_name: node-chatgpt-proxy
    shm_size: 1gb
    networks:
      chatgpt-proxy-network:
        # 这里的ip是可以改的，需要和下方network在同一子网，代理的ip也要注意  
        ipv4_address: 172.16.238.10
    # 如果你要使用宿主机的clash代理，可以像如下配置，其他代理同理
    # environment:
    #   - HTTP_PROXY=http://172.16.238.1:7890
    #   - HTTPS_PROXY=http://172.16.238.1:7890

  nginx:
    image: nginx
    container_name: chatgpt-proxy-nginx
    ports:
    # 这里是反代出来的端口，要改只需改前面`[你想要的端口]:80`
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - chatgpt-proxy
    networks:
      chatgpt-proxy-network:
        ipv4_address: 172.16.238.11

networks:
  chatgpt-proxy-network:
    driver: bridge
    ipam:
      driver: default
      config:
        # 可更改
        - subnet: 172.16.238.0/24

```

::: warning 注意

本方式没有配置https，如有需求则另需443端口和其他配置，可自行研究。

:::


接着在**同目录下**新建一个`nginx.conf`，内容如下，可根据需求自行修改：

```conf

events {}

http {
    upstream chatgpt-proxy {
        server chatgpt-proxy:3000;
    }

    server {
        listen 80;
        server_name localhost;

        location /backend-api/conversation {
            proxy_pass http://chatgpt-proxy/backend-api/conversation;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_connect_timeout 5s;
            proxy_read_timeout 10s;
            proxy_next_upstream error;
        }

        location /backend-api/ {
            proxy_pass http://chatgpt-proxy/backend-api/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_connect_timeout 5s;
            proxy_read_timeout 10s;
            proxy_next_upstream error;
        }

        location / {
            return 403;
        }
    }
}


```

最终的目录结构如下：

```
.
├── docker-compose.yml
└── nginx.conf
```

在此目录下执行命令`docker-compose up -d`，完成后`http://localhost:[端口号]`即为访问 ChatGPT 官方聊天 API 的反代服务了

可使用`docker exec -it node-chatgpt-proxy tail -100f /var/log/node-chatgpt-proxy.log`查看日志

### 花里胡哨

有些时候如果有人闲着无聊访问`http://localhost:[端口号/backend-api/conversation/`，会导致puppeteer崩溃，这样反代就会出现504错误；有时候连接超时会出现502错误

![504](https://user-images.githubusercontent.com/68117733/230784202-243b5d84-c658-457e-b3f2-87e7de9cf2b2.png)

这样回复太丑了，为了避免这样的情况发生，可以修改nginx的错误界面

下面我们以504报错为例，如需配置502也是同理的。

我们写一个`504.html`，内容如下：

```html
<meta charset="UTF-8">
504：初始化会话中，请等待约十秒后重试
```

将其复制到nginx容器内`/usr/share/nginx/html`路径下

```sh
docker cp 504.html chatgpt-proxy-nginx:/usr/share/nginx/html
```

有些时候可能还会有权限问题，再执行一下赋予读执行权限

```sh
docker exec -it chatgpt-proxy-nginx chmod 644 /usr/share/nginx/html/504.html
```

接着修改`nginx.conf`如下：

```conf
events {}

http {
    upstream chatgpt-proxy {
        server chatgpt-proxy:3000;
    }

    server {
        listen 80;
        server_name localhost;

        error_page 502 /502.html;
        location = /502.html {
            root /usr/share/nginx/html;
            internal;
        }

        error_page 504 /504.html;
        location = /504.html {
            root /usr/share/nginx/html;
            internal;
        }

        location /backend-api/conversation {
            proxy_pass http://chatgpt-proxy/backend-api/conversation;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_connect_timeout 5s;
            proxy_read_timeout 10s;
            proxy_next_upstream error;
        }

        location /backend-api/ {
            proxy_pass http://chatgpt-proxy/backend-api/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_connect_timeout 5s;
            proxy_read_timeout 10s;
            proxy_next_upstream error;
        }

        location / {
            return 403;
        }
    }
}

```

最后重启nginx，执行：

```sh
docker exec -it chatgpt-proxy-nginx nginx -s reload
```

这样在报错的情况下网页上访问结果如图：

![update504](https://user-images.githubusercontent.com/68117733/230784353-2332a360-6823-4ad4-b018-7de1cc5c5b84.png)

询问回复如图：

![reply504](https://user-images.githubusercontent.com/68117733/230784409-d7bf202f-a983-4f49-90ad-7002e942ba6e.png)

是不是比之前好看多了？

甚至可以把`<meta charset="UTF-8">`删了，删了后网页访问会乱码，不过不会真有人无聊到网页访问吧？

---

## 作者文章

::: warning 注意
以下为部分摘录自[搭建ChatGPT官方API反向代理](https://ikechan8370.com/archives/da-jian-chatgpt-guan-fang-fan-xiang-dai-li)，如果需要完整内容，请查看原文。
:::

ChatGPT官方API使用了Cloudflare作为防护，通常情况下难以绕过其爬虫检测。但可以使用基于浏览器的绕过方案。

以下是简单的开箱即用的容器镜像，需要注意的是该方法仅适合有一定经验的用户，过于小白的用户不建议尝试。

### 搭建步骤

1. 安装docker。
2. 运行命令 `docker run -d -p [端口号]:3000 —name node-chatgpt-proxy —shm-size=1gb geyinchi/node-chatgpt-proxy` 启动容器。
3. 查看日志：可以使用 `docker exec -it node-chatgpt-proxy tail -f /var/log/node-chatgpt-proxy.log` 命令实时查看日志，也可以使用 `docker exec -it node-chatgpt-proxy tail -100f /var/log/node-chatgpt-proxy.log` 命令查看更多行数。
4. 更新容器：使用 `docker pull geyinchi/node-chatgpt-proxy && docker stop node-chatgpt-proxy && docker rm node-chatgpt-proxy && docker run -d -p [端口号]:3000 —name node-chatgpt-proxy —shm-size=1gb geyinchi/node-chatgpt-proxy` 命令拉取镜像并创建新容器。
5. 访问接口：现在可以使用 `http://localhost:[端口号]` 访问 ChatGPT 官方聊天 API 的反代服务器了。

需要注意的是，建议使用具有 1GB 及以上内存的服务器，并且该服务器位于能够访问 ChatGPT 的国家或地区。

### 接口说明

略，聊天接口与官方一致，默认使用 SSE，可以自行调试。

如果你是 Yunzai 用户，该镜像适用于 Yunzai 聊天机器人插件开发，并适配其 API3 模式。使用该插件的用户可以一键部署并使用。聊天路径为 `/backend-api/conversation`。

除此之外，还有 Sydney 反代，接口比较简单，你也可以向 ChatGPT 询问协助搭建。

最后，需要注意的是该镜像的 `latest` 标签可能会持续更新。

### 代码开源

代码开源于 [node-chatgpt-proxy](https://github.com/ikechan8370/node-chatgpt-proxy)

