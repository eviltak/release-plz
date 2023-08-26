"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},l="Update",i={unversionedId:"usage/update",id:"usage/update",title:"Update",description:"The release-plz update command updates the version and the changelog of the",source:"@site/docs/usage/update.md",sourceDirName:"usage",slug:"/usage/update",permalink:"/docs/usage/update",draft:!1,editUrl:"https://github.com/MarcoIeni/release-plz/tree/main/website/docs/usage/update.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/usage/installation"},next:{title:"release-pr",permalink:"/docs/usage/release-pr"}},s={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"update"},"Update"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"release-plz update")," command updates the version and the changelog of the\npackages of a local workspace."),(0,a.kt)("p",null,"The command:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Downloads the packages of the project from the cargo registry."),(0,a.kt)("li",{parentName:"ul"},"Compares the local packages with the downloaded ones to determine the new commits."),(0,a.kt)("li",{parentName:"ul"},"Checks for API breaking changes in libraries if\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/obi1kenobi/cargo-semver-checks"},"cargo-semver-checks"),"\nis installed.\n",(0,a.kt)("em",{parentName:"li"},"Warning:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo-semver-checks")," doesn't catch every semver violation."),(0,a.kt)("li",{parentName:"ul"},"Updates the packages versions based on the messages of the new commits (based\non ",(0,a.kt)("a",{parentName:"li",href:"https://www.conventionalcommits.org/"},"conventional commits")," and\n",(0,a.kt)("a",{parentName:"li",href:"https://semver.org/"},"semantic versioning"),")."),(0,a.kt)("li",{parentName:"ul"},"Updates the packages changelogs with the messages of the new commits."),(0,a.kt)("li",{parentName:"ul"},"Updates all dependencies by running ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo update")," (disabled by default).")),(0,a.kt)("p",null,"In the following example, I run ",(0,a.kt)("inlineCode",{parentName:"p"},"release-plz")," on the ",(0,a.kt)("inlineCode",{parentName:"p"},"release-plz")," project itself.\n",(0,a.kt)("inlineCode",{parentName:"p"},"Release-plz")," increases the version and the changelog of the packages with\nunpublished changes."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11428655/160762832-54300ddb-ec9c-4538-a611-c66490c47333.gif",alt:"release-plz update"})),(0,a.kt)("p",null,"To learn more, run ",(0,a.kt)("inlineCode",{parentName:"p"},"release-plz update --help"),"."))}m.isMDXComponent=!0}}]);