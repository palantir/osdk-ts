import{j as r,M as s}from"./iframe-CQvYC2Mc.js";import{P as p}from"./pdf-viewer-DPY8-1yL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-t-GFSN-T.js";import"./preload-helper-BEZ8lP16.js";import"./PdfRenderer-BEgcA-1Q.js";import"./index-B6R1qUpL.js";import"./PdfViewer-B8_tYnrT.js";import"./PdfViewer.module.css-D7qr59HA.js";import"./PdfViewerAnnotationLayer-mIrTmk4k.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-s_usm2hG.js";import"./PdfViewerOutlineSidebar-11953ZdO.js";import"./PdfViewerSidebarHeader-DWCtohkL.js";import"./useBaseUiId-BWLHdD4g.js";import"./useControlled-DJFsLM5o.js";import"./CompositeRoot-CsYzm3bB.js";import"./CompositeItem-CLvBkps8.js";import"./ToolbarRootContext-CRXCF4gP.js";import"./composite-CXtq681A.js";import"./svgIconContainer-8qZ8IlT_.js";import"./PdfViewerSearchBar-ChW2sdiz.js";import"./chevron-up-3NobT0e_.js";import"./chevron-down-DQmwVB0G.js";import"./cross-CYqgq5AP.js";import"./PdfViewerSidebar-CKDXgyt_.js";import"./index-Caz1Duo5.js";import"./index-CGCWeSoa.js";import"./index-BE2KYGHn.js";import"./PdfViewerToolbar-CwI9p4RJ.js";import"./Button-BrSSFbRf.js";import"./chevron-right-HQfXYPnR.js";import"./Input-CP66cyE8.js";import"./search-CRHFewGf.js";import"./spin-D7yNcyzC.js";import"./error-CREILQKt.js";import"./withOsdkMetrics-Dpr0l7kl.js";import"./makeExternalStore-BdIvN8Ho.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
