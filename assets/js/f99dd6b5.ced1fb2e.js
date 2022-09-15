"use strict";(self.webpackChunkzio_http_docs=self.webpackChunkzio_http_docs||[]).push([[991],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,d=m["".concat(l,".").concat(k)]||m[k]||p[k]||o;return n?a.createElement(d,c(c({ref:t},u),{},{components:n})):a.createElement(d,c({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9698:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),c=["components"],i={title:"WebSocketFrame",sidebar_label:"WebSocketFrame"},l=void 0,s={unversionedId:"v1.x/dsl/socket/websocketframe",id:"v1.x/dsl/socket/websocketframe",isDocsHomePage:!1,title:"WebSocketFrame",description:"In the WebSocket protocol, communication happens using frames. ZIO",source:"@site/docs/v1.x/dsl/socket/websocketframe.md",sourceDirName:"v1.x/dsl/socket",slug:"/v1.x/dsl/socket/websocketframe",permalink:"/zio-http/docs/v1.x/dsl/socket/websocketframe",tags:[],version:"current",frontMatter:{title:"WebSocketFrame",sidebar_label:"WebSocketFrame"},sidebar:"tutorialSidebar",previous:{title:"Socket",permalink:"/zio-http/docs/v1.x/dsl/socket/socket"},next:{title:"Work in progress",permalink:"/zio-http/docs/v1.x/client/index"}},u=[{value:"Text",id:"text",children:[],level:3},{value:"Binary",id:"binary",children:[],level:3},{value:"Continuation",id:"continuation",children:[],level:3},{value:"Close",id:"close",children:[{value:"Constructing Close with just status",id:"constructing-close-with-just-status",children:[],level:4},{value:"Constructing Close with status and a reason",id:"constructing-close-with-status-and-a-reason",children:[],level:4}],level:3},{value:"Ping",id:"ping",children:[],level:3},{value:"Pong",id:"pong",children:[],level:3},{value:"Pattern Matching on WebSocketFrame",id:"pattern-matching-on-websocketframe",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6455"},"WebSocket")," protocol, communication happens using frames. ZIO\nHTTP's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-http/blob/main/zio-http/src/main/scala/zio/socket/WebSocketFrame.scala"},"WebSocketFrame"),"\nis the representation of those frames. The domain defines the following type of frames:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Text"),(0,o.kt)("li",{parentName:"ul"},"Binary"),(0,o.kt)("li",{parentName:"ul"},"Continuation"),(0,o.kt)("li",{parentName:"ul"},"Close"),(0,o.kt)("li",{parentName:"ul"},"Ping"),(0,o.kt)("li",{parentName:"ul"},"Pong")),(0,o.kt)("h3",{id:"text"},"Text"),(0,o.kt)("p",null,"To create a Text frame that models textual data in the WebSocket protocol, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"text")," constructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val text = WebSocketFrame.text("Hello from ZIO-HTTP")\n')),(0,o.kt)("h3",{id:"binary"},"Binary"),(0,o.kt)("p",null,"To create a Binary frame that models raw binary data, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"binary")," constructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.Chunk\n\nval binary = WebSocketFrame.binary(Chunk.fromArray("Hello from ZIO-HTTP".getBytes(StandardCharsets.UTF_16)))\n')),(0,o.kt)("h3",{id:"continuation"},"Continuation"),(0,o.kt)("p",null,"To create a Continuation frame to model a continuation fragment of the previous message, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"continuation"),"\nconstructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import io.netty.buffer.Unpooled.copiedBuffer\nimport io.netty.util.CharsetUtil.UTF_16\n\nval continuation = WebSocketFrame.continuation(copiedBuffer("Hello from ZIO-HTTP", UTF_16))\n')),(0,o.kt)("h3",{id:"close"},"Close"),(0,o.kt)("p",null,"To create a Close frame for a situation where the connection needs to be closed, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," constructor.\nThe constructor requires two arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Status"),(0,o.kt)("li",{parentName:"ul"},"Optional reason.")),(0,o.kt)("h4",{id:"constructing-close-with-just-status"},"Constructing Close with just status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val close = WebSocketFrame.close(1000)\n")),(0,o.kt)("h4",{id:"constructing-close-with-status-and-a-reason"},"Constructing Close with status and a reason"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val close = WebSocket.close(1000, "Normal Closure")\n')),(0,o.kt)("p",null,"More information on status codes can be found\nin ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6455#section-7.4"},"Section 7.4")," of IETF's Data Tracker."),(0,o.kt)("h3",{id:"ping"},"Ping"),(0,o.kt)("p",null,"Ping models heartbeat in the WebSocket protocol. The server or the client can at any time, after a successful handshake,\nsend a ping frame."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val ping = WebSocketFrame.ping\n")),(0,o.kt)("h3",{id:"pong"},"Pong"),(0,o.kt)("p",null,"Pong models the second half of the heartbeat in the WebSocket protocol. Upon receiving ",(0,o.kt)("a",{parentName:"p",href:"#ping"},"ping"),", a pong needs to be\nsent back."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val ping = WebSocketFrame.ping\n")),(0,o.kt)("h2",{id:"pattern-matching-on-websocketframe"},"Pattern Matching on WebSocketFrame"),(0,o.kt)("p",null,"ZIO HTTP envisions the WebSocketFrame as a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tagged_union"},"Sum")," type, which allows\nexhaustive pattern matching to be performed on it."),(0,o.kt)("p",null,"You can do pattern matching on the WebSocketFrame type in the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val frame: WebSocketFrame = ...\n\nframe match {\n  case WebSocketFrame.Binary(bytes) => ???\n  case WebSocketFrame.Text(text) => ???\n  case WebSocketFrame.Close(status, reason) => ???\n  case WebSocketFrame.Ping => ???\n  case WebSocketFrame.Pong => ???\n  case WebSocketFrame.Continuation(buffer) => ???\n}\n")))}m.isMDXComponent=!0}}]);