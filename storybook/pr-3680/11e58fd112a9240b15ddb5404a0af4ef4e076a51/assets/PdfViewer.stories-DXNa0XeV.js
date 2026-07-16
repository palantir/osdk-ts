import{j as r,M as s}from"./iframe-DsROQhfc.js";import{P as p}from"./pdf-viewer-DKyaHAGs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CwaXHhik.js";import"./preload-helper-DxBIW_8v.js";import"./PdfRenderer-DJLcMmAU.js";import"./index-BIXNysy_.js";import"./PdfViewer-gavD_QAe.js";import"./PdfViewer.module.css-DCSn4h5M.js";import"./PdfViewerAnnotationLayer-CN5Qk3Tm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CB41boii.js";import"./PdfViewerOutlineSidebar-B0nBENM1.js";import"./PdfViewerSidebarHeader-kMr1mDCt.js";import"./useBaseUiId-CrcNeHF_.js";import"./useControlled-DMsIR7MQ.js";import"./CompositeRoot-2cn-aOBW.js";import"./CompositeItem-amjK_EwN.js";import"./ToolbarRootContext-JbUSN2gn.js";import"./composite-4W_Eccup.js";import"./svgIconContainer-BTibiieO.js";import"./PdfViewerSearchBar-DP_wCasy.js";import"./chevron-up-C4yk6icf.js";import"./chevron-down-c60nfWzK.js";import"./cross-B0m__ea-.js";import"./PdfViewerSidebar-CpRtn6d6.js";import"./index-CVsL7sp0.js";import"./index-Bn6b70ni.js";import"./index-DAffi9fl.js";import"./PdfViewerToolbar-QCBWJ3zh.js";import"./Button-B8bKnUK4.js";import"./chevron-right-CdEQYXWB.js";import"./Input-gJoMs5d_.js";import"./search-D1ImDZfx.js";import"./spin-Cdt_pf67.js";import"./error-CeiSikDQ.js";import"./withOsdkMetrics-DdKqlAm-.js";import"./makeExternalStore-CztNP472.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
