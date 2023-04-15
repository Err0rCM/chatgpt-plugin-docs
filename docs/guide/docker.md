# 使用Docker

chatgpt-plugin支持使用Docker云崽。


详情请查看[云崽机器人与chatGPT插件的安装](https://err0r.top/article/Yunzai-chatgptPlugin/)

如果您有Docker，可以使用贡献者构建的Docker镜像一键启动：

```bash
# 以容器名yunzai，容器SSH转发到1022端口，锅巴登录端口50831为例
docker run -it -p 1022:22 -p 50831:50831 --name yunzai moeta233/yunzai-chatgpt
```

详细说明已在对应的DockerHub中列出。请参阅：[DockerHub](https://hub.docker.com/r/moeta233/yunzai-chatgpt)


::: warning 警告
以下为摘抄[云崽机器人与chatGPT插件的安装](https://err0r.top/article/Yunzai-chatgptPlugin/)的**部分**内容，仅安装了锅巴面板和chatgpt-plugin，如需安装其他插件请查看原文
:::


### 安装Docker及docker-compose

（很多人喜欢直接在本机装yunzai，不过我还是喜欢Docker版的，虽说有点麻烦，但整理方便）

[docker官网的文档](https://docs.docker.com/engine/install/ubuntu/)

> 新装的系统不存在旧版本安装的问题，如果已安装Docker且无法正常运行，请运行：`sudo apt-get remove docker docker-engine docker.io containerd runc`

不做过多阐述，按照命令行如下安装即可：

```sh
sudo apt-get update
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release -y
sudo mkdir -m 0755 -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
```

如果有问题请去官网查看文档，都有很详细的解释和排错

### 设置代理

这里是在宿主机使用clash设置代理和自动启动

#### 下载clash

[clash](https://github.com/Dreamacro/clash/releases)

```sh
wget -O clash.gz https://github.com/Dreamacro/clash/releases/download/v1.13.0/clash-linux-amd64-v1.13.0.gz
```


下载好后解压安装包中 clash 到 /usr/local/bin/ 目录下，给予执行权限，并以此在全局环境运行软件

```sh
gzip -dc clash.gz > /usr/local/bin/clash
chmod +x /usr/local/bin/clash
```

创建配置文件目录，并[下载 MMDB 文件](https://www.sub-speeder.com/client-download/Country.mmdb)（如果速度慢可以直接下载后上传）

> MMDB 文件可以提供 IP 与地理位置相对应的数据信息，可以更精确地确认 IP 所对应地域，以此提高网络分流的效率和质量

```sh
mkdir /etc/clash
wget -O /etc/clash/Country.mmdb https://www.sub-speeder.com/client-download/Country.mmdb
```

#### 持久化运行

创建 systemd 脚本，以使程序持久化运行

```sh
sudo echo "[Unit]
Description=clash daemon
 
[Service]
Type=simple
# 注意此处user
User=root
ExecStart=/usr/local/bin/clash -d /etc/clash/
Restart=on-failure
 
[Install]
WantedBy=multi-user.target" > /etc/systemd/system/clash.service
```

重载 systemd

```sh
sudo systemctl daemon-reload
```

#### ********

下载你的配置文件后写入`/etc/clash/config.yaml`

或者直接wget下载

```sh
sudo wget -O /etc/clash/config.yaml https://example.com/config.yaml
```

#### 设置系统代理

```sh
sudo echo 'export http_proxy="http://127.0.0.1:7890"
export https_proxy="https://127.0.0.1:7890"
export no_proxy="localhost, 127.0.0.1"' > /etc/profile.d/proxy.sh
```

#### 重载 /etc/profile 配置

```sh
source /etc/profile
```

#### 启动clash并设置开机自启

```sh
systemctl start clash
systemctl enable clash
```

此时可以通过`curl www.google.com`测试代理是否正常

#### 配置git代理&跳过ssl证书校验

```sh
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890
git config --global https.sslverify false
```



### 下载Yunzai及对应的插件

#### 下载Yunzai

在你想要的目录运行

```sh
git clone --depth=1 -b main https://gitee.com/Le-niao/Yunzai-Bot.git
```

进入Yunzai目录

```sh
cd Yunzai-Bot/
```

**注意：至此以后所有的目录默认均在Yunzai目录下！！！**

#### 下载对应插件

**注意**：如果卡的话可以看一下gitee上是否有同步仓库，如果有请将`github`更换为`gitee`，如不需要可跳过本小节，安装插件前请看好对应作用及说明，本教程会展示安装全部插件及所需库的过程

##### chatGPT-Plugin

```sh
git clone --depth=1 https://github.com/ikechan8370/chatgpt-plugin.git ./plugins/chatgpt-plugin
```

##### Guoba-Plugin

```sh
git clone --depth=1 https://github.com/guoba-yunzai/guoba-plugin.git ./plugins/Guoba-Plugin/
```


### 更新docker-compose.yaml文件

如果您不使用docker搭建Yunzai，请跳过此步骤

正常情况下默认的docker-compose文件肯定是不行的，我们要把插件加进去，下面给出一份参考文件，可以直接复制但请一定对比看好注释，默认的注释已全部删除，仅放出修改部分的注释

```yaml
version: "3"
services:
  yunzai-bot:
    container_name: yunzai-bot
    # image: swr.cn-south-1.myhuaweicloud.com/sirly/yunzai-bot:v3         # 使用云端精简镜像
    image: swr.cn-south-1.myhuaweicloud.com/sirly/yunzai-bot:v3plus   # 使用扩展镜像，如果你想节省资源可以注释此行用上面的精简镜像
    restart: always
    ports:
      - "50831:50831"      # 映射锅巴插件端口
      - "5900:5900"        # 此端口为chatGPT浏览器模式所需的桌面程序所释放的端口
    volumes:
      - ./yunzai/config/:/app/Yunzai-Bot/config/config/
      - ./yunzai/genshin_config:/app/Yunzai-Bot/plugins/genshin/config
      - ./yunzai/logs:/app/Yunzai-Bot/logs
      - ./yunzai/data:/app/Yunzai-Bot/data
      
      # 以下目录是插件目录，安装完插件后需要手动添加映射（如有其他插件请自行添加）
      # 映射格式：./yunzai/plugins/<插件目录名>:/app/Yunzai-Bot/plugins/<插件目录名>
      - ./yunzai/plugins/example:/app/Yunzai-Bot/plugins/example                          # 单js插件目录
      # - ./yunzai/plugins/py-plugin:/app/Yunzai-Bot/plugins/py-plugin                      # 新py插件
      - ./yunzai/plugins/chatgpt-plugin:/app/Yunzai-Bot/plugins/chatgpt-plugin    # chatgpt插件
      - ./yunzai/plugins/Guoba-Plugin:/app/Yunzai-Bot/plugins/Guoba-Plugin                # 锅巴插件
    environment:
      - CUID=1000
      - CGID=1000
    depends_on:
      redis: { condition: service_healthy }
    deploy:
      resources:
        limits:
          memory: 2G

  redis:
    container_name: yunzai-redis
    image: redis:alpine
    restart: always
    volumes:
      - ./redis/data:/data
      - ./redis/logs:/logs
    healthcheck:
      test: [ "CMD", "redis-cli", "PING" ]
      start_period: 10s
      interval: 5s
      timeout: 1s

```



### 开始安装

**如果您不使用docker版请按照Yunzai的README所提供的方式启动**

Yunzai目录下运行

```sh
docker compose up -d
```

> 如果您是安装的docker compose standalone，非plugin，则命令为`docker-compose up -d`

![dockerPs](https://err0r.top/article/Yunzai-chatgptPlugin/image-20230215220213208.png)

安装完毕后运行`docker ps`会看到如上



### 进行相关配置

#### Yunzai的配置

进入docker容器

```sh
docker exec -it yunzai-bot bash
```

![dockerExec](https://err0r.top/article/Yunzai-chatgptPlugin/image-20230215220526567.png)

结合前图所示，可以看到命令行前符号变成了`root@2c02297a53c1`，而这个`2c02297a53c1`就是前图所示我的yunzai-bot的`CONTAINER ID`，说明我们**已经进入了yunzai-bot容器内部**

在容器内部运行`exit`即可退出容器，标志为命令行符号变成主机名了

> 接下的步骤基本同在主机安装的步骤一样

在**容器内部**的Yunzai目录（默认就在，不用动）运行

```sh
npm run login
```

按照提示输入账号密码，登录端口默认ipad就行

可以不设置密码，进行扫码登录，但扫码登录要求设备和系统**在同一个网络环境下**

![npmRunLogin](https://err0r.top/article/Yunzai-chatgptPlugin/image-20230215221128864.png)

#### 获取ticket

触发了验证选择`手动获取ticket`的步骤，选择`滑动验证app`请跳过并按照要求操作

1. 先打开给出的链接，在浏览器中首先**按下F12或直接打开开发者模式**
2. 打开"网络"或"Network"
3. 完成滑动验证
4. 在网络请求中找到`cap_union_new_verify`，点击Preview，右键`ticket`选择`Copy value`
5. 回到系统粘贴

![token](https://err0r.top/article/Yunzai-chatgptPlugin/image-20230215220956779.png)

如果触发了二次验证，请按要求验证

> 2023.2.15 本人试了几台机子`网页扫码验证`都显示不出来
>
> ![无法显示链接](https://err0r.top/article/Yunzai-chatgptPlugin/image-20230215223558251.png)



成功登陆后本地就保存了登录的token，按CTRL+C退出到容器命令行界面

![token](https://err0r.top/article/Yunzai-chatgptPlugin/image-20230215223738225.png)



#### chatGPT对应的配置

默认配置文件位置

```sh
plugins/chatgpt-plugin/config/config.example.json
```

请将其复制一份为`config.json`到统一目录下即可自定义配置，推荐使用锅巴插件进行配置

> 注意：如果您是docker用户，在安装完（即执行完`docker-compose up -d`后，可以发现Yunzai-bot的目录下多了一个yunzai文件夹，这是Yunzai在编译的时候映射入docker容器内的文件夹，文件夹目录如下
>
> ```
> yunzai
> ├── config
> │   ├── bot.yaml
> │   ├── group.yaml
> │   ├── other.yaml
> │   ├── qq.yaml
> │   └── redis.yaml
> ├── data
> │   ├── [你登录的qq号]
> │   │   └── device-[你登录的qq号].json
> │   ├── html
> │   └── image
> ├── genshin_config
> ├── logs
> └── plugins
> ```
>
> 所有的文件修改请在此文件夹下修改，如我需要改`qq.yaml`，请勿在`Yunzai-Bot/config/qq.yaml`更改，而是在`Yunzai-Bot/yunzai/config/qq.yaml`修改！！！
>
> 此处有两种方案
>
> 1. **退出容器**，在宿主机的`Yunzai-Bot/yunzai/plugins/chatgpt-plugin/config/config.json`
> 2. 在容器内，修改`Yunzai-Bot/plugins/chatgpt-plugin/config/config.json`

请自行查看文档并上传或vim等方式修改

##### 配置代理（重点）

**如使用docker版，请一定一定注意代理的配置！！！在配置文件的第二条**

```json
"proxy": "",
```

注意！由于是docker版，docker内部的网络与宿主机不同，我们需要宿主机的代理，请注意宿主机的代理需设置为允许lan连接

> Docker 服务默认会创建一个 *docker0* 网桥(其上有一个 docker0 内部接口)，它在内核层连通了其他的物理或虚拟网卡

在宿主机，即主机运行

```sh
docker network ls
```

![dockerNetworkLs](https://err0r.top/article/Yunzai-chatgptPlugin/image-20230215224253515.png)

可以看到有一个yunzai的网络，运行命令查看

```sh
docker network inspect yunzai-bot_default
```

![dockerNetworkInspect](https://err0r.top/article/Yunzai-chatgptPlugin/image-20230215224533490.png)

可以看到这就是我的yunzai-bot所在的虚拟网，我们只要关注`IPAM-Config-Gateway`即可，这个地址就是我们宿主机和这个网络通信的地址，也是我们宿主机在这个网络的地址，所以我们的代理地址就需要填这个而不是127.0.0.1

```js
// 每个人每台机子随机分配地址，不一定一样，请按照自己的情况配置，这里我就该配置
"proxy": "http://172.21.0.1:7890", // 7890是我宿主机的clash默认的http代理端口
```

#### 安装依赖

如果是docker用户请注意，所有依赖均需要在**容器内**安装，如未安装插件则无需安装其依赖

chatGPT-Plugin所需依赖

```sh
pnpm install -w undici chatgpt showdown mathjax-node delay uuid remark strip-markdown random puppeteer-extra-plugin-recaptcha puppeteer-extra puppeteer-extra-plugin-stealth @waylaidwanderer/chatgpt-api keyv-file
```

### 最后

重启Yunzai-Bot容器

```sh
docker restart yunzai-bot
```

## chatGPT-Plugin想使用浏览器模式怎么办

chatGPT-Plugin想使用浏览器模式需要有桌面环境

请参照[此处](/config/browser.md)
