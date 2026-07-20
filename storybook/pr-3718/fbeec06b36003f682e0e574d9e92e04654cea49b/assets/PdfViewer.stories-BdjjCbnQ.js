import{j as r,M as s}from"./iframe-C5_sv1s8.js";import{P as p}from"./pdf-viewer-phTaH9L0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CZBvWsH_.js";import"./preload-helper-DjZSPLuP.js";import"./PdfRenderer-DQQMCPto.js";import"./index-BLhgFNKv.js";import"./PdfViewer-CHiNEhlZ.js";import"./PdfViewer.module.css-BwLuKce0.js";import"./PdfViewerAnnotationLayer-k59YgrEY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CfzBJW8a.js";import"./PdfViewerOutlineSidebar-DP1IbrQb.js";import"./PdfViewerSidebarHeader-aD9XSvMA.js";import"./useBaseUiId-B7lNuAlM.js";import"./useControlled-xIkiPHDU.js";import"./CompositeRoot-Dl7i-T0U.js";import"./CompositeItem-B8lW9pG5.js";import"./ToolbarRootContext-C-yAVa7Z.js";import"./composite-hy6sYsr4.js";import"./svgIconContainer-suHm6UJN.js";import"./PdfViewerSearchBar-CFGjwgCQ.js";import"./chevron-up-42wwisLQ.js";import"./chevron-down-Dn2sQGC_.js";import"./cross-Dahj-HJO.js";import"./PdfViewerSidebar-BR-gsOc_.js";import"./index-5Ghi4G9U.js";import"./index-6RY7HM-5.js";import"./index-DtkutMrn.js";import"./PdfViewerToolbar-BXemnYG-.js";import"./Button-BbM3G3vl.js";import"./chevron-right-5_VHmMDo.js";import"./Input-CoKcstBP.js";import"./search-BgAZQbRW.js";import"./spin-DyT-BJTx.js";import"./error-BnM4bYa4.js";import"./withOsdkMetrics-C_RQ9Eem.js";import"./makeExternalStore-BQN1UQRK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
