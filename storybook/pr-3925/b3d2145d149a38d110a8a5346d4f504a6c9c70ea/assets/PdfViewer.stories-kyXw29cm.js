import{j as r,M as s}from"./iframe-c92eWBTm.js";import{P as p}from"./pdf-viewer-BjkKM7tQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B-hC61j8.js";import"./preload-helper-C_mEB70A.js";import"./PdfViewer-B7pvAB0f.js";import"./index-BNyL3dmc.js";import"./BasePdfViewer-CnEdd_9r.js";import"./BasePdfViewer.module.css-_jPKhLNB.js";import"./PdfViewerAnnotationLayer-DoffVJZm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJARqCVu.js";import"./PdfViewerOutlineSidebar-DUZN-W3i.js";import"./PdfViewerSidebarHeader-xpBUIlNu.js";import"./useBaseUiId-CZByDVJ8.js";import"./useControlled-Caf6eOHS.js";import"./CompositeRoot-B1tqGphE.js";import"./CompositeItem-DP3vosw0.js";import"./ToolbarRootContext-BOIsQ_kh.js";import"./composite-DB4Ar6eT.js";import"./svgIconContainer-BR-sWY_B.js";import"./PdfViewerSearchBar-BY5lpwvR.js";import"./chevron-up-OPw4HblS.js";import"./chevron-down-Bx1a8QAg.js";import"./cross-DLdKHUYj.js";import"./PdfViewerSidebar-J17Claia.js";import"./index-wu_kXnGO.js";import"./index-DNCjgZgw.js";import"./index-DpNu15BD.js";import"./PdfViewerToolbar-DuGKXkJZ.js";import"./Button-BhSQs9el.js";import"./chevron-right-BlID4yDB.js";import"./Input-DX2QK7C5.js";import"./search-DUI8Keyd.js";import"./spin-CDYJIpma.js";import"./error-10PygTue.js";import"./withOsdkMetrics-3UcJmunM.js";import"./makeExternalStore-D7JaTI9q.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
