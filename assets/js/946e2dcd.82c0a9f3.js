"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[528],{613:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=s(5893),o=s(1151);const r={},l="Advanced Configuration",i={id:"github/advanced",title:"Advanced Configuration",description:"Git submodules",source:"@site/docs/github/advanced.md",sourceDirName:"github",slug:"/github/advanced",permalink:"/docs/github/advanced",draft:!1,unlisted:!1,editUrl:"https://github.com/MarcoIeni/release-plz/tree/main/website/docs/github/advanced.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Keep the action up-to-date",permalink:"/docs/github/update"},next:{title:"Security",permalink:"/docs/github/security"}},a={},c=[{value:"Git submodules",id:"git-submodules",level:2},{value:"Add more info to commit message",id:"add-more-info-to-commit-message",level:2},{value:"Add additional checks before releasing",id:"add-additional-checks-before-releasing",level:2},{value:"Close old release PRs",id:"close-old-release-prs",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"advanced-configuration",children:"Advanced Configuration"}),"\n",(0,t.jsx)(n.h2,{id:"git-submodules",children:"Git submodules"}),"\n",(0,t.jsxs)(n.p,{children:["If your repository uses git submodules, set the ",(0,t.jsx)(n.code,{children:"submodules"})," option in the ",(0,t.jsx)(n.code,{children:"actions/checkout"})," step:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"submodules: true"})," to checkout submodules."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"submodules: recursive"})," to recursively checkout submodules."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"jobs:\n  release-plz:\n    name: Release-plz\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n          submodules: recursive # <-- Add this line\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To learn more, see GitHub ",(0,t.jsx)(n.a,{href:"https://github.com/actions/checkout/",children:"docs"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"add-more-info-to-commit-message",children:"Add more info to commit message"}),"\n",(0,t.jsxs)(n.p,{children:["By default, the commit message of the release PR only contains ",(0,t.jsx)(n.code,{children:"chore: release"}),'.\nTo add the PR title and description to the default commit message when merging a pull request,\nchange the GitHub repository settings under "General":']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"pr settings",src:s(4914).Z+"",width:"1356",height:"950"})}),"\n",(0,t.jsxs)(n.p,{children:["You can learn more in the\n",(0,t.jsx)(n.a,{href:"https://github.blog/changelog/2022-08-23-new-options-for-controlling-the-default-commit-message-when-merging-a-pull-request/",children:"announcement"}),"\nand\n",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests",children:"docs"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"add-additional-checks-before-releasing",children:"Add additional checks before releasing"}),"\n",(0,t.jsxs)(n.p,{children:["To release your crates, Release-plz runs ",(0,t.jsx)(n.code,{children:"cargo publish"}),", which checks if your code\ncompile before publishing to the cargo registry."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to run other checks before releasing (e.g. ",(0,t.jsx)(n.code,{children:"cargo test"}),"), you have two options:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"(preferred)"})," Add the checks in other GitHub actions and run them in the Pull Requests.\nOnly merge a PR if the checks are successful.\nThe pro of this approach, is that release-plz and your checks run in parallel."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add the checks to the GitHub action before running release-plz:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"jobs:\n  release-plz:\n    name: Release-plz\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n      - name: Install Rust toolchain\n        uses: dtolnay/rust-toolchain@stable\n      - run: cargo test # <-- put any check you like here\n      - name: Run release-plz\n        uses: MarcoIeni/release-plz-action@v0.5\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          CARGO_REGISTRY_TOKEN: ${{ secrets.CARGO_REGISTRY_TOKEN }}\n"})}),"\n",(0,t.jsx)(n.p,{children:"The con of this approach is that the release-plz action will complete later\nbecause it needs to wait for the other checks to finish."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"close-old-release-prs",children:"Close old release PRs"}),"\n",(0,t.jsx)(n.p,{children:"Release-plz updates the release PR by force-pushing to it.\nIf you want release-plz to open new release PRs instead of updating the old ones,\nyou can close the old release PR before running release-plz:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'jobs:\n  release-plz:\n    name: Release-plz\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n      - name: Install Rust toolchain\n        uses: dtolnay/rust-toolchain@stable\n      - name: Close old release PR\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n        run: |\n          # List all opened PRs which head branch starts with "release-plz-"\n          release_pr=$(gh pr list --state=\'open\' --json number,headRefName --jq \'.[] | select(.headRefName | startswith("release-plz-")) | .number\')\n          # Close the release PR if there is one\n          if [[ -n "$release_pr" ]]; then\n            echo "Closing old release PR $release_pr"\n            gh pr close $release_pr\n          else\n            echo "No open release PR"\n          fi\n      - name: Run release-plz\n        uses: MarcoIeni/release-plz-action@v0.5\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          CARGO_REGISTRY_TOKEN: ${{ secrets.CARGO_REGISTRY_TOKEN }}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4914:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pr_settings-0da3cae03377bed21f38b0f92546c85a.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var t=s(7294);const o={},r=t.createContext(o);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);