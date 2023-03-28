# 简介

## ChatGPT-Plugin：智能聊天插件

ChatGPT-Plugin 是一款强大的插件，基于云崽机器人 (Yunzai-Bot) 开发，利用 OpenAI 最新推出的 ChatGPT 和微软的 New Bing API 实现智能聊天功能。通过使用此插件，您可以在您的项目中快速轻松地集成智能聊天功能。请注意，使用 ChatGPT-Plugin 需要自备 OpenAI 账号或具有 New Bing 访问权限的必应账号。

想要了解更多关于 ChatGPT-Plugin 的详细信息，请查看 [Github 项目地址](https://github.com/ikechan8370/chatgpt-plugin)。

文档地址：[文档](https://chatgpt-docs.err0r.top/)（正在筹集新域名）

文档仓库地址：[仓库](https://github.com/Err0rCM/chatgpt-plugin-docs)

## 支持特性

ChatGPT-Plugin 目前支持使用 ChatGPT 的浏览器模式/API 接口、微软的 New Bing 和 ChatGLM。我们计划在未来添加更多支持特性以满足不同需求。

## 系统需求

Node.js >= 18 / Node.js >= 14（需搭配 node-fetch）

::: tip 提示

建议新手使用 18 版本以上的 Node.js。

:::

## 获取帮助

您可以直接向机器人发送 `#chatgpt帮助` 以获取相关帮助信息。

## 关于文档

本文档目前仍处于构建阶段。我们急需补充关于 [ChatGLM](/config/chatglm)、[语音配置](/config/tts)、[目录结构](/guide/file)、[使用 Docker](/guide/docker)、[分享设定](/set/share)、[画图](/draw) 和 [常见问题](/faq) 等模块的内容。我们诚挚邀请各位小伙伴参与文档编辑工作！

```
git clone https://github.com/Err0rCM/chatgpt-plugin-docs
# 克隆源码

cd chatgpt-plugin-docs

yarn install
# 安装依赖

yarn docs:dev
# 开始编写文档
```

您还可以直接在网站上点击“编辑此页”，跳转到 GitHub 对应页面，直接修改并保存，然后提交 PR。这一流程非常简便高效。

我们欢迎所有人，无论您是否具备编程基础，无论您是否熟悉插件的使用，都积极参与文档的修改和维护工作。您的贡献将对插件社区产生深远影响。

感谢各位为插件社区做出的贡献！

---

**下一篇: [指南/快速开始](/guide/quick_start)**
