(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[186],{6791:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=n(1788),a=n(7294),o=n(5414),i=n(9),l=n(1804),c=n.n(l),s=n(8343),m=n(3081),u=i.ZP.div.withConfig({displayName:"ImageViewer__Wrapper",componentId:"sc-1mpr88o-0"})(["position:fixed;left:0;top:0;width:100vw;height:100vh;background-color:rgba(0,0,0,0.5);background-size:contain;background-repeat:no-repeat;background-position:center center;cursor:pointer;"]);function g(t){var e=t.src,n=t.onClose;return e?a.createElement(u,{style:{backgroundImage:"url("+e+")"},onClick:n}):null}var f=n(4616),p=i.ZP.div.withConfig({displayName:"Post__PostContent",componentId:"sc-6kke65-0"})(["margin-top:4rem;"]),d=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).contentRef=null,e.state={imgSrc:void 0},e}(0,r.Z)(e,t);var n=e.prototype;return n.attachImageViewer=function(){var t=this;if(this.contentRef)for(var e=this.contentRef.getElementsByTagName("img")||[],n=function(n){var r=e[n],a=r.src.split("#")[1];if(a&&a.includes("nopreview"))return"continue";r.onclick=function(){return t.setState({imgSrc:r.src})},r.width=400,r.style.cursor="pointer",r.style.display="block",r.style.margin="auto"},r=0;r<e.length;r++)n(r)},n.componentDidUpdate=function(){this.attachImageViewer()},n.componentDidMount=function(){this.attachImageViewer()},n.render=function(){var t=this,e=this.props.pageContext,n=e.prev,r=e.next,i=this.props.data.markdownRemark,l=this.state.imgSrc;return a.createElement(s.Ar,null,i?a.createElement(a.Fragment,null,a.createElement(s.HJ,{postPath:i.fields.slug,postNode:i,postSEO:!0}),a.createElement(o.Z,{title:i.frontmatter.title+" | "+m.Z.siteTitle}),a.createElement(s.h4,{banner:i.frontmatter.banner},a.createElement(f.r,{to:"/"},m.Z.siteTitle),a.createElement(s.NZ,null,i.frontmatter.title),a.createElement(s.Nu,{light:!0},i.frontmatter.date," — ",i.timeToRead," min read — In"," ",a.createElement(f.r,{to:"/categories/"+c()(i.frontmatter.category)},i.frontmatter.category))),a.createElement(s.im,null,a.createElement(s.VY,null,a.createElement(p,{dangerouslySetInnerHTML:{__html:i.html},ref:function(e){return t.contentRef=e}}),a.createElement(g,{src:l,onClose:function(){return t.setState({imgSrc:void 0})}}),i.frontmatter.tags?a.createElement(s.Nu,null,"Tags:  ",i.frontmatter.tags.map((function(t,e){return a.createElement(f.r,{key:e,to:"/tags/"+c()(t)},a.createElement("strong",null,t)," ",e<i.frontmatter.tags.length-1?", ":"")}))):null,a.createElement(s._z,{prev:n,next:r})))):null)},e}(a.PureComponent)}}]);
//# sourceMappingURL=component---src-templates-post-tsx-a376e2339fcc6cd1440d.js.map