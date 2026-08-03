import{j as r,M as s}from"./iframe-B_yUu-cX.js";import{P as p}from"./pdf-viewer-D0_ooPiS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DSSv_wKk.js";import"./preload-helper-DcvxkMkX.js";import"./PdfRenderer-Cy5jOsWa.js";import"./index-XbE7DXxD.js";import"./PdfViewer-qJxRcIiB.js";import"./PdfViewer.module.css-DztZVcdi.js";import"./PdfViewerAnnotationLayer-xoQfDwt9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DxHubdv8.js";import"./PdfViewerOutlineSidebar-rbp_tjPo.js";import"./PdfViewerSidebarHeader-CJJKmZcZ.js";import"./useBaseUiId-B0dhadue.js";import"./useControlled-BZUXCsnn.js";import"./CompositeRoot-ChlEsuOx.js";import"./CompositeItem-D2vovJ6U.js";import"./ToolbarRootContext-B_rfO5vo.js";import"./composite-ATDhx_ec.js";import"./svgIconContainer-DK4T2FGf.js";import"./PdfViewerSearchBar-DZXUt_r-.js";import"./chevron-up-BIL0RSnG.js";import"./chevron-down-Dw25Lm-O.js";import"./cross-C_lKmFAq.js";import"./PdfViewerSidebar-Zo-IVduP.js";import"./index-q0iON3Ea.js";import"./index-CYicsPED.js";import"./index-Ct6MB3Hz.js";import"./PdfViewerToolbar-CXKwwvkA.js";import"./Button-BYTNbaL9.js";import"./chevron-right-CGG5Tc_0.js";import"./Input-CiACNLL0.js";import"./search-CKP8uFrx.js";import"./spin-B2whPNc3.js";import"./error-BSusmaAF.js";import"./withOsdkMetrics-sJj72yX2.js";import"./makeExternalStore-CwdAeWiC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
