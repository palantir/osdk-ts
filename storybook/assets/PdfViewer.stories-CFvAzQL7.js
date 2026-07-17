import{j as r,M as s}from"./iframe-DCnfJfDX.js";import{P as p}from"./pdf-viewer-jUg1ypSB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-4qQTGlwN.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-CCu3zM1R.js";import"./index-CK4tPmIq.js";import"./PdfViewer-BrFMchIJ.js";import"./PdfViewer.module.css-De2HvInB.js";import"./PdfViewerAnnotationLayer-DKB6BEGc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-eU_JR0pd.js";import"./PdfViewerOutlineSidebar-D3bJT4rr.js";import"./PdfViewerSidebarHeader-DSWBhPXH.js";import"./useBaseUiId-CvJYpspQ.js";import"./useControlled-CJV_KiK_.js";import"./CompositeRoot-Duzbly1L.js";import"./CompositeItem-DFiM2dDA.js";import"./ToolbarRootContext-DoDafLBS.js";import"./composite-BrPWYwNS.js";import"./svgIconContainer-lpidV9d0.js";import"./PdfViewerSearchBar-DFS2amX-.js";import"./chevron-up-DErTJkhp.js";import"./chevron-down-B-HVMT16.js";import"./cross-BWPxU8HK.js";import"./PdfViewerSidebar-Dk0Ksfef.js";import"./index-COs5bPTu.js";import"./index-Bj8DxCft.js";import"./index-BRy1z15N.js";import"./PdfViewerToolbar-CLH13DLQ.js";import"./Button-BzOQGWgV.js";import"./chevron-right-DCDgDFx1.js";import"./Input-CKBBm_fB.js";import"./search-DhuNCp0b.js";import"./spin-BXnPupLC.js";import"./error-GpWhiuFP.js";import"./withOsdkMetrics-C30Mp5sE.js";import"./makeExternalStore-CYycOKz0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
