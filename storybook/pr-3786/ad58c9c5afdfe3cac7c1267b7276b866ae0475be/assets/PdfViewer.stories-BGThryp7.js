import{j as r,M as s}from"./iframe-BUj1CfXg.js";import{P as p}from"./pdf-viewer-BCy5qvKx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-r7e_GADp.js";import"./preload-helper-DZ45QRbv.js";import"./PdfRenderer-z9cYFAKy.js";import"./index-NBVyoVsZ.js";import"./PdfViewer-Ds-H9K_9.js";import"./PdfViewer.module.css-CT7xpeHU.js";import"./PdfViewerAnnotationLayer-CJfucopw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CUpPr7N8.js";import"./PdfViewerOutlineSidebar-CZmg46wS.js";import"./PdfViewerSidebarHeader-u66RSVtO.js";import"./useBaseUiId-DaOhoyrU.js";import"./useControlled-BjYCZfKY.js";import"./CompositeRoot-CbQjN3dx.js";import"./CompositeItem-C-wl7l8I.js";import"./ToolbarRootContext-BFvRmjuo.js";import"./composite-BkdiVfPs.js";import"./svgIconContainer-MYfqGk3H.js";import"./PdfViewerSearchBar-CZAElQr1.js";import"./chevron-up-BAVT_KoY.js";import"./chevron-down-DgAFPu4M.js";import"./cross-DlyIjemV.js";import"./PdfViewerSidebar-ElfH-9mc.js";import"./index-BXPBNZV3.js";import"./index-C1gw1Q5a.js";import"./index-B4P9wCIh.js";import"./PdfViewerToolbar-DHOz7LA2.js";import"./Button-B5y7ZCvT.js";import"./chevron-right-BEAGUbIp.js";import"./Input-BTDiXSNB.js";import"./search-CeD93pBN.js";import"./spin-di0qc7n9.js";import"./error-peAS9X8o.js";import"./withOsdkMetrics-CXkSfRrz.js";import"./makeExternalStore-CN2SCzrt.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
