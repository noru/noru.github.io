(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var r=n(8),a=n.n(r),o=n(0),i=n.n(o),l=n(178),c=n.n(l),m=n(173),s=n.n(m),p=n(180),u=n(172),d=n(171),g=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.pathContext.categories;if(e)return i.a.createElement(p.g,null,i.a.createElement(c.a,{title:"Categories | "+u.a.siteTitle}),i.a.createElement(p.f,null,i.a.createElement(d.a,{to:"/"},u.a.siteTitle),i.a.createElement(p.k,null,"Categories")),i.a.createElement(p.n,null,i.a.createElement(p.c,null,e.map(function(e,t){return i.a.createElement(p.m,{key:t},i.a.createElement(d.a,{to:"/categories/"+s()(e)},e))}))))},t}(i.a.PureComponent)},170:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"}},171:function(e,t,n){"use strict";n.d(t,"a",function(){return s});n(31),n(93);var r=n(95),a=n.n(r),o=n(8),i=n.n(o),l=n(0),c=n.n(l),m=n(61),s=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.to,n=a()(e,["to"]);return"undefined"!=typeof window&&(t+=window.location.search),c.a.createElement(m.Link,Object.assign({to:t},n))},t}(c.a.PureComponent)},172:function(e,t,n){"use strict";t.a={pathPrefix:"/",siteTitle:"Drew's Workbench",siteTitleAlt:"",siteUrl:"https://blog.xiuz.hu",siteLanguage:"en",siteBanner:"/assets/banner.jpg",defaultBg:"/assets/bg.png",favicon:"src/favicon.png",siteDescription:"",author:"Drew Xiu",siteLogo:"/assets/logo.jpg",userTwitter:"@drew_xiu",ogSiteName:"Drew.Xiu",ogLanguage:"en_US",themeColor:"#3498DB",backgroundColor:"#2b2e3c",headerFontFamily:"Bitter",bodyFontFamily:"Open Sans",baseFontSize:"18px",siteFBAppID:"",GA_ID:"UA-135755854-1",Google_Tag_Manager_ID:"GTM-PHXXCX7",POST_PER_PAGE:6,aboutMe:"A untalented gamer / kinda-okay web developer / lousy full-stack engineer / kick-ass modeler (aircraft only) / amature drummer / safty-first sk8boi"}},179:function(e){e.exports={data:{site:{buildTime:"06.12.2019"}}}},180:function(e,t,n){"use strict";var r=n(8),a=n.n(r),o=n(0),i=n.n(o),l=n(169),c=n(173),m=n.n(c),s=(n(183),n(174)),p=n.n(s),u=l.c.div.withConfig({displayName:"Subline",componentId:"sc-1bbpvi3-0"})(["font-size:",";",";",";"],function(e){return e.theme.fontSize.small},function(e){return e.light&&"color: "+p()(e.theme.colors.white,.7)},function(e){return e.sectionTitle&&"text-align: center"}),d=n(170),g=n(171),f=l.c.article.withConfig({displayName:"Article__Post",componentId:"sc-30wupy-0"})(["display:flex;flex-direction:column;margin-top:1rem;"]),h=l.c.h2.withConfig({displayName:"Article__Title",componentId:"sc-30wupy-1"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;font-size:1.5rem;@media ","{font-size:1.2rem;}"],d.a.phone),b=l.c.span.withConfig({displayName:"Article__Initiale",componentId:"sc-30wupy-2"})(["position:absolute;font-size:5rem;transform:translate(-50%,-50%);opacity:0.08;user-select:none;z-index:-1;"]),y=l.c.p.withConfig({displayName:"Article__Excerpt",componentId:"sc-30wupy-3"})(["grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;"]),x=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.date,r=e.excerpt,a=e.slug,o=e.timeToRead,l=e.category,c=t.charAt(0);return i.a.createElement(f,null,i.a.createElement(h,null,i.a.createElement(b,null,c),i.a.createElement(g.a,{to:"/blog/"+a},t)),i.a.createElement(u,null,n," — ",o," Min Read — In",i.a.createElement(g.a,{to:"/categories/"+m()(l)}," ",l)),i.a.createElement(y,null,r))},t}(i.a.PureComponent),w=(n(176),n(175)),E=n.n(w),v=l.c.button.withConfig({displayName:"Button",componentId:"sc-29u13e-0"})(["background:",";border:none;display:inline-flex;align-items:center;margin:0 0.5rem;border-radius:",";font-size:",";color:white;padding:",";transition:all ",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);&:hover{background:",";cursor:pointer;transform:translateY(-2px);}&:focus{outline:none;}svg{width:20px;height:20px;margin-right:0.75rem;fill:white;}"],function(e){return e.theme.colors.primary},function(e){return e.big?"1.5rem":"1rem"},function(e){return e.big?"1.2rem":"1rem"},function(e){return e.big?"0.35rem 1.6rem":"0.25rem 1.5rem"},function(e){return e.theme.transitions.normal},function(e){return E()(.3,e.theme.colors.primary)}),C=n(189),k=n(172),_=l.c.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-15996i0-0"})(["position:relative;background:linear-gradient( -185deg,",","," ),url(",") no-repeat;background-size:cover;padding:3rem 2rem 8rem;text-align:center;::after{background-size:101%;bottom:-2px;content:'';display:block;height:100%;left:0;position:absolute;width:100%;}@media ","{padding:2rem 2rem 3rem;}@media ","{padding:1rem 0.5rem 2rem;}"],function(e){return p()(Object(C.a)(.1,e.theme.colors.primary),.6)},function(e){return p()(Object(C.b)(.1,e.theme.colors.grey.dark),.8)},function(e){return e.banner},d.a.tablet,d.a.phone),N=l.c.div.withConfig({displayName:"Header__Content",componentId:"sc-15996i0-1"})(["position:relative;z-index:999;a{color:white;&:hover{opacity:0.85;color:white;}}"]),P=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.a.createElement(_,{banner:this.props.banner||k.a.defaultBg},i.a.createElement(N,null,this.props.children))},t}(i.a.PureComponent),I=(n(177),n(184)),z=n.n(I),T=n(179),L=n(61),D={colors:{primary:"#98c0e4",bg:"#494f5c",white:"#fff",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"#c6cdda",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"},link:"#98c0e4"},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem",big:"1.9rem"}},S=n(185),A=n.n(S);n(186),n(187);function F(){var e=z()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",';\n  }\n  @keyframes hoverme {\n    0%, 100% { color: #7ccdea; }\n    16%      { color: #0074D9; }\n    32%      { color: #2ECC40; }\n    48%      { color: #FFDC00; }\n    64%      { color: #B10DC9; }\n    80%      { color: #FF4136; }\n  }\n  a:hover {\n    animation: hoverme 3s infinite;\n  }\n  h1, h2, h3, h4 {\n    color: white;\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  .textRight {\n    text-align:right;\n  }\n"]);return F=function(){return e},e}var B=Object(l.b)(F(),D.colors.bg,D.colors.primary,D.colors.bg,D.colors.grey.default,d.a.phone,D.colors.link,D.transitions.normal,D.colors.primary,D.colors.grey.dark),O=l.c.footer.withConfig({displayName:"Layout__Footer",componentId:"sc-2euyca-0"})(["text-align:center;padding:3rem 0;span{font-size:0.75rem;}"]),j=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){document.querySelectorAll("[data-inline-script]").forEach(function(e){var t=e.innerHTML;try{window.eval(t)}catch(n){console.error(n),console.info("Script with errors:\n",t)}})},n.render=function(){var e=this.props.children;return i.a.createElement(L.StaticQuery,{query:"1536950682",render:function(t){return i.a.createElement(l.a,{theme:D},i.a.createElement(i.a.Fragment,null,i.a.createElement(B,null),e,i.a.createElement(O,null,i.a.createElement("span",null,"© ",A()(t.site.buildTime,".")[2]," by Drew Xiu. All rights ",i.a.createElement("s",null,"reserved")," for sale."),i.a.createElement("br",null),i.a.createElement("a",{href:"https://github.com/noru/blog"},"GitHub Repo")," ",i.a.createElement("br",null),i.a.createElement("span",null,"Last build: ",t.site.buildTime))))},data:T})},t}(i.a.PureComponent),W=l.c.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"p4szrp-0"})(["display:flex;margin:3rem auto;a{color:",";display:flex;align-items:center;}justify-items:center;"],function(e){return e.theme.colors.primary}),M=l.c.div.withConfig({displayName:"PrevNext__Prev",componentId:"p4szrp-1"})(["span{text-transform:uppercase;font-size:0.8rem;color:lightgray;}"]),q=l.c.div.withConfig({displayName:"PrevNext__Next",componentId:"p4szrp-2"})(["margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;color:lightgray;}"]),H=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.prev,n=e.next;return i.a.createElement(W,null,t&&i.a.createElement(M,null,i.a.createElement("span",null,"Previous"),i.a.createElement(g.a,{to:"/blog/"+m()(t.frontmatter.title)},t.frontmatter.title)),n&&i.a.createElement(q,null,i.a.createElement("span",null,"Next"),i.a.createElement(g.a,{to:"/blog/"+m()(n.frontmatter.title)},n.frontmatter.title)))},t}(i.a.PureComponent),U=l.c.div.withConfig({displayName:"SectionTitle",componentId:"sc-1r107hz-0"})(["font-size:",";text-transform:",";text-align:center;color:",";position:relative;padding:2rem 0 0;margin-bottom:2rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",";}"],function(e){return e.theme.fontSize.big},function(e){return e.uppercase?"uppercase":"normal"},function(e){return e.theme.colors.white},function(e){return e.theme.colors.white}),G=n(178),R=n.n(G),X=function(e){var t,n,r,a,o=e.postNode,l=e.postPath,c=e.postSEO,m="/"===k.a.pathPrefix?"":k.a.pathPrefix;c?(t=o.frontmatter.title,n=o.excerpt,r=k.a.siteBanner,a=k.a.siteUrl+m+l):(t=k.a.siteTitle,n=k.a.siteDescription,r=k.a.siteBanner);r=k.a.siteUrl+m+r;var s=k.a.siteUrl+k.a.pathPrefix,p=[{"@context":"http://schema.org","@type":"WebSite","@id":s,url:s,name:t,alternateName:k.a.siteTitleAlt?k.a.siteTitleAlt:""}];return c&&(p=[{"@context":"http://schema.org","@type":"BlogPosting","@id":a,url:a,name:t,alternateName:k.a.siteTitleAlt?k.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:r},description:k.a.siteDescription,datePublished:o.frontmatter.date,dateModified:o.frontmatter.date,author:{"@type":"Person",name:k.a.author},publisher:{"@type":"Organization",name:k.a.author,logo:{"@type":"ImageObject",url:k.a.siteUrl+m+k.a.siteLogo}},isPartOf:s,mainEntityOfPage:{"@type":"WebSite","@id":s}}]),i.a.createElement(R.a,null,i.a.createElement("html",{lang:k.a.siteLanguage}),i.a.createElement("title",null,k.a.siteTitle),i.a.createElement("meta",{name:"description",content:n}),i.a.createElement("meta",{name:"image",content:r}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),i.a.createElement("meta",{property:"og:locale",content:k.a.ogLanguage}),i.a.createElement("meta",{property:"og:site_name",content:k.a.ogSiteName?k.a.ogSiteName:""}),i.a.createElement("meta",{property:"og:url",content:c?a:s}),c?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:t}),i.a.createElement("meta",{property:"og:description",content:n}),i.a.createElement("meta",{property:"og:image",content:r}),i.a.createElement("meta",{property:"fb:app_id",content:k.a.siteFBAppID?k.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:k.a.userTwitter?k.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:t}),i.a.createElement("meta",{name:"twitter:url",content:k.a.siteUrl}),i.a.createElement("meta",{name:"twitter:description",content:n}),i.a.createElement("meta",{name:"twitter:image",content:r}))},J=l.c.div.withConfig({displayName:"Wrapper",componentId:"sc-11f24wj-0"})(["display:flex;flex-direction:column;margin:0 auto;max-width:",";padding:",";@media ","{padding:",";}@media ","{padding:",";}"],function(e){return e.fullWidth?"100%":"100rem"},function(e){return e.fullWidth?"0":"0 6rem"},d.a.tablet,function(e){return e.fullWidth?"0":"0 3rem"},d.a.phone,function(e){return e.fullWidth?"0":"0 1rem"}),Z=l.c.div.withConfig({displayName:"Content",componentId:"hreasc-0"})(["box-shadow:0 4px 120px rgba(0,0,0,0.1);border-radius:1rem;padding:1rem 4rem;background-color:",";z-index:9000;margin-top:-1.5rem;form{p{label,input{display:block;}input{min-width:275px;}textarea{resize:vertical;min-height:150px;width:100%;}}}@media ","{padding:1rem 1.5rem;}@media ","{padding:1rem 1.5rem;}> h3{&:nth-of-type(6n + 1){a{color:#7ccdea;}}&:nth-of-type(6n + 2){a{color:#0074D9;}}&:nth-of-type(6n + 3){a{color:#2ECC40;}}&:nth-of-type(6n + 4){a{color:#FFDC00;}}&:nth-of-type(6n + 5){a{color:#B10DC9;}}&:nth-of-type(6n){a{color:#FF4136;}}}"],function(e){return e.theme.colors.bg},d.a.tablet,d.a.phone),Q=l.c.h3.withConfig({displayName:"Title",componentId:"sc-1o4z94w-0"})(["display:inline-block;padding:.5em 1em;position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),V=(n(94),n(188),n(182),n(38),l.c.div.withConfig({displayName:"Pagination__PaginationContainer",componentId:"sc-4kql3y-0"})(["text-align:center;margin:2rem;}"])),Y=l.c.div.withConfig({displayName:"Pagination__PaginationContent",componentId:"sc-4kql3y-1"})(["display:inline-block;padding:0 1.5rem;border-radius:.5rem;background-color:#eee;@media ","{padding:0 1rem;}.page-numbers{display:block;float:left;transition:400ms ease;color:",";letter-spacing:0.1em;padding:.2rem .5rem;&:hover,&.current{background-color:darkgray;color:",";}&.prev{margin-left:-1.5rem;}&.next{margin-right:-1.5rem;}&.prev:hover,&.next:hover{background-color:transparent;color:",";}@media ","{padding:0 1.4rem;display:none;&:nth-of-type(2){position:relative;padding-right:5rem;&::after{content:'...';position:absolute;top:0;left:4.5rem;}}&:nth-child(-n + 3),&:nth-last-child(-n + 3){display:block;}&:nth-last-child(-n + 4){padding-right:1.4rem;&::after{content:none;}}}"],d.a.phone,D.colors.grey.light,D.colors.white,E()(.2,D.colors.primary),d.a.tablet),K=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,n=e.totalPages,r=e.url,a=1===t,o=t===n,l=t-1==1?"/"+r+"/":"/"+r+"/"+(t-1).toString(),c="/"+r+"/"+(t+1).toString();return n>1?i.a.createElement(V,null,i.a.createElement(Y,null,!a&&i.a.createElement(g.a,{className:"prev page-numbers",to:l,rel:"prev"},"⯇"),Array.from({length:n},function(e,n){return i.a.createElement(g.a,{className:t===n+1?"page-numbers current":"page-numbers",key:"pagination-number"+(n+1),to:"/"+r+"/"+(0===n?"":n+1)},n+1)}),!o&&i.a.createElement(g.a,{className:"next page-numbers",to:c,rel:"next"},"⯈"))):null},t}(i.a.PureComponent),$=n(181),ee=n.n($),te=l.c.a.withConfig({displayName:"DemoWrapper__Demo",componentId:"sc-1mc8aqs-0"})(["text-align:center;box-shadow:9px 10px 11px -4px rgba(0,0,0,0.75);transition:all 0.2s ease-in;position:relative;top:0;&:hover{box-shadow:9px 30px 68px -4px rgba(0,0,0,0.65);top:-5px;}> *{margin:auto;}"]),ne=l.c.div.withConfig({displayName:"DemoWrapper__Loading",componentId:"sc-1mc8aqs-1"})(["position:absolute;top:44%;left:50%;"]);var re=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={loaded:!1},t.onLoad=function(){t.setState({loaded:!0})},t}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.width,n=e.src,r=e.link,a=e.isImage,o=this.state.loaded,l={width:1440,height:900,transformOrigin:"0 0",transform:"scale("+function(e){return e/1440}(t)+")"};return i.a.createElement(te,{target:"_blank",href:r||n},i.a.createElement("div",{style:{width:t,height:t/1.6,pointerEvents:"none"}},!o&&i.a.createElement(ne,null,i.a.createElement(ee.a,{name:"spinner",spin:!0})),i.a.createElement("div",{style:{visibility:o?"initial":"hidden"}},a?i.a.createElement("img",{src:n,onLoad:this.onLoad}):i.a.createElement("iframe",{src:n,frameBorder:"0",style:l,onError:console.error,onLoad:this.onLoad}))))},t}(i.a.Component),ae=l.c.a.withConfig({displayName:"GitHubRibbon__Ribbon",componentId:"sc-1p9qypj-0"})(["&:hover .octo-arm{animation:octocat-wave 560ms ease-in-out;}@keyframes octocat-wave{0%,100%{transform:rotate(0);}20%,60%{transform:rotate(-25deg);}40%,80%{transform:rotate(10deg);}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none;}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out;}}"]),oe=function(e){var t=e.href;return i.a.createElement(ae,{href:t,className:"github-corner","aria-label":"View source on GitHub"},i.a.createElement("svg",{width:"120",height:"120",viewBox:"0 0 250 250",style:{fill:"#151513",color:"#fff",position:"absolute",top:0,border:0,right:0},"aria-hidden":"true"},i.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),i.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),i.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})))};n.d(t,"a",function(){return x}),n.d(t,"b",function(){return v}),n.d(t,"f",function(){return P}),n.d(t,"g",function(){return j}),n.d(t,"i",function(){return H}),n.d(t,"k",function(){return U}),n.d(t,"j",function(){return X}),n.d(t,"l",function(){return u}),n.d(t,"n",function(){return J}),n.d(t,"c",function(){return Z}),n.d(t,"m",function(){return Q}),n.d(t,"h",function(){return K}),n.d(t,"d",function(){return re}),n.d(t,"e",function(){return oe})}}]);
//# sourceMappingURL=component---src-templates-all-category-tsx-12bfb25054b1a6e4b3a7.js.map