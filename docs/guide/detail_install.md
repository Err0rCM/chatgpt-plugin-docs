

# 详细安装步骤

本文介绍Yunzai-bot与ChatGPT-plugin插件的详细安装步骤。

以Ubuntu 22.04的Docker镜像为例。（确保再精简的系统也可以安装~）

本文在root用户下进行，如果你使用非root用户，请记着在需要的时候加 `sudo`！

请放心，本文同时提供了在国内网络不畅时的安装方法，全程无需特殊网络~

p.s. 如果您有Docker，可以使用我构建的Docker镜像一键启动：https://hub.docker.com/r/moeta233/yunzai-chatgpt



## 安装依赖和Node.js

请注意：最新版的Node.js可能已不兼容Ubuntu18.04系统！请确保使用还在生命周期内的系统。

以下命令普通非root用户需要加`sudo`（也可以`sudo su`进入超级用户的终端）。

```bash
# 安装脚本必须的curl git
apt update 
apt install curl git -y

# 下载nvm安装脚本
cd ~
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

如果您在国内，请参照此镜像安装方法：

```bash
# 更换为中科大国内源
sed -i 's@//.*archive.ubuntu.com@//mirrors.ustc.edu.cn@g' /etc/apt/sources.list

# 安装脚本必须的curl git
apt update 
apt install curl git -y

# 通过ghproxy下载nvm安装脚本
cd ~
curl -O https://ghproxy.com/https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh

# 使安装脚本里的Github链接全走ghproxy
sed -i 's/https:\/\/ghproxy.com\/https:\/\/raw.githubusercontent.com/https:\/\/raw.githubusercontent.com/' ~/install.sh

# 运行安装脚本
bash ~/install.sh
```

完成后输出应该如下：

```bash
root@ubuntu-yunzai:~# bash ~/install.sh

=> Downloading nvm from git to '/root/.nvm'
=> Cloning into '/root/.nvm'...
remote: Enumerating objects: 358, done.
remote: Counting objects: 100% (358/358), done.
remote: Compressing objects: 100% (304/304), done.
remote: Total 358 (delta 40), reused 164 (delta 28), pack-reused 0
Receiving objects: 100% (358/358), 219.04 KiB | 911.00 KiB/s, done.
Resolving deltas: 100% (40/40), done.
* (HEAD detached at FETCH_HEAD)
  master
=> Compressing and cleaning up git repository

=> Appending nvm source string to /root/.bashrc
=> Appending bash_completion source string to /root/.bashrc
=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

```

**重启终端！**

然后安装最新LTS版本的Node.js：

```bash
# 如果您在国内！请先为nvm配置国内阿里源，网络通畅可以不用运行此行。
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node

# 安装最新LTS版本的node.js
nvm install --lts
```

完成后输出如下：

```bash
root@ubuntu-yunzai:~# nvm install --lts

Installing latest LTS version.
Downloading and installing node v18.15.0...
Downloading https://npmmirror.com/mirrors/node/v18.15.0/node-v18.15.0-linux-x64.tar.gz...
############################################################### 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v18.15.0 (npm v9.5.0)
Creating default alias: default -> lts/* (-> v18.15.0)

# 此时可以使用npv -v, node -v来检查安装版本
root@ubuntu-yunzai:~# npm -v
9.5.0
root@ubuntu-yunzai:~# node -v
v18.15.0
```



## 下载Yunzai-Bot

**安装方法请参考：https://gitee.com/yoimiya-kokomi/Yunzai-Bot**

推荐下载喵喵维护版（icqq版本）。关于不同版本区别：（转自 [miao-plugin](https://gitee.com/yoimiya-kokomi/miao-plugin) 项目）

>
> - [Miao-Yunzai](https://gitee.com/yoimiya-kokomi/Miao-Yunzai) : 喵版Yunzai [Gitee](https://gitee.com/yoimiya-kokomi/Miao-Yunzai) / [Github](https://github.com/yoimiya-kokomi/Miao-Yunzai) ，本体不含签到功能，功能迭代较多，与miao-plugin打通，只建议新部署/迁移
> - [Yunzai-V3](https://gitee.com/yoimiya-kokomi/Yunzai-Bot) ：Yunzai V3 - 喵喵维护版，icqq版本，与原版Yunza功能基本一致，会保持卡池更新，功能相对稳定，可从原版Yunzai换源直接升级
> - [Yunzai-V3](https://gitee.com/Le-niao/Yunzai-Bot) ：Yunzai V3 - 乐神原版，oicq版本，可能会遇到登录问题

如果遇到pnpm安装过慢或无法连接的问题，请使用淘宝源加速安装：

```bash
npm install pnpm --registry=https://registry.npm.taobao.org -g
```

安装完成后可能需要手动安装`redis-server` ：

```bash
apt install redis-server
```



## 安装ChatGPT-plugin插件 

**安装方法请参考：https://github.com/ikechan8370/chatgpt-plugin **

如果实在实在打不开，可以在这里下载说明文档，或在本站寻找相关帮助。

https://ghproxy.com/https://raw.githubusercontent.com/ikechan8370/chatgpt-plugin/v2/README.md

另外，使用git安装时如果无法访问github，可以换成gitee源（更新可能不及时！），即：

```bash
git clone --depth=1 https://gitee.com/ikechan/chatgpt-plugin.git ./plugins/chatgpt-plugin/
cd plugins/chatgpt-plugin
pnpm i
```

如果使用语音功能，您除了需要 **VITS服务器** ，还需要安装 **支持amr编码的ffmpeg** ，例如：

```bash
curl -O https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz
# 解压到当前目录
tar -xvf ./ffmpeg-release-amd64-static.tar.xz
# 新建软链接到一个常用的path位置
ln -s $(pwd)/ffmpeg-6.0-amd64-static/ffmpeg /usr/bin/ffmpeg
```

或是安装 `node-silk` 来尝试发送高清语音（可能有兼容性问题）

```bash
# 请在chatgpt-plugin目录下运行：
pnpm install node-silk
```



## 安装锅巴插件

**安装方法请参考：https://gitee.com/guoba-yunzai/guoba-plugin **

推荐通过此插件来管理ChatGPT-plugin插件。

请注意如果您使用容器，需要端口映射；如果您使用带防火墙的服务器，需要开放端口。

默认端口为：50831。



## 常见问题

如果你用的是和我一样简陋的系统，就很可能出现puppeteer问题。

可以在Yunzai上线后QQ对话：#帮助 来测试图片生成功能

#### 找不到 puppeteer

```bash
Error: Could not find Chromium (rev. 1095492). This can occur if either
 1. you did not perform an installation before running the script (e.g. `npm install`) or
 2. your cache path is incorrectly configured (which is: /root/.cache/puppeteer).
```

请到Yunzai主目录下执行：

``` 
npm install puppeteer --registry=https://registry.npm.taobao.org -g
```

#### puppeteer 缺少依赖

``` 
Error: Failed to launch the browser process!
/root/.cache/puppeteer/chrome/linux-1095492/chrome-linux/chrome: error while loading shared libraries: libxxxxxx.so
```

安装依赖：

``` bash
apt install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 \
libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 libgbm-dev libnss3 \
ca-certificates fonts-liberation lsb-release xdg-utils
```

#### 中文显示为方块

需要安装一个中文字体：

如果您使用APT：

```bash
# 安装文泉驿正黑体
apt install ttf-wqy-zenhei
# 重建字体缓存
fc-cache -fv
```

p.s. 如果你不喜欢正黑体，也可以将你Windows电脑的微软雅黑拷贝过去（

``` shell
# 如果你正好在使用Windows SSH控制服务器，那直接在Windows终端输入这个：
scp C:\Windows\Fonts\msyh.ttc root@233.233.6.6:/usr/share/fonts/msyh.ttc
```

然后建立字体缓存：

```bash
fc-cache -fv
```

重新启动即可。



