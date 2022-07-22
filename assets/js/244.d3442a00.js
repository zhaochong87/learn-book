(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{1041:function(v,_,a){"use strict";a.r(_);var t=a(13),s=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"_148-商品详情页动态渲染系统-微服务与-spring-cloud-基本介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_148-商品详情页动态渲染系统-微服务与-spring-cloud-基本介绍"}},[v._v("#")]),v._v(" 148. 商品详情页动态渲染系统：微服务与 Spring Cloud 基本介绍")]),v._v(" "),a("p",[v._v("微服务课程在龙果上，在本课程升级之前，就有 2 个课程了")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("dubbo 的课程")]),v._v(" "),a("p",[v._v("通用架构给搭建了起来，dubbo 去做微服务 + activemq + redis + mysql + 持续集成，把一个比较通用的完整的微服务的技术架构讲解了出来")])]),v._v(" "),a("li",[a("p",[v._v("spring cloud 课程：那个课程会主要讲解 spring cloud 的技术")])])]),v._v(" "),a("p",[v._v("本课程升级，也会讲解到这些东西：微服务实战、spring cloud、还有各种 DevOps、docker 容器、持续交付流水线，把这些结合在这个真实的电商详情页系统项目实战中去做微服务架构")]),v._v(" "),a("p",[v._v("本课程升级重点：")]),v._v(" "),a("ol",[a("li",[v._v("微服务的项目实战：spring cloud 微服务的项目实战")]),v._v(" "),a("li",[v._v("弥补第一个版本课程的遗憾，要将一个完整的电商详情页系统架构搭建出来、跑通、从前到后全部搞定；")])]),v._v(" "),a("p",[v._v("本次的架构因为相对来说比较通用，所以可以套用在一些场景上做二次开发")]),v._v(" "),a("h2",{attrs:{id:"传统架构的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传统架构的问题"}},[v._v("#")]),v._v(" 传统架构的问题")]),v._v(" "),a("ul",[a("li",[v._v("单块应用：耦合严重")]),v._v(" "),a("li",[v._v("开发速度慢：响应新需求慢")]),v._v(" "),a("li",[v._v("不易于扩展和重构")]),v._v(" "),a("li",[v._v("不易于技术升级")])]),v._v(" "),a("p",[v._v("一大段话简而言之：传统的一个 java web 项目中的内容太多了，各种业务模块都在一个大的工程中，\n从开发到发布过程中，都需要考虑多人协作开发的问题，如：回归测试、其他模块依赖环境、代码合并冲突，\n等问题。")]),v._v(" "),a("h2",{attrs:{id:"微服务架构的几大特征"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构的几大特征"}},[v._v("#")]),v._v(" 微服务架构的几大特征")]),v._v(" "),a("ul",[a("li",[v._v("足够单一的职责与功能")]),v._v(" "),a("li",[v._v("非常的微型")]),v._v(" "),a("li",[v._v("面向服务的思想")]),v._v(" "),a("li",[v._v("独立开发：团队，技术选型，前后端分离，存储分离，独立部署")]),v._v(" "),a("li",[v._v("自动化开发流程：编码，自动化测试，持续集成，自动化部署")])]),v._v(" "),a("h3",{attrs:{id:"足够单一的职责与功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#足够单一的职责与功能"}},[v._v("#")]),v._v(" 足够单一的职责与功能")]),v._v(" "),a("p",[v._v("用最简单的话来说，比如之前可能就一个单块应用，几十个兄弟在一个代码上开发，商品模块、价格模块、库存模块、促销模块、o2o 模块，全部放一起了，可能会有一部分公共的代码，内容多，那么改动的几率就大")]),v._v(" "),a("p",[v._v("那么做成微服务：把几十万行的单块应用拆分出多个服务，每个服务对应一个工程，每个工程就几百行到几千行代码，每个服务职责很单一，负责一块事情，如商品数据的管理做成一个商品服务; 对于价格这种复杂策略，单拉一个价格服务来管理复杂的价格变更的业务; 对于库存这种复杂的服务，也可以单拉一个管理复杂的库存变更的业务")]),v._v(" "),a("h3",{attrs:{id:"非常的微型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非常的微型"}},[v._v("#")]),v._v(" 非常的微型")]),v._v(" "),a("p",[v._v("几百行~几千行代码")]),v._v(" "),a("h3",{attrs:{id:"面向服务的思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向服务的思想"}},[v._v("#")]),v._v(" 面向服务的思想")]),v._v(" "),a("p",[v._v("每个服务暴露出来一堆接口，然后其他人都是依赖你的服务在开发")]),v._v(" "),a("h3",{attrs:{id:"独立开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#独立开发"}},[v._v("#")]),v._v(" 独立开发")]),v._v(" "),a("p",[v._v("工程上完全独立了， 那就可以给不同的服务配置不同的团队，或者工程师去开发。")]),v._v(" "),a("p",[v._v("比如商品服务是 3 个哥儿们在维护，价格服务是 1 个应届生在做，库存服务是 2 个哥儿们在做，\n不同的人就做不同的工程，维护自己不同的代码")]),v._v(" "),a("p",[v._v("由于独立开发了，那么对于技术的选型就多样化了：spring mvc + spring + mybatis、php、go、c++，\n对于存储 mysql、mongodb、memcached、redis、hbase，每个服务都是自己的存储，单独对接自己的前端工程师，独立的部署在自己的机器上")]),v._v(" "),a("p",[v._v("独立开发，跟其他人没关系")]),v._v(" "),a("h2",{attrs:{id:"微服务的强大作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务的强大作用"}},[v._v("#")]),v._v(" 微服务的强大作用")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("迭代速度")]),v._v(" "),a("p",[v._v("你只要管好自己的服务就行了，跟别人没关系，随便你这么玩儿。\n修改代码、测试、部署都是你自己的事情，不用考虑其他人，没有任何耦合")])]),v._v(" "),a("li",[a("p",[v._v("复用性")]),v._v(" "),a("p",[v._v("拆分成一个一个服务之后，就不需要写任何重复的代码了，有一个功能别人做好了，暴露了接口出来，直接调用不就 ok 了么")])]),v._v(" "),a("li",[a("p",[v._v("扩展性")]),v._v(" "),a("p",[v._v("独立、扩展、升级版本、重构、更换技术")])]),v._v(" "),a("li",[a("p",[v._v("完全克服了传统单块应用的缺点")])])]),v._v(" "),a("h2",{attrs:{id:"微服务的缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务的缺点"}},[v._v("#")]),v._v(" 微服务的缺点")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("服务太多，难以管理")])]),v._v(" "),a("li",[a("p",[v._v("微服务 = 分布式系统")]),v._v(" "),a("p",[v._v("你本来是一个系统，现在拆分成多块，部署在不同的服务器上，一个请求要经过不同的服务器上不同的代码逻辑处理，才能完成，这不就是分布式系统么")])]),v._v(" "),a("li",[a("p",[v._v("分布式一致性、分布式事务、故障+容错")])])]),v._v(" "),a("h2",{attrs:{id:"微服务的技术栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务的技术栈"}},[v._v("#")]),v._v(" 微服务的技术栈")]),v._v(" "),a("p",[v._v("主要分为 4 块：")]),v._v(" "),a("ol",[a("li",[v._v("领域驱动设计：微服务建模")]),v._v(" "),a("li",[v._v("Spring Cloud：基础技术架构")]),v._v(" "),a("li",[v._v("DevOps：自动化+持续集成+持续交付+自动化流水线，将迭代速度提升到极致")]),v._v(" "),a("li",[v._v("Docker：容器管理大量服务")])]),v._v(" "),a("h3",{attrs:{id:"领域驱动设计-微服务建模"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#领域驱动设计-微服务建模"}},[v._v("#")]),v._v(" 领域驱动设计：微服务建模")]),v._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),a("p",[v._v("本课程内容不包括这个知识")])]),v._v(" "),a("p",[v._v("你的任何业务系统都有自己独特的复杂的业务，但是这个时候就是有一个问题，怎么拆分服务？拆成哪些服务？拆成多大？每个服务负责哪些功能？")]),v._v(" "),a("p",[v._v("微服务的建模，模型怎么设计，领域驱动的设计思想：可以去分析系统，完成建模的设计")]),v._v(" "),a("p",[v._v("这里不讲解了，一定是要拿超级复杂的业务来讲解，你才能听懂，业务采取的还是比较简单的，领域驱动")]),v._v(" "),a("p",[v._v("至少如果你真的很了解你的业务的话，你大概也知道应该如何去拆分这个服务")]),v._v(" "),a("h3",{attrs:{id:"spring-cloud-基础技术架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-基础技术架构"}},[v._v("#")]),v._v(" Spring Cloud：基础技术架构")]),v._v(" "),a("ul",[a("li",[v._v("各个服务之间怎么知道对方在哪里：服务的注册和发现")]),v._v(" "),a("li",[v._v("服务之间的调用怎么处理：rpc、负载均衡")]),v._v(" "),a("li",[v._v("服务故障的容错")]),v._v(" "),a("li",[v._v("服务调用链条的追踪怎么做")]),v._v(" "),a("li",[v._v("多个服务依赖的统一的配置如何管理")])]),v._v(" "),a("h3",{attrs:{id:"devops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devops"}},[v._v("#")]),v._v(" DevOps")]),v._v(" "),a("p",[v._v("自动化 + 持续集成 + 持续交付 + 自动化流水线，将迭代速度提升到极致。")]),v._v(" "),a("p",[v._v("如果要将微服务的开发效率提升到最高，那么就需要玩 DevOps 全流程标准化、自动化，大幅度提升你的开发效率")]),v._v(" "),a("h3",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[v._v("#")]),v._v(" Docker")]),v._v(" "),a("p",[v._v("微服务之后，一个大型的系统可以涉及到几十个，甚至是上百个服务，\n那么难点就来了：怎么部署？机器怎么管理？怎么运维？")]),v._v(" "),a("p",[v._v("使用 docker 可以天然的来解决这些问题")]),v._v(" "),a("h2",{attrs:{id:"讲解重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲解重点"}},[v._v("#")]),v._v(" 讲解重点")]),v._v(" "),a("p",[v._v("整个微服务技术架构，全部涉及到（可能不会很深入的讲解），全部结合我们的实际的项目，完成整套微服务架构的项目实战")]),v._v(" "),a("iframe",{attrs:{height:"500px",width:"100%",frameborder:"0",allowfullscreen:"true",src:v.$withBase("/ads.html")}})])}),[],!1,null,null,null);_.default=s.exports}}]);