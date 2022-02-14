import{_ as e,c as t,o,a}from"./app.2d715e14.js";const v='{"title":"\u521B\u5EFA\u4E00\u4E2A\u8BF7\u6C42","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA\u4E00\u4E2A\u8BF7\u6C42","slug":"\u521B\u5EFA\u4E00\u4E2A\u8BF7\u6C42"},{"level":3,"title":"\u5E94\u7528\u793A\u4F8B","slug":"\u5E94\u7528\u793A\u4F8B"},{"level":3,"title":"GET","slug":"get"},{"level":3,"title":"POST","slug":"post"},{"level":3,"title":"\u4E0A\u4F20\u8BF7\u6C42","slug":"\u4E0A\u4F20\u8BF7\u6C42"},{"level":3,"title":"\u4E0B\u8F7D\u8BF7\u6C42","slug":"\u4E0B\u8F7D\u8BF7\u6C42"}],"relativePath":"guide/useCase/index.md","lastUpdated":1644809708258}',i={},s=a(`<h2 id="\u521B\u5EFA\u4E00\u4E2A\u8BF7\u6C42" tabindex="-1">\u521B\u5EFA\u4E00\u4E2A\u8BF7\u6C42 <a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u8BF7\u6C42" aria-hidden="true">#</a></h2><h3 id="\u5E94\u7528\u793A\u4F8B" tabindex="-1">\u5E94\u7528\u793A\u4F8B <a class="header-anchor" href="#\u5E94\u7528\u793A\u4F8B" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u5BFC\u5165vxios\u5B9E\u4F8B\u6267\u884CGET\u8BF7\u6C42\u65B9\u6CD5\u5E76\u8FD4\u56DE\u4E00\u4E2APromise,\u901A\u8FC7\u5E76\u901A\u8FC7PromiseAPI\u8FDB\u884C\u7ED3\u679C\u7684\u5904\u7406</p><div class="language-"><pre><code>// \u4E3A\u7ED9\u5B9A ID \u7684 user \u521B\u5EFA\u8BF7\u6C42
vxios.get(&#39;/user?ID=12345&#39;)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
</code></pre></div><h3 id="get" tabindex="-1">GET <a class="header-anchor" href="#get" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">\u6267\u884C GET \u8BF7\u6C42</p><div class="language-"><pre><code>//\u5FEB\u6377\u8BF7\u6C42 
vxios(&quot;www.github.com/GAtomis/api/get&quot;,{data:{name:&quot;Gavin&quot;,age:&quot;20&quot;}})
//\u5229\u7528api
vxios.get(&quot;www.github.com/GAtomis/api/get&quot;,{name:&quot;Gavin&quot;,age:&quot;20&quot;})
</code></pre></div></div><h3 id="post" tabindex="-1">POST <a class="header-anchor" href="#post" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">\u6267\u884C POST \u8BF7\u6C42</p><div class="language-"><pre><code>//\u5FEB\u6377\u8BF7\u6C42 
vxios(&quot;www.github.com/GAtomis/api/post&quot;,{data:{name:&quot;Gavin&quot;,age:&quot;20&quot;},method:&quot;POST&quot;})
//\u5229\u7528api
vxios.post(&quot;www.github.com/GAtomis/api/get&quot;,{name:&quot;Gavin&quot;,age:&quot;20&quot;})

</code></pre></div></div><h3 id="\u4E0A\u4F20\u8BF7\u6C42" tabindex="-1">\u4E0A\u4F20\u8BF7\u6C42 <a class="header-anchor" href="#\u4E0A\u4F20\u8BF7\u6C42" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">\u6267\u884C\u4E0A\u4F20\u8BF7\u6C42</p><div class="language-"><pre><code>//\u5229\u7528api foo\u4E3A\u6240\u5F97\u5230\u672C\u5730\u6587\u4EF6\u5730\u5740
vxios.uploadFile(&quot;www.github.com/GAtomis/api/get&quot;,{filePath:foo})
</code></pre></div></div><h3 id="\u4E0B\u8F7D\u8BF7\u6C42" tabindex="-1">\u4E0B\u8F7D\u8BF7\u6C42 <a class="header-anchor" href="#\u4E0B\u8F7D\u8BF7\u6C42" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">\u6267\u884C\u4E0B\u8F7D\u8BF7\u6C42</p><div class="language-"><pre><code>//\u5229\u7528api foo\u50A8\u5B58\u5230\u672C\u5730\u6587\u4EF6\u5730\u5740 key\u4E3A\u6587\u4EF6\u5BF9\u5E94\u7684 key\uFF0C\u5F00\u53D1\u8005\u5728\u670D\u52A1\u7AEF\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A key \u83B7\u53D6\u6587\u4EF6\u7684\u4E8C\u8FDB\u5236\u5185\u5BB9
vxios.downloadFile(&quot;www.github.com/GAtomis/api/get&quot;,{filePath:foo,name:key})
</code></pre></div></div>`,12),n=[s];function c(d,l,r,u,h,p){return o(),t("div",null,n)}var m=e(i,[["render",c]]);export{v as __pageData,m as default};
