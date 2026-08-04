import{j as r,M as s}from"./iframe-B0NustTp.js";import{P as p}from"./pdf-viewer-DjY2YQCU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CaRcUAPj.js";import"./preload-helper-D4xsKj5c.js";import"./PdfRenderer-BZmNxCbJ.js";import"./index-DOiiFchC.js";import"./PdfViewer-BjehWSEo.js";import"./PdfViewer.module.css-CkCz4R8J.js";import"./PdfViewerAnnotationLayer-BWDwUoJE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-OZmjoQtw.js";import"./PdfViewerOutlineSidebar-C6KrfS24.js";import"./PdfViewerSidebarHeader-DSRrenaB.js";import"./useBaseUiId-B_TDEKwC.js";import"./useControlled-CLhhg_Fr.js";import"./CompositeRoot-BE3neU9x.js";import"./CompositeItem-D6h2F2k9.js";import"./ToolbarRootContext-jsU1d9Wb.js";import"./composite-C2jjYn_P.js";import"./svgIconContainer-CQZXj9xe.js";import"./PdfViewerSearchBar-8N7lovUi.js";import"./chevron-up-LU31CJ0c.js";import"./chevron-down-TEcuG9YK.js";import"./cross-CEKjUhQ8.js";import"./PdfViewerSidebar-B8VJ6NzU.js";import"./index-B_huBhV_.js";import"./index-Coc0zFCs.js";import"./index-Bmw4N7qN.js";import"./PdfViewerToolbar-lcCKrqKx.js";import"./Button-CJxqsXBF.js";import"./chevron-right-B-_RCvCR.js";import"./Input-DcsvwHOE.js";import"./search-DXHhLrb0.js";import"./spin-XGjazHFs.js";import"./error-CAUo2CNB.js";import"./withOsdkMetrics-BPDf5M2B.js";import"./makeExternalStore-G48Ly8TF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
