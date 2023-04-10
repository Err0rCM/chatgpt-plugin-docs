# 常见问题

此页面长期维护，欢迎遇到问题的小伙伴或者解决问题的小伙伴提出pr！迫切需要小伙伴们一起维护！

![闭眼开车](https://user-images.githubusercontent.com/68117733/230866047-c9ccaa46-7a48-4107-91af-242179999995.jpg)

## 【system】ERR_PNPM_ADDING_TO_ROOT

- 问题详情：Running this command will add the dependency to the workspace root
- 原因：依赖安装问题，添加依赖项到了根目录中
- 解决方式：检查命令是否出错以及权限问题，运行`pnpm -i`时添加`-w`参数

## 【system】ERR_PNPM_UNEXPECTED_STORE

- 问题详情：Unexpected store location
- 原因：迁移了`node_modules`的目录
- 解决方式：重新安装依赖项，执行`pnpm install`

## 【system】Invalid Environment

- 问题详情：Error: Invalid Environment; fetch is not defined
- 原因：node版本过低
- 解决方式：升级到`nodejs18`

## 【system】执行`pnpm i`时，sharp安装失败

- 问题详情：执行`pnpm i`时，sharp安装失败，这不会影响到ChatGPT的聊天功能，只会影响到Dalle2绘图功能。
- 原因：缺少库
- 解决方式：如果您使用的是Ubuntu操作系统，您可以执行以下命令解决问题：

   ```
   apt install libvips-dev
   ```
## 【bot】载入插件错误：chat

- 问题详情：Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'showdown' imported from /app/Yunzai-Bot/plugins/chatgpt-plugin/apps/chat.js
- 原因：缺少依赖项
- 解决方式：按照文档使用`pnpm install -w xxx`安装依赖项。一般需要安装以下依赖项：

```sh
pnpm install -w undici chatgpt showdown mathjax-node delay uuid remark strip-markdown random puppeteer-extra-plugin-recaptcha puppeteer-extra puppeteer-extra-plugin-stealth @waylaidwanderer/chatgpt-api keyv-file
```

## 【bot】chatgpt puppeteer 启动失败

- 问题详情：TypeError: this.browser.pages is not a function
- 原因：没有桌面环境，或者路径不对
- 解决方式：检查路径，同时参考文档[安装桌面环境](/config/browser)

## 【bot】-10003

- 问题详情：Error: unsuccessful retcode: -10003
- 原因：登录失效，具体情况是在发送消息时刚刚好connect closed，就是非常的巧
- 解决方式：如果掉登陆了需要重新登录bot，运行`node app`或`npm run login`；如果没掉那就再发一次信息就好了

## 【bot】我的bot突然掉线再登录提示禁止登录/版本过低怎么办

- 问题详情：[温馨提示]当前QQ版本过低，请升级至最新版本后再登录。点击进入下载页面
- 原因：Yunzai-bot的内置QQ版本与最新版本相差过大，且账号容易被风控
- 解决方式：不保证成功，可以尝试以下方式：

   1. 更改登录设备，在`config/qq.yaml`修改登录设备。
   
      注意：如果您是docker用户，所有的文件修改请在`Yunzai-Bot/yunzai/`文件夹下修改，而非`Yunzai-Bot/config/`文件夹。
   
      > 这是Yunzai在编译的时候映射入docker容器内的文件夹，文件夹目录如下
      >
      > ```text
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
   
   2. 尝试修改设备信息，尤其是IMEI。
   
   3. 联系[Le-niao](https://-gitee.com/Le-niao/Yunzai-Bot)大佬更新云崽。
   
   4. 参考其他issue的解决方法。

## 【docker】我执行docker compose的时候报如下错误怎么办

- 问题详情：ERROR: The Compose file './docker-compose.yaml' is invalid
- 原因：docker compose版本过低
- 解决方式：升级docker compose版本，可以重新下载plugin或standalone。

## 【docker】在docker Running的过程中报如下错误怎么办

- 问题详情：Your kernel does not support swap limit capabilities or the cgroup is not mounted
- 原因：系统默认未开启swap内存限制
- 解决方式：编辑`/etc/default/grub file`，添加以下内容：

   ```sh
   GRUB_CMDLINE_LINUX="cgroup_enable=memory swapaccount=1"
   ```

   保存后执行以下命令：

   ```sh
   sudo update-grub
   ```

   执行完后重启系统。

## 【ChatGPT】timed out

- 问题详情：Error: ChatGPT timed out waiting for response
- 原因：网络卡顿
- 解决方式：再试一遍。

## 【ChatGPT】ERR_ABORTED

- 问题详情：Error: net::ERR_ABORTED at https://chat.openai.com/auth/login
- 原因：恢复会话登录失败
- 解决方式：再试一遍。

## 【ChatGPT】ERR_CONNECTION_RESET

- 问题详情：Error: net::ERR_CONNECTION_RESET at https://chat.openai.com/chat
- 原因：1. 网络不好 2. 代理挂了
- 解决方式：重试或者换代理。

## 【ChatGPT】ERR_PROXY_CONNECTION_FAILED

- 问题详情：Error: net::ERR_PROXY_CONNECTION_FAILED at https://chat.openai.com/chat
- 原因：代理挂了
- 解决方式：检查代理配置。

## 【ChatGPT】ECONNRESET

- 问题详情：FetchError: request to https://chat.duti.tech/api/conversation failed, reason: read ECONNRESET
- 原因：连不上服务器，服务器卡了
- 解决方式：检查代理。

## 【ChatGPT】Not signed in

- 问题详情：Error: Not signed in
- 原因：登录流程结束但实际上未登录，一般是主机卡了一下，或者服务器capacity了
- 解决方式：再试一遍，如果不行可能需要等一段时间再试。

## 【ChatGPT】404/429/503

- 问题详情：Error: ChatGPTAPI error 404 / Error: ChatGPTAPI error 429 / Error: Failed to send message.HTTP 503...
- 原因：一般是服务器抽风，多数情况是代理被ban了，可能是请求太多，也可能是没钱了，**具体要看返回的message**！
- 解决方式：
   1. 关闭浏览器再重试。
   2. 更换代理再试一遍。
   3. 钞能力。

## 【ChatGPT】capacity

- 问题详情：Error: ChatGPT is at capacity
- 原因：每天晚上固定时间忙碌，普通用户需要等待不繁忙才能使用
- 解决方式：尊贵的plus用户永远不会遇到此问题。

以上是本页面长期维护的常见问题及解决方案，如果您有其他问题或者更好的解决方式，请提交pr以供大家参考。
