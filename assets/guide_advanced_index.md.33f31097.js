import{_ as e,c as t,o as a,a as n}from"./app.2d715e14.js";const v='{"title":"\u5B9E\u4F8B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B"},{"level":3,"title":"\u521B\u5EFA\u5B9E\u4F8B","slug":"\u521B\u5EFA\u5B9E\u4F8B"},{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":3,"title":"\u914D\u7F6E\u5408\u5E76","slug":"\u914D\u7F6E\u5408\u5E76"},{"level":3,"title":"\u57FA\u7840\u914D\u7F6E","slug":"\u57FA\u7840\u914D\u7F6E"},{"level":3,"title":"\u5C31\u8FD1\u539F\u5219","slug":"\u5C31\u8FD1\u539F\u5219"},{"level":3,"title":"\u5176\u4ED6\u914D\u7F6E","slug":"\u5176\u4ED6\u914D\u7F6E"},{"level":2,"title":"\u62E6\u622A\u5668","slug":"\u62E6\u622A\u5668"},{"level":3,"title":"request","slug":"request"},{"level":3,"title":"response","slug":"response"},{"level":3,"title":"\u5982\u4F55\u79FB\u9664\u62E6\u622A\u5668?","slug":"\u5982\u4F55\u79FB\u9664\u62E6\u622A\u5668"},{"level":2,"title":"\u8BF7\u6C42\u53D6\u6D88","slug":"\u8BF7\u6C42\u53D6\u6D88"},{"level":3,"title":"\u4EC0\u4E48\u662Ftask?","slug":"\u4EC0\u4E48\u662Ftask"},{"level":3,"title":"\u5173\u4E8Etask\u7684\u5B9A\u4E49","slug":"\u5173\u4E8Etask\u7684\u5B9A\u4E49"},{"level":3,"title":"\u5982\u4F55\u5728Vxios\u4F7F\u7528task?","slug":"\u5982\u4F55\u5728vxios\u4F7F\u7528task"}],"relativePath":"guide/advanced/index.md","lastUpdated":1644809688906}',s={},o=n(`<h2 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h2><h3 id="\u521B\u5EFA\u5B9E\u4F8B" tabindex="-1">\u521B\u5EFA\u5B9E\u4F8B <a class="header-anchor" href="#\u521B\u5EFA\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u914D\u7F6E\u65B0\u5EFA\u4E00\u4E2A vxios \u5B9E\u4F8B \u8FD9\u6837\u8DDF\u4FBF\u4E8E\u4F60\u5168\u5C40\u53BB\u4F7F\u7528\u5B83\u513F\u4E0D\u7528\u5728\u53BB\u5199\u4E00\u4E9B\u7E41\u7410\u7684\u914D\u7F6E</p><div class="tip custom-block"><p class="custom-block-title">vxios.create([config])</p><div class="language-"><pre><code>const myVxios = vxio.create({
  baseURL: &#39;https://some-domain.com/api/&#39;,
  timeout: 1000,
})
</code></pre></div></div><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><h3 id="\u914D\u7F6E\u5408\u5E76" tabindex="-1">\u914D\u7F6E\u5408\u5E76 <a class="header-anchor" href="#\u914D\u7F6E\u5408\u5E76" aria-hidden="true">#</a></h3><p>\u4EE5\u4E0B\u662F\u53EF\u7528\u7684\u5B9E\u4F8B\u65B9\u6CD5\u3002\u6307\u5B9A\u7684\u914D\u7F6E\u5C06\u4E0E\u5B9E\u4F8B\u7684\u914D\u7F6E\u5408\u5E76\u3002</p><table><thead><tr><th>\u5B9E\u4F8B</th><th style="text-align:center;">\u65B9\u6CD5</th><th style="text-align:right;">\u662F\u5426\u5408\u5E76</th></tr></thead><tbody><tr><td>vxios</td><td style="text-align:center;">get</td><td style="text-align:right;">\u2714\uFE0F</td></tr><tr><td>vxios</td><td style="text-align:center;">post</td><td style="text-align:right;">\u2714\uFE0F</td></tr><tr><td>vxios</td><td style="text-align:center;">create</td><td style="text-align:right;">\u2714\uFE0F</td></tr></tbody></table><h3 id="\u57FA\u7840\u914D\u7F6E" tabindex="-1">\u57FA\u7840\u914D\u7F6E <a class="header-anchor" href="#\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a></h3><p>\u8FD9\u4E9B\u914D\u7F6E\u662F\u7279\u6709\u7684,\u5C31\u7B97\u4F60\u4E0D\u914D\u7F6E\u4ED6\u4E5F\u4F1A\u5B58\u5728</p><div class="language-"><pre><code>{
   // \`url\` \u662F\u7528\u4E8E\u8BF7\u6C42\u7684\u670D\u52A1\u5668 URL
  url: &#39;/api/get&#39;,

  // \`method\` \u662F\u521B\u5EFA\u8BF7\u6C42\u65F6\u4F7F\u7528\u7684\u65B9\u6CD5
  method: &#39;get&#39;, // default

  // \`baseURL\` \u5C06\u81EA\u52A8\u52A0\u5728 \`url\` \u524D\u9762\uFF0C\u9664\u975E \`url\` \u662F\u4E00\u4E2A\u7EDD\u5BF9 URL\u3002
  // \u5B83\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u4E00\u4E2A \`baseURL\` \u4FBF\u4E8E\u4E3A vxio \u5B9E\u4F8B\u7684\u65B9\u6CD5\u4F20\u9012\u76F8\u5BF9 URL
  baseURL: &#39;https://www.github.com&#39;,
  //header\u5934\u6DFB\u52A0
  header:{
    &#39;content-type&#39;: contentType[&quot;json&quot;]
  },
  //\u9ED8\u8BA4\u83B7\u5F97task
  getTask:task=&gt;task,
 // \`timeout\` \u6307\u5B9A\u8BF7\u6C42\u8D85\u65F6\u7684\u6BEB\u79D2\u6570(0 \u8868\u793A\u65E0\u8D85\u65F6\u65F6\u95F4)
  // \u5982\u679C\u8BF7\u6C42\u8BDD\u8D39\u4E86\u8D85\u8FC7 \`timeout\` \u7684\u65F6\u95F4\uFF0C\u8BF7\u6C42\u5C06\u88AB\u4E2D\u65AD
  timeout: 2000,
}
</code></pre></div><p>\u54CD\u5E94\u89E3\u6784</p><div class="language-"><pre><code>const config={method:&quot;get&quot;....}
vxios({...config}).then(res={
  console.log(res)
})
//\u4E0A\u9762\u56DE\u8C03\u6253\u5370\u7684\u7ED3\u679C
{
  cookies: []//\u5F00\u53D1\u8005\u670D\u52A1\u5668\u8FD4\u56DE\u7684 cookies\uFF0C\u683C\u5F0F\u4E3A\u5B57\u7B26\u4E32\u6570\u7EC4
  data: &quot;Forbidden&quot;//	\u5F00\u53D1\u8005\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u6570\u636E
  errMsg: &quot;request:ok&quot;//\u9519\u8BEF\u6D88\u606F
  header: {Server: &quot;nginx/1.18.0&quot;, Date: &quot;Fri, 11 Feb 2022 10:08:43 GMT&quot;, Content-Type: &quot;text/plain; charset=utf-8&quot;, Content-Length: &quot;9&quot;, Connection: &quot;keep-alive&quot;, \u2026}//\u5F00\u53D1\u8005\u670D\u52A1\u5668\u8FD4\u56DE\u7684 HTTP Response Header
  statusCode: 403//\u5F00\u53D1\u8005\u670D\u52A1\u5668\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801
}

</code></pre></div><h3 id="\u5C31\u8FD1\u539F\u5219" tabindex="-1">\u5C31\u8FD1\u539F\u5219 <a class="header-anchor" href="#\u5C31\u8FD1\u539F\u5219" aria-hidden="true">#</a></h3><p>\u914D\u7F6E\u4F1A\u88AB\u4E0A\u4E0B\u6587\u4E2D\u6700\u540E\u6267\u884C\u7684\u540C\u540D\u5C5E\u6027\u8986\u76D6,\u6700\u7EC8\u6267\u884C\u7684\u65F6\u5019 baseURL\u4E3A\u4EAC\u4E1C</p><div class="language-"><pre><code>const myVxios = vxio.create({
  baseURL: &#39;https://some-domain.com/api/&#39;,
  timeout: 1000,
})
myVxios.defaults.baseURL=&quot;wwww.baidu.com&quot;
myVxios.get(&quot;api/get&quot;,{},{baseURL:&quot;www.jd.com&quot;})
</code></pre></div><h3 id="\u5176\u4ED6\u914D\u7F6E" tabindex="-1">\u5176\u4ED6\u914D\u7F6E <a class="header-anchor" href="#\u5176\u4ED6\u914D\u7F6E" aria-hidden="true">#</a></h3><p>vxios\u6240\u6709\u53D1\u51FA\u7684\u8BF7\u6C42\u90FD\u7EE7\u627F\u4E0E\u5FAE\u4FE1\u539F\u751F\u8BF7\u6C42\u53C2\u6570,\u5982\u6709\u9700\u8981\u53EF\u4EE5\u53BB\u67E5\u770B\u914D\u7F6E<a href="https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html" target="_blank" rel="noopener noreferrer">\u4F20\u9001\u95E8</a></p><h2 id="\u62E6\u622A\u5668" tabindex="-1">\u62E6\u622A\u5668 <a class="header-anchor" href="#\u62E6\u622A\u5668" aria-hidden="true">#</a></h2><p>requset\u548Cresponse\u88AB then \u6216 catch \u5904\u7406\u524D\u62E6\u622A\u5B83\u4EEC\u3002</p><h3 id="request" tabindex="-1">request <a class="header-anchor" href="#request" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">\u6DFB\u52A0\u8BF7\u6C42\u62E6\u622A\u5668</p><div class="language-"><pre><code>// \u6DFB\u52A0\u8BF7\u6C42\u62E6\u622A\u5668
vxios.interceptors.request.use(function (config) {
    // \u5728\u53D1\u9001\u8BF7\u6C42\u4E4B\u524D\u505A\u4E9B\u4EC0\u4E48
    return config;
  }, function (error) {
    // \u5BF9\u8BF7\u6C42\u9519\u8BEF\u505A\u4E9B\u4EC0\u4E48
    return Promise.reject(error);
  });
</code></pre></div></div><h3 id="response" tabindex="-1">response <a class="header-anchor" href="#response" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">\u6DFB\u52A0\u54CD\u5E94\u62E6\u622A\u5668</p><div class="language-"><pre><code>// \u6DFB\u52A0\u54CD\u5E94\u62E6\u622A\u5668
vxios.interceptors.response.use(function (response) {
    // \u5BF9\u54CD\u5E94\u6570\u636E\u505A\u70B9\u4EC0\u4E48
    return response;
  }, function (error) {
    // \u5BF9\u54CD\u5E94\u9519\u8BEF\u505A\u70B9\u4EC0\u4E48
    return Promise.reject(error);
  });
</code></pre></div></div><h3 id="\u5982\u4F55\u79FB\u9664\u62E6\u622A\u5668" tabindex="-1">\u5982\u4F55\u79FB\u9664\u62E6\u622A\u5668? <a class="header-anchor" href="#\u5982\u4F55\u79FB\u9664\u62E6\u622A\u5668" aria-hidden="true">#</a></h3><p>\u901A\u8FC7vxios\u62E6\u622A\u5668\u5185\u7F6E\u7684clean\u65B9\u6CD5 \u53EF\u4EE5\u8FDB\u884C\u62E6\u622A\u5668\u7684\u79FB\u9664</p><div class="language-"><pre><code>const myVxios = vxios.create({
  baseURL: &#39;https://www.escook.cn&#39;
})
//\u521B\u5EFA\u62E6\u622A\u5668
const interReq=myVxios.interceptors.request.use(config =&gt; {
  console.log(config.url);
  addPending(config)
  
  return config
})
//\u79FB\u9664\u62E6\u622A\u5668
myVxios.interceptors.clean(interReq)

</code></pre></div><h2 id="\u8BF7\u6C42\u53D6\u6D88" tabindex="-1">\u8BF7\u6C42\u53D6\u6D88 <a class="header-anchor" href="#\u8BF7\u6C42\u53D6\u6D88" aria-hidden="true">#</a></h2><h3 id="\u4EC0\u4E48\u662Ftask" tabindex="-1">\u4EC0\u4E48\u662Ftask? <a class="header-anchor" href="#\u4EC0\u4E48\u662Ftask" aria-hidden="true">#</a></h3><p>task\u662F\u5FAE\u4FE1\u539F\u751F\u7684\u53D6\u6D88\u8BF7\u6C42api,\u5728\u8BF7\u6C42\u53D1\u5E03\u4E4B\u524D\u53D6\u6D88\u8BF7\u6C42,\u7531\u4E8E\u8BF7\u6C42\u662F\u5F02\u6B65\u51FD\u6570,\u6240\u4EE5\u8BF7\u6C42\u4F1A\u5728\u6267\u884C\u4E0A\u4E0B\u6587\u540E\u5728\u8FDB\u884C\u6267\u884C,\u901A\u8FC7\u8C03\u7528task\u4E2D\u7684\u65B9\u6CD5\u53EF\u4EE5\u53D6\u6D88\u8FD9\u4E2A\u5F02\u6B65\u4EFB\u52A1</p><blockquote><p>\u8BF7\u6C42\u53D6\u6D88\u662F\u57FA\u4E8Ewx\u539F\u751F\u63D0\u4F9B\u7684api rquestTask\u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5</p></blockquote><h3 id="\u5173\u4E8Etask\u7684\u5B9A\u4E49" tabindex="-1">\u5173\u4E8Etask\u7684\u5B9A\u4E49 <a class="header-anchor" href="#\u5173\u4E8Etask\u7684\u5B9A\u4E49" aria-hidden="true">#</a></h3><p>\u7ECF\u8FC7\u6D4B\u8BD5\u5F97\u51FAtask\u7ED3\u8BBA</p><ul><li>task\u662F\u5F02\u6B65\u51FD\u6570</li><li>task\u6267\u884C\u987A\u5E8F\u5728\u8BF7\u6C42\u65B9\u6CD5\u4E4B\u524D</li><li>task\u64CD\u4F5C\u4E0D\u53EF\u9006</li></ul><h3 id="\u5982\u4F55\u5728vxios\u4F7F\u7528task" tabindex="-1">\u5982\u4F55\u5728Vxios\u4F7F\u7528task? <a class="header-anchor" href="#\u5982\u4F55\u5728vxios\u4F7F\u7528task" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u53C2\u6570\u914D\u7F6E\u53EF\u4EE5\u5728\u6211\u4EEC\u51FD\u6570\u4E2D\u4F7F\u7528task\u7684\u56DE\u8C03\u51FD\u6570</p><blockquote><p>getTask\u662F\u5F02\u6B65\u51FD\u6570,\u901A\u8FC7\u6267\u884Ctask.abort\u65B9\u6CD5\u53EF\u4EE5\u7ACB\u5373\u505C\u6B62\u8FD9\u4E2A\u8BF7\u6C42\u7684\u6267\u884C</p></blockquote><div class="language-"><pre><code>//\u5F02\u6B65\u8BF7\u6C42\u5165\u6808\u961F\u5217\u987A\u5E8F context&gt;task&gt;request
  myVxios.post(&quot;api/post&quot;, {
      name: &quot;123&quot;,
      age: 23
    },{getTask:task=&gt;{
    //\u5F02\u6B65
    if(num==1)  task.abort()
  
    }}).then(res=&gt;{
      console.log(res,&quot;\u7ED3\u679C&quot;);
   })
    //\u540C\u6B65
    const num=1
</code></pre></div>`,38),r=[o];function i(d,l,c,u,h,p){return a(),t("div",null,r)}var x=e(s,[["render",i]]);export{v as __pageData,x as default};
