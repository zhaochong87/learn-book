(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1017:function(t,v,_){"use strict";_.r(v);var e=_(13),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_126-亿级流量大型电商网站的商品详情页系统架构的整体设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_126-亿级流量大型电商网站的商品详情页系统架构的整体设计"}},[t._v("#")]),t._v(" 126. 亿级流量大型电商网站的商品详情页系统架构的整体设计")]),t._v(" "),e("p",[t._v("商品详情页整体架构组成（也就是上一章节的第三版）")]),t._v(" "),e("p",[e("img",{attrs:{src:_(418),alt:""}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("动态渲染系统")]),t._v(" "),e("p",[t._v("将页面中静的数据，直接在变更的时候推送到缓存，然后每次请求页面动态渲染新数据")]),t._v(" "),e("p",[t._v("商品详情页系统（负责静的部分）：被动接收数据，存储 redis，nginx+lua 动态渲染")]),t._v(" "),e("p",[t._v("商品详情页动态服务系统（对外提供数据接口）")]),t._v(" "),e("ul",[e("li",[t._v("提供各种数据接口")]),t._v(" "),e("li",[t._v("动态调用依赖服务的接口，产生数据并且返回响应")]),t._v(" "),e("li",[t._v("从商品详情页系统处理出来的 redis 中，获取数据，并返回响应")])])]),t._v(" "),e("li",[e("p",[t._v("OneService 系统")]),t._v(" "),e("p",[t._v("动的部分，都是走 ajax 异步请求的，不是走动态渲染的，\n商品详情页统一服务系统（负责动的部分）")])]),t._v(" "),e("li",[e("p",[t._v("前端页面")]),t._v(" "),e("p",[t._v("静的部分，直接被动态渲染系统渲染进去了")]),t._v(" "),e("p",[t._v("动的部分，html 一到浏览器，直接走 js 脚本，ajax 异步加载")]),t._v(" "),e("p",[t._v("商品详情页，分段存储，ajax 异步分屏加载")])]),t._v(" "),e("li",[e("p",[t._v("工程运维：限流、压测、灰度发布")])])]),t._v(" "),e("p",[t._v("从上图和描述来看，暂时笔者还不知道为什么有动态渲染系统 和 OneService 系统，\n他们在这里表现出来只是少了一个 mq，但是在高峰期要么失败，要么降级，\n与 mq 排队更新，貌似是差不多的")]),t._v(" "),e("iframe",{attrs:{height:"500px",width:"100%",frameborder:"0",allowfullscreen:"true",src:t.$withBase("/ads.html")}})])}),[],!1,null,null,null);v.default=a.exports},418:function(t,v,_){t.exports=_.p+"assets/img/markdown-img-paste-20190630212922533.706759ad.png"}}]);