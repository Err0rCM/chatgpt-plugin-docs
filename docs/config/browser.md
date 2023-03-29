# 浏览器模式配置

浏览器模式是一种免费的访问方式，但现在已经被API3模式所替代。如果您仍然想使用浏览器模式，您需要拥有桌面环境。

对于Linux云服务器，您需要安装窗口管理器和vnc创建虚拟桌面环境。

## 安装

1. 安装xvfb和fluxbox

   - Ubuntu：`sudo apt-get install x11vnc xvfb fluxbox`
   - CentOS：`sudo yum install x11vnc Xvfb fluxbox`

2. 启动桌面环境

   我们建议使用tmux或screen等使其能够后台运行。但请注意，此命令使用默认的5900端口和**无密码**。请注意通过防火墙等保护，**切勿**在公网环境或不安全的网络环境下使用。

   命令如下：

   ```
   x11vnc -create -env FD_PROG=/usr/bin/fluxbox -env X11VNC_FINDDISPLAY_ALWAYS_FAILS=1   -env X11VNC_CREATE_GEOM=${1:-1024x768x16}   -nopw -forever
   ```

3. 使用vnc客户端连接至云桌面

   进入Yunzai目录下，右键Applications > Shells > Bash打开终端，然后运行`node app`即可。

实际测试中，该方案资源占用低，运行稳定，基本上1核2G的轻量云服务器就足够了。