import{j as r,M as s}from"./iframe-BEe86n4U.js";import{P as p}from"./pdf-viewer-CfejvGhk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BM_0oNQ1.js";import"./preload-helper-BEIWHMRh.js";import"./PdfRenderer-Duw5xmJy.js";import"./index-BRPS5kQN.js";import"./PdfViewer-DEC4cRfX.js";import"./PdfViewer.module.css-B3JLsFcH.js";import"./PdfViewerAnnotationLayer-CHIepjpK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CRG2aQ3o.js";import"./PdfViewerOutlineSidebar-CFS2uHql.js";import"./PdfViewerSidebarHeader-CVhXk-jB.js";import"./useBaseUiId-COFpfmx-.js";import"./useControlled-BaRzcD7g.js";import"./CompositeRoot-D_CMyS4y.js";import"./CompositeItem-DsazHw-F.js";import"./ToolbarRootContext-LTTvJeUA.js";import"./composite-M2AhhIdq.js";import"./svgIconContainer-BSAbTZeZ.js";import"./PdfViewerSearchBar-DyjXXMZv.js";import"./chevron-up-BD5JDTdH.js";import"./chevron-down-DdOOrteF.js";import"./cross-CGE59l7y.js";import"./PdfViewerSidebar-Bv0fG_1P.js";import"./index-J5AGxzO_.js";import"./index-9tHl4QLQ.js";import"./index-CUqsLrV_.js";import"./PdfViewerToolbar-Ce-s6Wj_.js";import"./Button-BRKltiu1.js";import"./chevron-right-Dymw7Xap.js";import"./Input-DR5ncoJh.js";import"./search-BXLW1X4v.js";import"./spin-BhgHkbFJ.js";import"./error-CApQS-Gj.js";import"./withOsdkMetrics-qx1-RMV_.js";import"./makeExternalStore-CHd-KfbE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
