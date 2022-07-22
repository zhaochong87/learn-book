(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1202:function(_,v,t){"use strict";t.r(v);var e=t(13),r=Object(e.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"_05-响应状态码该怎么用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_05-响应状态码该怎么用"}},[_._v("#")]),_._v(" 05 | 响应状态码该怎么用？")]),_._v(" "),e("p",[_._v("前两讲中，我们学习了 HTTP 报文里请求行的组成部分，包括请求方法和 URI。有了请求行，加上后面的头字段就形成了请求头，可以通过 TCP/IP 协议发送给服务器。")]),_._v(" "),e("p",[_._v("服务器收到请求报文，解析后需要进行处理，具体的业务逻辑多种多样，但最后必定是拼出一个响应报文发回客户端。")]),_._v(" "),e("p",[_._v("响应报文由响应头加响应体数据组成，响应头又由状态行和头字段构成。")]),_._v(" "),e("p",[_._v("我们先来复习一下状态行的结构，有三部分：")]),_._v(" "),e("p",[e("img",{attrs:{src:t(337),alt:"img"}})]),_._v(" "),e("p",[_._v("开头的 Version 部分是 HTTP 协议的版本号，通常是 HTTP/1.1，用处不是很大。")]),_._v(" "),e("p",[_._v("后面的 Reason 部分是原因短语，是状态码的简短文字描述，例如 "),e("code",[_._v("OK")]),_._v("、"),e("code",[_._v("Not Found")]),_._v(" 等等，也可以自定义。但它只是为了兼容早期的文本客户端而存在，提供的信息很有限，目前的大多数客户端都会忽略它。")]),_._v(" "),e("p",[_._v("所以，状态行里有用的就只剩下中间的 "),e("strong",[_._v("状态码")]),_._v(" （Status Code）了。它是一个十进制数字，以代码的形式表示服务器对请求的处理结果，就像我们通常编写程序时函数返回的错误码一样。")]),_._v(" "),e("p",[_._v("不过你要注意，它的名字是 "),e("strong",[_._v("状态码")]),_._v(" 而不是 "),e("strong",[_._v("错误码")]),_._v("。也就是说，它的含义不仅是错误，更重要的意义在于表达  "),e("strong",[_._v("HTTP 数据处理的状态")]),_._v(" ，客户端可以依据代码适时转换处理状态，例如继续发送请求、切换协议，重定向跳转等，有那么点 TCP 状态转换的意思。")]),_._v(" "),e("h2",{attrs:{id:"状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[_._v("#")]),_._v(" 状态码")]),_._v(" "),e("p",[_._v("目前 RFC 标准里规定的状态码是三位数，所以取值范围就是从 000 到 999。但如果把代码简单地从 000 开始顺序编下去就显得有点太 low，不灵活、不利于扩展，所以状态码也被设计成有一定的格式。")]),_._v(" "),e("p",[e("strong",[_._v("RFC 标准把状态码分成了五类")]),_._v(" ，用数字的第一位表示分类，而 0~99 不用，这样状态码的实际可用范围就大大缩小了，由 000~999 变成了 100~599。")]),_._v(" "),e("p",[_._v("这五类的具体含义是：")]),_._v(" "),e("ul",[e("li",[_._v("1××：提示信息，表示目前是协议处理的中间状态，还需要后续的操作；")]),_._v(" "),e("li",[_._v("2××：成功，报文已经收到并被正确处理；")]),_._v(" "),e("li",[_._v("3××：重定向，资源位置发生变动，需要客户端重新发送请求；")]),_._v(" "),e("li",[_._v("4××：客户端错误，请求报文有误，服务器无法处理；")]),_._v(" "),e("li",[_._v("5××：服务器错误，服务器在处理请求时内部发生了错误。")])]),_._v(" "),e("p",[_._v("在 HTTP 协议中，正确地理解并应用这些状态码 "),e("strong",[_._v("不是客户端或服务器单方的责任，而是双方共同的责任。")])]),_._v(" "),e("p",[_._v("客户端作为请求的发起方，获取响应报文后，需要通过状态码知道请求是否被正确处理，是否要再次发送请求，如果出错了原因又是什么。这样才能进行下一步的动作，要么发送新请求，要么改正错误重发请求。")]),_._v(" "),e("p",[_._v("服务器端作为请求的接收方，也应该很好地运用状态码。在处理请求时，选择最恰当的状态码回复客户端，告知客户端处理的结果，指示客户端下一步应该如何行动。特别是在出错的时候，尽量不要简单地返 400、500 这样意思含糊不清的状态码。")]),_._v(" "),e("p",[_._v("目前 RFC 标准里总共有 41 个状态码，但状态码的定义是开放的，允许自行扩展。所以 Apache、Nginx 等 Web 服务器都定义了一些专有的状态码。如果你自己开发 Web 应用，也完全可以在不冲突的前提下定义新的代码。")]),_._v(" "),e("p",[_._v("在我们的实验环境里也可以对这些状态码做测试验证，访问 URI "),e("code",[_._v("/12-")]),_._v("，用查询参 "),e("code",[_._v("code=xxx")]),_._v(" 来检查这些状态码的效果，服务器不仅会在状态行里显示状态码，还会在响应头里用自定义的 "),e("code",[_._v("Expect-Code")]),_._v(" 字段输出这个代码。")]),_._v(" "),e("p",[_._v("例如访问 "),e("code",[_._v("http://www.chrono.com/12-1?code=415")])]),_._v(" "),e("p",[e("img",{attrs:{src:t(677),alt:"image-20210305131825952"}})]),_._v(" "),e("p",[_._v("接下来我就挑一些实际开发中比较有价值的状态码逐个详细介绍。")]),_._v(" "),e("h2",{attrs:{id:"_1××"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1××"}},[_._v("#")]),_._v(" 1××")]),_._v(" "),e("p",[_._v("1×× 类状态码属于提示信息，是协议处理的中间状态，实际能够用到的时候很少。")]),_._v(" "),e("p",[_._v("我们偶尔能够见到的是 "),e("strong",[_._v("101 Switching Protocols")]),_._v(" 。它的意思是客户端使用 Upgrade 头字段，要求在 HTTP 协议的基础上改成其他的协议继续通信，比如 WebSocket。而如果服务器也同意变更协议，就会发送状态码 101，但这之后的数据传输就不会再使用 HTTP 了。")]),_._v(" "),e("h2",{attrs:{id:"_2××"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2××"}},[_._v("#")]),_._v(" 2××")]),_._v(" "),e("p",[_._v("2×× 类状态码表示 "),e("strong",[_._v("服务器收到并成功处理了客户端的请求")]),_._v(" ，这也是客户端最愿意看到的状态码。")]),_._v(" "),e("ul",[e("li",[e("p",[e("strong",[_._v("200 OK")])]),_._v(" "),e("p",[_._v("是最常见的成功状态码，表示一切正常，服务器如客户端所期望的那样返回了处理结果，如果是非 HEAD 请求，通常在响应头后都会有 body 数据。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("204 No Content")])]),_._v(" "),e("p",[_._v("是另一个很常见的成功状态码，它的含义与 "),e("code",[_._v("200 OK")]),_._v(" 基本相同，但响应头后没有 body 数据。所以对于 Web 服务器来说，正确地区分 200 和 204 是很必要的。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("206 Partial Content")])]),_._v(" "),e("p",[_._v("是 HTTP 分块下载或断点续传的基础，在客户端发送 "),e("strong",[_._v("范围请求")]),_._v("、要求获取资源的部分数据时出现，它与 200 一样，也是服务器成功处理了请求，但 body 里的数据不是资源的全部，而是其中的一部分。")]),_._v(" "),e("p",[_._v("状态码 206 通常还会伴随着头字段 "),e("strong",[_._v("Content-Range")]),_._v("  ，表示响应报文里 body 数据的具体范围，供客户端确认，例如 "),e("code",[_._v("Content-Range: bytes 0-99/2000")]),_._v(" ，意思是此次获取的是总计 2000 个字节的前 100 个字节。")])])]),_._v(" "),e("h2",{attrs:{id:"_3××"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3××"}},[_._v("#")]),_._v(" 3××")]),_._v(" "),e("p",[_._v("3×× 类状态码表示 "),e("strong",[_._v("客户端请求的资源发生了变动")]),_._v(" ，客户端必须用新的 URI 重新发送请求获取资源，也就是通常所说的 "),e("strong",[_._v("重定向")]),_._v(" ，包括著名的 301、302 跳转。")]),_._v(" "),e("ul",[e("li",[e("p",[e("strong",[_._v("301 Moved Permanently")])]),_._v(" "),e("p",[_._v("俗称 "),e("strong",[_._v("永久重定向")]),_._v(" ，含义是此次请求的资源已经不存在了，需要改用改用新的 URI 再次访问。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("302 Found")])]),_._v(" "),e("p",[_._v("与 301 类似，曾经的描述短语是 "),e("strong",[_._v("Moved Temporarily")]),_._v(" ，俗称 "),e("strong",[_._v("临时重定向")]),_._v(" ，意思是请求的资源还在，但需要暂时用另一个 URI 来访问。")])])]),_._v(" "),e("p",[_._v("301 和 302 都会在响应头里使用字段 "),e("strong",[_._v("Location")]),_._v(" 指明后续要跳转的 URI，最终的效果很相似，浏览器都会重定向到新的 URI。两者的根本区别在于语义，一个是 "),e("strong",[_._v("永久")]),_._v(" ，一个是 "),e("strong",[_._v("临时")]),_._v(" ，所以在场景、用法上差距很大。")]),_._v(" "),e("p",[_._v("比如，你的网站升级到了 HTTPS，原来的 HTTP 不打算用了，这就是永久的，所以要配置 301 跳转，把所有的 HTTP 流量都切换到 HTTPS。")]),_._v(" "),e("p",[_._v("再比如，今天夜里网站后台要系统维护，服务暂时不可用，这就属于临时 的，可以配置成 302 跳转，把流量临时切换到一个静态通知页面，浏览器看到这个 302 就知道这只是暂时的情况，不会做缓存优化，第二天还会访问原来的地址。")]),_._v(" "),e("p",[e("strong",[_._v("304 Not Modified")]),_._v("  是一个比较有意思的状态码，它用于 "),e("code",[_._v("If-Modified-Since")]),_._v("  等条件请求，表示资源未修改，用于缓存控制。它不具有通常的跳转含义，但可以理解成 "),e("strong",[_._v("重定向已到缓存的文件")]),_._v("（即缓存重定向）。")]),_._v(" "),e("p",[_._v("301、302 和 304 分别涉及了 HTTP 协议里重要的 "),e("strong",[_._v("重定向跳转")]),_._v(" 和 "),e("strong",[_._v("缓存控制")]),_._v(" ，在之后的课程中我还会细讲。")]),_._v(" "),e("h2",{attrs:{id:"_4××"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4××"}},[_._v("#")]),_._v(" 4××")]),_._v(" "),e("p",[_._v("4×× 类状态码表示 "),e("strong",[_._v("客户端发送的请求报文有误")]),_._v(" ，服务器无法处理，它就是真正的 "),e("strong",[_._v("错误码")]),_._v(" 含义了。")]),_._v(" "),e("ul",[e("li",[e("p",[e("strong",[_._v("400 Bad Request")])]),_._v(" "),e("p",[_._v("是一个通用的错误码，表示请求报文有错误，但具体是数据格式错误、缺少请求头还是 URI 超长它没有明确说，只是一个笼统的错误，客户端看到 400 只会是一头雾水、不知所措。所以，在开发 Web 应用时应当尽量避免给客户端返回 400，而是要用其他更有明确含义的状态码。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("403 Forbidden")])]),_._v(" "),e("p",[_._v("实际上不是客户端的请求出错，而是表示服务器禁止访问资源。原因可能多种多样，例如信息敏感、法律禁止等，如果服务器友好一点，可以在 body 里详细说明拒绝请求的原因，不过现实中通常都是直接给一个闭门羹。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("404 Not Found")])]),_._v(" "),e("p",[_._v("可能是我们最常看见也是最不愿意看到的一个状态码，它的原意是资源在本服务器上未找到，所以无法提供给客户端。但现在已经被「用滥了」，只要服务器不高兴就可以给出个 404，而我们也无从得知后面到底是真的未找到，还是有什么别的原因，某种程度上它比 403 还要令人讨厌。")])])]),_._v(" "),e("p",[_._v("4×× 里剩下的一些代码较明确地说明了错误的原因，都很好理解，开发中常用的有：")]),_._v(" "),e("ul",[e("li",[_._v("405 Method Not Allowed：不允许使用某些方法操作资源，例如不允许 POST 只能 GET；")]),_._v(" "),e("li",[_._v("406 Not Acceptable：资源无法满足客户端请求的条件，例如请求中文但只有英文；")]),_._v(" "),e("li",[_._v("408 Request Timeout：请求超时，服务器等待了过长的时间；")]),_._v(" "),e("li",[_._v("409 Conflict：多个请求发生了冲突，可以理解为多线程并发时的竞态；")]),_._v(" "),e("li",[_._v("413 Request Entity Too Large：请求报文里的 body 太大；")]),_._v(" "),e("li",[_._v("414 Request-URI Too Long：请求行里的 URI 太大；")]),_._v(" "),e("li",[_._v("429 Too Many Requests：客户端发送了太多的请求，通常是由于服务器的限连策略；")]),_._v(" "),e("li",[_._v("431 Request Header Fields Too Large：请求头某个字段或总体太大；")])]),_._v(" "),e("h2",{attrs:{id:"_5××"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5××"}},[_._v("#")]),_._v(" 5××")]),_._v(" "),e("p",[_._v("5×× 类状态码表示 "),e("strong",[_._v("客户端请求报文正确，但服务器在处理时内部发生了错误")]),_._v(" ，无法返回应有的响应数据，是服务器端的错误码。")]),_._v(" "),e("ul",[e("li",[e("p",[e("strong",[_._v("500 Internal Server Error")])]),_._v(" "),e("p",[_._v("与 400 类似，也是一个通用的错误码，服务器究竟发生了什么错误我们是不知道的。不过对于服务器来说这应该算是好事，通常不应该把服务器内部的详细信息，例如出错的函数调用栈告诉外界。虽然不利于调试，但能够防止黑客的窥探或者分析。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("501 Not Implemented")])]),_._v(" "),e("p",[_._v("表示客户端请求的功能还不支持，这个错误码比 500 要温和一些，和即将开业，敬请期待的意思差不多，不过具体什么时候开业就不好说了。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("502 Bad Gateway")])]),_._v(" "),e("p",[_._v("通常是服务器作为网关或者代理时返回的错误码，表示服务器自身工作正常，访问后端服务器时发生了错误，但具体的错误原因也是不知道的。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("503 Service Unavailable")])]),_._v(" "),e("p",[_._v("表示服务器当前很忙，暂时无法响应服务，我们上网时有时候遇到的「网络服务正忙，请稍后重试」的提示信息就是状态码 503。")]),_._v(" "),e("p",[_._v("503 是一个「临时」的状态，很可能过几秒钟后服务器就不那么忙了，可以继续提供服务，所以 503 响应报文里通常还会有一个 "),e("strong",[_._v("Retry-After")]),_._v(" 字段，指示客户端可以在多久以后再次尝试发送请求。")])])]),_._v(" "),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[_._v("#")]),_._v(" 小结")]),_._v(" "),e("ol",[e("li",[_._v("状态码在响应报文里表示了服务器对请求的处理结果；")]),_._v(" "),e("li",[_._v("状态码后的原因短语是简单的文字描述，可以自定义；")]),_._v(" "),e("li",[_._v("状态码是十进制的三位数，分为五类，从 100 到 599；")]),_._v(" "),e("li",[_._v("2×× 类状态码表示成功，常用的有 200、204、206；")]),_._v(" "),e("li",[_._v("3×× 类状态码表示重定向，常用的有 301、302、304；")]),_._v(" "),e("li",[_._v("4×× 类状态码表示客户端错误，常用的有 400、403、404；")]),_._v(" "),e("li",[_._v("5×× 类状态码表示服务器错误，常用的有 500、501、502、503。")])]),_._v(" "),e("h2",{attrs:{id:"课下作业"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#课下作业"}},[_._v("#")]),_._v(" 课下作业")]),_._v(" "),e("ol",[e("li",[e("p",[_._v("你在开发 HTTP 客户端，收到了一个非标准的状态码，比如 4××、5××，应当如何应对呢？")]),_._v(" "),e("p",[_._v("笔者认为：弹框出错误信息")])]),_._v(" "),e("li",[e("p",[_._v("你在开发 HTTP 服务器，处理请求时发现报文里缺了一个必需的 query 参数，应该如何告知客户端错误原因呢？")]),_._v(" "),e("p",[_._v("笔者认为：返回 400 状态，并把原因放在 body 中返回")])])]),_._v(" "),e("h2",{attrs:{id:"课外小贴士"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#课外小贴士"}},[_._v("#")]),_._v(" 课外小贴士")]),_._v(" "),e("ul",[e("li",[_._v("301 和 302 还有两个等价的状态码 "),e("code",[_._v("308 Permanent Redirect")]),_._v(" 和 "),e("code",[_._v("307 Temporary Redirect")]),_._v("，但这两个状态码不允许后续的请求更改请求方法")]),_._v(" "),e("li",[_._v("愚人节玩笑协议 HTCPCP 里也定义了一个特殊的错误码："),e("code",[_._v("418 I'm a teapot")]),_._v("，表示服务器拒绝冲咖啡，因为「我是茶壶」")])]),_._v(" "),e("iframe",{attrs:{height:"500px",width:"100%",frameborder:"0",allowfullscreen:"true",src:_.$withBase("/ads.html")}})])}),[],!1,null,null,null);v.default=r.exports},337:function(_,v,t){_.exports=t.p+"assets/img/a1477b903cd4d5a69686683c0dbc3300.a1477b90.png"},677:function(_,v,t){_.exports=t.p+"assets/img/image-20210305131825952.a761556c.png"}}]);