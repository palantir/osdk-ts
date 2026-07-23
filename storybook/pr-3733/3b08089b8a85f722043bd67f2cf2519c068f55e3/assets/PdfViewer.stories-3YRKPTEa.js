import{j as r,M as s}from"./iframe-NQaBDcT-.js";import{P as p}from"./pdf-viewer-DlVW1nKm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D-l7Fqgh.js";import"./preload-helper-C4FqHzWe.js";import"./PdfRenderer-BHCVFAOT.js";import"./index-CLkxnMKD.js";import"./PdfViewer-C4_RAc2m.js";import"./PdfViewer.module.css-lzh73bG9.js";import"./PdfViewerAnnotationLayer-DgqL9VV-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D4W6IegH.js";import"./PdfViewerOutlineSidebar-D_0E1swW.js";import"./PdfViewerSidebarHeader-B1y6HicN.js";import"./useBaseUiId-CWfAhtPJ.js";import"./useControlled-B0nGvhOb.js";import"./CompositeRoot-D6HvIOr7.js";import"./CompositeItem-Heg_SISl.js";import"./ToolbarRootContext-KFSz4O2O.js";import"./composite-CoANlsJZ.js";import"./svgIconContainer-DQO0w72t.js";import"./PdfViewerSearchBar-CNFEzkgR.js";import"./chevron-up-DrhKVYR7.js";import"./chevron-down-Bpm8zG3w.js";import"./cross-DcxhLvUw.js";import"./PdfViewerSidebar-C88ykads.js";import"./index-BV-zBTfb.js";import"./index-Bi0qSrUM.js";import"./index-B3idfxCC.js";import"./PdfViewerToolbar-BXf20m_7.js";import"./Button-DR9fgxtU.js";import"./chevron-right-2fFN6anh.js";import"./Input-B3gMQo3k.js";import"./search--uA81GPQ.js";import"./spin-ddFrPepI.js";import"./error-MJdHYbKs.js";import"./withOsdkMetrics-CPJMr57z.js";import"./makeExternalStore-BaZgJLoC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
