"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[464],{2670:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=t(5893),i=t(1151);const r={},s="Changelog format",c={id:"changelog-format",title:"Changelog format",description:"Release-plz generates the changelog by using git-cliff.",source:"@site/docs/changelog-format.md",sourceDirName:".",slug:"/changelog-format",permalink:"/docs/changelog-format",draft:!1,unlisted:!1,editUrl:"https://github.com/MarcoIeni/release-plz/tree/main/website/docs/changelog-format.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Keep the action up-to-date",permalink:"/docs/github/update"},next:{title:"Configuration",permalink:"/docs/config"}},a={},l=[{value:"How should I write my commits?",id:"how-should-i-write-my-commits",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"changelog-format",children:"Changelog format"}),"\n",(0,o.jsxs)(n.p,{children:["Release-plz generates the changelog by using ",(0,o.jsx)(n.a,{href:"https://git-cliff.org",children:"git-cliff"}),".\nBy default, release-plz uses the\n",(0,o.jsx)(n.a,{href:"https://keepachangelog.com/en/1.1.0/",children:"keep a changelog"})," format."]}),"\n",(0,o.jsxs)(n.p,{children:["You can customize the changelog format, by providing a git-cliff configuration\nfile with the ",(0,o.jsx)(n.code,{children:"--changelog-config"})," argument, or with the\n",(0,o.jsx)(n.a,{href:"/docs/config#the-changelog_config-field",children:(0,o.jsx)(n.code,{children:"changelog_config"})})," of the configuration file."]}),"\n",(0,o.jsxs)(n.p,{children:["See the ",(0,o.jsx)(n.a,{href:"https://git-cliff.org/docs/configuration",children:"git-cliff documentation"}),"\nto see how to customize the changelog format."]}),"\n",(0,o.jsx)(n.h2,{id:"how-should-i-write-my-commits",children:"How should I write my commits?"}),"\n",(0,o.jsxs)(n.p,{children:["Release-plz assumes you are using ",(0,o.jsx)(n.a,{href:"https://www.conventionalcommits.org/",children:"Conventional Commit messages"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The most important prefixes you should have in mind are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"fix:"}),": represents bug fixes, and results in a ",(0,o.jsx)(n.a,{href:"https://semver.org/",children:"SemVer"}),"\npatch bump."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"feat:"}),": represents a new feature, and results in a SemVer minor bump."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<prefix>!:"})," (e.g. ",(0,o.jsx)(n.code,{children:"feat!:"}),"): represents a breaking change\n(indicated by the ",(0,o.jsx)(n.code,{children:"!"}),") and results in a SemVer major bump."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Commits that don't follow the Conventional Commit format result in a SemVer patch bump."})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var o=t(7294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);