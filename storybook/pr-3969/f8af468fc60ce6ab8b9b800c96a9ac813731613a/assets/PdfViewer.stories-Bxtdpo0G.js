import{j as r,M as s}from"./iframe-BHUFYaIi.js";import{P as p}from"./pdf-viewer-DRzZyzJJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CTzxZh5y.js";import"./preload-helper-XnuLqDXH.js";import"./PdfViewer-CkmF10G7.js";import"./index-Cv4N1cyr.js";import"./BasePdfViewer-DdTEZbVO.js";import"./BasePdfViewer.module.css-B_k7Tjjv.js";import"./PdfViewerAnnotationLayer-C_dsoVV9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_X0N1jv.js";import"./PdfViewerOutlineSidebar-BIYr4Ec1.js";import"./PdfViewerSidebarHeader-DM5ILOyn.js";import"./useBaseUiId-MuM6uWGO.js";import"./useControlled-CDjv9IaU.js";import"./CompositeRoot-CY8Ou4A9.js";import"./CompositeItem-MMdNYb42.js";import"./ToolbarRootContext-BeFb59Mm.js";import"./composite-B11uKuMK.js";import"./svgIconContainer-BwQXc51L.js";import"./PdfViewerSearchBar-Ca2io12m.js";import"./chevron-up-h6hdp_N5.js";import"./chevron-down-BXEOl8Ri.js";import"./cross-BOaBzgsR.js";import"./PdfViewerSidebar-ClEGDqfC.js";import"./index-CWLFPPbc.js";import"./index-BPIvu6CK.js";import"./index-pncntrbL.js";import"./PdfViewerToolbar-DGcjkBeM.js";import"./Button-BLcFnS6Y.js";import"./chevron-right-DXV59K95.js";import"./Input-DjWGIh_z.js";import"./search-CLJDIGSY.js";import"./spin-CV72JFSn.js";import"./error-V_uXrOkx.js";import"./withOsdkMetrics-D-xlszSM.js";import"./makeExternalStore-DlAYw1no.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
