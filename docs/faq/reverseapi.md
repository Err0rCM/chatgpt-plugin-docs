# API3反代

想要自己搭建ChatGPT官方API反向代理吗？以下是一些相关信息。

::: warning 注意
以下为部分摘录自[搭建ChatGPT官方API反向代理](https://ikechan8370.com/archives/da-jian-chatgpt-guan-fang-fan-xiang-dai-li)，如果需要完整内容，请查看原文。
:::

ChatGPT官方API使用了Cloudflare作为防护，通常情况下难以绕过其爬虫检测。但可以使用基于浏览器的绕过方案。

以下是简单的开箱即用的容器镜像，需要注意的是该方法仅适合有一定经验的用户，过于小白的用户不建议尝试。

## 搭建步骤

1. 安装docker。
2. 运行命令 `docker run -d -p [端口号]:3000 —name node-chatgpt-proxy —shm-size=1gb geyinchi/node-chatgpt-proxy` 启动容器。
3. 查看日志：可以使用 `docker exec -it node-chatgpt-proxy tail -f /var/log/node-chatgpt-proxy.log` 命令实时查看日志，也可以使用 `docker exec -it node-chatgpt-proxy tail -100f /var/log/node-chatgpt-proxy.log` 命令查看更多行数。
4. 更新容器：使用 `docker pull geyinchi/node-chatgpt-proxy && docker stop node-chatgpt-proxy && docker rm node-chatgpt-proxy && docker run -d -p [端口号]:3000 —name node-chatgpt-proxy —shm-size=1gb geyinchi/node-chatgpt-proxy` 命令拉取镜像并创建新容器。
5. 访问接口：现在可以使用 `http://localhost:[端口号]` 访问 ChatGPT 官方聊天 API 的反代服务器了。

需要注意的是，建议使用具有 1GB 及以上内存的服务器，并且该服务器位于能够访问 ChatGPT 的国家或地区。

## 接口说明

略，聊天接口与官方一致，默认使用 SSE，可以自行调试。

如果你是 Yunzai 用户，该镜像适用于 Yunzai 聊天机器人插件开发，并适配其 API3 模式。使用该插件的用户可以一键部署并使用。聊天路径为 `/backend-api/conversation`。

除此之外，还有 Sydney 反代，接口比较简单，你也可以向 ChatGPT 询问协助搭建。

最后，需要注意的是该镜像的 `latest` 标签可能会持续更新。

## 代码开源

代码开源于 [node-chatgpt-proxy](https://github.com/ikechan8370/node-chatgpt-proxy)