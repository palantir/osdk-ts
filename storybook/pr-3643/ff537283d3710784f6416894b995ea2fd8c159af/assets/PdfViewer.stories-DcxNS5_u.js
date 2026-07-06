import{j as r,M as s}from"./iframe-B_8Tdiwq.js";import{P as p}from"./pdf-viewer-CYzkiCLX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BftzOse7.js";import"./preload-helper-BOfrlXOZ.js";import"./PdfRenderer-5aFtxeHi.js";import"./index-CTX6u9ZC.js";import"./PdfViewer-CIR6aBu1.js";import"./PdfViewer.module.css-jM73-8C4.js";import"./PdfViewerAnnotationLayer-B--Z9L3F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C9spqdNx.js";import"./PdfViewerOutlineSidebar-D46Ws5yf.js";import"./PdfViewerSidebarHeader-BUNB8Hqv.js";import"./useBaseUiId-CQrfvGx0.js";import"./useControlled-CQZQnwLO.js";import"./CompositeRoot-t0LObqGr.js";import"./CompositeItem-DiZjPaJ2.js";import"./ToolbarRootContext-BO1IXY4-.js";import"./composite-D5JAaSqe.js";import"./svgIconContainer-BAxZkWy9.js";import"./PdfViewerSearchBar-4Sffz6d4.js";import"./chevron-up-PVsDidQW.js";import"./chevron-down-CEjIFaBz.js";import"./cross-L-54tVNU.js";import"./PdfViewerSidebar-CxtNYMR0.js";import"./index-A2wA4OZ0.js";import"./index-DhcNtvER.js";import"./index-DtiyW2Zd.js";import"./PdfViewerToolbar-BRQzpj6j.js";import"./Button-mEt_ne7q.js";import"./chevron-right-Cim83K10.js";import"./Input-C-jAekTx.js";import"./search-CvqqJReO.js";import"./spin-C66IrGqG.js";import"./error-D7rzQlXT.js";import"./withOsdkMetrics-gXXjHvCf.js";import"./makeExternalStore-DX9rolj1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
