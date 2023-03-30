# 回复模式设置

chatgpt-plugin目前支持三种回复模式：文本模式、图片模式和语音模式。

## 文本模式

设置方法：`#chatgpt文本模式`

设置后机器人将以文本回答问题。这是默认的回答模式。

由于QQ大段长文本可能会风控，因此在使用时需要注意。

## 图片模式

设置方法：`#chatgpt图片模式`

设置后机器人将以图片回答问题，同时还支持生成对话二维码等相关配置项。

如果在Linux系统上发现图片模式下emoji无法正常显示，可以搜索安装支持emoji的字体，例如在Ubuntu上可以使用`sudo apt install fonts-noto-color-emoji`命令进行安装。

## 语音模式

设置方法：`#chatgpt语音模式`

设置后机器人将以语音回答问题，同时如果配置了相关选项，还会同时发送文本。

使用语音模式需要[配置语音API](/config/tts)并[安装ffmpeg](/guide/quick_start#安装-ffmpeg)。

### 设置语音角色

设置方法：`#chatgpt设置语音角色 (角色名)`

支持的角色名请查看[配置语音API](/config/tts)。