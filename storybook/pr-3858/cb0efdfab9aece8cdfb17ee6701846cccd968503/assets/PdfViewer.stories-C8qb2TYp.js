import{j as r,M as s}from"./iframe-Ct_LTQ93.js";import{P as p}from"./pdf-viewer-CVtl4myn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-XRsonHfP.js";import"./preload-helper-DHNJcgM4.js";import"./PdfViewer-BEJeawvH.js";import"./index-CjWY7hqr.js";import"./BasePdfViewer-CqrCFs7E.js";import"./BasePdfViewer.module.css-9jVpTPmY.js";import"./PdfViewerAnnotationLayer-D-13-Iwj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-MCqbHG_9.js";import"./PdfViewerOutlineSidebar-DQH1zGUU.js";import"./PdfViewerSidebarHeader-DyJXEyx9.js";import"./useBaseUiId-BDRI1jLy.js";import"./useControlled-BcWumCfO.js";import"./CompositeRoot-BSZ-XxHf.js";import"./CompositeItem-BWQS8Cwe.js";import"./ToolbarRootContext-CUntK8-H.js";import"./composite-APUMWHCt.js";import"./svgIconContainer-D_GmqO65.js";import"./PdfViewerSearchBar-M0itc7q7.js";import"./chevron-up-Bm48ZiBL.js";import"./chevron-down-BRMAFES-.js";import"./cross-BMcPCyGb.js";import"./PdfViewerSidebar-DJbvtoR0.js";import"./index-BEQyGiD3.js";import"./index-mm_jw7Xo.js";import"./index-9R-_TKRE.js";import"./PdfViewerToolbar-BKKylI6q.js";import"./Button-BbozFPaz.js";import"./chevron-right-DnKvtHbE.js";import"./Input-BZ7vEK6X.js";import"./search-CNF4ePSc.js";import"./spin-DRfXHbKK.js";import"./error-BEzuwBxE.js";import"./withOsdkMetrics-BxODEj1w.js";import"./makeExternalStore-DCOlRUS1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
