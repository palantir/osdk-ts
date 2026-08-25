import{j as r,M as s}from"./iframe-K5CHCEyg.js";import{P as p}from"./pdf-viewer-FCH9n9u9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CrTxOL-3.js";import"./preload-helper-D3jqeprX.js";import"./PdfViewer-BGorFjCu.js";import"./index-WTmR64bn.js";import"./BasePdfViewer-D60MJvSn.js";import"./BasePdfViewer.module.css-BHYPLoZg.js";import"./PdfViewerAnnotationLayer-BavK2f6V.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-he4BpNx1.js";import"./PdfViewerOutlineSidebar-cvFa_W1J.js";import"./PdfViewerSidebarHeader-jMNIUgQM.js";import"./useBaseUiId-BkIc8eue.js";import"./useControlled-CuFQy_dq.js";import"./CompositeRoot-DI4Q2JXg.js";import"./CompositeItem-DJQSjI0-.js";import"./ToolbarRootContext-B1_4tWZH.js";import"./composite-D8qWS-r5.js";import"./svgIconContainer-CtkNh0IR.js";import"./PdfViewerSearchBar-QdzpYVt_.js";import"./chevron-up-Ci6MrO76.js";import"./chevron-down-DVsK0MgR.js";import"./cross-B8J6ezai.js";import"./PdfViewerSidebar-CbR-GbLa.js";import"./index-CrVnq262.js";import"./index-C8BgW1zx.js";import"./index-BnXdLwCf.js";import"./PdfViewerToolbar-DyNG3mz1.js";import"./Button-D0f7TRtC.js";import"./chevron-right-BZTEsLrd.js";import"./Input-Db1Oj9ts.js";import"./search-Cx6gmk0L.js";import"./spin-B__c-PaX.js";import"./error-DpZJYfkw.js";import"./withOsdkMetrics-gwVSMO6S.js";import"./makeExternalStore-CufeVhpI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
