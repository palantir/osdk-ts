import{j as r,M as s}from"./iframe-D7bSx1w3.js";import{P as p}from"./pdf-viewer-BbvXVl2N.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ClqOQK-F.js";import"./preload-helper-DHr4zl8o.js";import"./PdfRenderer-CsJICMa9.js";import"./index-BI7KOdly.js";import"./PdfViewer-9b0kHObM.js";import"./PdfViewer.module.css-X1IJkyXg.js";import"./PdfViewerAnnotationLayer-C_ouH9s8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BuF3S42y.js";import"./PdfViewerOutlineSidebar-C9BAHNvd.js";import"./PdfViewerSidebarHeader-DR-bnyGr.js";import"./useBaseUiId-yYF_6EDW.js";import"./useControlled-6GhvlMfJ.js";import"./CompositeRoot-DYORTBl8.js";import"./CompositeItem-DzV-M2cS.js";import"./ToolbarRootContext-mjTJrSyq.js";import"./composite-r3XDsHCK.js";import"./svgIconContainer-CAHUqnfQ.js";import"./PdfViewerSearchBar-aZq7zAfE.js";import"./chevron-up-DZthY4eR.js";import"./chevron-down-BhX4T9Cq.js";import"./cross-CNlF_jOJ.js";import"./PdfViewerSidebar-DJlwYmT2.js";import"./index-45b5ykal.js";import"./index-DDyehI4Z.js";import"./index-B4GTaVPj.js";import"./PdfViewerToolbar-zTyFUqfV.js";import"./Button-40Z03f6l.js";import"./chevron-right-XyjXYTLz.js";import"./Input-JNc6RNAw.js";import"./search-_6MuPeFe.js";import"./spin-BaVnXSBg.js";import"./error-BZHPiTFs.js";import"./withOsdkMetrics-BDmWFpPl.js";import"./makeExternalStore-CoZYgsR6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
