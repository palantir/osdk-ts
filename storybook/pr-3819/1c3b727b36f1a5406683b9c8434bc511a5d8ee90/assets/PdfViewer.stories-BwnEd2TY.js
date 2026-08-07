import{j as r,M as s}from"./iframe-R5joIy8i.js";import{P as p}from"./pdf-viewer-3YlPD1vz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-NlkNCQBZ.js";import"./preload-helper-BDKQXXQd.js";import"./PdfRenderer-B0yz0pdQ.js";import"./index-BjtK3UNq.js";import"./PdfViewer-DeWpgxIp.js";import"./PdfViewer.module.css-CelGZll0.js";import"./PdfViewerAnnotationLayer-Q7oKebEk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B5dc7DSS.js";import"./PdfViewerOutlineSidebar-tj4JJ5ZU.js";import"./PdfViewerSidebarHeader-CUXenTt1.js";import"./useBaseUiId-DzxPRuTg.js";import"./useControlled-r3xQWVHF.js";import"./CompositeRoot-Cl5pIJNT.js";import"./CompositeItem-B4wdPUIk.js";import"./ToolbarRootContext-CE7qJbgG.js";import"./composite-DoPpkoU1.js";import"./svgIconContainer-KEF34-KT.js";import"./PdfViewerSearchBar-DflpcLzb.js";import"./chevron-up-CExz7NX-.js";import"./chevron-down-Bhu5S3ij.js";import"./cross-BLMm-Ql7.js";import"./PdfViewerSidebar-ES2ZWe6Z.js";import"./index-IjrDNVAE.js";import"./index-CV_jH-oS.js";import"./index-BCosmSDy.js";import"./PdfViewerToolbar-DKYkZW94.js";import"./Button-CHY-MXSe.js";import"./chevron-right-C8Sp93CA.js";import"./Input-Bw5RXfMb.js";import"./search-C23YmzRD.js";import"./spin-FZ0zlpj7.js";import"./error-BPV8EjSv.js";import"./withOsdkMetrics--n59eel3.js";import"./makeExternalStore-BL3yv_tQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
