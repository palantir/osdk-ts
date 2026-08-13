import{j as r,M as s}from"./iframe-BjnPtOz_.js";import{P as p}from"./pdf-viewer-XvdMU7ht.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CT1SxtYL.js";import"./preload-helper-DvpFqhNW.js";import"./PdfViewer-BohMemek.js";import"./index-B-VO8ckc.js";import"./BasePdfViewer-Dm5t91MF.js";import"./BasePdfViewer.module.css-BWozEqZP.js";import"./PdfViewerAnnotationLayer-CGbQJzKX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Be_8yZLr.js";import"./PdfViewerOutlineSidebar-aChQdOl9.js";import"./PdfViewerSidebarHeader-BlGw-0mw.js";import"./useBaseUiId-smhGGpwO.js";import"./useControlled-BbAelK_j.js";import"./CompositeRoot-CPr5sp1W.js";import"./CompositeItem-CQIJeL3v.js";import"./ToolbarRootContext-GKohB1Vi.js";import"./composite-_Pzh5Y_l.js";import"./svgIconContainer-CMItwta7.js";import"./PdfViewerSearchBar-MAkQP4AG.js";import"./chevron-up-DxEkmcQ7.js";import"./chevron-down-RU6ZJ7SE.js";import"./cross-Dor8dRPD.js";import"./PdfViewerSidebar-Rf_hDw-T.js";import"./index-505RtiSa.js";import"./index-CIJ2rBTU.js";import"./index-C4D01Ue3.js";import"./PdfViewerToolbar-CU0YKKM5.js";import"./Button-Cxf8-3hK.js";import"./chevron-right-9OUWdwOL.js";import"./Input-SUEmcWu4.js";import"./search-OEEiuMQK.js";import"./spin-CaPdei2_.js";import"./error-Df9MLz6T.js";import"./withOsdkMetrics-sn_AdfzF.js";import"./makeExternalStore-N4sJbBYc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
