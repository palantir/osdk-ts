import{j as r,M as s}from"./iframe-CDwmHXYT.js";import{P as p}from"./pdf-viewer-hqv_jqfz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C8vg3Gt0.js";import"./preload-helper-D9B9hJn3.js";import"./PdfRenderer-pxM9yHt2.js";import"./index-r3Emod_r.js";import"./PdfViewer-BN4MyLmb.js";import"./PdfViewer.module.css-C-PQQ_r3.js";import"./PdfViewerAnnotationLayer-Dra1cj13.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-R0yFAQoh.js";import"./PdfViewerOutlineSidebar-9EoP-SQb.js";import"./PdfViewerSidebarHeader-Cl2caMd4.js";import"./useBaseUiId-DdBbRpKP.js";import"./useControlled-B1reAt19.js";import"./CompositeRoot-CNCqGCoi.js";import"./CompositeItem-CO6BV4SO.js";import"./ToolbarRootContext-D3avpCmA.js";import"./composite-DOjV8TaF.js";import"./svgIconContainer-Cc1vfjJj.js";import"./PdfViewerSearchBar-Dm-MonEy.js";import"./chevron-up-PNfzmzM7.js";import"./chevron-down-BOoZfQL9.js";import"./cross-CdZe6H37.js";import"./PdfViewerSidebar-DQHPQQ8v.js";import"./index-Cqlx1xMM.js";import"./index-Dj9nPgEg.js";import"./index-CXMdXDeY.js";import"./PdfViewerToolbar-DX6YNIhU.js";import"./Button-IyoK4gpS.js";import"./chevron-right-BkQm01IS.js";import"./Input-Yzk3Xuy6.js";import"./search-EnUpa1x3.js";import"./spin-DrrcGK2d.js";import"./error-DHp74l6C.js";import"./withOsdkMetrics-kNFPB2RF.js";import"./makeExternalStore-OcR9GPOD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
