import{j as r,M as s}from"./iframe-C-Tx6HWi.js";import{P as p}from"./pdf-viewer-CWn3k4sR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BAPHrB0X.js";import"./preload-helper-DGI0evEf.js";import"./PdfViewer-DHgJyQ5g.js";import"./index-D83LHBrr.js";import"./BasePdfViewer-D1jgzQuw.js";import"./BasePdfViewer.module.css-CN5Tc6XD.js";import"./PdfViewerAnnotationLayer-DHh38_IN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-jTqZeg_B.js";import"./PdfViewerOutlineSidebar-NeChjFId.js";import"./PdfViewerSidebarHeader-CFkP4CoI.js";import"./useBaseUiId-DmObUJIN.js";import"./useControlled-OhGlr_am.js";import"./CompositeRoot-D8yZr3m6.js";import"./CompositeItem-CqPIIJ4M.js";import"./ToolbarRootContext-V5A_2QeJ.js";import"./composite-Cc9l10TW.js";import"./svgIconContainer-B0ue0tIb.js";import"./PdfViewerSearchBar-h2weYtDq.js";import"./chevron-up-C7g6m3U5.js";import"./chevron-down-Co2dXPpt.js";import"./cross-1eBPB5o6.js";import"./PdfViewerSidebar-DuvH91mR.js";import"./index-C9VJ4ZCw.js";import"./index-Br_EbTHZ.js";import"./index-BZnuPb4P.js";import"./PdfViewerToolbar-CrKPJfgp.js";import"./Button-C5vL1jQD.js";import"./chevron-right-CWjIpuZY.js";import"./Input-CIq38a5l.js";import"./search-DE-tamAG.js";import"./spin-DZ2dyUOV.js";import"./error-DRRLvBR9.js";import"./withOsdkMetrics-XUw2KNZ5.js";import"./makeExternalStore-Cp2BBvmZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
