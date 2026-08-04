import{j as r,M as s}from"./iframe-Cw_qhF0N.js";import{P as p}from"./pdf-viewer-OKsy9mDH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D3eQqsqw.js";import"./preload-helper-BOMIoqbF.js";import"./PdfRenderer-jjsb4-Cw.js";import"./index-TvapIid3.js";import"./PdfViewer-DNfLiEXC.js";import"./PdfViewer.module.css-BSTvRmy8.js";import"./PdfViewerAnnotationLayer-DRLPm1xS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CrT2joBZ.js";import"./PdfViewerOutlineSidebar-9GTr9zg3.js";import"./PdfViewerSidebarHeader-CRi54ioh.js";import"./useBaseUiId-BNu8us2u.js";import"./useControlled-5GWIAJrV.js";import"./CompositeRoot-BGw3WLSv.js";import"./CompositeItem-Dxc3ZApE.js";import"./ToolbarRootContext-BIaEKKO2.js";import"./composite-Cn4M-AS0.js";import"./svgIconContainer-BTHlx_Hh.js";import"./PdfViewerSearchBar-B-6Fw3PX.js";import"./chevron-up-Kv_H9Ff_.js";import"./chevron-down-IhPewwA3.js";import"./cross-D-XWoAQF.js";import"./PdfViewerSidebar-CSQRAS_6.js";import"./index-7blLQTYn.js";import"./index-lqLv8je1.js";import"./index-Di-hPO50.js";import"./PdfViewerToolbar-Cgfu0ipI.js";import"./Button-rFXve3X8.js";import"./chevron-right-4OSiELPD.js";import"./Input-Bfec5TXw.js";import"./search-BrIW3_zE.js";import"./spin-CUjxEtPu.js";import"./error-qvLsAaDE.js";import"./withOsdkMetrics-C81Q0htC.js";import"./makeExternalStore-CcclNskg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
