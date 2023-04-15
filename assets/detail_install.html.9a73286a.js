import{r as t,o,a as l,b as s,d as e,F as c,c as p,e as n}from"./app.7fc76c2c.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=p(`<h1 id="\u5B8C\u6574\u5B89\u88C5\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6574\u5B89\u88C5\u6B65\u9AA4" aria-hidden="true">#</a> \u5B8C\u6574\u5B89\u88C5\u6B65\u9AA4</h1><p>\u672C\u6587\u4ECB\u7ECDYunzai-bot\u4E0EChatGPT-plugin\u63D2\u4EF6\u7684\u8BE6\u7EC6\u5B89\u88C5\u6B65\u9AA4\u3002</p><p>\u4EE5Ubuntu 22.04\u7684Docker\u955C\u50CF\u4E3A\u4F8B\u3002\uFF08\u786E\u4FDD\u518D\u7CBE\u7B80\u7684\u7CFB\u7EDF\u4E5F\u53EF\u4EE5\u5B89\u88C5~\uFF09</p><p>\u672C\u6587\u5728root\u7528\u6237\u4E0B\u8FDB\u884C\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u975Eroot\u7528\u6237\uFF0C\u8BF7\u8BB0\u7740\u5728\u9700\u8981\u7684\u65F6\u5019\u52A0 <code>sudo</code>\uFF01</p><p>\u8BF7\u653E\u5FC3\uFF0C\u672C\u6587\u540C\u65F6\u63D0\u4F9B\u4E86\u5728\u56FD\u5185\u7F51\u7EDC\u4E0D\u7545\u65F6\u7684\u5B89\u88C5\u65B9\u6CD5\uFF0C\u5168\u7A0B\u65E0\u9700\u7279\u6B8A\u7F51\u7EDC~</p><p>p.s. \u5982\u679C\u60A8\u6709Docker\uFF0C\u53EF\u4EE5\u53C2\u8003<a href="/guide/docker">\u4F7F\u7528Docker</a></p><h2 id="\u5B89\u88C5\u4F9D\u8D56\u548Cnode-js" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56\u548Cnode-js" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56\u548CNode.js</h2><p>\u8BF7\u6CE8\u610F\uFF1A\u6700\u65B0\u7248\u7684Node.js\u53EF\u80FD\u5DF2\u4E0D\u517C\u5BB9Ubuntu18.04\u7CFB\u7EDF\uFF01\u8BF7\u786E\u4FDD\u4F7F\u7528\u8FD8\u5728\u751F\u547D\u5468\u671F\u5185\u7684\u7CFB\u7EDF\u3002</p><p>\u4EE5\u4E0B\u547D\u4EE4\u666E\u901A\u975Eroot\u7528\u6237\u9700\u8981\u52A0<code>sudo</code>\uFF08\u4E5F\u53EF\u4EE5<code>sudo su</code>\u8FDB\u5165\u8D85\u7EA7\u7528\u6237\u7684\u7EC8\u7AEF\uFF09\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u811A\u672C\u5FC5\u987B\u7684curl git</span>
<span class="token function">apt</span> update 
<span class="token function">apt</span> <span class="token function">install</span> <span class="token function">curl</span> <span class="token function">git</span> -y

<span class="token comment"># \u4E0B\u8F7Dnvm\u5B89\u88C5\u811A\u672C</span>
<span class="token builtin class-name">cd</span> ~
<span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5982\u679C\u60A8\u5728\u56FD\u5185\uFF0C\u8BF7\u53C2\u7167\u6B64\u955C\u50CF\u5B89\u88C5\u65B9\u6CD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u66F4\u6362\u4E3A\u4E2D\u79D1\u5927\u56FD\u5185\u6E90</span>
<span class="token function">sed</span> -i <span class="token string">&#39;s@//.*archive.ubuntu.com@//mirrors.ustc.edu.cn@g&#39;</span> /etc/apt/sources.list

<span class="token comment"># \u5B89\u88C5\u811A\u672C\u5FC5\u987B\u7684curl git</span>
<span class="token function">apt</span> update 
<span class="token function">apt</span> <span class="token function">install</span> <span class="token function">curl</span> <span class="token function">git</span> -y

<span class="token comment"># \u901A\u8FC7ghproxy\u4E0B\u8F7Dnvm\u5B89\u88C5\u811A\u672C</span>
<span class="token builtin class-name">cd</span> ~
<span class="token function">curl</span> -O https://ghproxy.com/https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh

<span class="token comment"># \u4F7F\u5B89\u88C5\u811A\u672C\u91CC\u7684Github\u94FE\u63A5\u5168\u8D70ghproxy</span>
<span class="token function">sed</span> -i <span class="token string">&#39;s/https:\\/\\/ghproxy.com\\/https:\\/\\/raw.githubusercontent.com/https:\\/\\/raw.githubusercontent.com/&#39;</span> ~/install.sh

<span class="token comment"># \u8FD0\u884C\u5B89\u88C5\u811A\u672C</span>
<span class="token function">bash</span> ~/install.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5B8C\u6210\u540E\u8F93\u51FA\u5E94\u8BE5\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>root@ubuntu-yunzai:~<span class="token comment"># bash ~/install.sh</span>

<span class="token operator">=</span><span class="token operator">&gt;</span> Downloading nvm from <span class="token function">git</span> to <span class="token string">&#39;/root/.nvm&#39;</span>
<span class="token operator">=</span><span class="token operator">&gt;</span> Cloning into <span class="token string">&#39;/root/.nvm&#39;</span><span class="token punctuation">..</span>.
remote: Enumerating objects: <span class="token number">358</span>, done.
remote: Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">358</span>/358<span class="token punctuation">)</span>, done.
remote: Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">304</span>/304<span class="token punctuation">)</span>, done.
remote: Total <span class="token number">358</span> <span class="token punctuation">(</span>delta <span class="token number">40</span><span class="token punctuation">)</span>, reused <span class="token number">164</span> <span class="token punctuation">(</span>delta <span class="token number">28</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span>
Receiving objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">358</span>/358<span class="token punctuation">)</span>, <span class="token number">219.04</span> KiB <span class="token operator">|</span> <span class="token number">911.00</span> KiB/s, done.
Resolving deltas: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">40</span>/40<span class="token punctuation">)</span>, done.
* <span class="token punctuation">(</span>HEAD detached at FETCH_HEAD<span class="token punctuation">)</span>
  master
<span class="token operator">=</span><span class="token operator">&gt;</span> Compressing and cleaning up <span class="token function">git</span> repository

<span class="token operator">=</span><span class="token operator">&gt;</span> Appending nvm <span class="token builtin class-name">source</span> string to /root/.bashrc
<span class="token operator">=</span><span class="token operator">&gt;</span> Appending bash_completion <span class="token builtin class-name">source</span> string to /root/.bashrc
<span class="token operator">=</span><span class="token operator">&gt;</span> Close and reopen your terminal to start using nvm or run the following to use it now:

<span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_DIR</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$HOME</span>/.nvm&quot;</span>
<span class="token punctuation">[</span> -s <span class="token string">&quot;<span class="token variable">$NVM_DIR</span>/nvm.sh&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>. <span class="token string">&quot;<span class="token variable">$NVM_DIR</span>/nvm.sh&quot;</span>  <span class="token comment"># This loads nvm</span>
<span class="token punctuation">[</span> -s <span class="token string">&quot;<span class="token variable">$NVM_DIR</span>/bash_completion&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>. <span class="token string">&quot;<span class="token variable">$NVM_DIR</span>/bash_completion&quot;</span>  <span class="token comment"># This loads nvm bash_completion</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><strong>\u91CD\u542F\u7EC8\u7AEF\uFF01</strong></p><p>\u7136\u540E\u5B89\u88C5\u6700\u65B0LTS\u7248\u672C\u7684Node.js\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5982\u679C\u60A8\u5728\u56FD\u5185\uFF01\u8BF7\u5148\u4E3Anvm\u914D\u7F6E\u56FD\u5185\u963F\u91CC\u6E90\uFF0C\u7F51\u7EDC\u901A\u7545\u53EF\u4EE5\u4E0D\u7528\u8FD0\u884C\u6B64\u884C\u3002</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_NODEJS_ORG_MIRROR</span><span class="token operator">=</span>https://npmmirror.com/mirrors/node

<span class="token comment"># \u5B89\u88C5\u6700\u65B0LTS\u7248\u672C\u7684node.js</span>
nvm <span class="token function">install</span> --lts
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5B8C\u6210\u540E\u8F93\u51FA\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>root@ubuntu-yunzai:~<span class="token comment"># nvm install --lts</span>

Installing latest LTS version.
Downloading and installing <span class="token function">node</span> v18.15.0<span class="token punctuation">..</span>.
Downloading https://npmmirror.com/mirrors/node/v18.15.0/node-v18.15.0-linux-x64.tar.gz<span class="token punctuation">..</span>.
<span class="token comment">############################################################### 100.0%</span>
Computing checksum with sha256sum
Checksums matched<span class="token operator">!</span>
Now using <span class="token function">node</span> v18.15.0 <span class="token punctuation">(</span>npm v9.5.0<span class="token punctuation">)</span>
Creating default alias: default -<span class="token operator">&gt;</span> lts/* <span class="token punctuation">(</span>-<span class="token operator">&gt;</span> v18.15.0<span class="token punctuation">)</span>

<span class="token comment"># \u6B64\u65F6\u53EF\u4EE5\u4F7F\u7528npv -v, node -v\u6765\u68C0\u67E5\u5B89\u88C5\u7248\u672C</span>
root@ubuntu-yunzai:~<span class="token comment"># npm -v</span>
<span class="token number">9.5</span>.0
root@ubuntu-yunzai:~<span class="token comment"># node -v</span>
v18.15.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u4E0B\u8F7Dyunzai-bot" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7Dyunzai-bot" aria-hidden="true">#</a> \u4E0B\u8F7DYunzai-Bot</h2><p><strong>\u5B89\u88C5\u65B9\u6CD5\u8BF7\u53C2\u8003\uFF1Ahttps://gitee.com/yoimiya-kokomi/Yunzai-Bot</strong></p>`,21),b=n("\u63A8\u8350\u4E0B\u8F7D\u55B5\u55B5\u7EF4\u62A4\u7248\uFF08icqq\u7248\u672C\uFF09\u3002\u5173\u4E8E\u4E0D\u540C\u7248\u672C\u533A\u522B\uFF1A\uFF08\u8F6C\u81EA "),m={href:"https://gitee.com/yoimiya-kokomi/miao-plugin",target:"_blank",rel:"noopener noreferrer"},d=n("miao-plugin"),h=n(" \u9879\u76EE\uFF09"),k={href:"https://gitee.com/yoimiya-kokomi/Miao-Yunzai",target:"_blank",rel:"noopener noreferrer"},g=n("Miao-Yunzai"),v=n(" : \u55B5\u7248Yunzai "),f={href:"https://gitee.com/yoimiya-kokomi/Miao-Yunzai",target:"_blank",rel:"noopener noreferrer"},x=n("Gitee"),_=n(" / "),y={href:"https://github.com/yoimiya-kokomi/Miao-Yunzai",target:"_blank",rel:"noopener noreferrer"},z=n("Github"),w=n(" \uFF0C\u672C\u4F53\u4E0D\u542B\u7B7E\u5230\u529F\u80FD\uFF0C\u529F\u80FD\u8FED\u4EE3\u8F83\u591A\uFF0C\u4E0Emiao-plugin\u6253\u901A\uFF0C\u53EA\u5EFA\u8BAE\u65B0\u90E8\u7F72/\u8FC1\u79FB"),Y={href:"https://gitee.com/yoimiya-kokomi/Yunzai-Bot",target:"_blank",rel:"noopener noreferrer"},q=n("Yunzai-V3"),C=n(" \uFF1AYunzai V3 - \u55B5\u55B5\u7EF4\u62A4\u7248\uFF0Cicqq\u7248\u672C\uFF0C\u4E0E\u539F\u7248Yunza\u529F\u80FD\u57FA\u672C\u4E00\u81F4\uFF0C\u4F1A\u4FDD\u6301\u5361\u6C60\u66F4\u65B0\uFF0C\u529F\u80FD\u76F8\u5BF9\u7A33\u5B9A\uFF0C\u53EF\u4ECE\u539F\u7248Yunzai\u6362\u6E90\u76F4\u63A5\u5347\u7EA7"),D={href:"https://gitee.com/Le-niao/Yunzai-Bot",target:"_blank",rel:"noopener noreferrer"},N=n("Yunzai-V3"),V=n(" \uFF1AYunzai V3 - \u4E50\u795E\u539F\u7248\uFF0Coicq\u7248\u672C\uFF0C\u53EF\u80FD\u4F1A\u9047\u5230\u767B\u5F55\u95EE\u9898"),T=p(`<p>\u5982\u679C\u9047\u5230pnpm\u5B89\u88C5\u8FC7\u6162\u6216\u65E0\u6CD5\u8FDE\u63A5\u7684\u95EE\u9898\uFF0C\u8BF7\u4F7F\u7528\u6DD8\u5B9D\u6E90\u52A0\u901F\u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token function">pnpm</span> --registry<span class="token operator">=</span>https://registry.npm.taobao.org -g
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5\u5B8C\u6210\u540E\u53EF\u80FD\u9700\u8981\u624B\u52A8\u5B89\u88C5<code>redis-server</code> \uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> redis-server
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u5B89\u88C5chatgpt-plugin\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5chatgpt-plugin\u63D2\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5ChatGPT-plugin\u63D2\u4EF6</h2><p>**\u5B89\u88C5\u65B9\u6CD5\u8BF7\u53C2\u8003\uFF1Ahttps://github.com/ikechan8370/chatgpt-plugin **</p><p>\u5982\u679C\u5B9E\u5728\u5B9E\u5728\u6253\u4E0D\u5F00\uFF0C\u53EF\u4EE5\u5728\u8FD9\u91CC\u4E0B\u8F7D\u8BF4\u660E\u6587\u6863\uFF0C\u6216\u5728\u672C\u7AD9\u5BFB\u627E\u76F8\u5173\u5E2E\u52A9\u3002</p><p>https://ghproxy.com/https://raw.githubusercontent.com/ikechan8370/chatgpt-plugin/v2/README.md</p><p>\u53E6\u5916\uFF0C\u4F7F\u7528git\u5B89\u88C5\u65F6\u5982\u679C\u65E0\u6CD5\u8BBF\u95EEgithub\uFF0C\u53EF\u4EE5\u6362\u6210gitee\u6E90\uFF08\u66F4\u65B0\u53EF\u80FD\u4E0D\u53CA\u65F6\uFF01\uFF09\uFF0C\u5373\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone --depth<span class="token operator">=</span><span class="token number">1</span> https://gitee.com/ikechan/chatgpt-plugin.git ./plugins/chatgpt-plugin/
<span class="token builtin class-name">cd</span> plugins/chatgpt-plugin
<span class="token function">pnpm</span> i
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u679C\u4F7F\u7528\u8BED\u97F3\u529F\u80FD\uFF0C\u60A8\u9664\u4E86\u9700\u8981 <strong>VITS\u670D\u52A1\u5668</strong> \uFF0C\u8FD8\u9700\u8981\u5B89\u88C5 <strong>\u652F\u6301amr\u7F16\u7801\u7684ffmpeg</strong> \uFF0C\u4F8B\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -O https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz
<span class="token comment"># \u89E3\u538B\u5230\u5F53\u524D\u76EE\u5F55</span>
<span class="token function">tar</span> -xvf ./ffmpeg-release-amd64-static.tar.xz
<span class="token comment"># \u65B0\u5EFA\u8F6F\u94FE\u63A5\u5230\u4E00\u4E2A\u5E38\u7528\u7684path\u4F4D\u7F6E</span>
<span class="token function">ln</span> -s <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/ffmpeg-6.0-amd64-static/ffmpeg /usr/bin/ffmpeg
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6216\u662F\u5B89\u88C5 <code>node-silk</code> \u6765\u5C1D\u8BD5\u53D1\u9001\u9AD8\u6E05\u8BED\u97F3\uFF08\u53EF\u80FD\u6709\u517C\u5BB9\u6027\u95EE\u9898\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BF7\u5728chatgpt-plugin\u76EE\u5F55\u4E0B\u8FD0\u884C\uFF1A</span>
<span class="token function">pnpm</span> <span class="token function">install</span> node-silk
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5B89\u88C5\u9505\u5DF4\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u9505\u5DF4\u63D2\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5\u9505\u5DF4\u63D2\u4EF6</h2><p>**\u5B89\u88C5\u65B9\u6CD5\u8BF7\u53C2\u8003\uFF1Ahttps://gitee.com/guoba-yunzai/guoba-plugin **</p><p>\u63A8\u8350\u901A\u8FC7\u6B64\u63D2\u4EF6\u6765\u7BA1\u7406ChatGPT-plugin\u63D2\u4EF6\u3002</p><p>\u8BF7\u6CE8\u610F\u5982\u679C\u60A8\u4F7F\u7528\u5BB9\u5668\uFF0C\u9700\u8981\u7AEF\u53E3\u6620\u5C04\uFF1B\u5982\u679C\u60A8\u4F7F\u7528\u5E26\u9632\u706B\u5899\u7684\u670D\u52A1\u5668\uFF0C\u9700\u8981\u5F00\u653E\u7AEF\u53E3\u3002</p><p>\u9ED8\u8BA4\u7AEF\u53E3\u4E3A\uFF1A50831\u3002</p><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2><p>\u5982\u679C\u4F60\u7528\u7684\u662F\u548C\u6211\u4E00\u6837\u7B80\u964B\u7684\u7CFB\u7EDF\uFF0C\u5C31\u5F88\u53EF\u80FD\u51FA\u73B0puppeteer\u95EE\u9898\u3002</p><p>\u53EF\u4EE5\u5728Yunzai\u4E0A\u7EBF\u540EQQ\u5BF9\u8BDD\uFF1A#\u5E2E\u52A9 \u6765\u6D4B\u8BD5\u56FE\u7247\u751F\u6210\u529F\u80FD</p><h4 id="\u627E\u4E0D\u5230-puppeteer" tabindex="-1"><a class="header-anchor" href="#\u627E\u4E0D\u5230-puppeteer" aria-hidden="true">#</a> \u627E\u4E0D\u5230 puppeteer</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Error: Could not <span class="token function">find</span> Chromium <span class="token punctuation">(</span>rev. <span class="token number">1095492</span><span class="token punctuation">)</span>. This can occur <span class="token keyword">if</span> either
 <span class="token number">1</span>. you did not perform an installation before running the script <span class="token punctuation">(</span>e.g. <span class="token variable"><span class="token variable">\`</span><span class="token function">npm</span> <span class="token function">install</span><span class="token variable">\`</span></span><span class="token punctuation">)</span> or
 <span class="token number">2</span>. your cache path is incorrectly configured <span class="token punctuation">(</span>which is: /root/.cache/puppeteer<span class="token punctuation">)</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8BF7\u5230Yunzai\u4E3B\u76EE\u5F55\u4E0B\u6267\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install puppeteer --registry=https://registry.npm.taobao.org -g
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="puppeteer-\u7F3A\u5C11\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#puppeteer-\u7F3A\u5C11\u4F9D\u8D56" aria-hidden="true">#</a> puppeteer \u7F3A\u5C11\u4F9D\u8D56</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Error: Failed to launch the browser process!
/root/.cache/puppeteer/chrome/linux-1095492/chrome-linux/chrome: error while loading shared libraries: libxxxxxx.so
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5B89\u88C5\u4F9D\u8D56\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 <span class="token punctuation">\\</span>
libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 <span class="token punctuation">\\</span>
libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 <span class="token punctuation">\\</span>
libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 libgbm-dev libnss3 <span class="token punctuation">\\</span>
ca-certificates fonts-liberation lsb-release xdg-utils
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="\u4E2D\u6587\u663E\u793A\u4E3A\u65B9\u5757" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u6587\u663E\u793A\u4E3A\u65B9\u5757" aria-hidden="true">#</a> \u4E2D\u6587\u663E\u793A\u4E3A\u65B9\u5757</h4><p>\u9700\u8981\u5B89\u88C5\u4E00\u4E2A\u4E2D\u6587\u5B57\u4F53\uFF1A</p><p>\u5982\u679C\u60A8\u4F7F\u7528APT\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u6587\u6CC9\u9A7F\u6B63\u9ED1\u4F53</span>
<span class="token function">apt</span> <span class="token function">install</span> ttf-wqy-zenhei
<span class="token comment"># \u91CD\u5EFA\u5B57\u4F53\u7F13\u5B58</span>
fc-cache -fv
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>p.s. \u5982\u679C\u4F60\u4E0D\u559C\u6B22\u6B63\u9ED1\u4F53\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u4F60Windows\u7535\u8111\u7684\u5FAE\u8F6F\u96C5\u9ED1\u62F7\u8D1D\u8FC7\u53BB\uFF08</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5982\u679C\u4F60\u6B63\u597D\u5728\u4F7F\u7528Windows SSH\u63A7\u5236\u670D\u52A1\u5668\uFF0C\u90A3\u76F4\u63A5\u5728Windows\u7EC8\u7AEF\u8F93\u5165\u8FD9\u4E2A\uFF1A</span>
<span class="token function">scp</span> C:<span class="token punctuation">\\</span>Windows<span class="token punctuation">\\</span>Fonts<span class="token punctuation">\\</span>msyh.ttc root@233.233.6.6:/usr/share/fonts/msyh.ttc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7136\u540E\u5EFA\u7ACB\u5B57\u4F53\u7F13\u5B58\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>fc-cache -fv
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u91CD\u65B0\u542F\u52A8\u5373\u53EF\u3002</p>`,39);function E(M,R){const a=t("ExternalLinkIcon");return o(),l(c,null,[u,s("p",null,[b,s("a",m,[d,e(a)]),h]),s("blockquote",null,[s("ul",null,[s("li",null,[s("a",k,[g,e(a)]),v,s("a",f,[x,e(a)]),_,s("a",y,[z,e(a)]),w]),s("li",null,[s("a",Y,[q,e(a)]),C]),s("li",null,[s("a",D,[N,e(a)]),V])])]),T],64)}var B=r(i,[["render",E]]);export{B as default};
