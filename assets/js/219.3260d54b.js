(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{1e3:function(s,t,n){"use strict";n.r(t);var a=n(13),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_083-将热点缓存自动降级解决方案的代码运行后观察效果以及调试和修复-bug"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_083-将热点缓存自动降级解决方案的代码运行后观察效果以及调试和修复-bug"}},[s._v("#")]),s._v(" 083. 将热点缓存自动降级解决方案的代码运行后观察效果以及调试和修复 bug")]),s._v(" "),n("h2",{attrs:{id:"热点感知测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#热点感知测试"}},[s._v("#")]),s._v(" 热点感知测试")]),s._v(" "),n("p",[s._v("测试：")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("nginx 需要 "),n("code",[s._v("/usr/servers/nginx/sbin/nginx -s reload")])])]),s._v(" "),n("li",[n("p",[s._v("在一些关键处增加日志打印，方便查看调试结果")])]),s._v(" "),n("li",[n("p",[s._v("后面都在本地运行 storm 了，由于 gradle 打包太麻烦了。 HotProductTopology")])]),s._v(" "),n("li",[n("p",[s._v("修改应用层 nginx 上的模板 html")]),s._v(" "),n("p",[s._v("因为需要观察是否被降级为随机路由了，在模板上写上自己本机的 hostanme 即可")])])]),s._v(" "),n("p",[s._v("调试日志如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("商品 1,次数 1\nThread-35：[1=1, null, null]\nThread-36：[null, null, null]\n商品 2,次数 1\nThread-36：[2=1, null, null]\nThread-35：[1=1, null, null]\n商品 3,次数 1\n商品 4,次数 1\n51677 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 1 个，平均访问值为 1\n51677 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[]\n51688 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 1 个，平均访问值为 1\n51688 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[]\nThread-36：[2=1, 4=1, null]\nThread-35：[1=1, 3=1, null]\n商品 5,次数 1\n56678 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 2 个，平均访问值为 1\n56678 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[]\n56689 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 1 个，平均访问值为 1\n56689 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[]\n商品 6,次数 1\nThread-36：[2=1, 4=1, 6=1]\nThread-35：[1=1, 3=1, 5=1]\n商品 6,次数 2\n商品 6,次数 3\n商品 6,次数 4\n商品 6,次数 5\n商品 6,次数 6\n商品 6,次数 7\n商品 6,次数 8\n商品 6,次数 9\n61679 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 2 个，平均访问值为 1\n61679 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[]\n61690 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 2 个，平均访问值为 1\n61690 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 发现一个热点商品：6=9  // 倍数设置的 5 。9 满足条件称为热点了\n商品 6,次数 10\n商品 6,次数 11\n商品 6,次数 12\n商品 6,次数 13\n商品 6,次数 14\n商品 6,次数 15\n商品 6,次数 16\n62209 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[6]\n商品 6,次数 17\n商品 6,次数 18\nThread-36：[6=18, 2=1, 4=1]\nThread-35：[1=1, 3=1, 5=1]\n66680 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 2 个，平均访问值为 1\n66681 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[]\n商品 6,次数 19\n商品 6,次数 20\n商品 6,次数 21\n商品 6,次数 22\n商品 6,次数 23\n67211 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 2 个，平均访问值为 1\n67211 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 发现一个热点商品：6=23\n67301 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[6]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br")])]),n("p",[s._v("通过日志观察到该商品，当成为热点的时候，触发了往 nginx 上推送标志，\n进行策略降级（这个可以通过）不停的访问 "),n("code",[s._v("http://eshop-cache03/product?method=product&productId=6&shopId=1")]),s._v("\n商品 id 为 6 的这个商品，当不是热点商品的时候，只会被路由到指定机器上，当成为热点之后，就会随机路由了")]),s._v(" "),n("h2",{attrs:{id:"热点消失感知测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#热点消失感知测试"}},[s._v("#")]),s._v(" 热点消失感知测试")]),s._v(" "),n("p",[s._v("怎么测试热点消失呢？看上面的日志有一条很重要的信息")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Thread-36：[6=18, 2=1, 4=1]\n66680 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 2 个，平均访问值为 1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("商品 id 为 6 能被计算为瞬时热点商品是因为，后两个商品平均访问次数为 1，大于 5 倍的阈值，\n那么让 商品 id 为 6 的取消热点的方案就出来了：选择商品 id 为 2 的狂刷，把 6 的顶下来")]),s._v(" "),n("p",[s._v("测试日志如下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Thread-36：[6=13, 2=2, 4=1]\n85287 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 2 个，平均访问值为 1\n85287 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 发现一个热点商品：6=13\n85364 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[6]\n...\nThread-36：[2=25, 6=13, 4=1]\n90364 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 2 个，平均访问值为 7\n90364 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[]\n90364 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 一个热点商品消失了：6\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("这个时候再访问 id=6 的商品，发现一直被路由到 eshop-eache01 上了")]),s._v(" "),n("h2",{attrs:{id:"优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[s._v("#")]),s._v(" 优化")]),s._v(" "),n("p",[s._v("根据日志来看，当商品 id=6 被定为热点的时候，如果没有其他热点商品进来，那么按照现在休眠 5 秒的时间，\n每 5 秒就会获取一次缓存并推送到 nginx 上。可以针对这一点进行优化")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3. 计算热点商品")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" avg95Count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Entry")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" entry "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" countList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("entry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" avg95Avg "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" threshold"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"发现一个热点商品："')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" entry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       hotPidList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("entry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("lastTimeHotPids"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("contains")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("entry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果该商品已经是热点商品了，则不推送，新热点商品才推送")]),s._v("\n           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里根据具体业务要求进行定制")]),s._v("\n           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 推送热点商品信息到 所有 nginx 上")]),s._v("\n           "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushHotToNginx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("entry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),n("p",[s._v("本小结是为了解决：热点商品在路由 hash 策略下，大流量打到同一台机器上扛不住\n方案思路如下：")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("通过 storm 实时统计访问次数")])]),s._v(" "),n("li",[n("p",[s._v("热点商品感知：对每个 task 中的访问列表排序，前 5% 的商品与后 95% 商品平均访问值进行阀值比较，达到到具体设定倍数即认为是热点商品")])]),s._v(" "),n("li",[n("p",[s._v("热点商品消失感知：记录上一次的热点商品，当它跌出前 5% 时，被感知到，通过两次热点列表比较能得到")])]),s._v(" "),n("li",[n("p",[s._v("感知到热点商品时通知流量分发层 nginx 改变路由策略")]),s._v(" "),n("p",[s._v("分发到更多的 nginx 上去，同时 storm 需要反推该商品详情到更多的 nginx 上去，\n本列是所有 nginx，随机分发策略")])]),s._v(" "),n("li",[n("p",[s._v("感知到热点消失时，通知流量分发层取消降级策略")]),s._v(" "),n("p",[s._v("之前推送到 nginx 上的缓存可以不用理睬，因为设置了缓存过期时间。\n只需要再流量分发层上取消掉随机分发策略即可")])])]),s._v(" "),n("iframe",{attrs:{height:"500px",width:"100%",frameborder:"0",allowfullscreen:"true",src:s.$withBase("/ads.html")}})])}),[],!1,null,null,null);t.default=r.exports}}]);