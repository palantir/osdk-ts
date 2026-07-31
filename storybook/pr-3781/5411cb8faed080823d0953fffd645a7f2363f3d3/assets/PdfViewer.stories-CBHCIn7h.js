import{j as r,M as s}from"./iframe-DywKiRJ4.js";import{P as p}from"./pdf-viewer-Bo7eMLxa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dz29BvZB.js";import"./preload-helper-DnISu9SO.js";import"./PdfRenderer-DO-Pkd6-.js";import"./index-sdvv-Vmx.js";import"./PdfViewer-SPRIfJil.js";import"./PdfViewer.module.css-D09ue_x9.js";import"./PdfViewerAnnotationLayer-Dc8aAnFu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CujGKs1D.js";import"./PdfViewerOutlineSidebar-Dhx8xWa1.js";import"./PdfViewerSidebarHeader-DCq7tSUv.js";import"./useBaseUiId-C48Qv8Zq.js";import"./useControlled-IjJG5oHn.js";import"./CompositeRoot-yuUd7gvt.js";import"./CompositeItem-BHZTQbjb.js";import"./ToolbarRootContext-BdKTbPdV.js";import"./composite-ZtNMv5XC.js";import"./svgIconContainer-BcOW5YRH.js";import"./PdfViewerSearchBar-nInB69s8.js";import"./chevron-up-CKnL_KvN.js";import"./chevron-down-DFkNi3fh.js";import"./cross-CQksztLC.js";import"./PdfViewerSidebar-DwiHdn6J.js";import"./index-Bi9mx1Ld.js";import"./index-DPwii3iK.js";import"./index-DqrMsXLY.js";import"./PdfViewerToolbar-Bdl7yk3p.js";import"./Button-CDqHXNFi.js";import"./chevron-right-LfdrYjws.js";import"./Input-C0MsgEOV.js";import"./search-BqXYSkFu.js";import"./spin-C3oaMvmF.js";import"./error-CTO_HqOG.js";import"./withOsdkMetrics-mz9t4H8j.js";import"./makeExternalStore-CVHUFZOf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
