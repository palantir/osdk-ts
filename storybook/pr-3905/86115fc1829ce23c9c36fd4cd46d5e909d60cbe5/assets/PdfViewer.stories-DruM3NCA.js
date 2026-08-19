import{j as r,M as s}from"./iframe-ziUSJnwy.js";import{P as p}from"./pdf-viewer-NXBUxEFP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DYTVAUIR.js";import"./preload-helper-BuN24SoO.js";import"./PdfViewer-nxEAFq0e.js";import"./index-CofRb435.js";import"./BasePdfViewer-C0tUyrgb.js";import"./BasePdfViewer.module.css-BfD2wEPv.js";import"./PdfViewerAnnotationLayer-C7PygQGk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BNNhg_Pd.js";import"./PdfViewerOutlineSidebar-BLFOrRhz.js";import"./PdfViewerSidebarHeader-D2Dh6Tf0.js";import"./useBaseUiId-CfgyXuT7.js";import"./useControlled-DAbqRBrS.js";import"./CompositeRoot-Dh4MrKH5.js";import"./CompositeItem-DJZZYhWP.js";import"./ToolbarRootContext-CLVK9GrX.js";import"./composite-B-iJfWjd.js";import"./svgIconContainer-CVAk4TRf.js";import"./PdfViewerSearchBar-CSmlocR1.js";import"./chevron-up-iM605dTc.js";import"./chevron-down-DRwdNHrM.js";import"./cross-qr7W_6_t.js";import"./PdfViewerSidebar-B0zqtLOE.js";import"./index-VK3LiRtU.js";import"./index-BeBWWYC4.js";import"./index-GXn-EEA0.js";import"./PdfViewerToolbar-Bhg8hsOX.js";import"./Button-Dz5QTyfP.js";import"./chevron-right-C9lakoPv.js";import"./Input-CdoGUrWH.js";import"./search-Bq-nYqiG.js";import"./spin-C5aYqvhk.js";import"./error-CoOP9LKe.js";import"./withOsdkMetrics-CpHsbthC.js";import"./makeExternalStore-3WvhH1w0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
