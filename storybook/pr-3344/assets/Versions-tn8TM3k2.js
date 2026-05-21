import{j as e}from"./iframe-Dm6eVTzG.js";import{useMDXComponents as o}from"./index-FlUseBxK.js";import{M as s}from"./blocks-Dr6SaYbC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BhPs6Q8c.js";import"./index-DSDYHDv9.js";import"./index-CDLvbpJ7.js";function c(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{title:"Docs/Versions"}),`
`,e.jsx(n.h1,{id:"versions-and-compatibility",children:"Versions and Compatibility"}),`
`,e.jsx(n.h2,{id:"current-version",children:"Current Version"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@osdk/react-components"})," is currently at ",e.jsx(n.strong,{children:"v0.18.0"})," (beta)."]}),`
`,e.jsx(n.h2,{id:"peer-dependencies",children:"Peer Dependencies"}),`
`,e.jsxs(n.p,{children:[`| Package | Required Version |
|---------|-----------------|
| `,e.jsx(n.code,{children:"react"})," | ",e.jsx(n.code,{children:"^17 \\|\\| ^18 \\|\\| ^19"}),` |
| `,e.jsx(n.code,{children:"react-dom"})," | ",e.jsx(n.code,{children:"^17 \\|\\| ^18 \\|\\| ^19"}),` |
| `,e.jsx(n.code,{children:"@types/react"})," | ",e.jsx(n.code,{children:"^17 \\|\\| ^18 \\|\\| ^19"}),` |
| `,e.jsx(n.code,{children:"@osdk/api"})," | ",e.jsx(n.code,{children:"^2.8.0"}),` |
| `,e.jsx(n.code,{children:"@osdk/client"})," | ",e.jsx(n.code,{children:"^2.8.0"}),` |
| `,e.jsx(n.code,{children:"@osdk/react"})," | ",e.jsx(n.code,{children:"^2.8.0"}),` |
| `,e.jsx(n.code,{children:"classnames"})," | ",e.jsx(n.code,{children:"^2.0.0"})," |"]}),`
`,e.jsx(n.h2,{id:"react-version-support",children:"React Version Support"}),`
`,e.jsxs(n.p,{children:[`Components are tested against React 17, 18, and 19. The package uses no
APIs exclusive to React 18+ (e.g. `,e.jsx(n.code,{children:"useId"}),", ",e.jsx(n.code,{children:"useSyncExternalStore"}),`) in a way
that would break React 17 consumers.`]}),`
`,e.jsx(n.h2,{id:"osdk-version-alignment",children:"OSDK Version Alignment"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@osdk/react-components"})," depends on ",e.jsx(n.code,{children:"@osdk/react"}),`, which in turn depends on
`,e.jsx(n.code,{children:"@osdk/client"})," and ",e.jsx(n.code,{children:"@osdk/api"}),`. All three OSDK packages are released in
lockstep. When upgrading, bump them together:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @osdk/api@latest @osdk/client@latest @osdk/react@latest @osdk/react-components@latest
`})}),`
`,e.jsx(n.h2,{id:"import-paths",children:"Import Paths"}),`
`,e.jsxs(n.p,{children:["All components are exported under ",e.jsx(n.code,{children:"experimental/"})," sub-paths:"]}),`
`,e.jsxs(n.p,{children:[`| Component | Import Path |
|-----------|-------------|
| `,e.jsx(n.code,{children:"ObjectTable"})," | ",e.jsx(n.code,{children:"@osdk/react-components/experimental/object-table"}),` |
| `,e.jsx(n.code,{children:"FilterList"})," | ",e.jsx(n.code,{children:"@osdk/react-components/experimental/filter-list"}),` |
| `,e.jsx(n.code,{children:"PdfViewer"})," | ",e.jsx(n.code,{children:"@osdk/react-components/experimental/pdf-viewer"}),` |
| `,e.jsx(n.code,{children:"ActionForm"})," | ",e.jsx(n.code,{children:"@osdk/react-components/experimental/action-form"}),` |
| `,e.jsx(n.code,{children:"AipAgentChat"})," | ",e.jsx(n.code,{children:"@osdk/react-components/experimental/aip-agent-chat"}),` |
| `,e.jsx(n.code,{children:"DocumentViewer"})," | ",e.jsx(n.code,{children:"@osdk/react-components/experimental/document-viewer"}),` |
| `,e.jsx(n.code,{children:"EmailViewer"})," | ",e.jsx(n.code,{children:"@osdk/react-components/experimental/email-viewer"}),` |
| `,e.jsx(n.code,{children:"ExcelViewer"})," | ",e.jsx(n.code,{children:"@osdk/react-components/experimental/excel-viewer"}),` |
| `,e.jsx(n.code,{children:"ImageViewer"})," | ",e.jsx(n.code,{children:"@osdk/react-components/experimental/image-viewer"}),` |
| `,e.jsx(n.code,{children:"VideoViewer"})," | ",e.jsx(n.code,{children:"@osdk/react-components/experimental/video-viewer"}),` |
| `,e.jsx(n.code,{children:"XmlViewer"})," | ",e.jsx(n.code,{children:"@osdk/react-components/experimental/xml-viewer"}),` |
| `,e.jsx(n.code,{children:"MarkdownRenderer"})," | ",e.jsx(n.code,{children:"@osdk/react-components/experimental/markdown-renderer"}),` |
| `,e.jsx(n.code,{children:"TiffRenderer"})," | ",e.jsx(n.code,{children:"@osdk/react-components/experimental/tiff-renderer"})," |"]}),`
`,e.jsxs(n.p,{children:["A barrel export at ",e.jsx(n.code,{children:"@osdk/react-components/experimental"}),` re-exports everything
from all sub-paths above.`]})]})}function p(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(c,{...r})}):c(r)}export{p as default};
