"use strict";(self.webpackChunkzio_http_docs=self.webpackChunkzio_http_docs||[]).push([[387],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7974:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],p={sidebar_position:2},l="Getting Started",s={unversionedId:"v1.x/getting-started",id:"v1.x/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"ZIO HTTP is a powerful library that is used to build highly performant HTTP-based services and clients using functional scala and ZIO and uses Netty as its core.",source:"@site/docs/v1.x/getting-started.md",sourceDirName:"v1.x",slug:"/v1.x/getting-started",permalink:"/zio-http/docs/v1.x/getting-started",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/zio-http/docs/v1.x/index"},next:{title:"Server",permalink:"/zio-http/docs/v1.x/dsl/server"}},c=[{value:"Http",id:"http",children:[{value:"Creating a &quot;<em>Hello World</em>&quot; app",id:"creating-a-hello-world-app",children:[],level:3},{value:"Routing",id:"routing",children:[],level:3},{value:"Composition",id:"composition",children:[],level:3},{value:"ZIO Integration",id:"zio-integration",children:[],level:3},{value:"Accessing the Request",id:"accessing-the-request",children:[],level:3},{value:"Testing",id:"testing",children:[],level:3}],level:2},{value:"Socket",id:"socket",children:[{value:"Creating a socket app",id:"creating-a-socket-app",children:[],level:3}],level:2},{value:"Server",id:"server",children:[{value:"Starting an HTTP App",id:"starting-an-http-app",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ZIO HTTP")," is a powerful library that is used to build highly performant HTTP-based services and clients using functional scala and ZIO and uses ",(0,o.kt)("a",{parentName:"p",href:"https://netty.io/"},"Netty")," as its core.\nZIO HTTP has powerful functional domains which help in creating, modifying, composing apps easily. Let's start with the HTTP domain.\nThe first step when using ZIO HTTP is creating an HTTP app. "),(0,o.kt)("h2",{id:"http"},"Http"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Http")," is a domain that models HTTP apps using ZIO and works over any request and response types. ",(0,o.kt)("inlineCode",{parentName:"p"},"Http")," Domain provides different constructors to create HTTP apps, ",(0,o.kt)("inlineCode",{parentName:"p"},"Http.text"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Http.html"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Http.fromFile"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Http.fromData"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Http.fromStream"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Http.fromEffect"),".  "),(0,o.kt)("h3",{id:"creating-a-hello-world-app"},'Creating a "',(0,o.kt)("em",{parentName:"h3"},"Hello World"),'" app'),(0,o.kt)("p",null,'Creating an HTTP app using ZIO Http is as simple as given below, this app will always respond with "Hello World!"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\nval app = Http.text("Hello World!")\n')),(0,o.kt)("p",null,"An app can be made using any of the available constructors on ",(0,o.kt)("inlineCode",{parentName:"p"},"zio.Http"),"."),(0,o.kt)("h3",{id:"routing"},"Routing"),(0,o.kt)("p",null," For handling routes, Http Domain has a ",(0,o.kt)("inlineCode",{parentName:"p"},"collect")," method that, accepts different requests and produces responses. Pattern matching on the route is supported by the framework.\nThe example below shows how to create routes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\nval app = Http.collect[Request] {\n  case Method.GET -> !! / "fruits" / "a"  => Response.text("Apple")\n  case Method.GET -> !! / "fruits" / "b"  => Response.text("Banana")\n}\n')),(0,o.kt)("p",null,"You can create typed routes as well. The below example shows how to accept count as ",(0,o.kt)("inlineCode",{parentName:"p"},"Int")," only."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\nval app = Http.collect[Request] {\n  case Method.GET -> !! / "Apple" / int(count)  => Response.text(s"Apple: $count")\n}\n')),(0,o.kt)("h3",{id:"composition"},"Composition"),(0,o.kt)("p",null,"Apps can be composed using operators in ",(0,o.kt)("inlineCode",{parentName:"p"},"Http"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using the ",(0,o.kt)("inlineCode",{parentName:"li"},"++")," operator. The way it works is, if none of the routes match in ",(0,o.kt)("inlineCode",{parentName:"li"},"a"),", then the control is passed on to the ",(0,o.kt)("inlineCode",{parentName:"li"},"b")," app.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},' import zio.http._\n \n val a = Http.collect[Request] { case Method.GET -> !! / "a"  => Response.ok }\n val b = Http.collect[Request] { case Method.GET -> !! / "b"  => Response.ok }\n \n val app = a ++ b\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using the ",(0,o.kt)("inlineCode",{parentName:"li"},"<>")," operator. The way it works is, if ",(0,o.kt)("inlineCode",{parentName:"li"},"a")," fails, then the control is passed on to the ",(0,o.kt)("inlineCode",{parentName:"li"},"b")," app.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\nval a = Http.fail(new Error("SERVER_ERROR"))\nval b = Http.text("OK")\n\nval app = a <> b\n')),(0,o.kt)("h3",{id:"zio-integration"},"ZIO Integration"),(0,o.kt)("p",null,"For creating effectful apps, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"collectZIO")," and wrap ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"UIO")," to produce ZIO effect value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val app = Http.collectZIO[Request] {\n  case Method.GET -> !! / "hello" => UIO(Response.text("Hello World"))\n}\n')),(0,o.kt)("h3",{id:"accessing-the-request"},"Accessing the Request"),(0,o.kt)("p",null,"To access the request use ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," as it binds a matched pattern to a variable and can be used while creating a response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\nval app = Http.collectZIO[Request] {\n    case req @ Method.GET -> !! / "fruits" / "a"  =>\n      UIO(Response.text("URL:" + req.url.path.asString + " Headers: " + req.getHeaders))\n    case req @ Method.POST -> !! / "fruits" / "a" =>\n      req.bodyAsString.map(Response.text(_))\n  }\n')),(0,o.kt)("h3",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"Http")," is a function of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"A => ZIO[R, Option[E], B]")," to test it you can simply call an ",(0,o.kt)("inlineCode",{parentName:"p"},"Http")," like a function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\nimport zio.http._\n\nobject Spec extends DefaultRunnableSpec {\n\n  def spec = suite("http")(\n      test("should be ok") {\n        val app = Http.ok\n        val req = Request()\n        assertZIO(app(req))(equalTo(Response.ok))\n      }\n    )\n}\n')),(0,o.kt)("p",null,"When we call the ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," it calls the apply method of ",(0,o.kt)("inlineCode",{parentName:"p"},"Http")," via ",(0,o.kt)("inlineCode",{parentName:"p"},"zio.test")," package"),(0,o.kt)("h2",{id:"socket"},"Socket"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Socket")," is functional domain in ZIO HTTP. It provides constructors to create socket apps.\nA socket app is an app that handles WebSocket connections."),(0,o.kt)("h3",{id:"creating-a-socket-app"},"Creating a socket app"),(0,o.kt)("p",null,"Socket app can be created by using ",(0,o.kt)("inlineCode",{parentName:"p"},"Socket")," constructors. To create a socket app, you need to create a socket that accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"WebSocketFrame")," and produces ",(0,o.kt)("inlineCode",{parentName:"p"},"ZStream")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"WebSocketFrame"),".\nFinally, we need to convert socketApp to ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"toResponse"),", so that we can run it like any other HTTP app.",(0,o.kt)("br",{parentName:"p"}),"\n","The below example shows a simple socket app, we are using ",(0,o.kt)("inlineCode",{parentName:"p"},"collect"),' which returns a stream with WebsSocketTextFrame "BAR" on receiving WebsSocketTextFrame "FOO".   '),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.socket._\n\nprivate val socket = Socket.collect[WebSocketFrame] { case WebSocketFrame.Text("FOO") =>\n    ZStream.succeed(WebSocketFrame.text("BAR"))\n  }\n\n  private val app = Http.collectZIO[Request] {\n    case Method.GET -> !! / "greet" / name => UIO(Response.text(s"Greetings {$name}!"))\n    case Method.GET -> !! / "ws"           => socket.toResponse\n  }\n')),(0,o.kt)("h2",{id:"server"},"Server"),(0,o.kt)("p",null,"As we have seen how to create HTTP apps, the only thing left is to run an  HTTP server and serve requests.\nZIO HTTP provides a way to set configurations for your server. The server can be configured according to the leak detection level, request size, address etc. "),(0,o.kt)("h3",{id:"starting-an-http-app"},"Starting an HTTP App"),(0,o.kt)("p",null,"To launch our app, we need to start the server on a port. The below example shows a simple HTTP app that responds with empty content and a ",(0,o.kt)("inlineCode",{parentName:"p"},"200")," status code, deployed on port ",(0,o.kt)("inlineCode",{parentName:"p"},"8090")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"Server.start"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.http._\nimport zio.http.Server\nimport zio._\n\nobject HelloWorld extends App {\n  val app = Http.ok\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    Server.start(8090, app).exitCode\n}\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zio.github.io/zio-http/docs/v1.x/examples/zio-http-basic-examples/http_server"},"HTTP Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zio.github.io/zio-http/docs/v1.x/examples/advanced-examples/advanced_server"},"Advanced Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zio.github.io/zio-http/docs/v1.x/examples/zio-http-basic-examples/web-socket"},"WebSocket Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zio.github.io/zio-http/docs/v1.x/examples/advanced-examples/stream-response"},"Streaming Response")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zio.github.io/zio-http/docs/v1.x/examples/zio-http-basic-examples/http_client"},"HTTP Client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zio.github.io/zio-http/docs/v1.x/examples/advanced-examples/stream-file"},"File Streaming")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zio.github.io/zio-http/docs/v1.x/examples/advanced-examples/authentication"},"Authentication"))))}u.isMDXComponent=!0}}]);