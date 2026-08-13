import{j as r,M as s}from"./iframe-DqbKZIsj.js";import{P as p}from"./pdf-viewer-Dv0-FEHy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BokeLgsv.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-BpW14Vhk.js";import"./index-CVHMDurZ.js";import"./BasePdfViewer-_WiVbVad.js";import"./BasePdfViewer.module.css-TNWl4V9j.js";import"./PdfViewerAnnotationLayer--X_4HEy1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BqZh-hKr.js";import"./PdfViewerOutlineSidebar-BQfBg_zo.js";import"./PdfViewerSidebarHeader-BaaaFDyn.js";import"./useBaseUiId-BxNdDlhM.js";import"./useControlled-C0WeE-L2.js";import"./CompositeRoot-ZOQ6IFAx.js";import"./CompositeItem-D-1eywNB.js";import"./ToolbarRootContext-oWhh6x6s.js";import"./composite-CX6gxRms.js";import"./svgIconContainer-C4ng68oA.js";import"./PdfViewerSearchBar-Sdq9oN2m.js";import"./chevron-up-DgkczlpB.js";import"./chevron-down-B6ifOWAI.js";import"./cross-Z2gUdKwX.js";import"./PdfViewerSidebar-U6pisTOQ.js";import"./index-BAbFdJDq.js";import"./index-DtlYlCBm.js";import"./index-BUCimpxE.js";import"./PdfViewerToolbar-CgDNpGKX.js";import"./Button-BC-fUx3I.js";import"./chevron-right-DFZZGFxh.js";import"./Input-DmzqPdUu.js";import"./search-ufs3MxrA.js";import"./spin-kIht_5nK.js";import"./error-Deq2jp5x.js";import"./withOsdkMetrics-BY3qMARX.js";import"./makeExternalStore-u9ldSa0C.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
