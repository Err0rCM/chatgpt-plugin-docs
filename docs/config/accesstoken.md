# ChatGPT AccessToken

在使用ChatGPT时，您需要先拥有一个未被封禁的OpenAI账号才可以获取AccessToken。

> #### 我没有注册openai账号？如何获取？
>
> 您可以按照以下方法获取openai账号：
>
> 进入 https://chat.openai.com/，选择注册。目前，OpenAI 不对包括俄罗斯、乌克兰、伊朗、中国等国家和地区提供服务，所以您需要自行寻找方法使用**其他国家和地区**的IP地址进行登录。此外，注册可能需要验证所在国家和地区的手机号码，如果没有国外手机号可以试试解码网站，推荐 [sms-activate](https://sms-activate.org/)。

## 获取

获取AccessToken的步骤如下：

1. 在浏览器中登录 [https://chat.openai.com/chat](https://chat.openai.com/chat)。
2. **登录后** 访问 [https://chat.openai.com/api/auth/session](https://chat.openai.com/api/auth/session)。
3. 您会获得类似如下一串 JSON 字符串：
   ```json
   {
     "user": {
       "id": "AAA",
       "name": "BBB",
       "email": "CCC",
       "image": "DDD",
       "picture": "EEE",
       "groups": []
     },
     "expires": "FFF",
     "accessToken": "XXX"
   }
   ```
   其中的XXX即为`ChatGPT AccessToken`。

## 配置

完成获取AccessToken后，您需要将其配置到您的机器人中，具体步骤如下：

1. 请与您的机器人对话，发送`#chatgpt设置token`。
2. 在机器人回复`请发送ChatGPT AccessToken`后，将您的AccessToken发送给机器人。
3. 发送完成后即可成功设置。

::: tip 注意

1. 本AccessToken配置项仅能通过机器人对话配置。
2. 配置完成后，您可以使用API3模式接入官网主页的Conversation，此模式是**免费**的！

:::