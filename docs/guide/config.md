# 配置

配置文件位置：`plugins/chatgpt-plugin/config/config.json`

## 配置信息

### 配置文件

默认的配置文件 `config.js` 如下所示: 

```javascript
{
  "apiKey": "",
  "proxy": "",
  "openAiBaseUrl": "https://mondstadt.d201.eu.org/v1",
  "api": "https://pimon.d201.cn/backend-api/conversation",
  "apiBaseUrl": "https://pimon.d201.cn/backend-api",
  "promptPrefixOverride": "Your answer shouldn't be too verbose. If you are generating a list, do not have too many items. Keep the number of items short. Prefer to answer in Chinese.",
  "debug": false,
  "blockWords": ["屏蔽词1", "屏蔽词b"],
  "promptBlockWords": ["屏蔽词1", "屏蔽词b"],
  "imgOcr": true,
  "defaultUsePicture": false,
  "autoUsePicture": true,
  "autoUsePictureThreshold": 1200,
  "toggleMode": "at",
  "quoteReply": true,
  "showQRCode": true,
  "cacheUrl": "https://content.alcedogroup.com",
  "cacheEntry": false,
  "drawCD": 30,
  "alsoSendText": true,
  "toneStyle": "Custom",
  "sydney": "xxx",
  "sydneyBrainWashName": "",
  "enableSuggestedResponses": true,
  "useGPT4": true,
  "assistantLabel": "",
  "username": "",
  "password": "",
  "ttsSpace": "",
  "initiativeChatGroups": [
    ""
  ]
}
```

::: tip 提示
此处的配置项较多，如果您为小白或者对js不熟悉，推荐使用锅巴面板进行配置，本插件已经完美支持锅巴面板

**强烈推荐使用锅巴面板！！！**

还有更多配置项随着开发正在配置，可能没有在文件中列出，优先支持锅巴面板

:::

::: warning 警告
此处的配置项**没有**必须配置项，配置决定了你能否使用某些功能
:::

#### 配置项解析

| 名称                     | 解释                                                         | 备注                                                     | 配置效果           |
| ------------------------ | ------------------------------------------------------------ | -------------------------------------------------------- | ------------------ |
| apiKey                   | 此为`https://platform.openai.com/account/api-keys`创建的APIKey。API模式下使用ChatGPT官网同款模型，用于访问OpenAI的API接口。配置后可使用API模式。 | 需要收费，详情查看[官方文章](https://openai.com/pricing) | API(API模式必须项) |
| proxy                    | 你的代理配置，配置后数据将通过代理服务器发送，http或socks5代理。 |                                                          | 通用               |
| openAiBaseUrl            | OpenAI的API服务器地址。官方为https://api.openai.com/v1，此处可使用三方的地址。仅对API模式有效。 | 注意要带上/v1                                            | API                |
| api                      | ChatGPT的API反代服务器地址，用于绕过Cloudflare访问ChatGPT API。仅对API3有效。 |                                                          | API3               |
| apiBaseUrl               | apiBaseUrl地址，一般与api关联。                              |                                                          | API3               |
| promptPrefixOverride     | AI风格设置，你可以在这里写入你希望AI回答的风格，比如希望优先回答中文，回答长一点等。 |                                                          | API                |
| debug                    | 将输出更多调试信息，如果不希望控制台刷屏的话，可以关闭。     |                                                          | 通用               |
| blockWords               | 检查**输出结果**中是否有违禁词，如果存在黑名单中的违禁词则不输出。 |                                                          | 通用               |
| promptBlockWords         | 检查**输入结果**中是否有违禁词，如果存在黑名单中的违禁词则不输出。 |                                                          | 通用               |
| imgOcr                   | 是否识别消息中图片的文字内容，需要同时包含图片和消息才生效。 |                                                          | 图片模式           |
| defaultUsePicture        | 全局默认以图片形式回复。                                     | #chatgpt图片模式                                         | 图片模式           |
| autoUsePicture           | 字数大于阈值会自动用图片发送，即使使用的是文本模式。         |                                                          | 图片模式           |
| autoUsePictureThreshold  | 自动转图片的字数阈值。                                       |                                                          | 图片模式           |
| toggleMode               | at模式下只有at机器人才会回复。#chat模式下不需要at，但需要添加前缀#chat。 | 1. at<br />2. #chat                                      | 通用               |
| quoteReply               | 在回复图片时引用原始消息                                     |                                                          | 图片模式           |
| showQRCode               | 在图片模式中启用二维码。该对话内容将被发送至第三方服务器以进行渲染展示，如果不希望对话内容被上传到第三方服务器请关闭此功能。 | #chatgpt图片模式                                         | 图片模式           |
| cacheUrl                 | 用于缓存图片模式会话内容并渲染的服务器地址。和showQRCode关联。 |                                                          | 图片模式           |
| cacheEntry               | 图片内容渲染服务器开启预制访问代码，当渲染服务器访问较慢时可以开启,但无法保证访问代码可以正常访问页面。和showQRCode关联。 |                                                          | 图片模式           |
| drawCD                   | 绘图指令的CD时间，主人不受限制                               |                                                          | 画图               |
| alsoSendText             | 语音模式下，同时发送文字版，避免音质较低听不懂               |                                                          | 语音模式           |
| toneStyle                | 语音模式下，未指定角色时使用的角色。若留空，将使用随机角色回复。若用户通过指令指定了角色，将忽略本设定 |                                                          | 语音模式           |
| sydney                   | 仅自设定模式下有效。你可以自己改写设定，让Sydney变成你希望的样子。可能存在不稳定的情况。 |                                                          | Bing > Custom      |
| sydneyBrainWashName      | 仅自设定模式下有效。如果开启了强制洗脑，务必准确填写这个才能精准洗脑。不开启洗脑可以不管这个。 |                                                          | Bing > Custom      |
| enableSuggestedResponses | 开启了会像官网上一样，每个问题给出建议的用户问题。           |                                                          | Bing               |
| useGPT4                  | API3是否使用GPT-4，注意试用配额较低，如果用不了就关掉。      |                                                          | API3               |
| assistantLabel           | AI认为的自己的名字，当你问他你是谁是他会回答这里的名字。     |                                                          | API                |
| username                 | OpenAI用户名。                                               |                                                          | 浏览器             |
| password                 | OpenAI密码。                                                 |                                                          | 浏览器             |
| ttsSpace                 | 语音转换API地址，可前往duplicate空间https://huggingface.co/spaces/ikechan8370/vits-uma-genshin-honkai后查看api地址 |                                                          | 语音模式           |
| initiativeChatGroups     | 在这些群聊里会不定时主动说一些随机的打招呼的话，用英文逗号隔开。 | 必须配置OpenAI Key（API）                                | 通用               |

#### API Key获取

> #### 我没有注册openai账号？如何获取
>
> 您可以按照以下方法获取openai账号
>
> 进入https://chat.openai.com/ ，选择signup注册。目前openai不对包括俄罗斯、乌克兰、伊朗、中国等国家和地区提供服务，所以自行寻找办法使用**其他国家和地区**的ip登录。此外，注册可能需要验证所在国家和地区的手机号码，如果没有国外手机号可以试试解码网站，收费的推荐https://sms-activate.org/

- 进入账户后台创建API key（Create new secret key）：https://platform.openai.com/account/api-keys

::: tip 提示

关于如何配置请查看[Config/设置](/config/apikey)

:::

#### 反代设定

对于某些模式下如果没有配置代理，则可能无法进行对话。为此，可以使用网上或项目贡献者用爱发电提供的反向代理服务器。以下是一些反向代理服务，感谢各位贡献者！

以下任意一个反向代理均可，如无法使用可以尝试其他的。

##### API(openAiBaseUrl):

- https://openai-api.ikechan8370.com/v1
- https://openai-api2.ikechan8370.com/v1
- https://mondstadt.d201.eu.org/v1

---

##### API3

建议配套使用（api和apiBaseUrl）

###### api

- https://chatgpt.ikechan8370.com/backend-api/conversation
- https://pimon.d201.cn/backend-api/conversation
- http://chatgpt.err0r.top/backend-api/conversation

> 第三个为我个人使用docker搭建后穿透出来的样例，主要为写搭建教程，所以未配置https
> 
> 想搭建自己的API3代理？试试下面的提示吧！

###### apiBaseUrl

- https://chatgpt.ikechan8370.com/backend-api
- https://pimon.d201.cn/backend-api
- http://chatgpt.err0r.top/backend-api

---

##### Bing

- https://bing.ikechan8370.com
- https://666102.201666.xyz


::: tip 提示

如果您想自己搭建API3的反向代理，可以参照[Config/API3反代](/config/reverseapi)

:::


### 对话配置项

启动机器人后，部分的配置需要通过与机器人对话完成

::: warning 警告

请确保您的主人qq配置正确

:::

| 名称                | 含义                 | 解释                                                         | 设置方式              |
| ------------------- | -------------------- | ------------------------------------------------------------ | --------------------- |
| ChatGPT AccessToken | ChatGPT登录后的Token | 可调用官方或第三方API进行通信，需要在登录状态下获取，配置后可以使用API3模式。 | #chatgpt设置token     |
| 必应token           | 必应登录后的Token    | 必应（Bing）将调用微软新必应接口进行对话。需要在必应网页能够正常使用新必应且设置有效的Bing 登录Cookie方可使用，配置后可以使用Bing模式。 | #chatgpt设置必应token |

#### Token获取

##### ChatGPT AccessToken

- 在此处登录https://chat.openai.com/chat

- **登录后**访问https://chat.openai.com/api/auth/session
- 您会获得类似如下一串json字符串`{"user":{"id":"AAA","name":"BBB","email":"CCC","image":"DDD","picture":"EEE","groups":[]},"expires":"FFF","accessToken":"XXX"}`
- 其中的XXX即为`ChatGPT AccessToken`

::: tip 提示

关于如何配置请查看[Config/设置](/config/accesstoken)

:::

##### 必应token

首先您需要有微软New Bing访问权限，如没有须在[此处](https://www.bing.com/new)申请。

如您已经获得了权限，请根据以下步骤：

###### 方法一：JS一键获取

登录www.bing.com，刷新一下网页，按F12或直接打开开发者模式，点击Console/控制台，运行如下代码，执行后即在您的剪切板存储了必应Token

```javascript
copy(document.cookie.split(";").find(cookie=>cookie.trim().startsWith("_U=")).split("=")[1]);
```

###### 方法二：手动获取

登录www.bing.com，刷新一下网页，按F12或直接打开开发者模式，点击Application/存储，点击左侧Storage下的Cookies，展开找到[https://www.bing.com](https://www.bing.com/) 项，在右侧列表Name项下找到"_U"，_U的value即为必应Token


