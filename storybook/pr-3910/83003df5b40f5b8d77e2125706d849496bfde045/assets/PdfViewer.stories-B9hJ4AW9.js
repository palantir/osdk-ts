import{j as r,M as s}from"./iframe--2o31fpS.js";import{P as p}from"./pdf-viewer-C8PmJUkQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-yta8on0S.js";import"./preload-helper-BGtLG4Ze.js";import"./PdfViewer-K-YwNQ7H.js";import"./index-CqkP8V1G.js";import"./BasePdfViewer-URkoG5h5.js";import"./BasePdfViewer.module.css-BhfJyPhY.js";import"./PdfViewerAnnotationLayer-C_kkw4Ei.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bq3xXj0l.js";import"./PdfViewerOutlineSidebar-CZJHQXMU.js";import"./PdfViewerSidebarHeader-Dv8eL7um.js";import"./useBaseUiId-DkfG-pIU.js";import"./useControlled-_9g-GziU.js";import"./CompositeRoot-DB-9na0M.js";import"./CompositeItem-jeolwUWG.js";import"./ToolbarRootContext-B7UKPIgL.js";import"./composite-QRzMYoxy.js";import"./svgIconContainer-C1D02ztO.js";import"./PdfViewerSearchBar-BkTU1Izx.js";import"./chevron-up-2DclZDhi.js";import"./chevron-down-DQu-ZHpt.js";import"./cross-11SNaKV0.js";import"./PdfViewerSidebar-DEKESWMM.js";import"./index-B5Pw0m5Z.js";import"./index-DVBrMkW3.js";import"./index-DYasKxPB.js";import"./PdfViewerToolbar-C8inYjjK.js";import"./Button-MFx7ttW0.js";import"./chevron-right-CLC6y_PJ.js";import"./Input-CqReJTw6.js";import"./search-DCb3eFG7.js";import"./spin-Co1x8t54.js";import"./error-CZE7-qa2.js";import"./withOsdkMetrics-BZ26a9pj.js";import"./makeExternalStore-cJzBmAO1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
