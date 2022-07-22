(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{1285:function(s,a,t){"use strict";t.r(a);var n=t(13),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"btrace-安装使用入门"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#btrace-安装使用入门"}},[s._v("#")]),s._v(" Btrace 安装使用入门")]),s._v(" "),n("p",[s._v("去 "),n("a",{attrs:{href:"https://github.com/btraceio/btrace",target:"_blank",rel:"noopener noreferrer"}},[s._v("Btrace GitHub"),n("OutboundLink")],1),s._v(" 下载 zip 的压缩包，笔者这里是 Mac，然后解压后配置几个变量：")]),s._v(" "),n("ul",[n("li",[s._v("JAVA_HOME：需要配置你当前正在使用的 JAVA")]),s._v(" "),n("li",[s._v("JAVA_VERSION：这个 JAVA 对应的版本")]),s._v(" "),n("li",[s._v("BTRACE_HOME：btrace 目录")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bash_profile \n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Library/Java/JavaVirtualMachines/jdk1.8.0_201.jdk/Contents/Home/\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_VERSION")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.8.0_201"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BTRACE_HOME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/btrace\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BTRACE_HOME")]),s._v("/bin\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bash_profile \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("由于笔者的 JAVA 是安装程序安装的，不需要在这里再 export path 中了。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("mrcode@mrcode Home % btrace --version\nBTrace v.2.0.3 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("825719b6633988cb0e867d895b8e062e5e9e1ff7"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("查看 btrace 版本号，显示成功，则表示安装成功了。")]),s._v(" "),n("h2",{attrs:{id:"两种运行脚本的方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#两种运行脚本的方式"}},[s._v("#")]),s._v(" 两种运行脚本的方式")]),s._v(" "),n("ul",[n("li",[s._v("在 JVisuaLVM 中添加 Btrace 插件，添加 classpath")]),s._v(" "),n("li",[s._v("使用命令行 "),n("code",[s._v("btrace <pid> <trace_script>")])])]),s._v(" "),n("h2",{attrs:{id:"准备工作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),n("p",[s._v("准备一段模拟线上的生产代码")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("cn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mrcode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stady"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("monitor_tuning"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("chapter4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RequestMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RequestParam")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RestController")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RestController")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ch4"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Ch4Controller")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * Btrace 获取参数\n     *\n     * @param name\n     * @return\n     */")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"arg1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("arg1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestParam")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello,"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[s._v("下面我们使用 Btrace 在不重启程序的情况下，获取入参内容。")]),s._v(" "),n("h2",{attrs:{id:"编写-btrace-脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编写-btrace-脚本"}},[s._v("#")]),s._v(" 编写 btrace 脚本")]),s._v(" "),n("p",[s._v("Btrace 也是用 JAVA 编写的，那么需要引入一下几个依赖包")]),s._v(" "),n("div",{staticClass:"language-groovy line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[s._v("implementation "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.openjdk.btrace:btrace-agent:2.0.3'")]),s._v("\nimplementation "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.openjdk.btrace:btrace-boot:2.0.3'")]),s._v("\nimplementation "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.openjdk.btrace:btrace-client:2.0.3'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 注意：以上依赖包没有在中央仓库，而是在      maven { url "https://dl.bintray.com/btraceio/maven" }  仓库中才有')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 你需要配置上这个仓库上，才能拉取到该 jar 包")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("但是需要注意你依赖的版本号")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("mrcode@mrcode chapter4 % btrace --version\nBTrace v.2.0.3 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("825719b6633988cb0e867d895b8e062e5e9e1ff7"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("比如，你的 BTrace 是 "),n("code",[s._v("v.2.0.3")]),s._v(" 那么这里依赖的脚本包也需要是这个版本，否则在运行脚本的时候就有可能报错，另外新版本的 BTrace 依赖包的 group 名变更了，和视频中的不一样了。")]),s._v(" "),n("p",[s._v("编写 btrace 脚本")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("cn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mrcode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stady"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("monitor_tuning"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("chapter4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("openjdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("btrace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BTraceUtils")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("openjdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("btrace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotations"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("openjdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("btrace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AnyType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Btrace 打印入参例子; 可以单独创建一个脚本项目来写 btrace 脚本\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@BTrace")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PrintArgSimple")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * OnMethod 表示设置拦截哪个类 的 哪个方法，location 是具体的位置或则点\n     *\n     * @param pcn  探测到的类名\n     * @param pmn  探测到的方法名称\n     * @param args 入参\n     */")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@OnMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            clazz "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cn.mrcode.stady.monitor_tuning.chapter4.Ch4Controller"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            method "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"arg1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Location")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ENTRY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// entry 是方法入口")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("anyRead")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@ProbeClassName")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" pcn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                               "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@ProbeMethodName")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" pmn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                               "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AnyType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BTraceUtils")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("printArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BTraceUtils")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pcn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" pmn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BTraceUtils")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("h2",{attrs:{id:"运行-btrace-脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行-btrace-脚本"}},[s._v("#")]),s._v(" 运行 btrace 脚本")]),s._v(" "),n("p",[s._v("有以下三种方式：")]),s._v(" "),n("ul",[n("li",[n("p",[n("code",[s._v("<btrace>/bin/btrace <PID> <trace_script>")])]),s._v(" "),n("p",[s._v("将使用给定的 "),n("strong",[s._v("PID")]),s._v(" 附加到 "),n("strong",[s._v("Java")]),s._v(" 应用程序，并编译并提交跟踪脚本")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("<btrace>/bin/btracec <trace_script>")]),s._v("  将编译提供的跟踪脚本")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("<btrace>/bin/btracer <compiled_script> <args to launch a java app>")]),s._v(" 将在运行 btrace 代理并加载先前由 "),n("em",[s._v("btracec")]),s._v(" 编译的脚本的情况下启动指定的 Java 应用程序")])])]),s._v(" "),n("p",[s._v("一般是使用第一种方式：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我们当前所在路径在：这个脚本文件的目录下")]),s._v("\nmrcode@mrcode chapter4 % "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("             \n/Users/mrcode/IdeaProjects/monitor-tuning/src/main/java/cn/mrcode/stady/monitor_tuning/chapter4\nmrcode@mrcode chapter4 % "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l                           \ntotal "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("\n-rw-r--r--  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" mrcode  staff   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("519")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":43 Ch4Controller.java\n-rw-r--r--  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" mrcode  staff  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1040")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":16 PrintArgSimple.java\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看运行的实例代码端口")]),s._v("\nmrcode@mrcode chapter4 % jps -l                          \n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("53106")]),s._v(" org.gradle.launcher.daemon.bootstrap.GradleDaemon\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("53558")]),s._v(" cn.mrcode.stady.monitor_tuning.MonitorTuningApplication\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("54614")]),s._v(" sun.tools.jps.Jps\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1944")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1705")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("54108")]),s._v(" org.gradle.launcher.daemon.bootstrap.GradleDaemon\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1694")]),s._v(" \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行该脚本监控该端口")]),s._v("\nmrcode@mrcode chapter4 % btrace "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("53558")]),s._v(" PrintArgSimple.java\nAttaching BTrace to PID: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("53558")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[s._v("这个时候就已经开始监控拦截该方法了，访问下 "),n("code",[s._v("GET http://localhost:8080/ch4/arg1?name=mrcode")]),s._v("，再看控制台，已经出现了如下信息")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[mrcode, ]\ncn.mrcode.stady.monitor_tuning.chapter4.Ch4Controller,arg1\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"在-jvisualvm-中运行-btrace-脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-jvisualvm-中运行-btrace-脚本"}},[s._v("#")]),s._v(" 在 jvisualvm 中运行 BTrace 脚本")]),s._v(" "),n("p",[s._v("前面已经讲解过，需要安装 "),n("RouterLink",{attrs:{to:"/monitor-tuning/02/01.html#btrace-workbench"}},[s._v("BTrace Workbench")])],1),s._v(" "),n("p",[s._v("只需要将写好的脚本复制过来，添加好依赖包即可")]),s._v(" "),n("p",[n("img",{attrs:{src:t(915),alt:"image-20210125114833479"}})]),s._v(" "),n("p",[s._v("但是笔者这里的 mac 系统，单独添加 jar 包路径的时候，选择器里面无法显示 "),n("code",[s._v(".gradle")]),s._v(" 包，右下角这个是自动引入进来的 jar 包，但是运行还是报错，不知道是什么原因。")]),s._v(" "),n("p",[s._v("总的体验来说，并不好用。")]),s._v(" "),n("iframe",{attrs:{height:"500px",width:"100%",frameborder:"0",allowfullscreen:"true",src:s.$withBase("/ads.html")}})])}),[],!1,null,null,null);a.default=e.exports},915:function(s,a,t){s.exports=t.p+"assets/img/image-20210125114833479.154b4cec.png"}}]);