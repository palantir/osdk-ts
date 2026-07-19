import{j as r,M as s}from"./iframe-CGjkWk-y.js";import{P as p}from"./pdf-viewer-BRz7mRu2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B-d6bcm6.js";import"./preload-helper-DWtm6Awl.js";import"./PdfRenderer-BSNh2C4m.js";import"./index-DpkhLa0o.js";import"./PdfViewer-sHOUtkzm.js";import"./PdfViewer.module.css-C9oYELNG.js";import"./PdfViewerAnnotationLayer-CZLGdSmC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bm9BX4q4.js";import"./PdfViewerOutlineSidebar-DI54TwUg.js";import"./PdfViewerSidebarHeader-CRzam8oy.js";import"./useBaseUiId-B4XbiBy4.js";import"./useControlled-Di7K8oFC.js";import"./CompositeRoot-CE5j4qXH.js";import"./CompositeItem-DHO8ufWs.js";import"./ToolbarRootContext-DDjooZXe.js";import"./composite-BLjja7Ya.js";import"./svgIconContainer-C_Ff8kWV.js";import"./PdfViewerSearchBar-ClcGgCz7.js";import"./chevron-up-BrGammbn.js";import"./chevron-down-Bd53qo6B.js";import"./cross-Z3oKWduX.js";import"./PdfViewerSidebar-Cxyc3tpQ.js";import"./index-BVorMo5r.js";import"./index-BpjKgids.js";import"./index-Rlk1jRSs.js";import"./PdfViewerToolbar-CI5K8rst.js";import"./Button-BfPY7-S3.js";import"./chevron-right-B53o9ZCF.js";import"./Input-DkzCERqQ.js";import"./search-cLC10ndE.js";import"./spin-B-KQen47.js";import"./error-C5zhMVu3.js";import"./withOsdkMetrics-6iHHcUlL.js";import"./makeExternalStore-CFxMNbzV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
