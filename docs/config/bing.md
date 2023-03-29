# Bing Token

您需要有微软New Bing访问权限才可以获取Bing Token

> 如没有须在[此处](https://www.bing.com/new)申请

## 获取

### 方法一：JS一键获取

您可以使用如下代码快速获取必应Token：

```javascript
copy(document.cookie.split(";").find(cookie=>cookie.trim().startsWith("_U=")).split("=")[1]);
```

具体步骤为：
1. 登录www.bing.com
2. 刷新页面并按F12打开开发者模式
3. 点击Console/控制台并将以上代码复制到控制台中运行
4. 在您的剪贴板中即可找到必应Token

### 方法二：手动获取

您也可以通过以下步骤手动获取必应Token：

1. 登录www.bing.com
2. 刷新页面并按F12打开开发者模式
3. 点击Application/存储
4. 点击左侧Storage下的Cookies
5. 找到[https://www.bing.com](https://www.bing.com/) 项，在右侧列表Name项下找到"_U"，_U的value即为必应Token

## 配置

请使用以下步骤配置Bing Token：

1. 请与您的机器人对话，发送`#chatgpt设置必应token`
2. 在机器人回复`请发送Bing Cookie Token.("_U" cookie from bing.com)`后，将您的Bing Token发送给机器人
3. 发送完成后即可完成设置

::: tip 注意

本Bing Token配置项仅能通过机器人对话配置。

:::

::: warning 警告

如果您使用手机，请注意获取必应Token较为困难。除非您有一定的编程基础，可以使用`Scriptable`等软件获取，否则请尽量使用电脑浏览器！

:::
