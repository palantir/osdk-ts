import{j as r,M as s}from"./iframe-CbVdry27.js";import{P as p}from"./pdf-viewer-CVv1uJ6o.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BAFr4jlU.js";import"./preload-helper-tfmV0fps.js";import"./PdfViewer-pp99KCbo.js";import"./index-To_tBHh-.js";import"./BasePdfViewer-D9UewOSF.js";import"./BasePdfViewer.module.css-DSphxQ4T.js";import"./PdfViewerAnnotationLayer-Blds4tK-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9fHMOFB.js";import"./PdfViewerOutlineSidebar-BERXVvzu.js";import"./PdfViewerSidebarHeader-BF0yEjW0.js";import"./useBaseUiId-COEKHJ4V.js";import"./useControlled-O5_ibcww.js";import"./CompositeRoot-BbfM6RRk.js";import"./CompositeItem-C6kwzUcw.js";import"./ToolbarRootContext-CkFGLvLN.js";import"./composite-D1RCmFrB.js";import"./svgIconContainer-BE-Q5NLe.js";import"./PdfViewerSearchBar-1l-dqfmE.js";import"./chevron-up-v5wC7ANT.js";import"./chevron-down-DXTT43su.js";import"./cross-DITFSMmT.js";import"./PdfViewerSidebar-DOCQYdXw.js";import"./index-DD2XUJOf.js";import"./index-CxQzO9vT.js";import"./index-CWuwxy99.js";import"./PdfViewerToolbar-DmAS1cdi.js";import"./Button-CXv2Sbo7.js";import"./chevron-right-Vo4zoJJa.js";import"./Input-9Z_p8AjW.js";import"./search-CAyyPjGK.js";import"./spin-3S1lZqvF.js";import"./error-DofjuNB7.js";import"./withOsdkMetrics-CBasv5wc.js";import"./makeExternalStore-BnMLaNWe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
