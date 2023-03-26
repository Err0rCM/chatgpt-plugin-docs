# 回复模式设置



chatgpt-plugin目前有三种回复模式的设置，分别是文本模式/图片模式和语音模式



## 文本模式

设置方法：`#chatgpt文本模式`

设置后机器人将会以文本回答问题，此为默认模式选项

由于QQ大段长文本可能会风控，所以看情况使用吧～



## 图片模式

设置方法：`#chatgpt图片模式`

设置后机器人将会以图片回答问题，相关配置项还有生成对话二维码等等。

> 如果在linux系统上发现图片模式下emoj无法正常显示，可以搜索安装支持emoj的字体，如Ubuntu可以使用`sudo apt install fonts-noto-color-emoji`



## 语音模式

设置方法：`#chatgpt语音模式`

设置后机器人将会以语音回答问题，如果配置了相关选项还会同时发送文字

需要[配置语音API](/config/tts)并[安装ffmpeg](/guide/quick_start#安装-ffmpeg)



### 设置语音角色

设置方法：`#chatgpt设置语音角色 (角色名)`

支持的角色名请查看[配置语音API](/config/tts)
