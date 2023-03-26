# ChatGPT AccessToken

您需要先拥有一个未被封禁的OpenAI账号才可以获取AccessToken



> #### 我没有注册openai账号？如何获取
>
> 您可以按照以下方法获取openai账号
>
> 进入https://chat.openai.com/ ，选择signup注册。目前openai不对包括俄罗斯、乌克兰、伊朗、中国等国家和地区提供服务，所以自行寻找办法使用**其他国家和地区**的ip登录。此外，注册可能需要验证所在国家和地区的手机号码，如果没有国外手机号可以试试解码网站，收费的推荐https://sms-activate.org/

## 获取

- 在此处登录https://chat.openai.com/chat

- **登录后**访问https://chat.openai.com/api/auth/session
- 您会获得类似如下一串json字符串`{"user":{"id":"AAA","name":"BBB","email":"CCC","image":"DDD","picture":"EEE","groups":[]},"expires":"FFF","accessToken":"XXX"}`
- 其中的XXX即为`ChatGPT AccessToken`

## 配置

- 请与您的机器人对话，发送`#chatgpt设置token`
- 在机器人回复`请发送ChatGPT AccessToken`后，将您的AccessToken发送给机器人
- 发送完成后即设置成功

::: tip 注意

本AccessToken配置项仅能通过机器人对话配置

配置后即可使用API3模式，API3模式接入官网主页conversation是**免费**的！！！

:::