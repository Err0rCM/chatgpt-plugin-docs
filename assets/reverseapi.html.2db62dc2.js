import{r,o as t,a as c,b as n,d as e,F as l,e as s,c as p}from"./app.7fc76c2c.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("h1",{id:"api3\u53CD\u4EE3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#api3\u53CD\u4EE3","aria-hidden":"true"},"#"),s(" API3\u53CD\u4EE3")],-1),b=n("p",null,"\u60F3\u8981\u81EA\u5DF1\u642D\u5EFAChatGPT\u5B98\u65B9API\u53CD\u5411\u4EE3\u7406\u5417\uFF1F\u4EE5\u4E0B\u662F\u4E00\u4E9B\u76F8\u5173\u4FE1\u606F\u3002",-1),d=s("\u4F5C\u8005\u63D0\u4F9B\u7684\u5F00\u7BB1\u5373\u7528\u65B9\u5F0F\uFF1A"),m={href:"https://ikechan8370.com/archives/da-jian-chatgpt-guan-fang-fan-xiang-dai-li",target:"_blank",rel:"noopener noreferrer"},h=s("\u642D\u5EFAChatGPT\u5B98\u65B9API\u53CD\u5411\u4EE3\u7406"),k=p(`<h2 id="\u4F7F\u7528docker" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528docker" aria-hidden="true">#</a> \u4F7F\u7528docker</h2><p>\u5728\u8FD9\u91CC\u6211\u7ED9\u51FA\u4E00\u79CD\u4F7F\u7528docker\u518D\u52A0\u4E00\u5C42nginx\u4EE3\u7406\u7684\u642D\u5EFA\u65B9\u5F0F</p><div class="custom-container danger"><p class="custom-container-title">\u6CE8\u610F</p><p>\u4F7F\u7528\u6B64\u65B9\u5F0F\u524D\u60A8\u9700\u5DF2\u5B89\u88C5\u597Ddocker-compose</p></div><blockquote><p>\u8001\u559C\u6B22\u7528docker\u4E86 \u2014\u2014 Err0r</p></blockquote><p>\u5728\u4E00\u4E2A\u6587\u4EF6\u5939\u4E0B\u65B0\u5EFA<code>docker-compose.yml</code>\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">chatgpt-proxy</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> geyinchi/node<span class="token punctuation">-</span>chatgpt<span class="token punctuation">-</span>proxy
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>chatgpt<span class="token punctuation">-</span>proxy
    <span class="token key atrule">shm_size</span><span class="token punctuation">:</span> 1gb
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">chatgpt-proxy-network</span><span class="token punctuation">:</span>
        <span class="token comment"># \u8FD9\u91CC\u7684ip\u662F\u53EF\u4EE5\u6539\u7684\uFF0C\u9700\u8981\u548C\u4E0B\u65B9network\u5728\u540C\u4E00\u5B50\u7F51\uFF0C\u4EE3\u7406\u7684ip\u4E5F\u8981\u6CE8\u610F  </span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.16.238.10
    <span class="token comment"># \u5982\u679C\u4F60\u8981\u4F7F\u7528\u5BBF\u4E3B\u673A\u7684clash\u4EE3\u7406\uFF0C\u53EF\u4EE5\u50CF\u5982\u4E0B\u914D\u7F6E\uFF0C\u5176\u4ED6\u4EE3\u7406\u540C\u7406</span>
    <span class="token comment"># environment:</span>
    <span class="token comment">#   - HTTP_PROXY=http://172.16.238.1:7890</span>
    <span class="token comment">#   - HTTPS_PROXY=http://172.16.238.1:7890</span>

  <span class="token key atrule">nginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> chatgpt<span class="token punctuation">-</span>proxy<span class="token punctuation">-</span>nginx
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token comment"># \u8FD9\u91CC\u662F\u53CD\u4EE3\u51FA\u6765\u7684\u7AEF\u53E3\uFF0C\u8981\u6539\u53EA\u9700\u6539\u524D\u9762\`[\u4F60\u60F3\u8981\u7684\u7AEF\u53E3]:80\`</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./nginx.conf<span class="token punctuation">:</span>/etc/nginx/nginx.conf
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> chatgpt<span class="token punctuation">-</span>proxy
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">chatgpt-proxy-network</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.16.238.11

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">chatgpt-proxy-network</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">ipam</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> default
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token comment"># \u53EF\u66F4\u6539</span>
        <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> 172.16.238.0/24

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u672C\u65B9\u5F0F\u6CA1\u6709\u914D\u7F6Ehttps\uFF0C\u5982\u6709\u9700\u6C42\u5219\u53E6\u9700443\u7AEF\u53E3\u548C\u5176\u4ED6\u914D\u7F6E\uFF0C\u53EF\u81EA\u884C\u7814\u7A76\u3002</p></div><p>\u63A5\u7740\u5728<strong>\u540C\u76EE\u5F55\u4E0B</strong>\u65B0\u5EFA\u4E00\u4E2A<code>nginx.conf</code>\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF0C\u53EF\u6839\u636E\u9700\u6C42\u81EA\u884C\u4FEE\u6539\uFF1A</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>
events {}

http {
    upstream chatgpt-proxy {
        server chatgpt-proxy:3000;
    }

    server {
        listen 80;
        server_name localhost;

        location /backend-api/conversation {
            proxy_pass http://chatgpt-proxy/backend-api/conversation;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_connect_timeout 5s;
            proxy_read_timeout 10s;
            proxy_next_upstream error;
        }

        location /backend-api/ {
            proxy_pass http://chatgpt-proxy/backend-api/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_connect_timeout 5s;
            proxy_read_timeout 10s;
            proxy_next_upstream error;
        }

        location / {
            return 403;
        }
    }
}


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>\u6700\u7EC8\u7684\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500\u2500 docker-compose.yml
\u2514\u2500\u2500 nginx.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5728\u6B64\u76EE\u5F55\u4E0B\u6267\u884C\u547D\u4EE4<code>docker-compose up -d</code>\uFF0C\u5B8C\u6210\u540E<code>http://localhost:[\u7AEF\u53E3\u53F7]</code>\u5373\u4E3A\u8BBF\u95EE ChatGPT \u5B98\u65B9\u804A\u5929 API \u7684\u53CD\u4EE3\u670D\u52A1\u4E86</p><p>\u53EF\u4F7F\u7528<code>docker exec -it node-chatgpt-proxy tail -100f /var/log/node-chatgpt-proxy.log</code>\u67E5\u770B\u65E5\u5FD7</p><h3 id="\u82B1\u91CC\u80E1\u54E8" tabindex="-1"><a class="header-anchor" href="#\u82B1\u91CC\u80E1\u54E8" aria-hidden="true">#</a> \u82B1\u91CC\u80E1\u54E8</h3><p>\u6709\u4E9B\u65F6\u5019\u5982\u679C\u6709\u4EBA\u95F2\u7740\u65E0\u804A\u8BBF\u95EE<code>http://localhost:[\u7AEF\u53E3\u53F7/backend-api/conversation/</code>\uFF0C\u4F1A\u5BFC\u81F4puppeteer\u5D29\u6E83\uFF0C\u8FD9\u6837\u53CD\u4EE3\u5C31\u4F1A\u51FA\u73B0504\u9519\u8BEF\uFF1B\u6709\u65F6\u5019\u8FDE\u63A5\u8D85\u65F6\u4F1A\u51FA\u73B0502\u9519\u8BEF</p><p><img src="https://user-images.githubusercontent.com/68117733/230784202-243b5d84-c658-457e-b3f2-87e7de9cf2b2.png" alt="504"></p><p>\u8FD9\u6837\u56DE\u590D\u592A\u4E11\u4E86\uFF0C\u4E3A\u4E86\u907F\u514D\u8FD9\u6837\u7684\u60C5\u51B5\u53D1\u751F\uFF0C\u53EF\u4EE5\u4FEE\u6539nginx\u7684\u9519\u8BEF\u754C\u9762</p><p>\u4E0B\u9762\u6211\u4EEC\u4EE5504\u62A5\u9519\u4E3A\u4F8B\uFF0C\u5982\u9700\u914D\u7F6E502\u4E5F\u662F\u540C\u7406\u7684\u3002</p><p>\u6211\u4EEC\u5199\u4E00\u4E2A<code>504.html</code>\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
504\uFF1A\u521D\u59CB\u5316\u4F1A\u8BDD\u4E2D\uFF0C\u8BF7\u7B49\u5F85\u7EA6\u5341\u79D2\u540E\u91CD\u8BD5
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5C06\u5176\u590D\u5236\u5230nginx\u5BB9\u5668\u5185<code>/usr/share/nginx/html</code>\u8DEF\u5F84\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> <span class="token number">504</span>.html chatgpt-proxy-nginx:/usr/share/nginx/html
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6709\u4E9B\u65F6\u5019\u53EF\u80FD\u8FD8\u4F1A\u6709\u6743\u9650\u95EE\u9898\uFF0C\u518D\u6267\u884C\u4E00\u4E0B\u8D4B\u4E88\u8BFB\u6267\u884C\u6743\u9650</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it chatgpt-proxy-nginx <span class="token function">chmod</span> <span class="token number">644</span> /usr/share/nginx/html/504.html
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u63A5\u7740\u4FEE\u6539<code>nginx.conf</code>\u5982\u4E0B\uFF1A</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>events {}

http {
    upstream chatgpt-proxy {
        server chatgpt-proxy:3000;
    }

    server {
        listen 80;
        server_name localhost;

        error_page 502 /502.html;
        location = /502.html {
            root /usr/share/nginx/html;
            internal;
        }

        error_page 504 /504.html;
        location = /504.html {
            root /usr/share/nginx/html;
            internal;
        }

        location /backend-api/conversation {
            proxy_pass http://chatgpt-proxy/backend-api/conversation;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_connect_timeout 5s;
            proxy_read_timeout 10s;
            proxy_next_upstream error;
        }

        location /backend-api/ {
            proxy_pass http://chatgpt-proxy/backend-api/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_connect_timeout 5s;
            proxy_read_timeout 10s;
            proxy_next_upstream error;
        }

        location / {
            return 403;
        }
    }
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p>\u6700\u540E\u91CD\u542Fnginx\uFF0C\u6267\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it chatgpt-proxy-nginx nginx -s reload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FD9\u6837\u5728\u62A5\u9519\u7684\u60C5\u51B5\u4E0B\u7F51\u9875\u4E0A\u8BBF\u95EE\u7ED3\u679C\u5982\u56FE\uFF1A</p><p><img src="https://user-images.githubusercontent.com/68117733/230784353-2332a360-6823-4ad4-b018-7de1cc5c5b84.png" alt="update504"></p><p>\u8BE2\u95EE\u56DE\u590D\u5982\u56FE\uFF1A</p><p><img src="https://user-images.githubusercontent.com/68117733/230784409-d7bf202f-a983-4f49-90ad-7002e942ba6e.png" alt="reply504"></p><p>\u662F\u4E0D\u662F\u6BD4\u4E4B\u524D\u597D\u770B\u591A\u4E86\uFF1F</p><p>\u751A\u81F3\u53EF\u4EE5\u628A<code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code>\u5220\u4E86\uFF0C\u5220\u4E86\u540E\u7F51\u9875\u8BBF\u95EE\u4F1A\u4E71\u7801\uFF0C\u4E0D\u8FC7\u4E0D\u4F1A\u771F\u6709\u4EBA\u65E0\u804A\u5230\u7F51\u9875\u8BBF\u95EE\u5427\uFF1F</p><hr><h2 id="\u4F5C\u8005\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u8005\u6587\u7AE0" aria-hidden="true">#</a> \u4F5C\u8005\u6587\u7AE0</h2>`,36),g={class:"custom-container warning"},_=n("p",{class:"custom-container-title"},"\u6CE8\u610F",-1),x=s("\u4EE5\u4E0B\u4E3A\u90E8\u5206\u6458\u5F55\u81EA"),y={href:"https://ikechan8370.com/archives/da-jian-chatgpt-guan-fang-fan-xiang-dai-li",target:"_blank",rel:"noopener noreferrer"},v=s("\u642D\u5EFAChatGPT\u5B98\u65B9API\u53CD\u5411\u4EE3\u7406"),f=s("\uFF0C\u5982\u679C\u9700\u8981\u5B8C\u6574\u5185\u5BB9\uFF0C\u8BF7\u67E5\u770B\u539F\u6587\u3002"),P=p('<p>ChatGPT\u5B98\u65B9API\u4F7F\u7528\u4E86Cloudflare\u4F5C\u4E3A\u9632\u62A4\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u96BE\u4EE5\u7ED5\u8FC7\u5176\u722C\u866B\u68C0\u6D4B\u3002\u4F46\u53EF\u4EE5\u4F7F\u7528\u57FA\u4E8E\u6D4F\u89C8\u5668\u7684\u7ED5\u8FC7\u65B9\u6848\u3002</p><p>\u4EE5\u4E0B\u662F\u7B80\u5355\u7684\u5F00\u7BB1\u5373\u7528\u7684\u5BB9\u5668\u955C\u50CF\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u8BE5\u65B9\u6CD5\u4EC5\u9002\u5408\u6709\u4E00\u5B9A\u7ECF\u9A8C\u7684\u7528\u6237\uFF0C\u8FC7\u4E8E\u5C0F\u767D\u7684\u7528\u6237\u4E0D\u5EFA\u8BAE\u5C1D\u8BD5\u3002</p><h3 id="\u642D\u5EFA\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA\u6B65\u9AA4" aria-hidden="true">#</a> \u642D\u5EFA\u6B65\u9AA4</h3><ol><li>\u5B89\u88C5docker\u3002</li><li>\u8FD0\u884C\u547D\u4EE4 <code>docker run -d -p [\u7AEF\u53E3\u53F7]:3000 \u2014name node-chatgpt-proxy \u2014shm-size=1gb geyinchi/node-chatgpt-proxy</code> \u542F\u52A8\u5BB9\u5668\u3002</li><li>\u67E5\u770B\u65E5\u5FD7\uFF1A\u53EF\u4EE5\u4F7F\u7528 <code>docker exec -it node-chatgpt-proxy tail -f /var/log/node-chatgpt-proxy.log</code> \u547D\u4EE4\u5B9E\u65F6\u67E5\u770B\u65E5\u5FD7\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>docker exec -it node-chatgpt-proxy tail -100f /var/log/node-chatgpt-proxy.log</code> \u547D\u4EE4\u67E5\u770B\u66F4\u591A\u884C\u6570\u3002</li><li>\u66F4\u65B0\u5BB9\u5668\uFF1A\u4F7F\u7528 <code>docker pull geyinchi/node-chatgpt-proxy &amp;&amp; docker stop node-chatgpt-proxy &amp;&amp; docker rm node-chatgpt-proxy &amp;&amp; docker run -d -p [\u7AEF\u53E3\u53F7]:3000 \u2014name node-chatgpt-proxy \u2014shm-size=1gb geyinchi/node-chatgpt-proxy</code> \u547D\u4EE4\u62C9\u53D6\u955C\u50CF\u5E76\u521B\u5EFA\u65B0\u5BB9\u5668\u3002</li><li>\u8BBF\u95EE\u63A5\u53E3\uFF1A\u73B0\u5728\u53EF\u4EE5\u4F7F\u7528 <code>http://localhost:[\u7AEF\u53E3\u53F7]</code> \u8BBF\u95EE ChatGPT \u5B98\u65B9\u804A\u5929 API \u7684\u53CD\u4EE3\u670D\u52A1\u5668\u4E86\u3002</li></ol><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u5177\u6709 1GB \u53CA\u4EE5\u4E0A\u5185\u5B58\u7684\u670D\u52A1\u5668\uFF0C\u5E76\u4E14\u8BE5\u670D\u52A1\u5668\u4F4D\u4E8E\u80FD\u591F\u8BBF\u95EE ChatGPT \u7684\u56FD\u5BB6\u6216\u5730\u533A\u3002</p><h3 id="\u63A5\u53E3\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u8BF4\u660E" aria-hidden="true">#</a> \u63A5\u53E3\u8BF4\u660E</h3><p>\u7565\uFF0C\u804A\u5929\u63A5\u53E3\u4E0E\u5B98\u65B9\u4E00\u81F4\uFF0C\u9ED8\u8BA4\u4F7F\u7528 SSE\uFF0C\u53EF\u4EE5\u81EA\u884C\u8C03\u8BD5\u3002</p><p>\u5982\u679C\u4F60\u662F Yunzai \u7528\u6237\uFF0C\u8BE5\u955C\u50CF\u9002\u7528\u4E8E Yunzai \u804A\u5929\u673A\u5668\u4EBA\u63D2\u4EF6\u5F00\u53D1\uFF0C\u5E76\u9002\u914D\u5176 API3 \u6A21\u5F0F\u3002\u4F7F\u7528\u8BE5\u63D2\u4EF6\u7684\u7528\u6237\u53EF\u4EE5\u4E00\u952E\u90E8\u7F72\u5E76\u4F7F\u7528\u3002\u804A\u5929\u8DEF\u5F84\u4E3A <code>/backend-api/conversation</code>\u3002</p><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u6709 Sydney \u53CD\u4EE3\uFF0C\u63A5\u53E3\u6BD4\u8F83\u7B80\u5355\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5411 ChatGPT \u8BE2\u95EE\u534F\u52A9\u642D\u5EFA\u3002</p><p>\u6700\u540E\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u8BE5\u955C\u50CF\u7684 <code>latest</code> \u6807\u7B7E\u53EF\u80FD\u4F1A\u6301\u7EED\u66F4\u65B0\u3002</p><h3 id="\u4EE3\u7801\u5F00\u6E90" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5F00\u6E90" aria-hidden="true">#</a> \u4EE3\u7801\u5F00\u6E90</h3>',11),w=s("\u4EE3\u7801\u5F00\u6E90\u4E8E "),T={href:"https://github.com/ikechan8370/node-chatgpt-proxy",target:"_blank",rel:"noopener noreferrer"},I=s("node-chatgpt-proxy");function F($,C){const a=r("ExternalLinkIcon");return t(),c(l,null,[u,b,n("p",null,[d,n("a",m,[h,e(a)])]),k,n("div",g,[_,n("p",null,[x,n("a",y,[v,e(a)]),f])]),P,n("p",null,[w,n("a",T,[I,e(a)])])],64)}var G=o(i,[["render",F]]);export{G as default};
