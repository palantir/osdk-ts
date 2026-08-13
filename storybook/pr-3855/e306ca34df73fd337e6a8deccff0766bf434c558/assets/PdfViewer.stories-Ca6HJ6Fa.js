import{j as r,M as s}from"./iframe-BJrSrRma.js";import{P as p}from"./pdf-viewer-DTxpXN2a.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BPWSU2_D.js";import"./preload-helper-83yR054m.js";import"./PdfRenderer-DZUOF_af.js";import"./index-DFXfJE3M.js";import"./PdfViewer-BeJfIdlA.js";import"./PdfViewer.module.css-Buc8p3St.js";import"./PdfViewerAnnotationLayer-8qn9-uJ0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-F27f-f5n.js";import"./PdfViewerOutlineSidebar-maaQe2kv.js";import"./PdfViewerSidebarHeader-DmLlWbI3.js";import"./useBaseUiId-BdZoOrU1.js";import"./useControlled-D5g6V7fQ.js";import"./CompositeRoot-BoOuXfg9.js";import"./CompositeItem-je4-aaCh.js";import"./ToolbarRootContext-CM7Fz4lg.js";import"./composite-DimSL5Dw.js";import"./svgIconContainer-CUA3xiLW.js";import"./PdfViewerSearchBar-D_0TQXLu.js";import"./chevron-up-BAMkb7tK.js";import"./chevron-down-CP4830r-.js";import"./cross-DFiuK2I5.js";import"./PdfViewerSidebar-C1M3GfP1.js";import"./index-w5EjZqSi.js";import"./index-Cxlf7HqO.js";import"./index-BaVB7RYf.js";import"./PdfViewerToolbar-C9ghhtqc.js";import"./Button-DWYMaUrj.js";import"./chevron-right-DpE6CP-X.js";import"./Input-bMqivlqR.js";import"./search-Bcym4jdA.js";import"./spin-Cz-nGkga.js";import"./error-lgLbUxfX.js";import"./withOsdkMetrics-DyVFL9JC.js";import"./makeExternalStore-BJhWzj4_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
