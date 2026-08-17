import{j as r,M as s}from"./iframe-j08fV6dz.js";import{P as p}from"./pdf-viewer-DIKxJMxh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-YBMKbqW7.js";import"./preload-helper-BGl13g2I.js";import"./PdfViewer-PDuRKvi0.js";import"./index-CWHssFJB.js";import"./BasePdfViewer-wUH1pRzm.js";import"./BasePdfViewer.module.css-SoqOQvSM.js";import"./PdfViewerAnnotationLayer-CazE4vpd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CtMvlgSN.js";import"./PdfViewerOutlineSidebar-C6_2LHDb.js";import"./PdfViewerSidebarHeader-1nva2K8H.js";import"./useBaseUiId-CplXrATv.js";import"./useControlled-CHR2SRbk.js";import"./CompositeRoot-n_9YbCBB.js";import"./CompositeItem-BGXPo5gO.js";import"./ToolbarRootContext-CtzwSIgo.js";import"./composite-D8eTqwE5.js";import"./svgIconContainer-YCYSEUhp.js";import"./PdfViewerSearchBar-BUm6pUI-.js";import"./chevron-up-Db4MDykc.js";import"./chevron-down-Doe0Cvk6.js";import"./cross-CoN6-ekW.js";import"./PdfViewerSidebar-DCw84FBU.js";import"./index-DHqM0ir-.js";import"./index-C5nt5hOV.js";import"./index-kp1WZsxE.js";import"./PdfViewerToolbar-CdsvSUhi.js";import"./Button-DpHwku46.js";import"./chevron-right-B39WGXPK.js";import"./Input-DhrpnbAE.js";import"./search-ClQdTzkO.js";import"./spin-BP7ZCpXD.js";import"./error-D_bwL8by.js";import"./withOsdkMetrics-d653yHww.js";import"./makeExternalStore-D_d4tJsc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
