(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},Krw4:function(e,t,r){"use strict";function n(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min leitura":new Array(t||1).fill("☕️").join("")+" "+e+" min leitura"}function a(e){return"function"!=typeof Date.prototype.toLocaleDateString?e:new Date(e).toLocaleDateString("pt-br",{day:"numeric",month:"long",year:"numeric"})}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},RIqP:function(e,t,r){var n=r("Ijbi"),a=r("EbDI"),o=r("ZhPi"),l=r("Bnag");e.exports=function(e){return n(e)||a(e)||o(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},RWcc:function(e,t,r){e.exports=r.p+"static/fundo-blog-f4e91195b05e471e191445219c01b848.jpg"},Rq90:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),l=r("jYam");r("fZMB");function i(e){return a.a.createElement("div",{className:"header-blog",style:{display:"flex",backgroundImage:"url("+e.image+")",flexDirection:"column"}},a.a.createElement("div",{className:"overlay-posts"}),a.a.createElement("div",{className:"item-home-menu"},a.a.createElement(l.a,null)),a.a.createElement("div",{className:"cabecalho"},a.a.createElement("div",{class:"description-blog"},a.a.createElement("h1",null,a.a.createElement(o.Link,{to:e.link},"«"),e.mensagemtopo.toUpperCase()||"BLOG",a.a.createElement("hr",{style:{margin:"0 auto"}})))))}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},X8hv:function(e,t,r){var n=r("sXyB"),a=r("RIqP"),o=r("lSNA"),l=r("8OQS"),i=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r("q1tI"),p=r("7ljp").mdx,f=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,o=l(e,i),c=f(t),m=u.useMemo((function(){if(!r)return null;var e=s({React:u,mdx:p},c),t=Object.keys(e),o=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(o)))}),[r,t]);return u.createElement(m,s({},o))}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},cXBx:function(e,t,r){},fZMB:function(e,t,r){},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},sXyB:function(e,t,r){var n=r("SksO"),a=r("b48C");function o(t,r,l){return a()?(e.exports=o=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=o=function(e,t,r){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return r&&n(o,r.prototype),o},e.exports.__esModule=!0,e.exports.default=e.exports),o.apply(null,arguments)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},yZlL:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),l=r("A2+M"),i=r("vrFN"),c=r("9eSz"),s=r.n(c);var u=function(){var e=Object(o.useStaticQuery)("4131332129"),t=e.site,r=e.avatar,n=t.siteMetadata,l=n.author,i=n.social,c=n.shortBio;return a.a.createElement("div",{style:{display:"flex",marginBottom:"4.375rem"}},a.a.createElement(s.a,{fixed:r.childImageSharp.fixed,alt:l,style:{marginRight:"0.875rem",marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),a.a.createElement("p",{style:{margin:0}},"Escrito por ",a.a.createElement("strong",null,"Thais Ribeiro"),c?" "+c:"","."," ",i.twitter?a.a.createElement("a",{href:"https://twitter.com/"+i.twitter},"Me siga no twitter."):null))},p=r("8GIm"),f=r("Rq90"),m=r("W/9C"),d=r("Krw4"),x=(r("cXBx"),r("RWcc")),y=r.n(x);function b(e){var t=e.data,r=t.mdx,n=(t.site,e.pageContext),c=n.previous,s=n.next;return a.a.createElement("div",null,a.a.createElement(i.a,{title:r.frontmatter.title,description:r.frontmatter.description,canonicalLink:r.frontmatter.canonical_link,keywords:r.frontmatter.categories||[],meta:[{name:"twitter:label1",content:"Reading time"},{name:"twitter:data1",content:r.timeToRead+" min read"}]}),a.a.createElement(f.a,{image:y.a,mensagemtopo:r.frontmatter.title,link:"/blogs"}),a.a.createElement("section",{className:"center blog"},a.a.createElement("article",{className:"container small"},a.a.createElement("p",{style:{fontSize:"15px",textAlign:"center"}},a.a.createElement("strong",null,"• Publicado em:")," ",Object(d.a)(r.frontmatter.date)," | "+Object(d.b)(r.timeToRead)),a.a.createElement(l.MDXRenderer,{scope:{Embed:p.a}},r.body)),a.a.createElement("footer",{className:"container small"},a.a.createElement("hr",{style:{margin:"24px 0"}}),a.a.createElement(u,null),a.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.a.createElement("li",null,c&&a.a.createElement(o.Link,{to:c.fields.slug,rel:"prev"},"← ",c.frontmatter.title)),a.a.createElement("li",null,s&&a.a.createElement(o.Link,{to:s.fields.slug,rel:"next"},s.frontmatter.title," →"))))),a.a.createElement("div",{className:"item-footer"},a.a.createElement(m.a,null)))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-decbacdd991a52dad900.js.map