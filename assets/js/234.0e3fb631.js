(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{1028:function(s,t,a){"use strict";a.r(t);var e=a(13),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_135-商品详情页动态渲染系统-部署-centos-虚拟机集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_135-商品详情页动态渲染系统-部署-centos-虚拟机集群"}},[s._v("#")]),s._v(" 135. 商品详情页动态渲染系统：部署 CentOS 虚拟机集群")]),s._v(" "),a("p",[s._v("再次把基础设施都合并下，讲师电脑是 24 G 运行电脑，而我才 16 G;")]),s._v(" "),a("p",[s._v("目前架构中用到的有：基础设施、spring cloud、docker、jenkins，\n我就按 8 G 内存分 4 台服务器，一台 2 G内存（讲师是 4 台 4 G 机器）。")]),s._v(" "),a("h2",{attrs:{id:"在虚拟机中安装-centos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在虚拟机中安装-centos"}},[s._v("#")]),s._v(" 在虚拟机中安装 CentOS")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("之前章节的 4 台虚拟机可以删除，不会再使用了")])]),s._v(" "),a("p",[s._v("这里安装 2 台 2 G 内存的虚拟机")]),s._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/cache-pdp/006.html#在虚拟机中安装-centos"}},[s._v("基本安装与配置请参考")])],1),s._v(" "),a("li",[a("RouterLink",{attrs:{to:"/posts/virtualbox/"}},[s._v("virtualbox 网络篇- Host Only 配置方式")])],1)]),s._v(" "),a("p",[s._v("在 virtualbox 中使用 host only 方式比较方便，换一个网络环境也不影响，\n所以这里还是使用之前的虚拟网卡 ip 来为虚拟机分配：")]),s._v(" "),a("ul",[a("li",[s._v("网关 192.168.99.1")]),s._v(" "),a("li",[s._v("机器 ip 段从：192.168.99.11 开始")])]),s._v(" "),a("p",[s._v("安装内容如下（这里的内容其实就是上面参考资料里面的教程笔记）：")]),s._v(" "),a("ul",[a("li",[s._v("2 台 2 G 内存虚拟机")]),s._v(" "),a("li",[s._v("在每个 CentOS 中都安装 Java 和 Perl")]),s._v(" "),a("li",[s._v("配置 ssh 免密通信")])]),s._v(" "),a("h3",{attrs:{id:"虚拟机信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机信息"}},[s._v("#")]),s._v(" 虚拟机信息：")]),s._v(" "),a("ul",[a("li",[s._v("eshop-detail01：192.168.99.11")]),s._v(" "),a("li",[s._v("eshop-detail02：192.168.99.12")])]),s._v(" "),a("p",[s._v("用户密码统一使用：hadoop")]),s._v(" "),a("p",[s._v("由于本人开发中使用 1.8，所以 "),a("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/java-archive-javase8-2177648.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("JDK 版本使用 jdk-8u202-linux-i586.rpm"),a("OutboundLink")],1),s._v("\n，此版本是最后一个免费版本，目前下载需要登录官网后才能下载")]),s._v(" "),a("h3",{attrs:{id:"按照-host-only-方式配置之后无法访问外网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按照-host-only-方式配置之后无法访问外网"}},[s._v("#")]),s._v(" 按照 host only 方式配置之后无法访问外网")]),s._v(" "),a("p",[s._v("之前的虚拟机可以正常上网，新安装的虚拟机可以与宿主机连接，但是")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-detail01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ping www.baidu.com")]),s._v("\nping: unknown "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" www.baidu.com\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-detail01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ping 8.8.8.8")]),s._v("\nPING "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("84")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" bytes of data.\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("39.3")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("39.6")]),s._v(" ms\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("无法通过域名连通外网，解决方案：检查 "),a("code",[s._v("/etc/resolv.conf")]),s._v(" 文件，\n查看是否有配置 nameserver，如果没有请按如下配置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nameserver "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("223.5")]),s._v(".5.5\nnameserver "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("223.6")]),s._v(".6.6\nnameserver "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("114.114")]),s._v(".114.114\nnameserver "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("iframe",{attrs:{height:"500px",width:"100%",frameborder:"0",allowfullscreen:"true",src:s.$withBase("/ads.html")}})])}),[],!1,null,null,null);t.default=n.exports}}]);