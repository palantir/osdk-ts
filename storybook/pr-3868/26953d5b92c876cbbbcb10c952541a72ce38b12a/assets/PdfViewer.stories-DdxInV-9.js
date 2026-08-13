import{j as r,M as s}from"./iframe-bNAYk0hy.js";import{P as p}from"./pdf-viewer-Cqj5qkVS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DODORY7G.js";import"./preload-helper-CQ5U1hQl.js";import"./PdfRenderer-mXO_hBF9.js";import"./index-eix3MTjz.js";import"./PdfViewer-BDfZ17Bb.js";import"./PdfViewer.module.css-BYnEcR8f.js";import"./PdfViewerAnnotationLayer-Dg5esKah.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ByVyOL3y.js";import"./PdfViewerOutlineSidebar-DWDtRTCM.js";import"./PdfViewerSidebarHeader-Bc0FENL-.js";import"./useBaseUiId-CikYSBzo.js";import"./useControlled-hDIfys90.js";import"./CompositeRoot-B_LYH437.js";import"./CompositeItem-Bpfmjo39.js";import"./ToolbarRootContext-D9woatH8.js";import"./composite-C7-i_V8V.js";import"./svgIconContainer-DJx5jlT5.js";import"./PdfViewerSearchBar-DixziBYx.js";import"./chevron-up-BrjYrfCW.js";import"./chevron-down-CxlO7014.js";import"./cross-DSIbsL7t.js";import"./PdfViewerSidebar-C3hzbgQo.js";import"./index-Djn4JDgp.js";import"./index-IAiWYuzu.js";import"./index-BwgJiaXn.js";import"./PdfViewerToolbar-CQ6Eric_.js";import"./Button-VKmMP51o.js";import"./chevron-right-DngYinHC.js";import"./Input-D9AajCS5.js";import"./search-CvDdJ2-k.js";import"./spin-kXyULVFe.js";import"./error-B2PTJyqI.js";import"./withOsdkMetrics-DtPiNcid.js";import"./makeExternalStore-BlpmVTTs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
