(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var r=n(8),a=n.n(r),o=n(0),i=n.n(o),l=n(7),c=n.n(l),m=n(177),s=n(174),p=n.n(s),u=n(170),d=n(171),g=n.n(d),f=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.pathContext,t=e.posts,n=e.tagName,r=t?t.length:0,a=r+" post"+(1===r?"":"s")+' tagged with "'+n+'"';return i.a.createElement(m.f,null,i.a.createElement(p.a,{title:"Tags | "+u.a.siteTitle}),i.a.createElement(m.e,null,i.a.createElement(c.a,{to:"/"},u.a.siteTitle),i.a.createElement(m.j,null,"Tag – ",n),i.a.createElement(m.k,{sectionTitle:!0,light:!0},a," (See ",i.a.createElement(c.a,{to:"/tags"},"all tags"),")")),i.a.createElement(m.m,null,i.a.createElement(m.c,null,t?t.map(function(e,t){return i.a.createElement(m.a,{title:e.frontmatter.title,date:e.frontmatter.date,excerpt:e.excerpt,slug:g()(e.frontmatter.title),timeToRead:e.timeToRead,category:e.frontmatter.category,key:t})}):null)))},t}(i.a.PureComponent)},169:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"}},170:function(e,t,n){"use strict";t.a={pathPrefix:"/",siteTitle:"Drew's Workbench",siteTitleAlt:"",siteUrl:"https://blog.xiuz.hu",siteLanguage:"en",siteBanner:"/assets/banner.jpg",defaultBg:"/assets/bg.png",favicon:"src/favicon.png",siteDescription:"",author:"Drew Xiu",siteLogo:"/assets/logo.jpg",userTwitter:"@drew_xiu",ogSiteName:"Drew.Xiu",ogLanguage:"en_US",themeColor:"#3498DB",backgroundColor:"#2b2e3c",headerFontFamily:"Bitter",bodyFontFamily:"Open Sans",baseFontSize:"18px",siteFBAppID:"",GA_ID:"UA-135755854-1",Google_Tag_Manager_ID:"GTM-PHXXCX7",POST_PER_PAGE:6,aboutMe:"A untalented gamer / kinda-okay web developer / lousy full-stack engineer / kick-ass modeler (aircraft only) / amature drummer / safty-first sk8boi"}},177:function(e,t,n){"use strict";var r=n(8),a=n.n(r),o=n(0),i=n.n(o),l=n(168),c=n(61),m=n(171),s=n.n(m),p=(n(179),n(172)),u=n.n(p),d=l.c.div.withConfig({displayName:"Subline",componentId:"sc-1bbpvi3-0"})(["font-size:",";",";",";"],function(e){return e.theme.fontSize.small},function(e){return e.light&&"color: "+u()(e.theme.colors.white,.7)},function(e){return e.sectionTitle&&"text-align: center"}),g=n(169),f=l.c.article.withConfig({displayName:"Article__Post",componentId:"sc-30wupy-0"})(["display:flex;flex-direction:column;margin-top:1rem;"]),h=l.c.h2.withConfig({displayName:"Article__Title",componentId:"sc-30wupy-1"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;font-size:1.5rem;@media ","{font-size:1.2rem;}"],g.a.phone),b=l.c.span.withConfig({displayName:"Article__Initiale",componentId:"sc-30wupy-2"})(["position:absolute;font-size:5rem;transform:translate(-50%,-50%);opacity:0.08;user-select:none;z-index:-1;"]),y=l.c.p.withConfig({displayName:"Article__Excerpt",componentId:"sc-30wupy-3"})(["grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;"]),x=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.date,r=e.excerpt,a=e.slug,o=e.timeToRead,l=e.category,m=t.charAt(0);return i.a.createElement(f,null,i.a.createElement(h,null,i.a.createElement(b,null,m),i.a.createElement(c.Link,{to:"/blog/"+a},t)),i.a.createElement(d,null,n," — ",o," Min Read — In",i.a.createElement(c.Link,{to:"/categories/"+s()(l)}," ",l)),i.a.createElement(y,null,r))},t}(i.a.PureComponent),w=(n(175),n(173)),E=n.n(w),v=l.c.button.withConfig({displayName:"Button",componentId:"sc-29u13e-0"})(["background:",";border:none;display:inline-flex;align-items:center;margin:0 0.5rem;border-radius:",";font-size:",";color:white;padding:",";transition:all ",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);&:hover{background:",";cursor:pointer;transform:translateY(-2px);}&:focus{outline:none;}svg{width:20px;height:20px;margin-right:0.75rem;fill:white;}"],function(e){return e.theme.colors.primary},function(e){return e.big?"1.5rem":"1rem"},function(e){return e.big?"1.2rem":"1rem"},function(e){return e.big?"0.35rem 1.6rem":"0.25rem 1.5rem"},function(e){return e.theme.transitions.normal},function(e){return E()(.3,e.theme.colors.primary)}),k=n(186),_=n(170),C=l.c.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-15996i0-0"})(["position:relative;background:linear-gradient( -185deg,",","," ),url(",") no-repeat;background-size:cover;padding:3rem 2rem 8rem;text-align:center;::after{background-size:101%;bottom:-2px;content:'';display:block;height:100%;left:0;position:absolute;width:100%;}@media ","{padding:2rem 2rem 3rem;}@media ","{padding:1rem 0.5rem 2rem;}"],function(e){return u()(Object(k.a)(.1,e.theme.colors.primary),.6)},function(e){return u()(Object(k.b)(.1,e.theme.colors.grey.dark),.8)},function(e){return e.banner},g.a.tablet,g.a.phone),N=l.c.div.withConfig({displayName:"Header__Content",componentId:"sc-15996i0-1"})(["position:relative;z-index:999;a{color:white;&:hover{opacity:0.85;color:white;}}"]),P=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.a.createElement(C,{banner:this.props.banner||_.a.defaultBg},i.a.createElement(N,null,this.props.children))},t}(i.a.PureComponent),T=(n(176),n(180)),I=n.n(T),z=n(178),S={colors:{primary:"#98c0e4",bg:"#494f5c",white:"#fff",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"#c6cdda",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"},link:"#98c0e4"},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem",big:"1.9rem"}},A=n(181),D=n.n(A);n(182),n(183);function L(){var e=I()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",';\n  }\n  @keyframes hoverme {\n    0%, 100% { color: #7ccdea; }\n    16%      { color: #0074D9; }\n    32%      { color: #2ECC40; }\n    48%      { color: #FFDC00; }\n    64%      { color: #B10DC9; }\n    80%      { color: #FF4136; }\n  }\n  a:hover {\n    animation: hoverme 3s infinite;\n  }\n  h1, h2, h3, h4 {\n    color: white;\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  .textRight {\n    text-align:right;\n  }\n"]);return L=function(){return e},e}var B=Object(l.b)(L(),S.colors.bg,S.colors.primary,S.colors.bg,S.colors.grey.default,g.a.phone,S.colors.link,S.transitions.normal,S.colors.primary,S.colors.grey.dark),F=l.c.footer.withConfig({displayName:"Layout__Footer",componentId:"sc-2euyca-0"})(["text-align:center;padding:3rem 0;span{font-size:0.75rem;}"]),O=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){document.querySelectorAll("[data-inline-script]").forEach(function(e){var t=e.innerHTML;try{window.eval(t)}catch(n){console.error(n),console.info("Script with errors:\n",t)}})},n.render=function(){var e=this.props.children;return i.a.createElement(c.StaticQuery,{query:"1536950682",render:function(t){return i.a.createElement(l.a,{theme:S},i.a.createElement(i.a.Fragment,null,i.a.createElement(B,null),e,i.a.createElement(F,null,i.a.createElement("span",null,"© ",D()(t.site.buildTime,".")[2]," by Drew Xiu. All rights ",i.a.createElement("s",null,"reserved")," for sale."),i.a.createElement("br",null),i.a.createElement("a",{href:"https://github.com/noru/blog"},"GitHub Repo")," ",i.a.createElement("br",null),i.a.createElement("span",null,"Last build: ",t.site.buildTime))))},data:z})},t}(i.a.PureComponent),j=l.c.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"p4szrp-0"})(["display:flex;margin:3rem auto;a{color:",";display:flex;align-items:center;}justify-items:center;"],function(e){return e.theme.colors.primary}),W=l.c.div.withConfig({displayName:"PrevNext__Prev",componentId:"p4szrp-1"})(["span{text-transform:uppercase;font-size:0.8rem;color:lightgray;}"]),U=l.c.div.withConfig({displayName:"PrevNext__Next",componentId:"p4szrp-2"})(["margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;color:lightgray;}"]),q=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.prev,n=e.next;return i.a.createElement(j,null,t&&i.a.createElement(W,null,i.a.createElement("span",null,"Previous"),i.a.createElement(c.Link,{to:"/blog/"+s()(t.frontmatter.title)},t.frontmatter.title)),n&&i.a.createElement(U,null,i.a.createElement("span",null,"Next"),i.a.createElement(c.Link,{to:"/blog/"+s()(n.frontmatter.title)},n.frontmatter.title)))},t}(i.a.PureComponent),M=l.c.div.withConfig({displayName:"SectionTitle",componentId:"sc-1r107hz-0"})(["font-size:",";text-transform:",";text-align:center;color:",";position:relative;padding:2rem 0 0;margin-bottom:2rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",";}"],function(e){return e.theme.fontSize.big},function(e){return e.uppercase?"uppercase":"normal"},function(e){return e.theme.colors.white},function(e){return e.theme.colors.white}),R=n(174),H=n.n(R),X=function(e){var t,n,r,a,o=e.postNode,l=e.postPath,c=e.postSEO,m="/"===_.a.pathPrefix?"":_.a.pathPrefix;c?(t=o.frontmatter.title,n=o.excerpt,r=_.a.siteBanner,a=_.a.siteUrl+m+l):(t=_.a.siteTitle,n=_.a.siteDescription,r=_.a.siteBanner);r=_.a.siteUrl+m+r;var s=_.a.siteUrl+_.a.pathPrefix,p=[{"@context":"http://schema.org","@type":"WebSite","@id":s,url:s,name:t,alternateName:_.a.siteTitleAlt?_.a.siteTitleAlt:""}];return c&&(p=[{"@context":"http://schema.org","@type":"BlogPosting","@id":a,url:a,name:t,alternateName:_.a.siteTitleAlt?_.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:r},description:_.a.siteDescription,datePublished:o.frontmatter.date,dateModified:o.frontmatter.date,author:{"@type":"Person",name:_.a.author},publisher:{"@type":"Organization",name:_.a.author,logo:{"@type":"ImageObject",url:_.a.siteUrl+m+_.a.siteLogo}},isPartOf:s,mainEntityOfPage:{"@type":"WebSite","@id":s}}]),i.a.createElement(H.a,null,i.a.createElement("html",{lang:_.a.siteLanguage}),i.a.createElement("title",null,_.a.siteTitle),i.a.createElement("meta",{name:"description",content:n}),i.a.createElement("meta",{name:"image",content:r}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),i.a.createElement("meta",{property:"og:locale",content:_.a.ogLanguage}),i.a.createElement("meta",{property:"og:site_name",content:_.a.ogSiteName?_.a.ogSiteName:""}),i.a.createElement("meta",{property:"og:url",content:c?a:s}),c?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:t}),i.a.createElement("meta",{property:"og:description",content:n}),i.a.createElement("meta",{property:"og:image",content:r}),i.a.createElement("meta",{property:"fb:app_id",content:_.a.siteFBAppID?_.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:_.a.userTwitter?_.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:t}),i.a.createElement("meta",{name:"twitter:url",content:_.a.siteUrl}),i.a.createElement("meta",{name:"twitter:description",content:n}),i.a.createElement("meta",{name:"twitter:image",content:r}))},G=l.c.div.withConfig({displayName:"Wrapper",componentId:"sc-11f24wj-0"})(["display:flex;flex-direction:column;margin:0 auto;max-width:",";padding:",";@media ","{padding:",";}@media ","{padding:",";}"],function(e){return e.fullWidth?"100%":"100rem"},function(e){return e.fullWidth?"0":"0 6rem"},g.a.tablet,function(e){return e.fullWidth?"0":"0 3rem"},g.a.phone,function(e){return e.fullWidth?"0":"0 1rem"}),J=l.c.div.withConfig({displayName:"Content",componentId:"hreasc-0"})(["box-shadow:0 4px 120px rgba(0,0,0,0.1);border-radius:1rem;padding:0rem 4rem;background-color:",";z-index:9000;margin-top:-1.5rem;form{p{label,input{display:block;}input{min-width:275px;}textarea{resize:vertical;min-height:150px;width:100%;}}}@media ","{padding:1rem 1.5rem;}@media ","{padding:1rem 1.5rem;}"],function(e){return e.theme.colors.bg},g.a.tablet,g.a.phone),Q=l.c.h3.withConfig({displayName:"Title",componentId:"sc-1o4z94w-0"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),Y=(n(93),n(184),n(185),n(38),l.c.div.withConfig({displayName:"Pagination__PaginationContainer",componentId:"sc-4kql3y-0"})(["text-align:center;margin:2rem;}"])),K=l.c.div.withConfig({displayName:"Pagination__PaginationContent",componentId:"sc-4kql3y-1"})(["display:inline-block;padding:0 1.5rem;border-radius:.5rem;background-color:#eee;@media ","{padding:0 1rem;}.page-numbers{display:block;float:left;transition:400ms ease;color:",";letter-spacing:0.1em;padding:.2rem .5rem;&:hover,&.current{background-color:darkgray;color:",";}&.prev{margin-left:-1.5rem;}&.next{margin-right:-1.5rem;}&.prev:hover,&.next:hover{background-color:transparent;color:",";}@media ","{padding:0 1.4rem;display:none;&:nth-of-type(2){position:relative;padding-right:5rem;&::after{content:'...';position:absolute;top:0;left:4.5rem;}}&:nth-child(-n + 3),&:nth-last-child(-n + 3){display:block;}&:nth-last-child(-n + 4){padding-right:1.4rem;&::after{content:none;}}}"],g.a.phone,S.colors.grey.light,S.colors.white,E()(.2,S.colors.primary),g.a.tablet),V=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,n=e.totalPages,r=e.url,a=1===t,o=t===n,l=t-1==1?"/"+r+"/":"/"+r+"/"+(t-1).toString(),m="/"+r+"/"+(t+1).toString();return n>1?i.a.createElement(Y,null,i.a.createElement(K,null,!a&&i.a.createElement(c.Link,{className:"prev page-numbers",to:l,rel:"prev"},"⯇"),Array.from({length:n},function(e,n){return i.a.createElement(c.Link,{className:t===n+1?"page-numbers current":"page-numbers",key:"pagination-number"+(n+1),to:"/"+r+"/"+(0===n?"":n+1)},n+1)}),!o&&i.a.createElement(c.Link,{className:"next page-numbers",to:m,rel:"next"},"⯈"))):null},t}(i.a.PureComponent),Z=l.c.a.withConfig({displayName:"DemoWrapper__Demo",componentId:"sc-1mc8aqs-0"})(["text-align:center;box-shadow:9px 10px 11px -4px rgba(0,0,0,0.75);transition:all .2s ease-in;position:relative;top:0;&:hover{box-shadow:9px 30px 68px -4px rgba(0,0,0,0.65);top:-5px;}> *{margin:auto;}"]);var $=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.width,n=e.src,r=e.link,a=e.isImage,o={width:1440,height:900,transformOrigin:"0 0",transform:"scale("+function(e){return e/1440}(t)+")"};return i.a.createElement(Z,{target:"_blank",href:r||n},i.a.createElement("div",{style:{width:t,height:t/1.6,pointerEvents:"none"}},a?i.a.createElement("img",{src:n}):i.a.createElement("iframe",{src:n,frameBorder:"0",style:o,onError:console.error})))},t}(i.a.Component);n.d(t,"a",function(){return x}),n.d(t,"b",function(){return v}),n.d(t,"e",function(){return P}),n.d(t,"f",function(){return O}),n.d(t,"h",function(){return q}),n.d(t,"j",function(){return M}),n.d(t,"i",function(){return X}),n.d(t,"k",function(){return d}),n.d(t,"m",function(){return G}),n.d(t,"c",function(){return J}),n.d(t,"l",function(){return Q}),n.d(t,"g",function(){return V}),n.d(t,"d",function(){return $})},178:function(e){e.exports={data:{site:{buildTime:"19.06.2019"}}}}}]);
//# sourceMappingURL=component---src-templates-tag-tsx-6179083457d42e299703.js.map