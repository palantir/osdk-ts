import{j as r,M as s}from"./iframe-D7EP2Nl4.js";import{P as p}from"./pdf-viewer-CLgJVEtk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ci-VtORq.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-BsCvQM1l.js";import"./index-CC1Ji25o.js";import"./PdfViewer-NG4LOS17.js";import"./PdfViewer.module.css-B4N2Q-J4.js";import"./PdfViewerAnnotationLayer-B10JBPUu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DwHaizy3.js";import"./PdfViewerOutlineSidebar-C5ZE3i4i.js";import"./PdfViewerSidebarHeader-DlDiNxbT.js";import"./useBaseUiId-BPX1mDbY.js";import"./useControlled-Cx80D7ZN.js";import"./CompositeRoot-DGdExeDt.js";import"./CompositeItem-BaAUR1L8.js";import"./ToolbarRootContext-BHBnS7Gi.js";import"./composite-CN81rFgf.js";import"./svgIconContainer-BVa7fkHt.js";import"./PdfViewerSearchBar-4S0UfGM_.js";import"./chevron-up-CmfaNgMW.js";import"./chevron-down-mApNF1vq.js";import"./cross-Bd_LA7d4.js";import"./PdfViewerSidebar-pg_ShXl2.js";import"./index-D14mafS5.js";import"./index-BoXrHjI8.js";import"./index-DaUDeee-.js";import"./PdfViewerToolbar-BrPTg_ks.js";import"./Button-CWzN916h.js";import"./chevron-right-j2-dRemp.js";import"./Input-By5ea0ub.js";import"./search-CItYFCQV.js";import"./spin-Ca6KYvY1.js";import"./error-BlJKnuYG.js";import"./withOsdkMetrics-Bvo4bxXX.js";import"./makeExternalStore-DHgoa7Q2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
