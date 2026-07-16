import{j as r,M as s}from"./iframe-C94QCVU3.js";import{P as p}from"./pdf-viewer-BjhwhAyW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DqSH04t5.js";import"./preload-helper-CTTfd0Ip.js";import"./PdfRenderer-CfdmOdTv.js";import"./index-C75VeRJX.js";import"./PdfViewer-CioubPCu.js";import"./PdfViewer.module.css-fsZmr-Qd.js";import"./PdfViewerAnnotationLayer-BDBO1keZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DPW4TMPP.js";import"./PdfViewerOutlineSidebar-CpcxP_IV.js";import"./PdfViewerSidebarHeader-DeSM7HUQ.js";import"./useBaseUiId-JUnohQus.js";import"./useControlled-DNAf2gvO.js";import"./CompositeRoot-B1Ma0PkL.js";import"./CompositeItem-BAV2r3zU.js";import"./ToolbarRootContext-BAWA-0Sy.js";import"./composite-Cl4oBTbO.js";import"./svgIconContainer-Cgj3lSWV.js";import"./PdfViewerSearchBar-CVIOS1dC.js";import"./chevron-up-CHwSulIX.js";import"./chevron-down-B-Lzv2hB.js";import"./cross-WktNuFjj.js";import"./PdfViewerSidebar-BlHU0pnX.js";import"./index-aBj0wpDf.js";import"./index-DmQEmIxl.js";import"./index-BLXLX1gi.js";import"./PdfViewerToolbar-DeeDUoz3.js";import"./Button-D6-f4fdx.js";import"./chevron-right-C-K8QqIQ.js";import"./Input-CKXSWDvC.js";import"./search-DGR70EEW.js";import"./spin-ChMzNtDk.js";import"./error-Dy1Uaj26.js";import"./withOsdkMetrics-Bp8IL8EX.js";import"./makeExternalStore-yYBkryCj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
