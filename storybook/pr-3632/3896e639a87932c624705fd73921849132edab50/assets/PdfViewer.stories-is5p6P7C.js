import{j as r,M as s}from"./iframe-CYW5dms5.js";import{P as p}from"./pdf-viewer-x2PRCR-A.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CE2C8Ppl.js";import"./preload-helper-olK7XJq_.js";import"./PdfRenderer-DxZcZV2m.js";import"./index-BvCsYRnS.js";import"./PdfViewer-CMH1Vb5h.js";import"./PdfViewer.module.css-BL6bAS1O.js";import"./PdfViewerAnnotationLayer-D3LwEUm2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DtfqXmFN.js";import"./PdfViewerOutlineSidebar-BB_55TjU.js";import"./PdfViewerSidebarHeader-C29YXgr5.js";import"./useBaseUiId-D11MneQi.js";import"./useControlled-qlmpqfTt.js";import"./CompositeRoot-C0vwyhe_.js";import"./CompositeItem-C3KWzmte.js";import"./ToolbarRootContext-CPizw2Pk.js";import"./composite-pL0XyzxB.js";import"./svgIconContainer-Co2y6FkV.js";import"./PdfViewerSearchBar-CNHx9zNT.js";import"./chevron-up-xOThr9pS.js";import"./chevron-down-3TYRtgLT.js";import"./cross-C1GpBADO.js";import"./PdfViewerSidebar-doHidbWL.js";import"./index-Bf5Jk6iU.js";import"./index-qKsGl0BM.js";import"./index-IvQmYIWP.js";import"./PdfViewerToolbar-DteBKOfB.js";import"./Button-BAONyfmh.js";import"./chevron-right-QK9j42Be.js";import"./Input-275Rxpul.js";import"./search-DyatV9DG.js";import"./spin-CL5GIRiq.js";import"./error-B205EXeR.js";import"./withOsdkMetrics-Bs9W2n9P.js";import"./makeExternalStore-Bi9cPtCd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
