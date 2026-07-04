import{j as r,M as s}from"./iframe-CsKDXWEO.js";import{P as p}from"./pdf-viewer-vX6h7Gdr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bc1eEK1T.js";import"./preload-helper-CBPdY5UM.js";import"./PdfRenderer-C8GEp0Qd.js";import"./index-DZvekZfe.js";import"./PdfViewer-CHfBhFsC.js";import"./PdfViewer.module.css-CCe-VXlk.js";import"./PdfViewerAnnotationLayer-Dea9cr-n.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D3E6_Ed4.js";import"./PdfViewerOutlineSidebar-CwSIbgnS.js";import"./PdfViewerSidebarHeader-B9b2np-g.js";import"./useBaseUiId-C8rXvNXU.js";import"./useControlled-3MQnQEky.js";import"./CompositeRoot-CBZztLGC.js";import"./CompositeItem-2ujK5FIL.js";import"./ToolbarRootContext-B5y904wS.js";import"./composite-DHZvyAu-.js";import"./svgIconContainer-CDnSXqhz.js";import"./PdfViewerSearchBar-DOWmveTO.js";import"./chevron-up-hwIGT0un.js";import"./chevron-down-DJM_6rnf.js";import"./cross-Cizjf5nv.js";import"./PdfViewerSidebar-DMbi6Mg6.js";import"./index-Dyh_7DuE.js";import"./index-C0UuoNxn.js";import"./index-DB8o02gJ.js";import"./PdfViewerToolbar-CUuIRi4K.js";import"./Button-CuTTrQDe.js";import"./chevron-right-BZjtMcWh.js";import"./Input-B7Me0RXp.js";import"./search-CoMNvgfr.js";import"./spin-XL_X-ewi.js";import"./error-xnvYS1XO.js";import"./withOsdkMetrics-CtmiM-3o.js";import"./makeExternalStore-Csa2gVoe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
