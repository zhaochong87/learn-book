(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1215:function(s,t,n){"use strict";n.r(t);var a=n(13),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_01-tls-又是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-tls-又是什么"}},[s._v("#")]),s._v(" 01 | TLS 又是什么？")]),s._v(" "),a("p",[s._v("在 "),a("RouterLink",{attrs:{to:"/http-protocol/03/07.html"}},[s._v("HTTP有哪些优点？又有哪些缺点？")]),s._v("  曾经谈到过 HTTP 的一些缺点，其中的「无状态」在加入 Cookie 后得到了解决，而另两个缺点—— "),a("strong",[s._v("明文")]),s._v(" 和 "),a("strong",[s._v("不安全")]),s._v(" 仅凭 HTTP 自身是无力解决的，需要引入新的 HTTPS 协议。")],1),s._v(" "),a("h2",{attrs:{id:"为什么要有-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有-https"}},[s._v("#")]),s._v(" 为什么要有 HTTPS？")]),s._v(" "),a("p",[s._v("简单的回答是 "),a("strong",[s._v("因为 HTTP 不安全")]),s._v(" 。")]),s._v(" "),a("p",[s._v("由于 HTTP "),a("strong",[s._v("天生明文")]),s._v(" 的特点，整个传输过程完全透明，任何人都能够在链路中截获、修改或者伪造请求 / 响应报文，数据不具有可信性。")]),s._v(" "),a("p",[s._v("比如，前几讲中说过的 "),a("strong",[s._v("代理服务")]),s._v(" 。它作为 HTTP 通信的中间人，在数据上下行的时候可以添加或删除部分头字段，也可以使用黑白名单过滤 body 里的关键字，甚至直接发送虚假的请求、响应，而浏览器和源服务器都没有办法判断报文的真伪。")]),s._v(" "),a("p",[s._v("这对于网络购物、网上银行、证券交易等需要高度信任的应用场景来说是非常致命的。如果没有基本的安全保护，使用互联网进行各种电子商务、电子政务就根本无从谈起。")]),s._v(" "),a("p",[s._v("对于安全性要求不那么高的新闻、视频、搜索等网站来说，由于互联网上的恶意用户、恶意代理越来越多，也很容易遭到 "),a("strong",[s._v("流量劫持")]),s._v(" 的攻击，在页面里强行嵌入广告，或者分流用户，导致各种利益损失。")]),s._v(" "),a("p",[s._v("对于你我这样的普通网民来说，HTTP 不安全的隐患就更大了，上网的记录会被轻易截获，网站是否真实也无法验证，黑客可以伪装成银行网站，盗取真实姓名、密码、银行卡等敏感信息，威胁人身安全和财产安全。")]),s._v(" "),a("p",[s._v("总的来说，今天的互联网已经不再是早期的田园牧歌时代，而是进入了黑暗森林状态。上网的时候必须步步为营、处处小心，否则就会被不知道埋伏在哪里的黑客所猎杀")]),s._v(" "),a("h2",{attrs:{id:"什么是安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是安全"}},[s._v("#")]),s._v(" 什么是安全？")]),s._v(" "),a("p",[s._v("既然 HTTP 不安全，那什么样的通信过程才是安全的呢？")]),s._v(" "),a("p",[s._v("通常认为，如果通信过程具备了四个特性，就可以认为是 「安全」的，这四个特性是："),a("strong",[s._v("机密性、完整性，身份认证和不可否认")]),s._v(" 。")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("机密性")]),s._v("（Secrecy/Confidentiality）")]),s._v(" "),a("p",[s._v("是指对数据的「保密」，只能由可信的人访问，对其他人是不可见的秘密，简单来说就是不能让不相关的人看到不该看的东西。")]),s._v(" "),a("p",[s._v("比如小明和小红私下聊天，但隔墙有耳，被小强在旁边的房间里全偷听到了，这就是没有机密性。我们之前一直用的 Wireshark ，实际上也是利用了 HTTP 的这个特点，捕获了传输过程中的所有数据。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("完整性")]),s._v("（Integrity，也叫一致性）")]),s._v(" "),a("p",[s._v("是指数据在传输过程中 "),a("strong",[s._v("没有被窜改")]),s._v(" ，不多也不少，完完整整地保持着原状。")]),s._v(" "),a("p",[a("strong",[s._v("机密性虽然可以让数据成为秘密")]),s._v(" ，但不能防止黑客对数据的修改，黑客可以替换数据，调整数据的顺序，或者增加、删除部分数据，破坏通信过程。")]),s._v(" "),a("p",[s._v("比如，小明给小红写了张纸条：明天公园见。小强把「公园」划掉，模仿小明的笔迹把这句话改成了「明天广场见」。小红收到后无法验证完整性，信以为真，第二天的约会就告吹了。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("身份认证")]),s._v("（Authentication）")]),s._v(" "),a("p",[s._v("是指确认对方的真实身份，也就是「证明你真的是你」，保证消息只能发送给可信的人。")]),s._v(" "),a("p",[s._v("如果通信时另一方是假冒的网站，那么数据再保密也没有用，黑客完全可以使用冒充的身份套出各种信息，加密和没加密一样。")]),s._v(" "),a("p",[s._v("比如，小明给小红写了封情书：我喜欢你，但不留心发给了小强。小强将错就错，假冒小红回复了一个「白日做梦」，小明不知道这其实是小强的话，误以为是小红的，后果可想而知。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("不可否认")]),s._v("（Non-repudiation/Undeniable）")]),s._v(" "),a("p",[s._v("也叫不可抵赖，意思是不能否认已经发生过的行为，不能「说话不算数、耍赖皮」。")])])]),s._v(" "),a("p",[s._v("使用前三个特性，可以解决安全通信的大部分问题，但如果缺了不可否认，那通信的事务真实性就得不到保证，有可能出现老赖。")]),s._v(" "),a("p",[s._v("比如，小明借了小红一千元，没写借条，第二天矢口否认，小红也确实拿不出借钱的证据，只能认倒霉。另一种情况是小明借钱后还了小红，但没写收条，小红于是不承认小明还钱的事，说根本没还，要小明再掏出一千元。")]),s._v(" "),a("p",[s._v("所以，只有同时具备了机密性、完整性、身份认证、不可否认这四个特性，通信双方的利益才能有保障，才能算得上是真正的安全。")]),s._v(" "),a("h2",{attrs:{id:"什么是-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-https"}},[s._v("#")]),s._v(" 什么是 HTTPS？")]),s._v(" "),a("p",[s._v("说到这里，终于轮到今天的主角 HTTPS 出场了，它为 HTTP 增加了刚才所说的四大安全特性。")]),s._v(" "),a("p",[s._v("HTTPS 其实是一个「非常简单」的协议，RFC 文档很小，只有短短的 7 页，里面规定了 "),a("strong",[s._v("新的协议名「https」，默认端口号 443")]),s._v(" ，至于其他的什么请求 - 应答模式、报文结构、请求方法、URI、头字段、连接管理等等都完全沿用 HTTP，没有任何新的东西。")]),s._v(" "),a("p",[s._v("也就是说，除了协议名 "),a("code",[s._v("http")]),s._v(" 和端口号 80 这两点不同，HTTPS 协议在语法、语义上和 HTTP 完全一样，优缺点也照单全收（当然要除去「明文」和「不安全」）。")]),s._v(" "),a("p",[s._v("不信你可以用 URI "),a("code",[s._v("https://www.chrono.com")]),s._v("  访问之前 08 至 21 讲的所有示例，看看它的响应报文是否与 HTTP 一样。")]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("https:")]),s._v("//www.chrono.com\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("https:")]),s._v("//www.chrono.com/11-1\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("https:")]),s._v("//www.chrono.com/15-1?name=a.json\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("https:")]),s._v("//www.chrono.com/16-1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:n(730),alt:"img"}})]),s._v(" "),a("p",[s._v("你肯定已经注意到了，在用 HTTPS 访问实验环境时 Chrome 会有不安全提示，必须点击 "),a("code",[s._v("高级 - 继续前往")]),s._v(" 才能顺利显示页面。而且如果用 Wireshark 抓包，也会发现与 HTTP 不一样，不再是简单可见的明文，多了 "),a("code",[s._v("Client Hello")]),s._v("、"),a("code",[s._v("Server Hello")]),s._v(" 等新的数据包。")]),s._v(" "),a("p",[a("img",{attrs:{src:n(731),alt:"image-20210309154706676"}})]),s._v(" "),a("p",[s._v("通过抓包，确实不太容易分清楚数据内容了")]),s._v(" "),a("p",[s._v("这就是 HTTPS 与 HTTP 最大的区别，它能够鉴别危险的网站，并且尽最大可能保证你的上网安全，防御黑客对信息的窃听、窜改或者钓鱼、伪造。")]),s._v(" "),a("p",[s._v("你可能要问了，既然没有新东西，HTTPS 凭什么就能做到机密性、完整性这些安全特性呢？")]),s._v(" "),a("p",[s._v("秘密就在于 HTTPS 名字里的 "),a("code",[s._v("S")]),s._v(" ，它把 HTTP 下层的传输协议由 TCP/IP 换成了 SSL/TLS，由 "),a("strong",[s._v("HTTP over TCP/IP")]),s._v(" 变成了 "),a("strong",[s._v("HTTP over SSL/TLS")]),s._v(" ，让 HTTP 运行在了安全的 SSL/TLS 协议上（可参考 "),a("RouterLink",{attrs:{to:"/http-protocol/02/04.html"}},[s._v("与 HTTP 相关的各种协议")]),s._v("  、 "),a("RouterLink",{attrs:{to:"/http-protocol/02/05.html"}},[s._v("常说的四层和七层到底是什么？五层、六层哪去了？")]),s._v("），收发报文不再使用 Socket API，而是调用专门的安全接口。")],1),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("上面表述有误，不是将 TCP/IP 换成了 SSL/TLS，另外下面的图是正确的，只是上面表述不对")]),s._v(" "),a("p",[s._v("传输还是使用的 TCP/IP 协议，只是 SSL/TLS 把 HTTP 协议再包装了一下")])]),s._v(" "),a("p",[a("img",{attrs:{src:n(732),alt:"img"}})]),s._v(" "),a("p",[s._v("所以说，HTTPS 本身并没有什么惊世骇俗的本事，全是靠着后面的 SSL/TLS 撑腰。只要学会了 SSL/TLS，HTTPS 自然就手到擒来。")]),s._v(" "),a("h2",{attrs:{id:"ssl-tls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssl-tls"}},[s._v("#")]),s._v(" SSL/TLS")]),s._v(" "),a("p",[s._v("现在我们就来看看 SSL/TLS，它到底是个什么来历。")]),s._v(" "),a("p",[s._v("SSL 即安全套接层（Secure Sockets Layer），在 OSI 模型中处于第 5 层（会话层），由网景公司于 1994 年发明，有 v2 和 v3 两个版本，而 v1 因为有严重的缺陷从未公开过。")]),s._v(" "),a("p",[s._v("SSL 发展到 v3 时已经证明了它自身是一个非常好的安全通信协议，于是互联网工程组 IETF 在 1999 年把它改名为 TLS（"),a("strong",[s._v("传输层安全，Transport Layer Security")]),s._v("），正式标准化，版本号从 1.0 重新算起，所以 TLS1.0 实际上就是 SSLv3.1。")]),s._v(" "),a("p",[s._v("到今天 TLS 已经发展出了三个版本，分别是 2006 年的 1.1、2008 年的 1.2 和去年（2018）的 1.3，每个新版本都紧跟密码学的发展和互联网的现状，持续强化安全和性能，已经成为了信息安全领域中的权威标准。")]),s._v(" "),a("p",[s._v("目前应用的最广泛的 TLS 是 1.2，而之前的协议（TLS1.1/1.0、SSLv3/v2）都已经被认为是不安全的，各大浏览器即将在 2020 年左右停止支持，所以接下来的讲解都针对的是 TLS1.2。")]),s._v(" "),a("p",[s._v("TLS 由记录协议、握手协议、警告协议、变更密码规范协议、扩展协议等几个子协议组成，综合使用了对称加密、非对称加密、身份认证等许多密码学前沿技术。")]),s._v(" "),a("p",[s._v("浏览器和服务器在使用 TLS 建立连接时需要选择一组恰当的加密算法来实现安全通信，这些算法的组合被称为 "),a("strong",[s._v("密码套件（cipher suite，也叫加密套件）")]),s._v(" 。")]),s._v(" "),a("p",[s._v("你可以访问实验环境的 URI "),a("code",[s._v("https://www.chrono.com/23-1")]),s._v("，对 TLS 和密码套件有个感性的认识。")]),s._v(" "),a("p",[s._v("响应内容为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("hello OpenSSL 1.1.0j  20 Nov 2018\n\nprotocol: TLSv1.2\n\nsni name: www.chrono.com\n\nclient cert: NONE\n\nclient curves: 0xaaaa:X25519:prime256v1:secp384r1\n\nclient suites: 0x3a3a:0x1301:0x1302:0x1303:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA:AES256-SHA\n\nserver suite: ECDHE-RSA-AES256-GCM-SHA384\n\nall suites in server:\n\nsuite 0: ECDHE-ECDSA-AES256-GCM-SHA384\nsuite 1: ECDHE-RSA-AES256-GCM-SHA384\nsuite 2: DHE-RSA-AES256-GCM-SHA384\nsuite 3: ECDHE-ECDSA-CHACHA20-POLY1305\nsuite 4: ECDHE-RSA-CHACHA20-POLY1305\nsuite 5: DHE-RSA-CHACHA20-POLY1305\nsuite 6: ECDHE-ECDSA-AES128-GCM-SHA256\nsuite 7: ECDHE-RSA-AES128-GCM-SHA256\nsuite 8: DHE-RSA-AES128-GCM-SHA256\nsuite 9: ECDHE-ECDSA-AES256-SHA384\nsuite 10: ECDHE-RSA-AES256-SHA384\nsuite 11: DHE-RSA-AES256-SHA256\nsuite 12: ECDHE-ECDSA-AES128-SHA256\nsuite 13: ECDHE-RSA-AES128-SHA256\nsuite 14: DHE-RSA-AES128-SHA256\nsuite 15: ECDHE-ECDSA-AES256-SHA\nsuite 16: ECDHE-RSA-AES256-SHA\nsuite 17: DHE-RSA-AES256-SHA\nsuite 18: ECDHE-ECDSA-AES128-SHA\nsuite 19: ECDHE-RSA-AES128-SHA\nsuite 20: DHE-RSA-AES128-SHA\nsuite 21: RSA-PSK-AES256-GCM-SHA384\nsuite 22: DHE-PSK-AES256-GCM-SHA384\nsuite 23: RSA-PSK-CHACHA20-POLY1305\nsuite 24: DHE-PSK-CHACHA20-POLY1305\nsuite 25: ECDHE-PSK-CHACHA20-POLY1305\nsuite 26: AES256-GCM-SHA384\nsuite 27: PSK-AES256-GCM-SHA384\nsuite 28: PSK-CHACHA20-POLY1305\nsuite 29: RSA-PSK-AES128-GCM-SHA256\nsuite 30: DHE-PSK-AES128-GCM-SHA256\nsuite 31: AES128-GCM-SHA256\nsuite 32: PSK-AES128-GCM-SHA256\nsuite 33: AES256-SHA256\nsuite 34: AES128-SHA256\nsuite 35: ECDHE-PSK-AES256-CBC-SHA384\nsuite 36: ECDHE-PSK-AES256-CBC-SHA\nsuite 37: SRP-RSA-AES-256-CBC-SHA\nsuite 38: SRP-AES-256-CBC-SHA\nsuite 39: RSA-PSK-AES256-CBC-SHA384\nsuite 40: DHE-PSK-AES256-CBC-SHA384\nsuite 41: RSA-PSK-AES256-CBC-SHA\nsuite 42: DHE-PSK-AES256-CBC-SHA\nsuite 43: AES256-SHA\nsuite 44: PSK-AES256-CBC-SHA384\nsuite 45: PSK-AES256-CBC-SHA\nsuite 46: ECDHE-PSK-AES128-CBC-SHA256\nsuite 47: ECDHE-PSK-AES128-CBC-SHA\nsuite 48: SRP-RSA-AES-128-CBC-SHA\nsuite 49: SRP-AES-128-CBC-SHA\nsuite 50: RSA-PSK-AES128-CBC-SHA256\nsuite 51: DHE-PSK-AES128-CBC-SHA256\nsuite 52: RSA-PSK-AES128-CBC-SHA\nsuite 53: DHE-PSK-AES128-CBC-SHA\nsuite 54: AES128-SHA\nsuite 55: PSK-AES128-CBC-SHA256\nsuite 56: PSK-AES128-CBC-SHA\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br")])]),a("p",[a("img",{attrs:{src:n(733),alt:"image-20210309160439908"}})]),s._v(" "),a("p",[s._v("看看后端代码是如何实现这个的")]),s._v(" "),a("div",{staticClass:"language-lua line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-lua"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- Copyright (C) 2019 by chrono")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- ssl/tls cipher suites")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('--local ssl = require "ngx.ssl"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" bit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bit"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" band "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" bit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("band\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" ffi "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ffi"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" ffi_new "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ffi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("new\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" ffi_gc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ffi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gc\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" ffi_copy "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ffi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("copy\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" ffi_str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ffi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("string\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" C "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ffi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("C\n\nffi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cdef"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("[[\ntypedef struct ssl_method_st SSL_METHOD;\ntypedef struct ssl_st SSL;\ntypedef struct ssl_ctx_st SSL_CTX;\n\nconst char *OpenSSL_version(int type);\nconst SSL_METHOD *TLS_method(void);\nSSL_CTX *SSL_CTX_new(const SSL_METHOD *meth);\nvoid SSL_CTX_free(SSL_CTX *ctx);\nSSL *SSL_new(SSL_CTX *ctx);\nvoid SSL_free(SSL *ssl);\n\nconst char *SSL_get_cipher_list(const SSL *s, int n);\nchar *SSL_get_shared_ciphers(const SSL *s, char *buf, int len);\n]]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" scheme "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scheme\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" scheme "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--ngx.log(ngx.ERR, scheme)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("redirect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("..")]),s._v("ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("host"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("..")]),s._v("ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request_uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("301")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- workaround on ubuntu 1604 OpenSSL 1.0.1f")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--if not pcall(ffi.typeof, 'OpenSSL_version') then")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--    return ngx.say('read openssl error.')")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--end")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" openssl_ver "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ffi_str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("OpenSSL_version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello openssl"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" openssl_ver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--ngx.say('\\nver: ', ssl.get_tls1_version_str())")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 打印客户端请求传递的 ssl 相关信息")]),s._v("\nngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\nprotocol: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ssl_protocol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\nsni name: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ssl_server_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\nclient cert: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ssl_client_verify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\nclient curves: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ssl_curves"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\nclient suites: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ssl_ciphers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\nserver suite: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ssl_cipher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" ssl_ctx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SSL_CTX_new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("TLS_method")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" ssl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SSL_new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ssl_ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--local cipher_list = C.SSL_get_cipher_list(ssl, 0)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--ngx.say('list 0: ', ffi_str(cipher_list))")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--local buf = ffi_new('char[?]', 4096)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--C.SSL_get_shared_ciphers(ssl, buf, 4096)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--ngx.say('list: ', ffi_str(buf))")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 打印服务器中支持的所有套件")]),s._v("\nngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\nall suites in server:\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" cipher_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SSL_get_cipher_list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" cipher_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" ffi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("null "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n    ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'suite '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("': '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ffi_str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cipher_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\nC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SSL_free")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SSL_CTX_free")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ssl_ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br")])]),a("p",[s._v("你可以看到，实验环境使用的 TLS 是 1.2，客户端和服务器都支持非常多的密码套件，而最后协商选定的是 "),a("code",[s._v("ECDHE-RSA-AES256-GCM-SHA384")]),s._v(" 。")]),s._v(" "),a("p",[s._v("这么长的名字看着有点晕吧，不用怕，其实 TLS 的密码套件命名非常规范，格式很固定。基本的形式是")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("密钥交换算法 + 签名算法 + 对称加密算法 + 摘要算法\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("比如刚才的密码套件 "),a("code",[s._v("ECDHE-RSA-AES256-GCM-SHA384")]),s._v(" 的意思就是：")]),s._v(" "),a("ul",[a("li",[s._v("握手时使用 ECDHE 算法进行密钥交换")]),s._v(" "),a("li",[s._v("用 RSA 签名和身份认证，")]),s._v(" "),a("li",[s._v("握手后的通信使用 AES 对称算法，密钥长度 256 位")]),s._v(" "),a("li",[s._v("分组模式是 GCM")]),s._v(" "),a("li",[s._v("摘要算法 SHA384 用于消息认证和产生随机数")])]),s._v(" "),a("h2",{attrs:{id:"openssl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openssl"}},[s._v("#")]),s._v(" OpenSSL")]),s._v(" "),a("p",[s._v("说到 TLS，就不能不谈到 OpenSSL，它是一个著名的 "),a("strong",[s._v("开源密码学程序库和工具包")]),s._v("，几乎支持所有公开的加密算法和协议，已经成为了事实上的标准，许多应用软件都会使用它作为底层库来实现 TLS 功能，包括常用的 Web 服务器 Apache、Nginx 等。")]),s._v(" "),a("p",[s._v("OpenSSL 是从另一个开源库 SSLeay 发展出来的，曾经考虑命名为 "),a("code",[s._v("OpenTLS")]),s._v("，但当时（1998 年）TLS 还未正式确立，而 SSL 早已广为人知，所以最终使用了 "),a("code",[s._v("OpenSSL")]),s._v(" 的名字。")]),s._v(" "),a("p",[s._v("OpenSSL 目前有三个主要的分支，1.0.2 和 1.1.0 都将在今年（2019）年底不再维护，最新的长期支持版本是 1.1.1，我们的实验环境使用的 OpenSSL 是 "),a("code",[s._v("1.1.0j")]),s._v(" 。")]),s._v(" "),a("p",[s._v("由于 OpenSSL 是开源的，所以它还有一些代码分支，比如 Google 的 BoringSSL、OpenBSD 的 LibreSSL，这些分支在 OpenSSL 的基础上删除了一些老旧代码，也增加了一些新特性，虽然背后有大金主，但离取代 OpenSSL 还差得很远。")]),s._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("ol",[a("li",[s._v("因为 HTTP 是明文传输，所以不安全，容易被黑客窃听或窜改；")]),s._v(" "),a("li",[s._v("通信安全必须同时具备机密性、完整性，身份认证和不可否认这四个特性；")]),s._v(" "),a("li",[s._v("HTTPS 的语法、语义仍然是 HTTP，但把下层的协议由 TCP/IP 换成了 SSL/TLS；")]),s._v(" "),a("li",[s._v("SSL/TLS 是信息安全领域中的权威标准，采用多种先进的加密技术保证通信安全；")]),s._v(" "),a("li",[s._v("OpenSSL 是著名的开源密码学工具包，是 SSL/TLS 的具体实现。")])]),s._v(" "),a("h2",{attrs:{id:"课下作业"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课下作业"}},[s._v("#")]),s._v(" 课下作业")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("你能说出 HTTPS 与 HTTP 有哪些区别吗？")]),s._v(" "),a("p",[s._v("HTTPS 相对于 HTTP 具有机密性，完整性，身份认证和不可否认的特性")]),s._v(" "),a("p",[s._v("HTTPS 是HTTP over SSL/TLS，HTTP 是 HTTP over TCP/IP")])]),s._v(" "),a("li",[a("p",[s._v("你知道有哪些方法能够实现机密性、完整性等安全特性呢？")]),s._v(" "),a("p",[s._v("实现机密性可以采用加密手段，接口签名实现完整性，数字签名用于身份认证")])])]),s._v(" "),a("h2",{attrs:{id:"拓展阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[s._v("#")]),s._v(" 拓展阅读")]),s._v(" "),a("ul",[a("li",[s._v("一个有趣的事实，当前所有 TLS 的 RFC 文档末尾数字都是 46（2246、4346、5246、8846）")]),s._v(" "),a("li",[s._v("除了 HTTP，SSL/TLS 也可以承载其他的应用协议，例如 "),a("code",[s._v("FTP=>FTP")]),s._v("、"),a("code",[s._v("LDAP= LDAPS")]),s._v(" 等")]),s._v(" "),a("li",[s._v("OpenSSL 前身 SSLeay 的名字来源于其作者之的 "),a("code",[s._v("EriC A. Young")])]),s._v(" "),a("li",[s._v("关于 OpenSSL 有一个著名的「心脏出血( Heart Bleed)」漏洞,出现在 1.0.1 版里")]),s._v(" "),a("li",[s._v("OpenSSL 里的密码套件定义与 TLS 略有不同，TLS 里的形式是 "),a("code",[s._v("TLS_ECDHE_RSA_WITH_AES256_GCM_SHA384")]),s._v("，加了前缀 "),a("code",[s._v("TLS")]),s._v("，并用 "),a("code",[s._v("WTH")]),s._v(" 分开了握手和通信的算法")]),s._v(" "),a("li",[s._v("另一个比较著名的开源密码库是 NSS（ Network Security Services），由 Mozilla 开发")])]),s._v(" "),a("iframe",{attrs:{height:"500px",width:"100%",frameborder:"0",allowfullscreen:"true",src:s.$withBase("/ads.html")}})])}),[],!1,null,null,null);t.default=e.exports},730:function(s,t,n){s.exports=n.p+"assets/img/40fbb989a9fd2217320ab287e80e1fb0.40fbb989.png"},731:function(s,t,n){s.exports=n.p+"assets/img/image-20210309154706676.ad4a14e9.png"},732:function(s,t,n){s.exports=n.p+"assets/img/50d57e18813e18270747806d5d73f0a3.50d57e18.png"},733:function(s,t,n){s.exports=n.p+"assets/img/image-20210309160439908.cc9642ee.png"}}]);