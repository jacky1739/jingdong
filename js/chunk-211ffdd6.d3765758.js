(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-211ffdd6"],{1203:function(t,e,c){},"1a8f":function(t,e,c){"use strict";c("92b7")},"7eda":function(t,e,c){},"8eba":function(t,e,c){"use strict";c("7eda")},"92b7":function(t,e,c){},"97da":function(t,e,c){},"9f70":function(t,e,c){"use strict";c("1203")},a306:function(t,e,c){},b0c0:function(t,e,c){var n=c("83ab"),i=c("5e77").EXISTS,r=c("e330"),a=c("9bf2").f,s=Function.prototype,o=r(s.toString),l=/^\s*function ([^ (]*)/,b=r(l.exec),u="name";n&&!i&&a(s,u,{configurable:!0,get:function(){try{return b(l,o(this))[1]}catch(t){return""}}})},b3d7:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),i={class:"wrapper"};function r(t,e,c,r,a,s){var o=Object(n["A"])("StaticPart"),l=Object(n["A"])("Nearby"),b=Object(n["A"])("Docker");return Object(n["t"])(),Object(n["f"])("div",null,[Object(n["g"])("div",i,[Object(n["j"])(o),Object(n["j"])(l)]),Object(n["j"])(b)])}var a=c("fb2d"),s=c.n(a),o=function(t){return Object(n["w"])("data-v-0fc2a84c"),t=t(),Object(n["u"])(),t},l=o((function(){return Object(n["g"])("div",{class:"position"},[Object(n["g"])("span",{class:"material-icons wrapper__icon"},"room"),Object(n["i"])(" 北京理工大學國防科技元2號樓10層北京理工大學國防科技元2號樓10層 "),Object(n["g"])("span",{class:"material-icons position__notice"},"notifications")],-1)})),b=o((function(){return Object(n["g"])("div",{class:"search"},[Object(n["g"])("span",{class:"material-icons search__icon"},"search"),Object(n["i"])(" 山姆會員商店優惠商品 ")],-1)})),u=o((function(){return Object(n["g"])("div",{class:"banner"},[Object(n["g"])("img",{class:"banner__img",src:s.a,alt:""})],-1)})),d={class:"icons"},p=["src"],j={class:"icons__item__desc"},g=o((function(){return Object(n["g"])("div",{class:"gap"},null,-1)}));function O(t,e,c,i,r,a){return Object(n["t"])(),Object(n["f"])("div",null,[l,b,u,Object(n["g"])("div",d,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(i.staticPartList,(function(t){return Object(n["t"])(),Object(n["f"])("div",{class:"icons__item",key:t},[Object(n["g"])("img",{class:"icons__item__img",src:t.imgUrl,alt:""},null,8,p),Object(n["g"])("p",j,Object(n["C"])(t.text),1)])})),128))]),g])}var f={name:"StaticPart",setup:function(){var t=[{imgUrl:"http://www.dell-lee.com/imgs/vue3/超市.png",text:"超市便利"},{imgUrl:"http://www.dell-lee.com/imgs/vue3/菜市场.png",text:"菜市场"},{imgUrl:"http://www.dell-lee.com/imgs/vue3/水果店.png",text:"水果店"},{imgUrl:"http://www.dell-lee.com/imgs/vue3/鲜花.png",text:"鲜花"},{imgUrl:"http://www.dell-lee.com/imgs/vue3/医药健康.png",text:"医药健康"},{imgUrl:"http://www.dell-lee.com/imgs/vue3/家居.png",text:"家居"},{imgUrl:"http://www.dell-lee.com/imgs/vue3/蛋糕.png",text:"蛋糕"},{imgUrl:"http://www.dell-lee.com/imgs/vue3/签到.png",text:"签到"},{imgUrl:"http://www.dell-lee.com/imgs/vue3/大牌免运.png",text:"大牌免运"},{imgUrl:"http://www.dell-lee.com/imgs/vue3/红包.png",text:"红包"}];return{staticPartList:t}}},m=(c("1a8f"),c("d959")),_=c.n(m);const v=_()(f,[["render",O],["__scopeId","data-v-0fc2a84c"]]);var h=v,w=function(t){return Object(n["w"])("data-v-9d4b1960"),t=t(),Object(n["u"])(),t},x={class:"nearby"},k=w((function(){return Object(n["g"])("h3",{class:"nearby__title"},"附近店铺",-1)}));function y(t,e,c,i,r,a){var s=Object(n["A"])("ShopInfo"),o=Object(n["A"])("router-link");return Object(n["t"])(),Object(n["f"])("div",null,[Object(n["g"])("div",x,[k,(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(i.nearbyList,(function(t){return Object(n["t"])(),Object(n["d"])(o,{to:"/shop/".concat(t._id),key:t},{default:Object(n["J"])((function(){return[Object(n["j"])(s,{item:t},null,8,["item"])]})),_:2},1032,["to"])})),128))])])}var U=c("1da1"),S=(c("96cf"),c("b775")),C=c("d7d0"),I={name:"nearby",components:{ShopInfo:C["a"]},setup:function(){var t=Object(n["y"])([]),e=function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(S["a"])("/api/shop/hot-list");case 2:c=e.sent,console.log(c.data),0===c.errno&&(t.value=c.data,console.log(t.value));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e(),{nearbyList:t,getNearbyList:e}}};c("c2d2");const L=_()(I,[["render",y],["__scopeId","data-v-9d4b1960"]]);var P=L,A={class:"docker"},z={class:"material-icons iconfont"};function J(t,e,c,i,r,a){return Object(n["t"])(),Object(n["f"])("div",A,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(i.dockList,(function(t,e){return Object(n["t"])(),Object(n["f"])("div",{class:Object(n["p"])(["docker__item",{docker__item:!0,"docker__item--active":0===e}]),key:t},[Object(n["g"])("span",z,Object(n["C"])(t.icon),1),Object(n["i"])(" "+Object(n["C"])(t.text),1)],2)})),128))])}var N={name:"docker",setup:function(){var t=[{icon:"home",text:"home"},{icon:"shopping_cart",text:"購物車"},{icon:"toc",text:"訂單"},{icon:"perm_identity",text:"我的"}];return{dockList:t}}};c("9f70");const B=_()(N,[["render",J],["__scopeId","data-v-5df7c8ba"]]);var D=B,R={name:"Home",components:{StaticPart:h,Nearby:P,Docker:D}};c("df0a");const E=_()(R,[["render",r]]);e["default"]=E},c2d2:function(t,e,c){"use strict";c("a306")},d7d0:function(t,e,c){"use strict";c("b0c0");var n=c("7a23"),i={class:"shop"},r=["src"],a={class:"shop__content__title"},s={class:"shop__content__tags"},o={class:"shop__content__tag"},l={class:"shop__content__tag"},b={class:"shop__content__tag"},u={class:"shop__content__highlight"};function d(t,e,c,d,p,j){return Object(n["t"])(),Object(n["f"])("div",i,[Object(n["g"])("img",{class:"shop__img",src:c.item.imgUrl,alt:""},null,8,r),Object(n["g"])("div",{class:Object(n["p"])(["shop__content",{shop__content:!0,"shop__content--bordered":!c.hideBorder}])},[Object(n["g"])("div",a,Object(n["C"])(c.item.name),1),Object(n["g"])("div",s,[Object(n["g"])("span",o,"月售: "+Object(n["C"])(c.item.sales),1),Object(n["g"])("span",l,"起送: "+Object(n["C"])(c.item.expressLimit),1),Object(n["g"])("span",b,"基礎運費: "+Object(n["C"])(c.item.expressPrice),1)]),Object(n["g"])("p",u,Object(n["C"])(c.item.slogan),1)],2)])}var p={name:"ShopInfo",props:["item","hideBorder"]},j=(c("8eba"),c("d959")),g=c.n(j);const O=g()(p,[["render",d],["__scopeId","data-v-2a315eff"]]);e["a"]=O},df0a:function(t,e,c){"use strict";c("97da")},fb2d:function(t,e,c){t.exports=c.p+"img/banner.8b5f8d75.jpg"}}]);
//# sourceMappingURL=chunk-211ffdd6.d3765758.js.map