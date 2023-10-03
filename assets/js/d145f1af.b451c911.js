"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,k=c["".concat(l,".").concat(h)]||c[h]||g[h]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Triggering further workflows",s={unversionedId:"github/trigger",id:"github/trigger",title:"Triggering further workflows",description:"GitHub Actions using the default",source:"@site/docs/github/trigger.md",sourceDirName:"github",slug:"/github/trigger",permalink:"/docs/github/trigger",draft:!1,editUrl:"https://github.com/MarcoIeni/release-plz/tree/main/website/docs/github/trigger.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitHub Action",permalink:"/docs/github/"},next:{title:"Keep the action up-to-date",permalink:"/docs/github/update"}},l={},p=[{value:"How to trigger further workflow runs",id:"how-to-trigger-further-workflow-runs",level:2},{value:"Trigger workflow manually",id:"trigger-workflow-manually",level:3},{value:"Use a Personal Access Token",id:"use-a-personal-access-token",level:3},{value:"Use a GitHub App",id:"use-a-github-app",level:3},{value:"How to trigger further workflows",id:"how-to-trigger-further-workflows",level:2}],u={toc:p},c="wrapper";function g(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"triggering-further-workflows"},"Triggering further workflows"),(0,a.kt)("p",null,"GitHub Actions using the default\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/security-guides/automatic-token-authentication"},(0,a.kt)("inlineCode",{parentName:"a"},"GITHUB_TOKEN")),"\ncannot trigger other workflow runs.\nFor example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"on: pull_request")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"on: push")," workflows acting as checks on pull\nrequests opened by GitHub Actions won't run."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"on: release")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"on: push: tags")," workflows acting on releases or\ntags created by GitHub actions won't run.")),(0,a.kt)("p",null,"You can learn more in the GitHub\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#triggering-a-workflow-from-a-workflow"},"docs"),"."),(0,a.kt)("h2",{id:"how-to-trigger-further-workflow-runs"},"How to trigger further workflow runs"),(0,a.kt)("p",null,"Release-plz doesn't need to trigger further workflow runs to release your packages.\nHowever, if you want to run CI checks on the release PR,\nor if you want to trigger another workflow after release-plz pushes\na tag or creates a release, you need to use one of the following methods."),(0,a.kt)("h3",{id:"trigger-workflow-manually"},"Trigger workflow manually"),(0,a.kt)("p",null,"To run ",(0,a.kt)("inlineCode",{parentName:"p"},"on: pull_request")," workflows you can manually close and reopen the release pull request."),(0,a.kt)("h3",{id:"use-a-personal-access-token"},"Use a Personal Access Token"),(0,a.kt)("p",null,"Use a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token"},"Personal Access Token (PAT)"),"\ncreated on an account with write access to the repository.\nThis is the standard method\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#triggering-a-workflow-from-a-workflow"},"recommended by GitHub"),"."),(0,a.kt)("p",null,"Note that the account that owns the PAT will be the author of the release pull request.\nIf you don't want release-plz to open release pull requests with your account,\nconsider creating a\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/learning-about-github/types-of-github-accounts#personal-accounts"},"machine user"),".\nIf your machine user needs a cool avatar, you can use the release-plz ",(0,a.kt)("a",{target:"_blank",href:n(8628).Z},"logo"),"."),(0,a.kt)("p",null,"Create the PAT, choosing one of the two types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#fine-grained-personal-access-tokens"},"Fine-grained"),":\nmore secure because you can select the repositories where the PAT can be used.\nRelease-plz needs the following:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Select the repositories where you want to use the PAT, to give release-plz write access:\n",(0,a.kt)("img",{alt:"pat repository access",src:n(1813).Z,width:"1224",height:"904"})),(0,a.kt)("li",{parentName:"ul"},'Assign "Contents" and "Pull requests" read and write permissions:\n',(0,a.kt)("img",{alt:"pat fine permissions",src:n(542).Z,width:"916",height:"866"})))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#personal-access-tokens-classic"},"Classic"),":\nless secure because you can't scope it to a single repository.\nRelease-plz needs ",(0,a.kt)("inlineCode",{parentName:"li"},"repo")," permissions:\n",(0,a.kt)("img",{alt:"pat classic permissions",src:n(7288).Z,width:"1462",height:"602"}))),(0,a.kt)("p",null,"Once you generated your token, save it in the\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets"},"secrets"),",\nand pass it to both the ",(0,a.kt)("inlineCode",{parentName:"p"},"actions/checkout")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"release-plz")," actions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  release-plz:\n    name: Release-plz\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n          token: ${{ secrets.RELEASE_PLZ_TOKEN }} # <-- PAT secret name\n      - name: Install Rust toolchain\n        uses: dtolnay/rust-toolchain@stable\n      - name: Run release-plz\n        uses: MarcoIeni/release-plz-action@v0.5\n        env:\n          GITHUB_TOKEN: ${{ secrets.RELEASE_PLZ_TOKEN }} # <-- PAT secret name\n          CARGO_REGISTRY_TOKEN: ${{ secrets.CARGO_REGISTRY_TOKEN }}\n")),(0,a.kt)("h3",{id:"use-a-github-app"},"Use a GitHub App"),(0,a.kt)("p",null,"Generate a GitHub token with a GitHub App.\nThis is the approach used by the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MarcoIeni/release-plz/blob/main/.github/workflows/release-plz.yml"},"release-plz"),"\nrepo itself. With this approach, the GitHub App will be the author of the release pull request,\ne.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"release-plz[bot]"),"."),(0,a.kt)("p",null,"Here's how to use a GitHub App to generate a GitHub token:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a minimal ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/developers/apps/creating-a-github-app"},"GitHub App"),",\nsetting the following fields:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"GitHub App name"),"."),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"Homepage URL")," to anything you like, such as your GitHub profile page."),(0,a.kt)("li",{parentName:"ul"},"Uncheck ",(0,a.kt)("inlineCode",{parentName:"li"},"Active")," under ",(0,a.kt)("inlineCode",{parentName:"li"},"Webhook"),". You do not need to enter a ",(0,a.kt)("inlineCode",{parentName:"li"},"Webhook URL"),"."),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("inlineCode",{parentName:"li"},"Repository permissions: Contents")," select ",(0,a.kt)("inlineCode",{parentName:"li"},"Access: Read & write"),"."),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("inlineCode",{parentName:"li"},"Repository permissions: Pull requests")," select ",(0,a.kt)("inlineCode",{parentName:"li"},"Access: Read & write"),"."),(0,a.kt)("li",{parentName:"ul"},"If you use ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules"},"protected tags"),":\nUnder ",(0,a.kt)("inlineCode",{parentName:"li"},"Repository permissions: Administration")," select ",(0,a.kt)("inlineCode",{parentName:"li"},"Access: Read & write"),"."),(0,a.kt)("li",{parentName:"ul"},"(Optional) Under ",(0,a.kt)("inlineCode",{parentName:"li"},"Where can this GitHub App be installed?")," select ",(0,a.kt)("inlineCode",{parentName:"li"},"Only on this account")),(0,a.kt)("li",{parentName:"ul"},"(Optional) Set the release-plz ",(0,a.kt)("a",{target:"_blank",href:n(8628).Z},"logo"),"."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a Private key from the App settings page and store it securely.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the App on the repositories where you want to run release-plz.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Store the GitHub App ID, and the private\nkey you created in step 2 in GitHub\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets"},"secrets"),".\nE.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"APP_ID"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"APP_PRIVATE_KEY"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/actions/create-github-app-token"},"actions/create-github-app-token"),"\nto generate a token from the GitHub Action:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"steps:\n  # Generating a GitHub token, so that PRs and tags created by\n  # the release-plz-action can trigger actions workflows.\n  - name: Generate GitHub token\n    uses: actions/create-github-app-token@v1\n    id: generate-token\n    with:\n      app_id: ${{ secrets.APP_ID }} # <-- GitHub App ID secret name\n      private_key: ${{ secrets.APP_PRIVATE_KEY }} # <-- GitHub App private key secret name\n  - name: Checkout repository\n    uses: actions/checkout@v4\n    with:\n      fetch-depth: 0\n      token: ${{ steps.generate-token.outputs.token }}\n  - name: Install Rust toolchain\n    uses: dtolnay/rust-toolchain@stable\n  - name: Run release-plz\n    uses: MarcoIeni/release-plz-action@main\n    env:\n      GITHUB_TOKEN: ${{ steps.generate-token.outputs.token }}\n      CARGO_REGISTRY_TOKEN: ${{ secrets.CARGO_REGISTRY_TOKEN }}\n")))),(0,a.kt)("h2",{id:"how-to-trigger-further-workflows"},"How to trigger further workflows"),(0,a.kt)("p",null,"You can trigger workflows on different\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows"},"events"),".\nFor example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When a GitHub release is published:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"on:\n  release:\n    types: [published]\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When a git tag is pushed:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'on:\n  push:\n    tags:\n      - "*"\n')))))}g.isMDXComponent=!0},8628:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/robot_head-f2ed88f0d3499bdfac580549e027e03e.jpeg"},7288:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pat-classic-5364015d33cc765a7fd972202d05a946.png"},542:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pat-overview-47a9c927a36ea736406b5ade3c4dd467.png"},1813:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/repository-access-319fcb9737307a260ac4b043ff57f16e.png"}}]);