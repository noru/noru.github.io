(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{2061:function(t,e,n){"use strict";var r=n(409),a=n(199),o=n(3),i=n.n(o),c=n(572),u=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},s=c.a.data,l=c.a.networkhealth,f=1e4;function p(t,e,n,r,a){return u({interval:t,bufferCount:e,durationPerPage:n,itemPerPage:r},a)}var m=new r.Subject,d=new r.Subject,h=new r.Subject,b=new r.Subject,v=new r.Subject,y=new r.Subject,w=new r.Subject,O=new r.Subject,g=new r.Subject,M=new r.Subject,_=new r.Subject,D=m.switchMap(function(t){var e=t.due,n=t.interval;return r.Observable.timer(e,n).map(function(){return n})}).flatMap(function(t){return r.Observable.fromPromise(c.a.auth.refresh()).retryWhen(function(e){return k(e,t)})}).publish(),I=b.switchMap(function(t){return r.Observable.timer(0,t.interval).map(function(){return t})}).flatMap(function(t){return r.Observable.fromPromise(s.assetIndex(0,200,t.month.value)).map(function(e){return{resp:e,conf:t}}).retryWhen(function(e){return k(e,t.interval)})}).switchMap(function(t){var e=t.resp,n=t.conf;return T(e,n.interval,n.bufferCount,n.durationPerPage)}).share(),j=v.switchMap(function(t){return r.Observable.timer(0,t.interval).map(function(){return t})}).flatMap(function(t){return r.Observable.fromPromise(s.assetRepairStatus(0,200)).map(function(e){return{resp:e,conf:t}}).retryWhen(function(e){return k(e,t.interval)})}).switchMap(function(t){var e=t.resp,n=t.conf;return T(e,n.interval,n.bufferCount,n.durationPerPage)}).share(),P=y.switchMap(function(t){return r.Observable.timer(0,t.interval).map(function(){return t})}).flatMap(function(t){var e=o().format("YYYY-MM-DD"),n=o().subtract(30,"days").format("YYYY-MM-DD");return r.Observable.fromPromise(s.userPerformance(n,e)).map(function(e){return{resp:e,conf:t}}).retryWhen(function(e){return k(e,t.interval)})}).switchMap(function(t){var e=t.resp,n=t.conf;return T(e,n.interval,n.bufferCount,n.durationPerPage,n.itemPerPage)}).share(),x=w.switchMap(function(t){return r.Observable.timer(0,t.interval).map(function(){return t})}).flatMap(function(t){var e=o().add(15,"days").format("YYYY-MM-DD"),n=o().subtract(15,"days").format("YYYY-MM-DD");return r.Observable.fromPromise(s.insPm(n,e)).map(function(e){return{resp:e,conf:t}}).retryWhen(function(e){return k(e,t.interval)})}).share(),Y=O.switchMap(function(t){return r.Observable.timer(0,t.interval).map(function(){return t})}).flatMap(function(t){var e=t.interval;return r.Observable.fromPromise(s.assetNum()).retryWhen(function(t){return k(t,e)})}).share(),E=g.switchMap(function(t){return r.Observable.timer(0,t.interval).map(function(){return t})}).flatMap(function(t){var e=t.interval,n=o().add(15,"days").format("YYYY-MM-DD"),a=o().subtract(15,"days").format("YYYY-MM-DD");return r.Observable.fromPromise(s.insPmList(a,n)).retryWhen(function(t){return k(t,e)})}).share(),N=M.switchMap(function(t){return r.Observable.timer(0,t.interval).map(function(){return t})}).flatMap(function(t){return r.Observable.fromPromise(s.assetInfo()).retryWhen(function(e){return k(e,t.interval)})}).share(),A=_.switchMap(function(t){var e=t.interval;return r.Observable.timer(0,e).flatMap(function(){return r.Observable.fromPromise(s.lifeSupportAsset())}).retryWhen(function(t){return k(t,e)})}).share(),C=new r.BehaviorSubject({isOnline:!0}),S=r.Observable.timer(0,6e4).switchMap(function(){return r.Observable.fromPromise(l.heartBeatTest()).catch(function(t){return console.error(t),r.Observable.of(t)})}).map(function(t){return{isOnline:!(t instanceof Error)}}).multicast(C);function T(t,e,n,a,o){o=o||n;var i=t.length,c=i%n;if(c>0&&(t=t.concat(Array(n-c).fill(null))),t.length<=o)return r.Observable.of({data:t,total:i,skip:0,top:o});var u=Math.ceil(t.length/o),s=Math.ceil(e/(a*u));return r.Observable.from(t).repeat(s).bufferCount(n).concatMap(function(t,e){return r.Observable.of([t]).delay(e&&a)}).flatMap(function(t){return t}).map(function(t,e){return{data:t,total:i,skip:e%u*o,top:o}})}function k(t,e){var n=C.getValue().isOnline?f:e;return t.do(z).delay(n)}function z(t){console.error(t),t.response&&console.error(t.response)}var R=n(2062),B=new r.BehaviorSubject({from:i()((new Date).getFullYear(),"YYYY").format(R.b),to:i()().format(R.b),groupby:"dept",range:[0,10]});function L(t){var e=t(B.getValue());B.next(e)}n.d(e,!1,function(){return a.c}),n.d(e,!1,function(){return a.a}),n.d(e,!1,function(){return a.b}),n.d(e,"y",function(){return p}),n.d(e,"f",function(){return m}),n.d(e,"x",function(){return d}),n.d(e,"s",function(){return h}),n.d(e,"b",function(){return b}),n.d(e,"w",function(){return v}),n.d(e,"r",function(){return y}),n.d(e,"l",function(){return w}),n.d(e,"u",function(){return O}),n.d(e,"j",function(){return g}),n.d(e,"d",function(){return M}),n.d(e,"n",function(){return _}),n.d(e,"e",function(){return D}),n.d(e,"a",function(){return I}),n.d(e,"v",function(){return j}),n.d(e,"q",function(){return P}),n.d(e,"k",function(){return x}),n.d(e,"t",function(){return Y}),n.d(e,"i",function(){return E}),n.d(e,"c",function(){return N}),n.d(e,"m",function(){return A}),n.d(e,"p",function(){return C}),n.d(e,"o",function(){return S}),n.d(e,"g",function(){return B}),n.d(e,"h",function(){return L})},2062:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return a});var r="YYYY-MM-DD",a="YYYY-MM-DD HH:mm"},2064:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r,a=n(2011),o=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});function i(t){return function(e){return function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.subscriptions=[],t}return o(n,e),n.prototype.componentDidMount=function(){for(var n in this.mounted=!0,t){if("function"==typeof t[n].subscribe){var r=t[n].subscribe(this.dispatcher(n));this.subscriptions.push(r)}}e.prototype.componentDidMount&&e.prototype.componentDidMount.call(this)},n.prototype.componentWillUnmount=function(){this.mounted=!1,e.prototype.componentWillUnmount&&e.prototype.componentWillUnmount.call(this),this.subscriptions.forEach(function(t){return t.unsubscribe()})},n.prototype.dispatcher=function(t){var e=this;return{next:function(n){var r="on"+Object(a.h)(t);r in e&&e.mounted&&e[r](n)},error:function(n){var r="on"+Object(a.h)(t)+"Error";r in e&&e.mounted&&e[r](n)},complete:function(){var n="on"+Object(a.h)(t)+"Complete";n in e&&e.mounted&&e[n]()}}},n}(e)}}},2065:function(t,e,n){"use strict";var r,a=n(1),o=n(18),i=n.n(o),c=n(2011),u=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this;return n._onResize=Object(c.a)(function(){return n._chart&&n._chart.resize()},800),n._initChart=function(){var t=n.props,r=t.id,a=t.option,o=t.chart,c=document.getElementById(r);null!==c&&e.isSizeValid(c.clientWidth,c.clientHeight)&&(void 0===n._chart&&(n._chart=i.a.init(c)),o&&o(n._chart),a&&n._chart.setOption(a))},n}return u(e,t),e.isSizeValid=function(t,e){return t>0&&e>0},e.prototype.componentDidMount=function(){this._initChart(),window.addEventListener("resize",this._onResize)},e.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this._onResize)},e.prototype.componentDidUpdate=function(){this._initChart()},e.prototype.render=function(){var t=this.props,e=t.id,n=t.width,r=t.height;return this._onResize(),a.createElement("div",{id:e,style:{width:l(n),height:l(r)}})},e}(a.PureComponent);function l(t){return"number"==typeof t?t+"px":t}e.a=s},2066:function(t,e,n){"use strict";var r,a=n(2065),o=(n(2027),n(2022),n(2023),n(2014),n(2026),r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(a.a);e.a=i},2068:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r,a=n(1),o=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t};function c(t,e){return function(n){return function(r){function c(){var t=null!==r&&r.apply(this,arguments)||this;return t._subscribeValue=function(n){t.setState(e(n))},t}return o(c,r),c.prototype.componentDidMount=function(){this._subscription=t.subscribe(this._subscribeValue),"getValue"in t&&this._subscribeValue(t.getValue())},c.prototype.componentWillUnmount=function(){this._subscription.unsubscribe()},c.prototype.render=function(){return a.createElement(n,i({},this.state,this.props,{subject:t}))},c}(n)}}},2071:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIxIiBoZWlnaHQ9IjE3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDwhLS0gQ3JlYXRlZCB3aXRoIE1ldGhvZCBEcmF3IC0gaHR0cDovL2dpdGh1Yi5jb20vZHVvcGl4ZWwvTWV0aG9kLURyYXcvIC0tPgogPGc+CiAgPHJlY3QgeT0iMCIgc3Ryb2tlPSIjMDAwIiByeD0iNTAiIGlkPSJzdmdfNyIgaGVpZ2h0PSIxNzUiIHdpZHRoPSIxNjAuOTk5OTk4IiB4PSIxNjAuMDAwMDAzIiBzdHJva2Utb3BhY2l0eT0ibnVsbCIgc3Ryb2tlLXdpZHRoPSIwIiBmaWxsPSIjZTA1NDU1Ii8+CiAgPHJlY3Qgc3Ryb2tlPSIjMDAwIiByeD0iNTAiIGlkPSJzdmdfMTMiIGhlaWdodD0iMTc1IiB3aWR0aD0iMTYwLjk5OTk5OCIgeT0iMCIgeD0iMCIgc3Ryb2tlLW9wYWNpdHk9Im51bGwiIHN0cm9rZS13aWR0aD0iMCIgZmlsbD0iIzdiYTY2MiIvPgogIDxwYXRoIGlkPSJzdmdfMTQiIGQ9Im0xMDQuOTcyNSwxNzUuMDAwMDAxbDAsLTE3NS4wMDAwMDFsMTEyLjk5OTk5NywxNzUuMDAwMDAxbC0xMTIuOTk5OTk3LDB6IiBzdHJva2Utb3BhY2l0eT0ibnVsbCIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAiIGZpbGw9IiM3YmE2NjIiLz4KICA8cGF0aCB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYxLjQ3MjUwMzY2MjEwOTM4LDg3LjUwMDAwMDAwMDAwMDAxKSAiIGlkPSJzdmdfMTUiIGQ9Im0xMDQuOTcyNSwxNzUuMDAwMDAxbDAsLTE3NS4wMDAwMDFsMTEyLjk5OTk5NywxNzUuMDAwMDAxbC0xMTIuOTk5OTk3LDB6IiBzdHJva2Utb3BhY2l0eT0ibnVsbCIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAiIGZpbGw9IiNlMDU0NTUiLz4KIDwvZz4KPC9zdmc+"},2072:function(t,e,n){"use strict";n.d(e,"b",function(){return u}),n.d(e,"a",function(){return s});var r,a=n(1),o=n(199),i=n(2068),c=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.render=function(){var t=this.props,e=t.loading,n=t.placeholder;return a.createElement("span",{className:"loading-indicator"},e?a.createElement("i",{className:"loading-spinner"}):n)},e}(a.PureComponent),s=Object(i.a)(o.b,function(t){return{loading:t.size}})(u)},2111:function(t,e,n){},2113:function(t,e,n){},2115:function(t,e,n){},2176:function(t,e,n){"use strict";n.r(e);n(937);var r=n(2050),a=n.n(r),o=n(1),i=n.n(o),c=n(198),u=n(2036),s=n.n(u),l=(n(2035),Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t});function f(t){return o.createElement(s.a,l({},t))}var p,m=n(2066),d=n(2072),h=(n(2034),n(2053)),b=n.n(h),v=n(2011),y=n(571),w=n.n(y),O=n(2061),g=(n(2115),p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}p(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),M=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onRangeChange=Object(v.a)(function(t){var e=t[0],n=t[1];return Object(O.h)(function(t){return t.range=[e-1,n],t})},1200),e}return g(e,t),e.prototype.render=function(){var t=this.props,e=t.start,n=t.limit,r=t.max,a=t.className,i=t.t,c=function(t,e,n){return[Math.min(n,t+1),Math.min(n,t+e)]}(e,n,r),u=c[0],s=c[1];return o.createElement("div",{className:w()("pagination-slider level",a)},o.createElement(b.a,{key:[e,n,r].toString(),className:"page-range level-right",range:!0,defaultValue:[u,s],min:1,max:r,onChange:this.onRangeChange}),o.createElement("span",{className:"pagination-slider-desc level-right"},i("select_range_in_total",{start:u,end:s,max:r})))},e}(o.PureComponent);var _=Object(c.translate)()(M),D=n(2064),I=n(572),j=(n(2016),n(2051)),P=n.n(j),x=(n(2033),n(2052)),Y=n.n(x),E=n(3),N=n.n(E),A=N()(),C={oneWeek:{text:"一周内",start:A.clone().subtract(7,"days"),end:A},oneMonth:{text:"一月内",start:A.clone().subtract(1,"month"),end:A},oneYear:{text:"一年内",start:A.clone().subtract(1,"year"),end:A},currentMonth:{text:"本月",start:A.clone().startOf("month"),end:A.clone().endOf("month")},yearBeforeLast:{text:A.clone().startOf("year").subtract(2,"year").year(),start:A.clone().startOf("year").subtract(2,"year"),end:A.clone().endOf("year").subtract(2,"year")},lastYear:{text:A.clone().startOf("year").subtract(1,"year").year(),start:A.clone().startOf("year").subtract(1,"year"),end:A.clone().endOf("year").subtract(1,"year")},currentYear:{text:A.clone().startOf("year").year(),start:A.clone().startOf("year"),end:A},nextYear:{text:A.clone().startOf("year").add(1,"year").year(),start:A.clone().startOf("year").add(1,"year"),end:A.clone().endOf("year").add(1,"year")},yearAfterNext:{text:A.clone().startOf("year").add(2,"year").year(),start:A.clone().startOf("year").add(2,"year"),end:A.clone().endOf("year").add(2,"year")}};function S(t){var e=new Date;return t&&(t.valueOf()>e||t<N()(e).subtract(3,"year"))}var T,k=n(2068),z=n(2062),R=(n(2113),function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),B=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},L=Y.a.RangePicker,W=(T=["oneWeek","oneMonth","oneYear","currentMonth","yearBeforeLast","lastYear","currentYear"],!Array.isArray(T)||Array.isArray(T)&&!T.length?Object.keys(C).map(function(t){return C[t]}):T.filter(function(t,e,n){return e===n.indexOf(t)}).map(function(t){if("string"==typeof t&&C[t])return C[t];var e=t.key;if(e){var n=t.displayText,r=t.startDateTime,a=t.endDateTime;return n&&N.a.isMoment(r)&&N.a.isMoment(a)&&r<a?t:C[e]?C[e]:void 0}}).filter(function(t){return t})).reduce(function(t,e){return t[e.text]=[e.start,e.end],t},{}),G=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onPeriodChange=function(t){var e=t[0],n=t[1];return Object(O.h)(function(t){return t.from=e.format(z.b),t.to=n.format(z.b),t})},e.onGroupByChange=function(t){return Object(O.h)(function(e){return e.groupby=t.target.value,e.drillDownId=void 0,e})},e}return R(e,t),e.prototype.render=function(){var t=this,e=this.props.t,n=this.props.subject.getValue(),r=n.from,a=n.to,o=n.groupby;return i.a.createElement("nav",{className:"asset-perf-filter-bar level"},i.a.createElement("div",{className:"nav-left"},i.a.createElement("div",{className:"nav-item"},i.a.createElement(L,{showTime:!0,format:"YYYY-MM-DD",ranges:W,disabledDate:S,defaultValue:[N()(r),N()(a)],onChange:function(e,n){return t.onPeriodChange(n)}})),i.a.createElement("div",{className:"nav-item"},i.a.createElement(P.a.Group,{value:o,onChange:this.onGroupByChange},i.a.createElement(P.a.Button,{value:"dept"},e(H||(H=B(["dept"],["dept"])))),i.a.createElement(P.a.Button,{value:"type"},e(U||(U=B(["asset"],["asset"])))),i.a.createElement(P.a.Button,{value:"month"},e(Z||(Z=B(["month"],["month"]))))))))},e}(o.PureComponent);var H,U,Z,V=Object(c.translate)()(Object(k.a)(O.g,function(t){return Object(v.d)(t,"from","to","groupby")})(G)),J=n(936),F=n.n(J),Q=(n(2032),n(2031));F.a.locale("chs");var X=[{headerI18n:"name",accessor:"name",className:"name-col",headerClassName:"name-th"},{headerI18n:"revenue",accessor:"revenue",className:"number-col",headerClassName:"number-th",Footer:function(t){return o.createElement("span",{className:"table-footer"},Object(v.f)(t.data,function(t){return t.revenue}))}},{headerI18n:"cost",accessor:"cost",className:"number-col",headerClassName:"number-th",Footer:function(t){return o.createElement("span",{className:"table-footer"},Object(v.f)(t.data,function(t){return t.cost}))}},{id:"balance",headerI18n:"balance",className:"number-col",headerClassName:"number-th",accessor:function(t){return t.revenue-t.cost},Cell:function(t){return o.createElement("span",{className:t.value>=0?"positive":"negative"},t.value)},Footer:function(t){var e=Object(v.f)(t.data,function(t){return t.balance});return o.createElement("span",{className:w()("table-footer",e>=0?"positive":"negative")},e)}}],K=function(t){var e=t.value;return e?q(e):""},$=function(t){return""};function q(t,e){return void 0===e&&(e="0.0a"),F()(t).format(e)}function tt(t,e,n,r){return{value:t,label:{normal:{formatter:e}},itemStyle:{normal:{color:t>0?n:r}}}}var et,nt,rt,at,ot,it,ct={title:{left:"2%",top:"-2%"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},legend:{right:"14%",top:"1%",data:[{name:"revenue"},{name:"cost"},{name:"balance",icon:"image://"+n(2071)}]},grid:{left:"3%",right:"4%",bottom:"3%",top:"12%",containLabel:!0},yAxis:[{type:"value",axisLabel:{formatter:function(t){return q(t,"0a")}}}],xAxis:[{type:"category",axisTick:{show:!1},axisLabel:{interval:0},data:[]}],series:[{name:"revenue",type:"bar",stack:"revenue-cost",label:{normal:{show:!0,position:"top"}},data:[]},{name:"cost",type:"bar",stack:"revenue-cost",label:{normal:{show:!0,position:"bottom"}},data:[]},{name:"balance",type:"bar",barGap:"15%",barCategoryGap:"30%",barMaxWidth:"20%",label:{normal:{show:!0,position:"inside",rotate:"90"}},data:[]}]},ut=(n(2111),function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),st=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},lt=I.a.report,ft=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={from:"",to:"",start:0,limit:0,max:100,showRoot:!1,root:{id:"",name:"",type:"",revenue:0,cost:0},items:new Array},e.onShowRoot=function(t){e.setState({showRoot:t.target.checked})},e._receiveData=function(t){var n=t.items.map(function(t){return Object(v.d)(t,"id","name","type","revenue","cost")}),r=Object(v.d)(t.root,"id","name","type","revenue","cost");e.setState({start:t.pages.start,limit:t.pages.limit,max:t.pages.total,root:r,items:n})},e}return ut(e,t),e.prototype.onFilter$=function(t){var e=this,n=t.from,r=t.to,a=t.groupby,o=t.range,i=o[0],c=o[1],u=t.drillDownId,s={from:n,to:r,start:i,limit:c-i},l=this.state.root;u?s[l.type]=u:s.groupby=a,lt.profit(s).then(function(t){return e._receiveData(t)}).then(function(){return e.setState({from:n,to:r})})},e.prototype.onBackToRoot=function(){Object(O.h)(function(t){return t.drillDownId=void 0,t})},e.prototype.onDrillDown=function(t){var e=this.state,n=e.items,r=e.showRoot,a=O.g.getValue().drillDownId;if(r&&0===t)a&&this.onBackToRoot();else if(!a){var o=n[r?t+1:t];Object(O.h)(function(t){return t.drillDownId=o.id,t})}},e.prototype.componentDidMount=function(){var t=this,e=this.props.t;X.forEach(function(t,n){t.Header=e(t.headerI18n),0===n&&(t.Footer=o.createElement("span",{className:"table-footer"},e(et||(et=st(["footer_total"],["footer_total"]))))),n>0&&(t.Header+=" ("+e(nt||(nt=st(["yuan"],["yuan"])))+")")}),ct.title.subtext=e(rt||(rt=st(["currency"],["currency"])))+": "+e(at||(at=st(["yuan"],["yuan"]))),ct.legend.data.forEach(function(t,n){var r=e(t.name);t.name=ct.series[n].name=r}),this._chart&&this._chart.on("click",function(e){t.onDrillDown(e.dataIndex)})},e.prototype.render=function(){var t=this,e=O.g.getValue().drillDownId,n=this.props.t,r=this.state,i=r.start,c=r.limit,u=r.max,s=r.items,l=r.root,p=r.showRoot;return this._chart&&this._chart.setOption(function(t,e){e&&(t=[e].concat(t));var n,r,a=[],o=[],i=[],c=[];return t.length>13?n=r=$:(n=function(t){return Object(Q.a)(t,9)},r=K),t.forEach(function(t,u){var s=e&&0===u;a.push(t.name),o.push(tt(t.revenue,r,s?"red":void 0)),i.push(tt(-t.cost,r,s?"red":void 0)),c.push(tt(t.revenue-t.cost,r,s?"red":void 0,"red")),ct.xAxis[0].axisLabel.formatter=n}),ct.xAxis[0].data=a,ct.series[0].data=o,ct.series[1].data=i,ct.series[2].data=c,ct}(s,p?l:void 0)),o.createElement("div",{className:"asset-perf-classic"},o.createElement("div",{className:"filter-bar"},o.createElement(V,null)),o.createElement("div",{className:"chart-header level"},o.createElement("nav",{className:"breadcrumb has-succeeds-separator level-left","aria-label":"breadcrumbs"},o.createElement("ul",null,o.createElement("li",null,o.createElement("a",{onClick:function(){return e&&t.onBackToRoot()}},n(function(t){switch(t){case"dept":return"by_dept";case"type":return"by_type";case"month":return"by_month";default:return""}}(l.type)))),e&&o.createElement("li",{className:"is-active"},o.createElement("a",null,l.name))),o.createElement(d.a,null)),o.createElement("div",{className:"chart-controls level-right"},o.createElement(_,{start:i,limit:c,max:u}),o.createElement(a.a,{onChange:this.onShowRoot,disabled:0===u},n(ot||(ot=st(["show_total"],["show_total"])))))),o.createElement("div",{className:"bar-chart-wrapper"},o.createElement(m.a,{id:"bar-chart",width:"100%",height:"300px",chart:function(e){return t._chart=e}})),o.createElement("div",{className:"table-wrapper"},o.createElement(f,{data:s,noDataText:n(it||(it=st(["no_data"],["no_data"]))),columns:X,pageSize:s.length||5,showPagination:!1,className:"asset-perf-table -striped -highlight"})))},e}(o.PureComponent);e.default=Object(c.translate)()(Object(D.a)({Filter$:O.g})(ft))}}]);