(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1303:function(t,e,a){"use strict";a.r(e);var s=a(13),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"tomcat-的-gc-调优实战"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat-的-gc-调优实战"}},[t._v("#")]),t._v(" Tomcat 的 GC 调优实战")]),t._v(" "),s("h2",{attrs:{id:"gc-调优步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gc-调优步骤"}},[t._v("#")]),t._v(" GC 调优步骤")]),t._v(" "),s("ol",[s("li",[t._v("打印 GC 日志")]),t._v(" "),s("li",[t._v("根据日志得到关键性能指标")]),t._v(" "),s("li",[t._v("分析 GC 原因，调优 JVM 参数")])]),t._v(" "),s("h2",{attrs:{id:"初始设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始设置"}},[t._v("#")]),t._v(" 初始设置")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 禁用声明式 GC 语法，在程序只中显示的调用 System.gc，禁用这个，不然可能会影响 GC 的表现")]),t._v("\n-XX:+DisableExplicitGC\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当堆溢出的时候，记录快照")]),t._v("\n-XX:+HeapDumpOnOutofMemoryError\n-XX:HeapDumpPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$CATALINA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("HOME")]),t._v("/logs/\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打印 GC 日志")]),t._v("\n-XX:+PrintGCDetails\n-XX:+PrintGCTimeStamps\n-XX:+PrintGCDateStamps\n-Xloggc:"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$SCATALINA_HOME")]),t._v("/logs/gc.log\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h2",{attrs:{id:"parallel-gc-调优的指导原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parallel-gc-调优的指导原则"}},[t._v("#")]),t._v(" Parallel GC 调优的指导原则")]),t._v(" "),s("ul",[s("li",[t._v("除非确定，否则不要设置最大堆内存")]),t._v(" "),s("li",[t._v("优先设置吞吐量目标")]),t._v(" "),s("li",[t._v("如果吞吐量目标达不到，调大最大内存，不能让 OS 使用 Swap，如果仍然达不到，降低目标")]),t._v(" "),s("li",[t._v("吞吐量能达到，GC 时间太长，设置停顿时间的目标")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(933),alt:"image-20210207150551614"}})]),t._v(" "),s("p",[t._v("下面记录下初始参数下的性能指标")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("吞吐量 "),s("br"),t._v(" Throughput")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("最小停顿时间"),s("br"),t._v("Min Pause")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("最大停顿时间"),s("br"),t._v("Max Pause")]),t._v(" "),s("th",[t._v("平均停顿时间"),s("br"),t._v(" Avg Pause")]),t._v(" "),s("th",[t._v("YGC 总次数"),s("br"),t._v(" Number of gc pauses")]),t._v(" "),s("th",[t._v("FullGC 总次数"),s("br"),t._v("Number of full gc pauses")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("96.19%")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0.00625s")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0.03446s")]),t._v(" "),s("td",[t._v("0.01464s")]),t._v(" "),s("td",[t._v("5")]),t._v(" "),s("td",[t._v("1")])])])]),t._v(" "),s("p",[t._v("从上图可以看到由于 Metadata 区导致了一次 YGC 和 一次 FullGC，我们尝试调大 Metadata 区的大小。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(934),alt:"image-20210207150813253"}})]),t._v(" "),s("p",[t._v("从上图所知， Perm heap 其实就是 Metadata 区（该软件的一些含义可以在他的官方文档上查看），这里只占用了 20.1 M，我们尝试调大它的空间")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-XX:MetaspaceSize=64M\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("调整为 64M 后，再次查看他的 GC 日志")]),t._v(" "),s("p",[s("img",{attrs:{src:a(935),alt:"image-20210207151320765"}})]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("吞吐量 "),s("br"),t._v(" Throughput")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("最小停顿时间"),s("br"),t._v("Min Pause")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("最大停顿时间"),s("br"),t._v("Max Pause")]),t._v(" "),s("th",[t._v("平均停顿时间"),s("br"),t._v(" Avg Pause")]),t._v(" "),s("th",[t._v("YGC 总次数"),s("br"),t._v(" Number of gc pauses")]),t._v(" "),s("th",[t._v("FullGC 总次数"),s("br"),t._v("Number of full gc pauses")]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("96.19%")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0.00625s")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0.03446s")]),t._v(" "),s("td",[t._v("0.01464s")]),t._v(" "),s("td",[t._v("5")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("调整前")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("96.83%")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0.01132s")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0.02419s")]),t._v(" "),s("td",[t._v("0.01812s")]),t._v(" "),s("td",[t._v("4")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("调整后")])])])]),t._v(" "),s("p",[t._v("从结果来看，整体是变好了，Metadata 区的两次 YGC 和 FullGC 没有了")]),t._v(" "),s("p",[t._v("后面的参数就不一一尝试了，总结下：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("设置 Metaspace 大小")]),t._v(" "),s("p",[s("code",[t._v("-XX:MetaspaceSize=64M -XX:MaxMetaspaceSize=64M")])])]),t._v(" "),s("li",[s("p",[t._v("添加吞吐量和停顿时间参数")]),t._v(" "),s("p",[s("code",[t._v("-XX:GCTimeRatio=99 -XX:MaxGCPauseMillis=100")])]),t._v(" "),s("p",[t._v("不一定调整之后性能会变高，所以需要去尝试调整，然后查看日志的分析反馈")])]),t._v(" "),s("li",[s("p",[t._v("修改动态扩容增量")]),t._v(" "),s("p",[s("code",[t._v("-XX:YoungGenerationSizeIncrement=30")]),t._v("  默认值是 20%，这里增加 10%")]),t._v(" "),s("p",[t._v("由于发现产生了 4 次的 YGC，增加 Young 区大小，应该可以消除")])])]),t._v(" "),s("h2",{attrs:{id:"g1-gc-最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#g1-gc-最佳实践"}},[t._v("#")]),t._v(" G1 GC 最佳实践")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("年轻代大小：")]),t._v(" "),s("p",[t._v("避免使用 "),s("code",[t._v("-Xmn")]),t._v("、"),s("code",[t._v("-XX:NewRatio")]),t._v(" 等显示设置 Young 区大小，会覆盖暂停时间目标")])]),t._v(" "),s("li",[s("p",[t._v("暂停时间目标：")]),t._v(" "),s("p",[t._v("暂停时间不要太严苛，其吞吐量目标是 90% 的应用程序时间和 10% 的垃圾回收时间，太严苛会直接影响到吞吐量")])])]),t._v(" "),s("p",[t._v("MixGC 调优：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("-XX:InitiatingHeapOccupancyPercent")])]),t._v(" "),s("li",[s("code",[t._v("-XX:G1MixedGCLiveThresholdPercent")]),t._v("、"),s("code",[t._v("-XX:G1HeapWastePercent")])]),t._v(" "),s("li",[s("code",[t._v("-XX:G1MixedGCCountTarget")])]),t._v(" "),s("li",[s("code",[t._v("-XX:G1OldCSetRegionThresholdPercent")])])]),t._v(" "),s("p",[t._v("这些在垃圾器一章节有讲解过，这里还是针对那章节的知识点，进行实战。")]),t._v(" "),s("p",[t._v("GC 调优就是根据日志的反馈，去针对的改变可能的参数，增加它的相关性能指标")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("重要的事情")]),t._v(" "),s("p",[t._v("这里的调整思路，包括参数含义，在官方文档里面都有写，这里入个门，详细的去对应的学；")]),t._v(" "),s("p",[t._v("官方文档总共只有十几章，想要学习这一块一定要去官方文档去看看。")])]),t._v(" "),s("iframe",{attrs:{height:"500px",width:"100%",frameborder:"0",allowfullscreen:"true",src:t.$withBase("/ads.html")}})])}),[],!1,null,null,null);e.default=v.exports},933:function(t,e,a){t.exports=a.p+"assets/img/image-20210207150551614.dd0f34e1.png"},934:function(t,e,a){t.exports=a.p+"assets/img/image-20210207150813253.ee006454.png"},935:function(t,e,a){t.exports=a.p+"assets/img/image-20210207151320765.9c0b7272.png"}}]);