# 浏览器模式配置

早期插件使用浏览器模式进行免费的访问，现在API3模式已经足够稳定，此方式基本弃用



要想使用浏览器模式必须要有桌面环境

linux云服务器可以安装窗口管理器和vnc创建并访问虚拟桌面环境

1. 安装xvfb和fluxbox

   - Ubuntu：`sudo apt-get install x11vnc xvfb fluxbox`
   - CentOS：`sudo yum install x11vnc Xvfb fluxbox`

2. 启动桌面环境

   建议用tmux或screen等使其能够后台运行

   注意：本命令使用默认5900端口和**无密码**，注意通过防火墙等保护，**切勿**在公网环境或不安全的网络环境下使用！！！ `x11vnc -create -env FD_PROG=/usr/bin/fluxbox -env X11VNC_FINDDISPLAY_ALWAYS_FAILS=1   -env X11VNC_CREATE_GEOM=${1:-1024x768x16}   -nopw -forever`

3. 使用vnc客户端连接至云桌面

   右键Applications > Shells > Bash打开终端，然后进入Yunzai目录下运行node app即可。

4. 执行pnpm i时，sharp安装失败

   sharp不影响chatgpt聊天，仅影响Dalle2绘图功能。ubuntu可以执行`apt install libvips-dev`之后再`pnpm i`

实测该方案资源占用低，运行稳定，基本1核2G的轻量云服务器就足够了。