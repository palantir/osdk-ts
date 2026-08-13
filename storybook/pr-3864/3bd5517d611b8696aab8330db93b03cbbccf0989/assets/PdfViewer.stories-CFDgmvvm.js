import{j as r,M as s}from"./iframe-CKmaUc-O.js";import{P as p}from"./pdf-viewer-DbkaSCZt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject--URGHH-p.js";import"./preload-helper-CscS6U7X.js";import"./PdfViewer-CBHMej6o.js";import"./index-CMcZnLz6.js";import"./BasePdfViewer-ByOkGWSf.js";import"./BasePdfViewer.module.css-C9HN-aoh.js";import"./PdfViewerAnnotationLayer-C7iqDdpV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BZd3rgGA.js";import"./PdfViewerOutlineSidebar-vaLVp4_w.js";import"./PdfViewerSidebarHeader-Bh9TpJay.js";import"./useBaseUiId-DsDyRBiU.js";import"./useControlled-DVLJsOQ5.js";import"./CompositeRoot-w0iN0LEp.js";import"./CompositeItem-1GI0eeCe.js";import"./ToolbarRootContext-D4A7F4rM.js";import"./composite-C562XDt6.js";import"./svgIconContainer-CegWez8t.js";import"./PdfViewerSearchBar-p13IDjvQ.js";import"./chevron-up-WJLfTycV.js";import"./chevron-down-B6FJc6l4.js";import"./cross-BALXh9IB.js";import"./PdfViewerSidebar-Cdw2XrdE.js";import"./index-Bn4FIY15.js";import"./index-CIKf3xy6.js";import"./index-BF7pzJIv.js";import"./PdfViewerToolbar-DtAZEr19.js";import"./Button-DLg7_PpI.js";import"./chevron-right-SMeQjtDd.js";import"./Input-XPh25gf6.js";import"./search-B7xiKcCh.js";import"./spin-B-Aj8lCy.js";import"./error-CuBhF1J1.js";import"./withOsdkMetrics-DyRjXdKi.js";import"./makeExternalStore-XgONOm1-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
