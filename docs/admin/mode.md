# 模式设置

chatgpt-plugin可以切换不同的模型



## 浏览器模式（不建议）

设置方法：`#chatgpt切换浏览器`

早期使用的方式，现在已经不建议使用，如需在Linux下使用需要参照进行[配置](/config/browser)



## API模式

设置方法：`#chatgpt切换API`

API模式下，使用 gpt-3.5-turbo API，ChatGPT官网同款模型，仅需OpenAI Api Key，开箱即用。**注意收费**

::: warning 警告

须配置API Key

:::

## API3模式

设置方法：`#chatgpt切换API3`

API3模式基于官网的模式，通过反代绕过Cloudflare访问ChatGPT API，**免费**！！！

::: warning 警告

须配置AccessToken

:::

## 必应模式

设置方法：`#chatgpt切换Bing`

### 可选配置

必应模式还有其他的可选配置

微软必应官方有四种应答风格。默认为均衡，Sydney为实验风格，独立与三种风格之外。

#### 方式一：锅巴面板

在锅巴面板找到chatgpt-plugin，打开配置设置`Bing模式`

#### 方式二：对话设置

##### 基本模式

需在Bing模式下

设置方法：`#chatgpt切换精准/均衡/创意`

##### Sydney模式

需在Bing模式下

设置方法：`#chatgpt切换悉尼`

##### Custom模式

需在Bing模式下

设置方法：`#chatgpt切换自设定`



### 建议回复

同时还可以配置建议回复，类似原神里对话的选项

设置方法：`#chatgpt必应(开启/关闭)建议回复`



::: warning 警告

须配置Bing Token

:::

## ChatGLM模式

设置方法：`#chatgpt切换ChatGLM`

支持[ChatGLM](https://github.com/THUDM/ChatGLM-6B)模型

基于[自建API](https://github.com/ikechan8370/SimpleChatGLM6BAPI)

文档施工中...



---

> #### API模式和浏览器模式如何选择？
>
> - API模式会调用OpenAI官方提供的gpt-3.5-turbo API，ChatGPT官网同款模型，只需要提供API Key。一般情况下，该种方式响应速度更快，可配置项多，且不会像chatGPT官网一样总出现不可用的现象，但注意API调用是收费的，新用户有18美元试用金可用于支付，价格为`$0.0020/ 1K tokens`。（问题和回答**加起来**算token）
> - API3模式会调用第三方提供的官网反代API，他会帮你绕过CF防护，需要提供ChatGPT的Token。效果与官网和浏览器一致，但稳定性不一定。发送#chatgpt设置token来设置token。
> - (Deprecated)浏览器模式通过在本地启动Chrome等浏览器模拟用户访问ChatGPT网站，使得获得和官方以及API2模式一模一样的回复质量，同时保证安全性。缺点是本方法对环境要求较高，需要提供桌面环境和一个可用的代理（能够访问ChatGPT的IP地址），且响应速度不如API，而且高峰期容易无法使用。一般作为API3的下位替代。
> - 必应（Bing）将调用微软新必应接口进行对话。需要在必应网页能够正常使用新必应且设置有效的Bing登录Cookie方可使用。