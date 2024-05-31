"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[219],{6638:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=s(5893),r=s(1151);const o={},i="GitHub token",a={id:"github/token",title:"GitHub token",description:"GitHub Actions using the default",source:"@site/docs/github/token.md",sourceDirName:"github",slug:"/github/token",permalink:"/docs/github/token",draft:!1,unlisted:!1,editUrl:"https://github.com/MarcoIeni/release-plz/tree/main/website/docs/github/token.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Output",permalink:"/docs/github/output"},next:{title:"Keep the action up-to-date",permalink:"/docs/github/update"}},c={},l=[{value:"Why you might need further workflow runs",id:"why-you-might-need-further-workflow-runs",level:2},{value:"CI checks",id:"ci-checks",level:3},{value:"Actions after release",id:"actions-after-release",level:3},{value:"How to trigger further workflow runs",id:"how-to-trigger-further-workflow-runs",level:2},{value:"Trigger workflow manually",id:"trigger-workflow-manually",level:3},{value:"Use a Personal Access Token",id:"use-a-personal-access-token",level:3},{value:"Use a GitHub App",id:"use-a-github-app",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"github-token",children:"GitHub token"}),"\n",(0,t.jsxs)(n.p,{children:["GitHub Actions using the default\n",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/actions/security-guides/automatic-token-authentication",children:(0,t.jsx)(n.code,{children:"GITHUB_TOKEN"})}),"\ncannot trigger other\n",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows",children:"workflow"}),"\nruns, i.e. cannot start new GitHub Actions jobs."]}),"\n",(0,t.jsxs)(n.p,{children:["You can learn more in the GitHub\n",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#triggering-a-workflow-from-a-workflow",children:"docs"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["To perform actions after release-plz runs without triggering further workflow runs,\nyou can use GitHub Action ",(0,t.jsx)(n.a,{href:"/docs/github/output",children:"output"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"why-you-might-need-further-workflow-runs",children:"Why you might need further workflow runs"}),"\n",(0,t.jsx)(n.p,{children:"Release-plz doesn't need to trigger further workflow runs to\nopen the release PR or release your packages.\nHowever, you might need release-plz to trigger further workflow runs in the following cases."}),"\n",(0,t.jsx)(n.h3,{id:"ci-checks",children:"CI checks"}),"\n",(0,t.jsx)(n.p,{children:"Workflows acting as checks on pull requests opened by GitHub Actions\nwith the default GitHub token won't run."}),"\n",(0,t.jsx)(n.p,{children:"For example, you might have CI checks that run:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"On a pull request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"on:\n  pull_request:\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"On push:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"on:\n  push:\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If release-plz uses the default GitHub token, CI checks on the release PR\n(i.e. the PR opened by release-plz) won't run."}),"\n",(0,t.jsx)(n.h3,{id:"actions-after-release",children:"Actions after release"}),"\n",(0,t.jsxs)(n.p,{children:["You can further trigger workflows after ",(0,t.jsx)(n.code,{children:"release-plz release"})," runs,\nin the following ways:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When a GitHub release is published:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"on:\n  release:\n    types: [published]\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When a git tag is pushed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'on:\n  push:\n    tags:\n      - "*"\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This can be useful to announce automatically the release on socials\nor to attach files (such as ",(0,t.jsx)(n.a,{href:"/docs/extra/releasing-binaries",children:"binaries"}),") to the GitHub release."]}),"\n",(0,t.jsx)(n.p,{children:"If release-plz uses the default GitHub token, these workflows won't be triggered."}),"\n",(0,t.jsx)(n.h2,{id:"how-to-trigger-further-workflow-runs",children:"How to trigger further workflow runs"}),"\n",(0,t.jsx)(n.p,{children:"To trigger further workflow runs from release-plz, use one of the following methods."}),"\n",(0,t.jsx)(n.h3,{id:"trigger-workflow-manually",children:"Trigger workflow manually"}),"\n",(0,t.jsxs)(n.p,{children:["To run ",(0,t.jsx)(n.code,{children:"on: pull_request"})," workflows you can manually close and reopen the release pull request."]}),"\n",(0,t.jsx)(n.h3,{id:"use-a-personal-access-token",children:"Use a Personal Access Token"}),"\n",(0,t.jsxs)(n.p,{children:["Use a ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token",children:"Personal Access Token (PAT)"}),"\ncreated on an account with write access to the repository.\nThis is the standard method\n",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#triggering-a-workflow-from-a-workflow",children:"recommended by GitHub"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Note that the account that owns the PAT will be the author of the release pull\nrequest and the commit itself.\nIf you don't want release-plz to open release pull requests and commit with\nyour account, consider creating a\n",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/get-started/learning-about-github/types-of-github-accounts#personal-accounts",children:"machine user"}),".\nIf your machine user needs a cool avatar, you can use the release-plz ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(8628).Z+"",children:"logo"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Create the PAT, choosing one of the two types:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#fine-grained-personal-access-tokens",children:"Fine-grained"}),":\nmore secure because you can select the repositories where the PAT can be used.\nFollow ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token",children:"these"}),"\ninstructions, giving the PAT the following permissions:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Select the repositories where you want to use the PAT, to give release-plz write access:\n",(0,t.jsx)(n.img,{alt:"pat repository access",src:s(1813).Z+"",width:"1224",height:"904"})]}),"\n",(0,t.jsxs)(n.li,{children:['Under "Repository permissions", assign "Contents" and "Pull requests" read and write permissions:\n',(0,t.jsx)(n.img,{alt:"pat fine permissions",src:s(542).Z+"",width:"916",height:"866"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#personal-access-tokens-classic",children:"Classic"}),":\nless secure because you can't scope it to a single repository.\nFollow ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic",children:"these"}),"\ninstructions, giving the PAT ",(0,t.jsx)(n.code,{children:"repo"})," permissions:\n",(0,t.jsx)(n.img,{alt:"pat classic permissions",src:s(7288).Z+"",width:"1462",height:"602"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Once you generated your token, save it in the\n",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets",children:"secrets"}),",\nand pass it to both the ",(0,t.jsx)(n.code,{children:"actions/checkout"})," and ",(0,t.jsx)(n.code,{children:"release-plz"})," steps:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"jobs:\n  release-plz:\n    name: Release-plz\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n          token: ${{ secrets.RELEASE_PLZ_TOKEN }} # <-- PAT secret name\n      - name: Install Rust toolchain\n        uses: dtolnay/rust-toolchain@stable\n      - name: Run release-plz\n        uses: MarcoIeni/release-plz-action@v0.5\n        env:\n          GITHUB_TOKEN: ${{ secrets.RELEASE_PLZ_TOKEN }} # <-- PAT secret name\n          CARGO_REGISTRY_TOKEN: ${{ secrets.CARGO_REGISTRY_TOKEN }}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["As shown in the example below,\nyou need to add the ",(0,t.jsx)(n.code,{children:"token"})," field to the ",(0,t.jsx)(n.code,{children:"actions/checkout"})," step, too.\nThis allows release-plz to use the PAT also when spawning ",(0,t.jsx)(n.code,{children:"git"})," commands,\nsuch as ",(0,t.jsx)(n.code,{children:"git tag"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"use-a-github-app",children:"Use a GitHub App"}),"\n",(0,t.jsxs)(n.p,{children:["Generate a GitHub token with a GitHub App.\nThis is the approach used by the\n",(0,t.jsx)(n.a,{href:"https://github.com/MarcoIeni/release-plz/blob/main/.github/workflows/release-plz.yml",children:"release-plz"}),"\nrepo itself. With this approach, the GitHub App will be the author of the release pull request,\ne.g. ",(0,t.jsx)(n.code,{children:"release-plz[bot]"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Here's how to use a GitHub App to generate a GitHub token:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a minimal ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/developers/apps/creating-a-github-app",children:"GitHub App"}),",\nsetting the following fields:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.code,{children:"GitHub App name"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.code,{children:"Homepage URL"})," to anything you like, such as your GitHub profile page."]}),"\n",(0,t.jsxs)(n.li,{children:["Uncheck ",(0,t.jsx)(n.code,{children:"Active"})," under ",(0,t.jsx)(n.code,{children:"Webhook"}),". You do not need to enter a ",(0,t.jsx)(n.code,{children:"Webhook URL"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.code,{children:"Repository permissions: Contents"})," select ",(0,t.jsx)(n.code,{children:"Access: Read & write"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.code,{children:"Repository permissions: Pull requests"})," select ",(0,t.jsx)(n.code,{children:"Access: Read & write"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["If you use ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules",children:"protected tags"}),":\nUnder ",(0,t.jsx)(n.code,{children:"Repository permissions: Administration"})," select ",(0,t.jsx)(n.code,{children:"Access: Read & write"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["(Optional) Under ",(0,t.jsx)(n.code,{children:"Where can this GitHub App be installed?"})," select ",(0,t.jsx)(n.code,{children:"Only on this account"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["(Optional) Set the release-plz ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(8628).Z+"",children:"logo"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a Private key from the App settings page and store it securely."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the App on the repositories where you want to run release-plz."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Store the GitHub App ID, and the private\nkey you created in step 2 in GitHub\n",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets",children:"secrets"}),".\nE.g. ",(0,t.jsx)(n.code,{children:"APP_ID"}),", ",(0,t.jsx)(n.code,{children:"APP_PRIVATE_KEY"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use\n",(0,t.jsx)(n.a,{href:"https://github.com/actions/create-github-app-token",children:"actions/create-github-app-token"}),"\nto generate a token from the GitHub Action:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"steps:\n  # Generating a GitHub token, so that PRs and tags created by\n  # the release-plz-action can trigger actions workflows.\n  - name: Generate GitHub token\n    uses: actions/create-github-app-token@v1\n    id: generate-token\n    with:\n      app-id: ${{ secrets.APP_ID }} # <-- GitHub App ID secret name\n      private-key: ${{ secrets.APP_PRIVATE_KEY }} # <-- GitHub App private key secret name\n  - name: Checkout repository\n    uses: actions/checkout@v4\n    with:\n      fetch-depth: 0\n      token: ${{ steps.generate-token.outputs.token }}\n  - name: Install Rust toolchain\n    uses: dtolnay/rust-toolchain@stable\n  - name: Run release-plz\n    uses: MarcoIeni/release-plz-action@main\n    env:\n      GITHUB_TOKEN: ${{ steps.generate-token.outputs.token }}\n      CARGO_REGISTRY_TOKEN: ${{ secrets.CARGO_REGISTRY_TOKEN }}\n"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8628:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/files/robot_head-f2ed88f0d3499bdfac580549e027e03e.jpeg"},7288:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pat-classic-5364015d33cc765a7fd972202d05a946.png"},542:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pat-overview-47a9c927a36ea736406b5ade3c4dd467.png"},1813:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/repository-access-319fcb9737307a260ac4b043ff57f16e.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var t=s(7294);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);