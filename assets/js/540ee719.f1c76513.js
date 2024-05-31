"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[410],{3015:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var t=s(5893),r=s(1151);const l={},i="Quickstart",a={id:"github/quickstart",title:"Quickstart",description:"By default, every time you merge a commit to the main branch, the",source:"@site/docs/github/quickstart.md",sourceDirName:"github",slug:"/github/quickstart",permalink:"/docs/github/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/MarcoIeni/release-plz/tree/main/website/docs/github/quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitHub Action",permalink:"/docs/github/"},next:{title:"Output",permalink:"/docs/github/output"}},o={},c=[{value:"1. Change GitHub Actions permissions",id:"1-change-github-actions-permissions",level:2},{value:"2. Set the <code>CARGO_REGISTRY_TOKEN</code> secret",id:"2-set-the-cargo_registry_token-secret",level:2},{value:"3. Setup the workflow",id:"3-setup-the-workflow",level:2},{value:"Example: release-pr and release",id:"example-release-pr-and-release",level:3},{value:"Example: release-pr only",id:"example-release-pr-only",level:3},{value:"Example: release only",id:"example-release-only",level:3},{value:"Example: release-pr and release on schedule",id:"example-release-pr-and-release-on-schedule",level:3},{value:"4. Set input variables (optional)",id:"4-set-input-variables-optional",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,t.jsxs)(n.p,{children:["By default, every time you merge a commit to the main branch, the\n",(0,t.jsx)(n.a,{href:"https://github.com/marketplace/actions/release-plz",children:"GitHub Action"}),"\nruns two commands, one after the other:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/usage/release-pr",children:(0,t.jsx)(n.code,{children:"release-plz release-pr"})}),": creates the release pr."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/usage/release",children:(0,t.jsx)(n.code,{children:"release-plz release"})}),": publishes the unpublished packages."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Follow the steps below to set up the GitHub Action."}),"\n",(0,t.jsx)(n.h2,{id:"1-change-github-actions-permissions",children:"1. Change GitHub Actions permissions"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Go to the GitHub Actions settings:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"actions settings",src:s(6741).Z+"",width:"1484",height:"1212"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Change "Workflow permissions" to allow GitHub Actions to create and approve\npull requests (needed to create and update the PR).'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"workflow permission",src:s(8783).Z+"",width:"1876",height:"634"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"2-set-the-cargo_registry_token-secret",children:["2. Set the ",(0,t.jsx)(n.code,{children:"CARGO_REGISTRY_TOKEN"})," secret"]}),"\n",(0,t.jsx)(n.p,{children:"Release-plz needs a token to publish your packages to the cargo registry."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Retrieve your registry token following\n",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/cargo/reference/publishing.html#before-your-first-publish",children:"this"}),"\nguide."]}),"\n",(0,t.jsxs)(n.li,{children:["Add your cargo registry token as a secret in your repository following\n",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository",children:"this"}),"\nguide."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["As specified in the ",(0,t.jsx)(n.code,{children:"cargo publish"}),"\n",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/cargo/commands/cargo-publish.html#publish-options",children:"options"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The token for ",(0,t.jsx)(n.a,{href:"https://crates.io/",children:"crates.io"})," shall be specified with the ",(0,t.jsx)(n.code,{children:"CARGO_REGISTRY_TOKEN"}),"\nenvironment variable."]}),"\n",(0,t.jsxs)(n.li,{children:["Tokens for other registries shall be specified with environment variables of the form\n",(0,t.jsx)(n.code,{children:"CARGO_REGISTRIES_NAME_TOKEN"})," where ",(0,t.jsx)(n.code,{children:"NAME"})," is the name of the registry in all capital letters."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you are creating a new crates.io token, specify the following scope:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"token scope",src:s(3405).Z+"",width:"1442",height:"460"})}),"\n",(0,t.jsx)(n.h2,{id:"3-setup-the-workflow",children:"3. Setup the workflow"}),"\n",(0,t.jsxs)(n.p,{children:["Add the release-plz workflow file under the ",(0,t.jsx)(n.code,{children:".github/workflows"})," directory.\nFor example ",(0,t.jsx)(n.code,{children:".github/workflows/release-plz.yml"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Use one of the following examples as a starting point."}),"\n",(0,t.jsx)(n.h3,{id:"example-release-pr-and-release",children:"Example: release-pr and release"}),"\n",(0,t.jsxs)(n.p,{children:["This is the suggested configuration if you are getting started with release-plz.\nWith this configuration, when you make changes to the ",(0,t.jsx)(n.code,{children:"main"})," branch:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"release-plz creates a pull request with the new versions,\nwhere it prepares the next release."}),"\n",(0,t.jsx)(n.li,{children:"release-plz releases the unpublished packages."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"name: Release-plz\n\npermissions:\n  pull-requests: write\n  contents: write\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  release-plz:\n    name: Release-plz\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n      - name: Install Rust toolchain\n        uses: dtolnay/rust-toolchain@stable\n      - name: Run release-plz\n        uses: MarcoIeni/release-plz-action@v0.5\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          CARGO_REGISTRY_TOKEN: ${{ secrets.CARGO_REGISTRY_TOKEN }}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Notes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fetch-depth: 0"})," is needed to clone all the git history, which is necessary to\ndetermine the next version and build the changelog."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-release-pr-only",children:"Example: release-pr only"}),"\n",(0,t.jsxs)(n.p,{children:["Use this configuration if you want release-plz to only update your packages,\nand you want to handle ",(0,t.jsx)(n.code,{children:"cargo publish"})," and git tag push by yourself."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"name: Release-plz\n\npermissions:\n  pull-requests: write\n  contents: write\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  release-plz:\n    name: Release-plz\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n      - name: Install Rust toolchain\n        uses: dtolnay/rust-toolchain@stable\n      - name: Run release-plz\n        uses: MarcoIeni/release-plz-action@v0.5\n        with:\n          command: release-pr\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"example-release-only",children:"Example: release only"}),"\n",(0,t.jsxs)(n.p,{children:["Use this configuration if you want release-plz to only release your packages,\nand you want to update ",(0,t.jsx)(n.code,{children:"Cargo.toml"})," versions and changelogs by yourself."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"name: Release-plz\n\npermissions:\n  pull-requests: write\n  contents: write\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  release-plz:\n    name: Release-plz\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n      - name: Install Rust toolchain\n        uses: dtolnay/rust-toolchain@stable\n      - name: Run release-plz\n        uses: MarcoIeni/release-plz-action@v0.5\n        with:\n          command: release\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          CARGO_REGISTRY_TOKEN: ${{ secrets.CARGO_REGISTRY_TOKEN }}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"example-release-pr-and-release-on-schedule",children:"Example: release-pr and release on schedule"}),"\n",(0,t.jsxs)(n.p,{children:["In the above examples, release-plz runs every time you merge a commit to the ",(0,t.jsx)(n.code,{children:"main"})," branch."]}),"\n",(0,t.jsxs)(n.p,{children:["To run release-plz periodically, you can use the\n",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/actions/reference/events-that-trigger-workflows#schedule",children:(0,t.jsx)(n.code,{children:"schedule"})})," event:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"name: Release-plz\n\npermissions:\n  pull-requests: write\n  contents: write\n\n# Trigger the workflow every Monday.\non:\n  schedule:\n    # * is a special character in YAML so you have to quote this string\n    - cron:  '0 0 * * MON'\n\njobs:\n  release-plz:\n    name: Release-plz\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n      - name: Install Rust toolchain\n        uses: dtolnay/rust-toolchain@stable\n      - name: Run release-plz\n        uses: MarcoIeni/release-plz-action@v0.5\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          CARGO_REGISTRY_TOKEN: ${{ secrets.CARGO_REGISTRY_TOKEN }}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"4-set-input-variables-optional",children:"4. Set input variables (optional)"}),"\n",(0,t.jsx)(n.p,{children:"The GitHub action accepts the following input variables:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"command"}),": The release-plz command to run. Accepted values: ",(0,t.jsx)(n.code,{children:"release-pr"}),",\n",(0,t.jsx)(n.code,{children:"release"}),". (By default it runs both commands)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"registry"}),": Registry where the packages are stored.\nThe registry name needs to be present in the Cargo config.\nIf unspecified, crates.io is used. (Defaults to crates.io)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"manifest_path"}),": Path to the Cargo.toml of the project you want to update.\nBoth Cargo workspaces and single packages are supported. (Defaults to the root\ndirectory)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"version"}),": Release-plz version to use. E.g. ",(0,t.jsx)(n.code,{children:"0.3.70"}),". (Default: latest version)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"config"}),": Release-plz config file location. (Defaults to\n",(0,t.jsx)(n.code,{children:"release-plz.toml"})," or ",(0,t.jsx)(n.code,{children:".release-plz.toml"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"token"}),": Token used to publish to the cargo registry."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can specify the input variables by using the ",(0,t.jsx)(n.code,{children:"with"})," keyword.\nFor example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"jobs:\n  release-plz:\n    name: Release-plz\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n      - name: Install Rust toolchain\n        uses: dtolnay/rust-toolchain@stable\n      - name: Run release-plz\n        uses: MarcoIeni/release-plz-action@v0.5\n        with: # <--- Input variables\n          command: release-pr\n          registry: my-registry\n          manifest_path: rust-crates/my-crate/Cargo.toml\n          version: release-plz-v0.2.45\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          CARGO_REGISTRY_TOKEN: ${{ secrets.CARGO_REGISTRY_TOKEN }}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},6741:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/actions_settings-29f01e7f00f3c53f1aef4ccc0689b483.png"},3405:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/token_scope-5d0da8f1b61e22bb12823c49db0a3e81.png"},8783:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/workflow_permissions-1b2139cf34240279ab7e14dcd3497b72.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var t=s(7294);const r={},l=t.createContext(r);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);