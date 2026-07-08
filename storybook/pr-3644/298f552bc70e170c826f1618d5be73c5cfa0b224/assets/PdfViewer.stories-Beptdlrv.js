import{j as r,M as s}from"./iframe-Sinac5C-.js";import{P as p}from"./pdf-viewer-BC62XOm7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D8Sd3V23.js";import"./preload-helper-NTO9eUq2.js";import"./PdfRenderer-BhwI4Clu.js";import"./index-ybCHkguh.js";import"./PdfViewer-wtbI4ZD0.js";import"./PdfViewer.module.css-DPbROGP_.js";import"./PdfViewerAnnotationLayer-D0LkUygN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CCCJ6D5u.js";import"./PdfViewerOutlineSidebar-BF4CUfDv.js";import"./PdfViewerSidebarHeader-90pqhohZ.js";import"./useBaseUiId-DeyTEOj1.js";import"./useControlled-BWqdkm3Y.js";import"./CompositeRoot-Cq0R3zog.js";import"./CompositeItem-97yYl-on.js";import"./ToolbarRootContext-56wK4ELT.js";import"./composite-Bt3mY2Oe.js";import"./svgIconContainer-BJzbMQV4.js";import"./PdfViewerSearchBar-DNx8tB47.js";import"./chevron-up-CuVLUfM6.js";import"./chevron-down-xxwIfOQv.js";import"./cross-vcsVvsRm.js";import"./PdfViewerSidebar-CwTV86Xm.js";import"./index-Czoh3j4v.js";import"./index-Be3QAx03.js";import"./index-DRuWNwJW.js";import"./PdfViewerToolbar-0ARy7MV9.js";import"./Button-thwa8aHe.js";import"./chevron-right-D-pVRFqX.js";import"./Input-CdEMNwrX.js";import"./search-BHX689kx.js";import"./spin-C4M4I-yC.js";import"./error-8PMBH84i.js";import"./withOsdkMetrics-DIlezMZa.js";import"./makeExternalStore-CAjAetME.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
