(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[23],{0:function(e,t){e.exports=googlesitekit.i18n},115:function(e,t,r){"use strict";var n=r(126);r.d(t,"a",(function(){return n.a}));var i=r(127);r.d(t,"c",(function(){return i.a}));var o=r(128);r.d(t,"b",(function(){return o.a}))},126:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return Cell}));var n=r(33),i=r.n(n),o=r(8),a=r.n(o),c=r(28),u=r.n(c),s=r(2),l=r.n(s),d=r(9),g=r.n(d);function Cell(t){var r,n=t.className,o=t.alignTop,c=t.alignMiddle,s=t.alignBottom,l=t.alignRight,d=t.alignLeft,f=t.smSize,p=t.smStart,b=t.mdSize,m=t.mdStart,v=t.lgSize,h=t.lgStart,y=t.size,O=t.children,_=u()(t,["className","alignTop","alignMiddle","alignBottom","alignRight","alignLeft","smSize","smStart","mdSize","mdStart","lgSize","lgStart","size","children"]);return e.createElement("div",i()({},_,{className:g()(n,"mdc-layout-grid__cell",(r={"mdc-layout-grid__cell--align-top":o,"mdc-layout-grid__cell--align-middle":c,"mdc-layout-grid__cell--align-bottom":s,"mdc-layout-grid__cell--align-right":l,"mdc-layout-grid__cell--align-left":d},a()(r,"mdc-layout-grid__cell--span-".concat(y),12>=y&&y>0),a()(r,"mdc-layout-grid__cell--span-".concat(v,"-desktop"),12>=v&&v>0),a()(r,"mdc-layout-grid__cell--start-".concat(h,"-desktop"),12>=h&&h>0),a()(r,"mdc-layout-grid__cell--span-".concat(b,"-tablet"),8>=b&&b>0),a()(r,"mdc-layout-grid__cell--start-".concat(m,"-tablet"),8>=m&&m>0),a()(r,"mdc-layout-grid__cell--span-".concat(f,"-phone"),4>=f&&f>0),a()(r,"mdc-layout-grid__cell--start-".concat(p,"-phone"),4>=p&&p>0),r))}),O)}Cell.propTypes={smSize:l.a.number,smStart:l.a.number,mdSize:l.a.number,mdStart:l.a.number,lgSize:l.a.number,lgStart:l.a.number,size:l.a.number,alignTop:l.a.bool,alignMiddle:l.a.bool,alignBottom:l.a.bool,alignRight:l.a.bool,alignLeft:l.a.bool,className:l.a.string,children:l.a.node},Cell.defaultProps={className:"",size:0,smSize:0,smStart:0,mdSize:0,mdStart:0,lgSize:0,lgStart:0}}).call(this,r(1))},127:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return Row}));var n=r(33),i=r.n(n),o=r(28),a=r.n(o),c=r(2),u=r.n(c),s=r(9),l=r.n(s);function Row(t){var r=t.className,n=t.children,o=a()(t,["className","children"]);return e.createElement("div",i()({className:l()("mdc-layout-grid__inner",r)},o),n)}Row.propTypes={className:u.a.string,children:u.a.node},Row.defaultProps={className:""}}).call(this,r(1))},128:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return Grid}));var n=r(33),i=r.n(n),o=r(28),a=r.n(o),c=r(2),u=r.n(c),s=r(9),l=r.n(s);function Grid(t){var r=t.className,n=t.children,o=a()(t,["className","children"]);return e.createElement("div",i()({className:l()("mdc-layout-grid",r)},o),n)}Grid.propTypes={className:u.a.string,children:u.a.node},Grid.defaultProps={className:""}}).call(this,r(1))},138:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"d",(function(){return i})),r.d(t,"c",(function(){return o})),r.d(t,"e",(function(){return a})),r.d(t,"b",(function(){return c})),r.d(t,"h",(function(){return u})),r.d(t,"f",(function(){return s})),r.d(t,"g",(function(){return l})),r.d(t,"i",(function(){return d}));var n="dashboardAllTraffic",i="dashboardSearchFunnel",o="dashboardPopularity",a="dashboardSpeed",c="dashboardEarnings",u="pageDashboardSearchFunnel",s="pageDashboardAllTraffic",l="pageDashboardPopularity",d="pageDashboardSpeed"},192:function(e,t,r){"use strict";(function(e){var n=r(19),i=r.n(n),o=r(103),a=r(1),c=r(0),u=r(54),s=r.n(u),l=r(193);t.a=function PostSearcherAutoSuggest(t){var r=t.setCanSubmit,n=t.setMatch,u=Object(a.useState)(""),d=i()(u,2),g=d[0],f=d[1],p=Object(l.a)(g,200),b=Object(a.useState)([]),m=i()(b,2),v=m[0],h=m[1],y=Object(c.__)("No results found","google-site-kit"),O=Object(a.useCallback)((function(e){if(Array.isArray(v)&&e!==y){var t=v.find((function(t){return t.post_title===e}));t&&(r(!0),n(t))}else r(!1)}),[v,r,n]),_=Object(a.useCallback)((function(e){r(!1),f(e.target.value)}),[r]);return Object(a.useEffect)((function(){""!==p&&s.a.get("core","search","post-search",{query:encodeURIComponent(p)},{useCache:!1}).then(h).catch((function(){return h([])}))}),[p,h]),e.createElement(o.a,{className:"autocomplete__wrapper",onSelect:O},e.createElement(o.b,{id:"autocomplete",className:"autocomplete__input autocomplete__input--default",type:"text",onChange:_}),""!==p&&e.createElement(o.e,{portal:!1},e.createElement(o.c,{className:"autocomplete__menu autocomplete__menu--inline"},v.length>0?v.map((function(t){var r=t.ID,n=t.post_title;return e.createElement(o.d,{key:r,value:n,className:"autocomplete__option"})})):e.createElement(o.d,{value:y,className:"autocomplete__option"}))))}}).call(this,r(1))},193:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(19),i=r.n(n),o=r(1);function a(e,t){var r=Object(o.useState)(e),n=i()(r,2),a=n[0],c=n[1];return Object(o.useEffect)((function(){var r=setTimeout((function(){c(e)}),t);return function(){clearTimeout(r)}}),[e,t]),a}},24:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o}));var n="core/site",i="primary",o="secondary"},25:function(e,t,r){"use strict";var n=r(94),i=r.n(n);r.d(t,"o",(function(){return i.a})),r.d(t,"c",(function(){return n.HelperText})),r.d(t,"d",(function(){return n.Input}));var o=r(169);r.d(t,"j",(function(){return o.a}));var a=r(263);r.d(t,"g",(function(){return a.a}));var c=r(264);r.d(t,"i",(function(){return c.a}));var u=r(125),s=r.n(u);r.d(t,"n",(function(){return s.a})),r.d(t,"l",(function(){return u.Option}));var l=r(265);r.d(t,"k",(function(){return l.a}));var d=r(261);r.d(t,"f",(function(){return d.a}));var g=r(262);r.d(t,"e",(function(){return g.a}));var f=r(260);r.d(t,"h",(function(){return f.a}));var p=r(115);r.d(t,"a",(function(){return p.a})),r.d(t,"b",(function(){return p.b})),r.d(t,"m",(function(){return p.c}))},26:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return c}));var n=r(33),i=r.n(n),o=r(1),a=function(e){return function(t){return function FilteredComponent(r){return Object(o.createElement)(o.Fragment,{},"",Object(o.createElement)(t,r),e)}}},c=function(t,r){return function(n){return function InnerComponent(o){return e.createElement(t,i()({},o,r,{OriginalComponent:n}))}}}}).call(this,r(1))},291:function(e,t,r){"use strict";(function(e){var n=r(9),i=r.n(n),o=r(2),a=r.n(o),c=function Widget(t){var r=t.children,n=t.className,o=t.slug,a=t.noPadding,c=t.header,u=t.footer;return e.createElement("div",{className:i()("googlesitekit-widget","googlesitekit-widget--".concat(o),{"googlesitekit-widget--no-padding":a},n)},c&&e.createElement("div",{className:"googlesitekit-widget__header"},e.createElement(c,null)),e.createElement("div",{className:"googlesitekit-widget__body"},r),u&&e.createElement("div",{className:"googlesitekit-widget__footer"},e.createElement(u,null)))};c.defaultProps={children:void 0,noPadding:!1},c.propTypes={children:a.a.node,slug:a.a.string.isRequired,noPadding:a.a.bool,header:a.a.elementType,footer:a.a.elementType},t.a=c}).call(this,r(1))},356:function(e,t,r){"use strict";r.d(t,"b",(function(){return p}));var n=r(6),i=r.n(n),o=r(291),a=r(83),c=r(532),u=r(534),s=r(71),l=i.a.combineStores(i.a.commonStore,c.a,u.a,Object(s.b)());i.a.registerStore(a.a,l);var d=r(0),g=r(535),f=r(138);function p(e){e.registerWidgetArea(f.a,{title:Object(d.__)("All Traffic","google-site-kit"),subtitle:Object(d.__)("How people found your site.","google-site-kit"),style:a.b.BOXES,priority:1},"dashboard"),e.registerWidgetArea(f.d,{title:Object(d.__)("Search Funnel","google-site-kit"),subtitle:Object(d.__)("How your site appeared in Search results and how many visitors you got from Search.","google-site-kit"),style:a.b.COMPOSITE,priority:2},"dashboard"),e.registerWidgetArea(f.c,{title:Object(d.__)("Popularity","google-site-kit"),subtitle:Object(d.__)("Your most popular pages and how people found them from Search.","google-site-kit"),style:a.b.BOXES,priority:3},"dashboard"),e.registerWidgetArea(f.e,{title:Object(d.__)("Page Speed and Experience","google-site-kit"),subtitle:Object(d.__)("How fast your home page loads, how quickly people can interact with your content, and how stable your content is.","google-site-kit"),style:a.b.BOXES,priority:4},"dashboard"),e.registerWidgetArea(f.b,{title:Object(d.__)("Earnings","google-site-kit"),subtitle:Object(d.__)("How much you’re earning from your content through AdSense.","google-site-kit"),style:a.b.BOXES,priority:5},"dashboard"),e.registerWidgetArea(f.h,{title:Object(d.__)("Search Funnel","google-site-kit"),subtitle:Object(d.__)("How your site appeared in Search results and how many visitors you got from Search.","google-site-kit"),style:a.b.COMPOSITE,priority:1},"pageDashboard"),e.registerWidgetArea(f.f,{title:Object(d.__)("All Traffic","google-site-kit"),subtitle:Object(d.__)("How people found your page.","google-site-kit"),style:a.b.BOXES,priority:2},"pageDashboard"),e.registerWidgetArea(f.g,{title:Object(d.__)("Popularity","google-site-kit"),subtitle:Object(d.__)("What people searched for to find your page.","google-site-kit"),style:a.b.BOXES,priority:3},"pageDashboard"),e.registerWidgetArea(f.i,{title:Object(d.__)("Page Speed and Experience","google-site-kit"),subtitle:Object(d.__)("How fast your page loads, how quickly people can interact with your content, and how stable your content is.","google-site-kit"),style:a.b.BOXES,priority:4},"pageDashboard"),e.registerWidget("urlSearch",{priority:100,width:[a.c.HALF,a.c.FULL],Component:g.a,wrapWidget:!1},[f.c])}var b=i.a.dispatch,m=i.a.select,v={components:{Widget:o.a},WIDGET_AREA_STYLES:a.b,WIDGET_WIDTHS:a.c,registerWidgetArea:function(e,t,r){b(a.a).registerWidgetArea(e,t),r&&v.assignWidgetArea(e,r)},registerWidget:function(e,t,r){b(a.a).registerWidget(e,t),r&&v.assignWidget(e,r)},assignWidgetArea:function(e,t){b(a.a).assignWidgetArea(e,t)},assignWidget:function(e,t){b(a.a).assignWidget(e,t)},isWidgetAreaRegistered:function(e){return m(a.a).isWidgetAreaRegistered(e)},isWidgetRegistered:function(e){return m(a.a).isWidgetRegistered(e)}};t.a=v},4:function(e,t,r){"use strict";(function(e){r.d(t,"r",(function(){return R})),r.d(t,"p",(function(){return N})),r.d(t,"g",(function(){return P})),r.d(t,"m",(function(){return D})),r.d(t,"q",(function(){return I})),r.d(t,"f",(function(){return W})),r.d(t,"b",(function(){return T})),r.d(t,"i",(function(){return C})),r.d(t,"k",(function(){return L})),r.d(t,"l",(function(){return x})),r.d(t,"x",(function(){return q})),r.d(t,"a",(function(){return F})),r.d(t,"t",(function(){return G})),r.d(t,"d",(function(){return U})),r.d(t,"h",(function(){return M}));var n=r(5),i=r.n(n),o=r(14),a=r.n(o),c=r(8),u=r.n(c),s=r(28),l=r.n(s),d=r(38),g=r.n(d),f=r(15),p=r(17),b=r(0),m=r(57),v=r(198),h=r(58);r.d(t,"v",(function(){return h.c}));var y=r(26),O=r(65);r.d(t,"s",(function(){return O.a})),r.d(t,"w",(function(){return O.b}));var _=r(67);r.d(t,"u",(function(){return _.a}));var j=r(69);r.d(t,"c",(function(){return j.b})),r.d(t,"j",(function(){return j.c}));r(47);var S=r(55);r.d(t,"n",(function(){return S.b})),r.d(t,"e",(function(){return y.b}));var E=r(85);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"o",(function(){return E.a}));var A=function(e){return 1e6<=e?Math.round(e/1e5)/10:1e4<=e?Math.round(e/1e3):1e3<=e?Math.round(e/100)/10:e},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e=Object(f.isFinite)(e)?e:Number(e),Object(f.isFinite)(e)||(console.warn("Invalid number",e,g()(e)),e=0),t)return N(e,{style:"currency",currency:t});var r={minimumFractionDigits:1,maximumFractionDigits:1};return 1e6<=e?Object(b.sprintf)(// translators: %s: an abbreviated number in millions.
Object(b.__)("%sM","google-site-kit"),N(A(e),e%10==0?{}:r)):1e4<=e?Object(b.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(b.__)("%sK","google-site-kit"),N(A(e))):1e3<=e?Object(b.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(b.__)("%sK","google-site-kit"),N(A(e),e%10==0?{}:r)):e.toString()},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.locale,n=void 0===r?P():r,i=l()(t,["locale"]);return new Intl.NumberFormat(n,i).format(e)},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=Object(f.get)(t,["_googlesitekitLegacyData","locale","","lang"]);if(r){var n=r.match(/^(\w{2})?(_)?(\w{2})/);if(n&&n[0])return n[0].replace(/_/g,"-")}return t.navigator.language},D=function(e){switch(e){case"minute":return 60;case"hour":return 3600;case"day":return 86400;case"week":return 604800;case"month":return 2592e3;case"year":return 31536e3}},I=function(e){if(e=parseInt(e,10),isNaN(e)||0===e)return"0.0s";var t={};return t.hours=Math.floor(e/60/60),t.minutes=Math.floor(e/60%60),t.seconds=Math.floor(e%60),((t.hours?t.hours+"h ":"")+(t.minutes?t.minutes+"m ":"")+(t.seconds?t.seconds+"s ":"")).trim()},W=function(e,t){var r=1e3*D("day"),n=e.getTime(),i=t.getTime();return Math.round(Math.abs(n-i)/r)},T=function(e,t){if("0"===e||0===e||isNaN(e))return"";var r=((t-e)/e*100).toFixed(1);return isNaN(r)||"Infinity"===r?"":r},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e._googlesitekitLegacyData,r=t.modules;return r?Object.keys(r).reduce((function(e,t){return"object"!==g()(r[t])||void 0===r[t].slug||void 0===r[t].name||r[t].slug!==t?e:k(k({},e),{},u()({},t,r[t]))}),{}):{}},L=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e._googlesitekitLegacyData,i=n.admin,o=i.connectURL,a=i.adminRoot,c=n.setup.needReauthenticate,u=C(n)[t].screenID,s="pagespeed-insights"===t?{notification:"authentication_success",reAuth:void 0}:{},l=Object(m.a)(a,k({page:t&&r&&u?u:"googlesitekit-dashboard",slug:t,reAuth:r},s));if(!c)return l;var d=encodeURIComponent(Object(v.a)(l));return l=a+"?"+d,Object(m.a)(o,{redirect:l,status:r})},x=function(t,r){var n=e._googlesitekitLegacyData.admin.adminRoot;return t||(t="googlesitekit-dashboard"),r=k({page:t},r),Object(m.a)(n,r)},q=function(e){try{return JSON.parse(e)&&!!e}catch(e){return!1}},F=function(){var e=a()(i.a.mark((function e(t,r,n){var o,a,c,u,s=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=s.length>3&&void 0!==s[3]?s[3]:h.c,a=s.length>4&&void 0!==s[4]?s[4]:C,e.next=4,t.setModuleActive(r,n);case 4:return c=e.sent,(u=a())[r]&&(u[r].active=n),e.next=9,o("".concat(r,"_setup"),n?"module_activate":"module_deactivate",r);case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(p.b)("googlesitekit.ErrorNotification","googlesitekit.ErrorNotification",Object(y.b)(e,t),1)},U=function(e){if(!e)return"";var t=e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(t)})).replace(/(\\)/g,"");return Object(f.unescape)(t)};function M(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e._googlesitekitBaseData,n=r.blogPrefix,i=r.isNetworkMode;return i?t:n+t}}).call(this,r(18))},43:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var n="_googlesitekitDataLayer",i="data-googlesitekit-gtag"},44:function(e,t,r){"use strict";(function(e){var n=r(33),i=r.n(n),o=r(28),a=r.n(o),c=r(9),u=r.n(c),s=r(2),l=r.n(s),d=r(119),g=r(1),f=r(25),p=Object(g.forwardRef)((function(t,r){var n=t.children,o=t.href,c=t.text,s=t.className,l=t.danger,p=t.disabled,b=t.target,m=t.icon,v=t.trailingIcon,h=a()(t,["children","href","text","className","danger","disabled","target","icon","trailingIcon"]),y=Object(g.useCallback)((function(e){null!==e&&f.j.attachTo(e)}),[]),O=Object(d.a)(r,y),_=o&&!p?"a":"button";return e.createElement(_,i()({className:u()("mdc-button",s,{"mdc-button--raised":!c,"mdc-button--danger":l}),href:p?void 0:o,ref:O,disabled:!!p,target:b||"_self",role:"a"===_?"button":void 0},h),m,e.createElement("span",{className:"mdc-button__label"},n),v)}));p.displayName="Button",p.propTypes={onClick:l.a.func,children:l.a.string.isRequired,href:l.a.string,text:l.a.bool,className:l.a.string,danger:l.a.bool,disabled:l.a.bool,icon:l.a.element,trailingIcon:l.a.element},p.defaultProps={onClick:null,href:null,text:!1,className:"",danger:!1,disabled:!1,icon:null,trailingIcon:null},t.a=p}).call(this,r(1))},47:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return l}));var n,i=r(10),o=r.n(i),a=r(11),c=r.n(a),u=function(t){var r=e[t];if(!r)return!1;try{var n="__storage_test__";return r.setItem(n,n),r.removeItem(n),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==r.length}},s=function(){function NullStorage(){o()(this,NullStorage)}return c()(NullStorage,[{key:"key",value:function(){return null}},{key:"getItem",value:function(){return null}},{key:"setItem",value:function(){}},{key:"removeItem",value:function(){}},{key:"clear",value:function(){}},{key:"length",get:function(){return 0}}]),NullStorage}(),l=function(){return n||(n=u("sessionStorage")?e.sessionStorage:u("localStorage")?e.localStorage:new s),n}}).call(this,r(18))},532:function(e,t,r){"use strict";(function(e){var n=r(8),i=r.n(n),o=r(23),a=r.n(o),c=r(83),u=r(533);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=Object.keys(c.b).map((function(e){return"WIDGET_AREA_STYLES.".concat(e)})).join(", "),g={assignWidgetArea:function(e,t){return{payload:{slug:e,contextSlugs:"string"==typeof t?[t]:t},type:"ASSIGN_WIDGET_AREA"}},registerWidgetArea:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.priority,n=void 0===r?10:r,i=t.style,o=void 0===i?c.b.BOXES:i,u=t.title,s=t.subtitle,l=t.icon;return a()(e,"slug is required."),a()(u,"settings.title is required."),a()(s,"settings.subtitle is required."),a()(Object.values(c.b).includes(o),"settings.style must be one of: ".concat(d,".")),{payload:{slug:e,settings:{priority:n,style:o,title:u,subtitle:s,icon:l}},type:"REGISTER_WIDGET_AREA"}}},f={isWidgetAreaRegistered:function(e,t){return void 0!==e.areas[t]},getWidgetAreas:function(e,t){a()(t,"contextSlug is required.");var r=e.areas,n=e.contextAssignments;return Object(u.a)(Object.values(r).filter((function(e){return n[t]&&n[t].includes(e.slug)})),"priority")},getWidgetArea:function(e,t){return a()(t,"slug is required."),e.areas[t]||null}};t.a={initialState:{areas:{},contextAssignments:{}},actions:g,controls:{},reducer:function(t,r){var n=r.type,o=r.payload;switch(n){case"ASSIGN_WIDGET_AREA":var a=o.slug,c=o.contextSlugs,u=t.contextAssignments;return c.forEach((function(e){void 0===u[e]&&(u[e]=[]),u[e].includes(a)||u[e].push(a)})),l(l({},t),{},{contextAssignments:u});case"REGISTER_WIDGET_AREA":var s=o.slug,d=o.settings;return void 0!==t.areas[s]?(e.console.warn('Could not register widget area with slug "'.concat(s,'". Widget area "').concat(s,'" is already registered.')),t):l(l({},t),{},{areas:l(l({},t.areas),{},i()({},s,l(l({},d),{},{slug:s})))});default:return t}},resolvers:{},selectors:f}}).call(this,r(18))},533:function(e,t,r){"use strict";function n(e,t){return e.sort((function(e,r){return e[t]>r[t]?1:e[t]<r[t]?-1:0}))}r.d(t,"a",(function(){return n}))},534:function(e,t,r){"use strict";(function(e){var n=r(8),i=r.n(n),o=r(23),a=r.n(o),c=r(83);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=Object.keys(c.c).map((function(e){return"WIDGET_WIDTHS.".concat(e)})).join(", "),d={areaAssignments:{},registryKey:void 0,widgets:{}},g={assignWidget:function(e,t){return{payload:{slug:e,areaSlugs:"string"==typeof t?[t]:t},type:"ASSIGN_WIDGET"}},registerWidget:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.Component,n=t.priority,i=void 0===n?10:n,o=t.width,u=void 0===o?c.c.QUARTER:o,s=t.wrapWidget,d=void 0===s||s,g=Object.values(c.c);return a()(r,"component is required to register a widget."),a()(Array.isArray(u)&&u.some(g.includes,g)||!Array.isArray(u)&&g.includes(u),"Widget width should be one of: ".concat(l,', but "').concat(u,'" was provided.')),{payload:{slug:e,settings:{Component:r,priority:i,width:u,wrapWidget:d}},type:"REGISTER_WIDGET"}}},f={isWidgetRegistered:function(e,t){return void 0!==e.widgets[t]},getWidgets:function(e,t){a()(t,"widgetAreaSlug is required.");var r=e.areaAssignments,n=e.widgets;return Object.values(n).filter((function(e){var n;return null===(n=r[t])||void 0===n?void 0:n.includes(e.slug)})).sort((function(e,t){return e.priority-t.priority}))},getWidget:function(e,t){return a()(t,"slug is required to get a widget."),e.widgets[t]||null}};t.a={initialState:d,actions:g,controls:{},reducer:function(t,r){var n=r.type,o=r.payload;switch(n){case"ASSIGN_WIDGET":var a=o.slug,c=o.areaSlugs,u=t.areaAssignments;return c.forEach((function(e){void 0===u[e]&&(u[e]=[]),u[e].includes(a)||u[e].push(a)})),s(s({},t),{},{areaAssignments:u});case"REGISTER_WIDGET":var l=o.slug,d=o.settings;return void 0!==t.widgets[l]?(e.console.warn('Could not register widget with slug "'.concat(l,'". Widget "').concat(l,'" is already registered.')),t):s(s({},t),{},{widgets:s(s({},t.widgets),{},i()({},l,s(s({},d),{},{slug:l})))});default:return t}},resolvers:{},selectors:f}}).call(this,r(18))},535:function(e,t,r){"use strict";(function(e,n){var i=r(19),o=r.n(i),a=r(1),c=r(0),u=r(6),s=r.n(u),l=r(291),d=r(24),g=r(44),f=r(192),p=s.a.useSelect;t.a=function URLSearchWidget(){var t=Object(a.useState)(!1),r=o()(t,2),i=r[0],u=r[1],s=Object(a.useState)({}),b=o()(s,2),m=b[0],v=b[1],h=p((function(e){return e(d.c).getAdminURL("googlesitekit-dashboard",{permaLink:null==m?void 0:m.permalink})})),y=Object(a.useCallback)((function(){(null==m?void 0:m.permalink)&&e.location.assign(h)}),[h,m]);return n.createElement("div",{className:"mdc-layout-grid__cell"},n.createElement(l.a,{slug:"urlSearchWidget",header:function(){return n.createElement("h3",{className:"googlesitekit-subheading-1 googlesitekit-widget__header-title"},Object(c.__)("Search for individual page or post information","google-site-kit"))},noPadding:!0},n.createElement("div",{className:"mdc-layout-grid"},n.createElement("div",{className:"mdc-layout-grid__inner"},n.createElement("div",{className:"mdc-layout-grid__cell mdc-layout-grid__cell--span-12"},n.createElement("div",{className:"googlesitekit-post-searcher"},n.createElement("label",{className:"googlesitekit-post-searcher__label",htmlFor:"autocomplete"},Object(c.__)("Title or URL","google-site-kit")),n.createElement(f.a,{setCanSubmit:u,setMatch:v}),n.createElement("div",{className:"googlesitekit-post-searcher__button-wrapper"},n.createElement(g.a,{onClick:y,className:"googlesitekit-post-searcher__button",disabled:!i},Object(c.__)("View Data","google-site-kit")))))))))}}).call(this,r(18),r(1))},54:function(e,t){e.exports=googlesitekit.api},55:function(e,t,r){"use strict";(function(e){r.d(t,"c",(function(){return c})),r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return s}));var n=r(28),i=r.n(n),o=r(15),a=r(0),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.locale,n=void 0===r?s():r,o=i()(t,["locale"]);return new Intl.NumberFormat(n,o).format(e)},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.locale,n=void 0===r?s():r,i=t.style,o=void 0===i?"long":i,c=t.type,u=void 0===c?"conjunction":c;if(Intl.ListFormat){var l=new Intl.ListFormat(n,{style:o,type:u});return l.format(e)}
/* translators: used between list items, there is a space after the comma. */var d=Object(a.__)(", ","google-site-kit");return e.join(d)},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=Object(o.get)(t,["_googlesitekitLegacyData","locale"]);if(r){var n=r.match(/^(\w{2})?(_)?(\w{2})/);if(n&&n[0])return n[0].replace(/_/g,"-")}return t.navigator.language}}).call(this,r(18))},58:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return g}));var n=r(86),i=e._googlesitekitBaseData||{},o=i.isFirstAdmin,a=i.trackingAllowed,c={isFirstAdmin:o,trackingEnabled:i.trackingEnabled,trackingID:i.trackingID,referenceSiteURL:i.referenceSiteURL,userIDHash:i.userIDHash},u=Object(n.a)(c),s=u.enableTracking,l=u.disableTracking,d=u.isTrackingEnabled,g=u.trackEvent;function f(e){e?s():l()}!0===a&&f(d())}).call(this,r(18))},6:function(e,t){e.exports=googlesitekit.data},61:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(43);function i(e){return function(){e[n.a]=e[n.a]||[],e[n.a].push(arguments)}}},65:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o}));var n=r(89),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{__html:n.a.sanitize(e,t)}},o=function(e){var t;return null==e||null===(t=e.replace)||void 0===t?void 0:t.call(e,/\/+$/,"")}},67:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(38),i=r.n(n),o=r(84),a=r.n(o),c=function(e){return a()(JSON.stringify(function e(t){var r={};return Object.keys(t).sort().forEach((function(n){var o=t[n];o&&"object"===i()(o)&&!Array.isArray(o)&&(o=e(o)),r[n]=o})),r}(e)))}},69:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return d}));var n=r(19),i=r.n(n),o=r(0);function a(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=null,r=null,n=document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),i=document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");if(n&&i)return!1;if(t=document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"),r=document.querySelector("#wp-admin-bar-google-site-kit .ab-item"),null===t&&null===r)return!1;var a=document.createElement("span");a.setAttribute("class","googlesitekit-notifications-counter update-plugins count-".concat(e));var c=document.createElement("span");c.setAttribute("class","plugin-count"),c.setAttribute("aria-hidden","true"),c.textContent=e;var u=document.createElement("span");return u.setAttribute("class","screen-reader-text"),u.textContent=Object(o.sprintf)(
/* translators: %d is the number of notifications */
Object(o._n)("%d notification","%d notifications",e,"google-site-kit"),e),a.appendChild(c),a.appendChild(u),t&&null===n&&t.appendChild(a),r&&null===i&&r.appendChild(a),a},s=function(){e.localStorage&&e.localStorage.clear(),e.sessionStorage&&e.sessionStorage.clear()},l=function(e){for(var t=location.search.substr(1).split("&"),r={},n=0;n<t.length;n++)r[t[n].split("=")[0]]=decodeURIComponent(t[n].split("=")[1]);return e?r.hasOwnProperty(e)?decodeURIComponent(r[e].replace(/\+/g," ")):"":r},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location,r=new URL(t.href);if(e)return r.searchParams&&r.searchParams.get?r.searchParams.get(e):l(e);var n,o={},c=a(r.searchParams.entries());try{for(c.s();!(n=c.n()).done;){var u=i()(n.value,2),s=u[0],d=u[1];o[s]=d}}catch(e){c.e(e)}finally{c.f()}return o}}).call(this,r(18))},71:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(8),i=r.n(n),o=r(38),a=r.n(o),c=r(23),u=r.n(c),s=r(84),l=r.n(s),d=r(4);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(t&&Array.isArray(t)){var r=t.map((function(e){return"object"===a()(e)?Object(d.u)(e):e}));return"".concat(e,"::").concat(l()(JSON.stringify(r)))}return e}var b={receiveError:function(e,t,r){return u()(e,"error is required."),t&&u()(r&&Array.isArray(r),"args is required (and must be an array) when baseName is specified."),{type:"RECEIVE_ERROR",payload:{error:e,baseName:t,args:r}}},clearError:function(e,t){return e&&u()(t&&Array.isArray(t),"args is required (and must be an array) when baseName is specified."),{type:"CLEAR_ERROR",payload:{baseName:e,args:t}}},clearErrors:function(e){return{type:"CLEAR_ERRORS",payload:{baseName:e}}}};function m(){var e={getErrorForSelector:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return u()(r,"selectorName is required."),e.getError(t,r,n)},getErrorForAction:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return u()(r,"actionName is required."),e.getError(t,r,n)},getError:function(e,t,r){var n=e.error,i=e.errors;return t||r?(u()(t,"baseName is required."),i[p(t,r)]):n},getErrors:function(e){var t=new Set(Object.values(e.errors));return void 0!==e.error&&t.add(e.error),Array.from(t)},hasErrors:function(t){return e.getErrors(t).length>0}};return{initialState:{errors:{},error:void 0},actions:b,controls:{},reducer:function(e,t){var r=t.type,n=t.payload;switch(r){case"RECEIVE_ERROR":var o=n.baseName,a=n.args,c=n.error;return f(f({},e),{},o?{errors:f(f({},e.errors||{}),{},i()({},p(o,a),c))}:{error:c});case"CLEAR_ERROR":var u=n.baseName,s=n.args,l=f({},e);if(u){var d=p(u,s);l.errors=f({},e.errors||{}),delete l.errors[d]}else l.error=void 0;return l;case"CLEAR_ERRORS":var g=n.baseName,b=f({},e);if(g)for(var m in b.errors=f({},e.errors||{}),b.errors)(m===g||m.startsWith("".concat(g,"::")))&&delete b.errors[m];else b.errors={},b.error=void 0;return b;default:return e}},resolvers:{},selectors:e}}},750:function(e,t,r){"use strict";r.r(t),function(e){var n=r(151),i=r(356);void 0===e.googlesitekit&&(e.googlesitekit={}),void 0===e.googlesitekit.widgets&&(e.googlesitekit.widgets=i.a),Object(n.a)((function(){Object(i.b)(i.a)})),t.default=i.a}.call(this,r(18))},83:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return o}));var n={BOXES:"boxes",COMPOSITE:"composite"},i={QUARTER:"quarter",HALF:"half",FULL:"full"},o="core/widgets"},85:function(e,t,r){"use strict";function n(e){return e.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function i(e){return"<p>".concat(e.replace(/\n{2,}/g,"</p><p>"),"</p>")}function o(e){return e.replace(/\n/gi,"<br>")}function a(e){for(var t=e,r=0,a=[n,i,o];r<a.length;r++){t=(0,a[r])(t)}return t}r.d(t,"a",(function(){return a}))},86:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return l}));var n=r(8),i=r.n(n),o=r(87),a=r(88);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s={isFirstAdmin:!1,trackingEnabled:!1,trackingID:"",referenceSiteURL:"",userIDHash:""};function l(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,i=u(u({},s),t);return i.referenceSiteURL&&(i.referenceSiteURL=i.referenceSiteURL.toString().replace(/\/+$/,"")),{enableTracking:Object(o.a)(i,r),disableTracking:function(){i.trackingEnabled=!1},isTrackingEnabled:function(){return!!i.trackingEnabled},trackEvent:Object(a.a)(i,r,n)}}}).call(this,r(18))},87:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return o}));var n=r(61),i=r(43);function o(t,r){var o=Object(n.a)(r);return function(){t.trackingEnabled=!0;var r=e.document;if(!r.querySelector("script[".concat(i.b,"]"))){var n=r.createElement("script");n.setAttribute(i.b,""),n.async=!0,n.src="https://www.googletagmanager.com/gtag/js?id=".concat(t.trackingID,"&l=").concat(i.a),r.head.appendChild(n),o("js",new Date),o("config",t.trackingID)}}}}).call(this,r(18))},88:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return g}));var n=r(5),i=r.n(n),o=r(8),a=r.n(o),c=r(14),u=r.n(c),s=r(61);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(t,r,n){var o=Object(s.a)(r);return function(){var r=u()(i.a.mark((function r(a,c,u,s){var l,g,f,p,b,m,v,h;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(f=t.isFirstAdmin,p=t.referenceSiteURL,b=t.trackingEnabled,m=t.trackingID,v=t.userIDHash,!(null===(l=n._gaUserPrefs)||void 0===l||null===(g=l.ioo)||void 0===g?void 0:g.call(l))){r.next=3;break}return r.abrupt("return");case 3:if(b){r.next=5;break}return r.abrupt("return");case 5:return h={send_to:m,event_category:a,event_label:u,value:s,dimension1:p,dimension2:f?"true":"false",dimension3:v,dimension4:"1.23.0"},r.abrupt("return",new Promise((function(t){var r=setTimeout((function(){e.console.warn('Tracking event "'.concat(c,'" (category "').concat(a,'") took too long to fire.')),t()}),1e3);o("event",c,d(d({},h),{},{event_callback:function(){clearTimeout(r),t()}}))})));case 7:case"end":return r.stop()}}),r)})));return function(e,t,n,i){return r.apply(this,arguments)}}()}}).call(this,r(18))},89:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return i}));var n=r(130),i=r.n(n)()(e)}).call(this,r(18))}},[[750,1,0]]]);