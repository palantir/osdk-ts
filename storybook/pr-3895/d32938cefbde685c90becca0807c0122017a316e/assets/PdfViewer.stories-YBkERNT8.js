import{j as r,M as s}from"./iframe-UYCLthTQ.js";import{P as p}from"./pdf-viewer-nePuWNJW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-M3rl-12-.js";import"./preload-helper-Dz4E7M7Q.js";import"./PdfViewer-ueqhTlg5.js";import"./index-D9-cjch2.js";import"./BasePdfViewer-lfvbD_vC.js";import"./BasePdfViewer.module.css-rrFzIqx6.js";import"./PdfViewerAnnotationLayer-WzWJBxr7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DgwtBaQc.js";import"./PdfViewerOutlineSidebar-ij1IxhRJ.js";import"./PdfViewerSidebarHeader-CHaIQfJQ.js";import"./useBaseUiId-D_3Zahva.js";import"./useControlled-BsiMxbV4.js";import"./CompositeRoot-DnAIhFvo.js";import"./CompositeItem-C4gD3gl2.js";import"./ToolbarRootContext-Dz0u6CZi.js";import"./composite-CoPLS_PY.js";import"./svgIconContainer-CSCo4VbW.js";import"./PdfViewerSearchBar-BTuPB798.js";import"./chevron-up-Dpk-sAVt.js";import"./chevron-down-CsxN-uGL.js";import"./cross-BTIlSghM.js";import"./PdfViewerSidebar-CLyiAHvd.js";import"./index-DSgxSOB9.js";import"./index-MvHsJMCi.js";import"./index-CwqHoYwn.js";import"./PdfViewerToolbar-B7GczfPR.js";import"./Button-D_NPrqs2.js";import"./chevron-right-aua8CnBO.js";import"./Input-CEJvZIVl.js";import"./search-O4v6z_KC.js";import"./spin-BWJkG615.js";import"./error-Lq_gB-8h.js";import"./withOsdkMetrics-CbCyTjOI.js";import"./makeExternalStore-DTCTUDfU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
