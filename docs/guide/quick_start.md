#  开始

欢迎来到 chatgpt-plugin 文档!

## 基础教程

### 下载安装

1. #### 进入 Yunzai 根目录

**Linux**

> 假设我的云崽下载到了`~`(用户目录)

```sh
cd ~/Yunzai-Bot/
```

**Windows**

直接双击打开云崽目录文件夹，在上方路径(类似`此电脑>Program Files`这样的目录栏)点击后全选，输入`cmd`后回车，会看到打开了一个黑色的命令行

2. #### 将 chatgpt-plugin 放置在 Yunzai-Bot 的 plugins 目录下

##### 方法一：使用 git 进行安装（推荐）

推荐使用 git 进行安装，以方便后续升级。运行下述指令进行安装

```sh
git clone --depth=1 https://github.com/ikechan8370/chatgpt-plugin.git ./plugins/chatgpt-plugin/
cd plugins/chatgpt-plugin
pnpm i
```

> 如果你没有安装pnpm请运行以下命令安装
> ```sh
> npm install -g pnpm
> ```
> 
> 安装完成后再运行`pnpm i`

##### 方法二：release下载

从 [release](https://github.com/ikechan8370/chatgpt-plugin/releases) 界面下载最新版本的 chatgpt-plugin 或者下载仓库zip包

如果是手工下载的 zip 压缩包，请将解压后的 chatgpt-plugin 文件夹（请删除压缩自带的-master后缀）放置在 Yunzai-Bot 目录下的 plugins 文件夹内



3. #### 安装依赖

请运行以下命令安装所需依赖

```sh
pnpm install -w undici chatgpt showdown mathjax-node delay uuid remark strip-markdown random puppeteer-extra-plugin-recaptcha puppeteer-extra puppeteer-extra-plugin-stealth @waylaidwanderer/chatgpt-api keyv-file
```



4. #### 修改配置

> 本插件配置项比较多，建议使用[锅巴面板](https://github.com/guoba-yunzai/Guoba-Plugin)修改
>
> 关于配置项详情请查看[Guide/配置](/guide/config)

复制`plugins/chatgpt-plugin/config/config.example.json`并将其改名为`config.json`



5. #### 重启Yunzai-Bot



### 更新

#### 方法一：release更新

从 [release](https://github.com/ikechan8370/chatgpt-plugin/releases) 界面下载最新版本的 chatgpt-plugin
并替换之前的版本

#### 方法二：通过云崽机器人对话更新

发送`#chatgpt更新`即可更新插件，更新完毕后机器人会自动重启

**注意：**通过对话更新请在可以操作搭建环境的情况下进行，否则出现问题可能会导致崩溃无法解决

#### 方法三：直接操作源码更新

进入仓库目录，打开命令行运行如下（默认已安装所需环境如git等）

```bash
git stash -p
```

运行后进入交互界面，按`y`保存需要的内容，按n不保存，一般只需要注意下`config/config.js`的内容

保存后运行

```bash
git pull
```

拉好更新后再运行

```bash
git stash pop
```

将之前存储的更改复原，之后重启机器人即可



### 安装 ffmpeg

为了支持语音模式的语音发送, 你需要安装 ffmpeg 。
此处文档参考了go-cqhttp的方法。

#### Windows

从 [这里](https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-full.7z) 下载 并解压, 并为 `bin` 这个文件夹添加环境变量。

如果遇到下载速度缓慢的问题可以用 [这个源](https://downloads.go-cqhttp.org/ffmpeg-release-full.7z) 。

然后在 cmd 输入 **(不能使用 powershell）**

```shell
setx /M PATH "C:\Program Files\ffmpeg\bin;%PATH%"
```

自行将这个指令中的 `C:\Program Files` 替换成你的解压目录。

#### Linux

Ubuntu / Debian :

终端执行

```shell
apt install -y ffmpeg
```

Fedora / RHEL / CentOS : 

根据 [Rpmfusion](https://rpmfusion.org/Configuration) 的文档配置源

终端执行

```shell
# Centos7 及之前
yum install ffmpeg ffmpeg-devel 

# CentOS8 及之后
dnf install ffmpeg ffmpeg-devel
```

