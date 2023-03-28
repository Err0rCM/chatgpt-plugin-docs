# Bing Token

您需要有微软New Bing访问权限才可以获取Bing Token

> 如没有须在[此处](https://www.bing.com/new)申请

## 获取

### 方法一：JS一键获取

登录www.bing.com，刷新一下网页，按F12或直接打开开发者模式，点击Console/控制台，运行如下代码，执行后即在您的剪切板存储了必应Token

```javascript
copy(document.cookie.split(";").find(cookie=>cookie.trim().startsWith("_U=")).split("=")[1]);
```

### 方法二：手动获取

登录www.bing.com，刷新一下网页，按F12或直接打开开发者模式，点击Application/存储，点击左侧Storage下的Cookies，展开找到[https://www.bing.com](https://www.bing.com/) 项，在右侧列表Name项下找到"_U"，_U的value即为必应Token

## 配置

- 请与您的机器人对话，发送`#chatgpt设置必应token`
- 在机器人回复`请发送Bing Cookie Token.("_U" cookie from bing.com)`后，将您的Bing Token发送给机器人
- 发送完成后即设置成功

::: tip 注意

本Bing Token配置项仅能通过机器人对话配置。

:::

::: tip 警告

如果您使用手机的话，除非您有一定的编程基础，可以使用`Scriptable`等软件获取，否则请尽量使用电脑浏览器！

:::