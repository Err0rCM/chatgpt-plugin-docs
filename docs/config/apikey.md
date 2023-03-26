# API Key

您需要先拥有一个未被封禁的OpenAI账号才可以获取API Key



> #### 我没有注册openai账号？如何获取
>
> 您可以按照以下方法获取openai账号
>
> 进入https://chat.openai.com/ ，选择signup注册。目前openai不对包括俄罗斯、乌克兰、伊朗、中国等国家和地区提供服务，所以自行寻找办法使用**其他国家和地区**的ip登录。此外，注册可能需要验证所在国家和地区的手机号码，如果没有国外手机号可以试试解码网站，收费的推荐https://sms-activate.org/

## 获取

API Key的获取非常简单，您只需要到OpenAI官网上生成即可，注意千万不要泄露您的API Key

- 首先登录账号：https://platform.openai.com

- 进入账户后台创建API Key（Create new secret key）：https://platform.openai.com/account/api-keys
- 复制创建的API Key，一段形如`sk-xxxxx`的代码

## 设置

### 配置文件修改

请在配置文件`config/config.json`的`apiKey`项填入您的API Key

### 锅巴面板修改

打开锅巴面板，选择ChatGPT-plugin，在`OpenAI API Key`项填入您的API Key