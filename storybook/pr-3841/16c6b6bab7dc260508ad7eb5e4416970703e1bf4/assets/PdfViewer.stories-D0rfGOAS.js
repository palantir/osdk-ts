import{j as r,M as s}from"./iframe-B_3axEb_.js";import{P as p}from"./pdf-viewer-C2FyVGcW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D23_nRXe.js";import"./preload-helper-DVqF28Ob.js";import"./PdfRenderer-SdtOpM4h.js";import"./index-WEswkdDQ.js";import"./PdfViewer-BXRHPxlU.js";import"./PdfViewer.module.css--Se92xTo.js";import"./PdfViewerAnnotationLayer-CFrxSGcJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BWPWy_YL.js";import"./PdfViewerOutlineSidebar-CdK0oNNC.js";import"./PdfViewerSidebarHeader-uAEYmnaG.js";import"./useBaseUiId-mpVzZFod.js";import"./useControlled-DTpKBlZ0.js";import"./CompositeRoot-Chvgp-SH.js";import"./CompositeItem-BlbWDaOA.js";import"./ToolbarRootContext-D_DYze3I.js";import"./composite-k-oOtUOi.js";import"./svgIconContainer-Czb_u-B5.js";import"./PdfViewerSearchBar-BcXC3FY-.js";import"./chevron-up-V5S8bqBz.js";import"./chevron-down-DTB5Dfny.js";import"./cross-COAB99ba.js";import"./PdfViewerSidebar-dApH1UsR.js";import"./index-DEGqs32K.js";import"./index-BKGrISX8.js";import"./index-CV1QoXoI.js";import"./PdfViewerToolbar-Dhv1nfr5.js";import"./Button-DViZAK3b.js";import"./chevron-right-CXygn4Nm.js";import"./Input-BW6cPiJ8.js";import"./search-ClKVrDOr.js";import"./spin-CG5z4S_7.js";import"./error-D2oTkGBT.js";import"./withOsdkMetrics-DhHbJQbZ.js";import"./makeExternalStore-C5zmjuzo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
