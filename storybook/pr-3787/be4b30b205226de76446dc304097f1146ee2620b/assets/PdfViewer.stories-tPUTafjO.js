import{j as r,M as s}from"./iframe-CsnoPo4e.js";import{P as p}from"./pdf-viewer-CENPoCUe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BRvsazQ4.js";import"./preload-helper-UQcfqh8j.js";import"./PdfRenderer-CZ8j6a6L.js";import"./index-DZ3qlG1l.js";import"./PdfViewer-Bu0796wK.js";import"./PdfViewer.module.css-Dibd3i0C.js";import"./PdfViewerAnnotationLayer-BZyuv1e6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cibwjay1.js";import"./PdfViewerOutlineSidebar-xUI17Q0M.js";import"./PdfViewerSidebarHeader-CrevZwd1.js";import"./useBaseUiId-Dk3ss80W.js";import"./useControlled-CZuH-mvg.js";import"./CompositeRoot-B3trZxEY.js";import"./CompositeItem-Bd6jvFk6.js";import"./ToolbarRootContext-DniWRCBD.js";import"./composite-BdrpEZOa.js";import"./svgIconContainer-CFRCp5eS.js";import"./PdfViewerSearchBar-CnNtM3zl.js";import"./chevron-up-DCW1tQHn.js";import"./chevron-down-2qd0pr4B.js";import"./cross-BPR_-69Q.js";import"./PdfViewerSidebar-sYohBVWA.js";import"./index-JQtzoL2b.js";import"./index-BFy79Amf.js";import"./index-Bq5UoBBM.js";import"./PdfViewerToolbar-DrADQBks.js";import"./Button-DLN9VIMw.js";import"./chevron-right-Dodh9VpK.js";import"./Input-CSBvwDxa.js";import"./search-CZllTW2C.js";import"./spin-Ddc-MsmI.js";import"./error-GZDgkGyI.js";import"./withOsdkMetrics-D6nE0GJ0.js";import"./makeExternalStore-3T-oM2Ef.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
