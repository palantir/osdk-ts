import{j as r,M as s}from"./iframe-ookINj4z.js";import{P as p}from"./pdf-viewer-Cu8M460r.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CIzB_1mf.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-DCaxIWZ1.js";import"./index-B_G83cAE.js";import"./PdfViewer-CWy3FxlZ.js";import"./PdfViewer.module.css-BJkpylCT.js";import"./PdfViewerAnnotationLayer-C_5fOf84.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BFolLaAV.js";import"./PdfViewerOutlineSidebar-Cz74AieI.js";import"./PdfViewerSidebarHeader-iwFsB0t5.js";import"./useBaseUiId-ChW3iXZ-.js";import"./useControlled-DmgaWuxn.js";import"./CompositeRoot-C2K9eFJ4.js";import"./CompositeItem-OAduBL0E.js";import"./ToolbarRootContext-Bu_OObLI.js";import"./composite-BbXCVwQJ.js";import"./svgIconContainer-DyzYMl01.js";import"./PdfViewerSearchBar-F3OSJnvJ.js";import"./chevron-up-BDBnLSO0.js";import"./chevron-down-Hv5AOudc.js";import"./cross-DBbP5D4h.js";import"./PdfViewerSidebar-12GN7IIU.js";import"./index-L_GsU3c8.js";import"./index-DKoQfkwR.js";import"./index-BnkKdipA.js";import"./PdfViewerToolbar-DgLOdKDb.js";import"./Button-C5Uo0dK-.js";import"./chevron-right-C4CVrRxz.js";import"./Input-NlWA1BDr.js";import"./search-DTFSxkbH.js";import"./spin-MqFwIRZY.js";import"./error-1dTAOxzn.js";import"./withOsdkMetrics-CyPSaHwg.js";import"./makeExternalStore-DQCBlQ8C.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
