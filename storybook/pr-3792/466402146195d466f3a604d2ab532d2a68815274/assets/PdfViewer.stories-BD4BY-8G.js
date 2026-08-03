import{j as r,M as s}from"./iframe-rqdpvzga.js";import{P as p}from"./pdf-viewer-B1S49pQl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CQTuOVmr.js";import"./preload-helper-BAuA-mTQ.js";import"./PdfRenderer-COwKDdIV.js";import"./index-BUC_fDrj.js";import"./PdfViewer-HAvkHCrG.js";import"./PdfViewer.module.css-DFvFGmra.js";import"./PdfViewerAnnotationLayer-BfcaVBB5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B28YV_iL.js";import"./PdfViewerOutlineSidebar-BWYrD4VO.js";import"./PdfViewerSidebarHeader-D5LlxDjy.js";import"./useBaseUiId-DuTjnFCh.js";import"./useControlled-BuMCf3Vd.js";import"./CompositeRoot-BhN5BDd7.js";import"./CompositeItem-V9zqfIF2.js";import"./ToolbarRootContext-BMRRgW4c.js";import"./composite-ccFUBUPp.js";import"./svgIconContainer-Bqq5IfTn.js";import"./PdfViewerSearchBar-SMjw_9Pm.js";import"./chevron-up-D_xVWetZ.js";import"./chevron-down-d7yaCezV.js";import"./cross-CfosNt4b.js";import"./PdfViewerSidebar-B0QNMBXW.js";import"./index-BvFYeZoL.js";import"./index-Cehal3kO.js";import"./index-CJWlNCvv.js";import"./PdfViewerToolbar-BfnfLSuV.js";import"./Button-BKVkRu72.js";import"./chevron-right-8C-hf2HT.js";import"./Input-C9VwIK8Z.js";import"./search-C4ANGgTZ.js";import"./spin--tRcOZso.js";import"./error-3D7_fXdm.js";import"./withOsdkMetrics-CdR4X2BK.js";import"./makeExternalStore-CszC-1tM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
