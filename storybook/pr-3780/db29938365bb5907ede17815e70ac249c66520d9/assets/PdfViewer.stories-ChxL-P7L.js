import{j as r,M as s}from"./iframe-CstWj4ez.js";import{P as p}from"./pdf-viewer-CX_6T-ei.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C2yC1Fwd.js";import"./preload-helper-BCM2Mrwh.js";import"./PdfRenderer-D8khNPZ3.js";import"./index-BKtj_CIh.js";import"./PdfViewer-C55ue2Kd.js";import"./PdfViewer.module.css-DMoODQhY.js";import"./PdfViewerAnnotationLayer-D2ZJS-ON.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DRuiAz34.js";import"./PdfViewerOutlineSidebar-3cRvZPbm.js";import"./PdfViewerSidebarHeader-C68vQWxF.js";import"./useBaseUiId-DZ_WZ3fx.js";import"./useControlled-C4IcZtnx.js";import"./CompositeRoot-CHZ9jZKW.js";import"./CompositeItem-CQRAlint.js";import"./ToolbarRootContext-CozoeZB6.js";import"./composite-BUmYDl_r.js";import"./svgIconContainer-BsM_A13O.js";import"./PdfViewerSearchBar-DDilWkX2.js";import"./chevron-up-CARCe_cL.js";import"./chevron-down-CG1jYwFN.js";import"./cross-6T7z6U36.js";import"./PdfViewerSidebar-DJ_hURQe.js";import"./index-BZ-wGrZ-.js";import"./index-BqvUKCfb.js";import"./index-BQ4WMtZt.js";import"./PdfViewerToolbar-CzSgb6tW.js";import"./Button-BKds_g4a.js";import"./chevron-right-lMXCLZ_z.js";import"./Input-oNr1j4J9.js";import"./search-DhbfxSt8.js";import"./spin-U9KPHd_d.js";import"./error-Ddbcc8Kd.js";import"./withOsdkMetrics-q3McYtTu.js";import"./makeExternalStore-v46grpUp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
