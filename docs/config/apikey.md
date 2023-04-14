# API Key

您需要先拥有一个未被封禁的OpenAI账号才可以获取API Key

> #### 我没有注册openai账号？如何获取
>
> 您可以按照以下方法获取openai账号：
>
> 进入 [https://chat.openai.com/](https://chat.openai.com/) ，选择 signup 注册。目前 OpenAI 不对包括俄罗斯、乌克兰、伊朗、中国等国家和地区提供服务，所以需要自行寻找方法使用**其他国家和地区**的 IP 登录。此外，注册可能需要验证所在国家和地区的手机号码，如果没有国外手机号可以试试解码网站，推荐使用 [https://sms-activate.org/](https://sms-activate.org/) 收费服务。

::: tip 注意

有些时候刚注册完填完邮箱账号和密码后continue就提示您的账号不支持注册，一般情况是你的 ****** 的问题，更换节点或换 ****** 就可以解决问题，openai目前没有禁止注册！

:::


## 获取

API Key 的获取非常简单，您只需要到 OpenAI 官网上生成即可，注意千万不要泄露您的 API Key。

1. 首先登录账号：[https://platform.openai.com](https://platform.openai.com)
2. 进入账户后台创建 API Key（Create new secret key）：[https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
3. 复制创建的 API Key，一段形如 `sk-xxxxx` 的代码

## 设置

### 配置文件修改

在配置文件 `config/config.json` 的 `apiKey` 项填入您的 API Key。

### 锅巴面板修改

1. 打开锅巴面板，选择 ChatGPT-plugin。
2. 在 `OpenAI API Key` 项填入您的 API Key。

::: warning 警告
请保护好您的 API Key，不要泄露给其他人。如果您的 API Key 不慎泄露，建议尽快在 OpenAI 后台取消该 Key 并重新生成一个。
:::
