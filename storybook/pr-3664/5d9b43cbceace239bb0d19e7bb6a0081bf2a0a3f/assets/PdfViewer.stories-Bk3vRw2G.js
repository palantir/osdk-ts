import{j as r,M as s}from"./iframe-wdFHGWSX.js";import{P as p}from"./pdf-viewer-BrjDCpOa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B8XqYM6T.js";import"./preload-helper-lRa11HLR.js";import"./PdfRenderer-NZQTay1G.js";import"./index-6fSpBBEr.js";import"./PdfViewer-sON5tTAG.js";import"./PdfViewer.module.css-ptSqoHUX.js";import"./PdfViewerAnnotationLayer-BSNFDqTR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-E3AScQKL.js";import"./PdfViewerOutlineSidebar-Csa5wiVH.js";import"./PdfViewerSidebarHeader-BFSY9tQJ.js";import"./useBaseUiId-BFHOoAwS.js";import"./useControlled-DNzAlgaa.js";import"./CompositeRoot-Dgb1_udY.js";import"./CompositeItem-Cy_VESaa.js";import"./ToolbarRootContext-BxABkCAF.js";import"./composite-ZTl8PnYY.js";import"./svgIconContainer-B66bzX5w.js";import"./PdfViewerSearchBar-CMB7k5CA.js";import"./chevron-up-BTC2S5NC.js";import"./chevron-down-DcqeShV2.js";import"./cross-BDxtbqIF.js";import"./PdfViewerSidebar-CTM9yF71.js";import"./index-P-S-4BbC.js";import"./index-C20qzzU3.js";import"./index-B2-SFY1A.js";import"./PdfViewerToolbar-ClzmTt6B.js";import"./Button-BAojFwdk.js";import"./chevron-right-CgLzN_RH.js";import"./Input-CARXx6XT.js";import"./search-D6UfD1mk.js";import"./spin-C_z0Fm-H.js";import"./error-Cu2wquHT.js";import"./withOsdkMetrics-DDn7vw9i.js";import"./makeExternalStore-BF1biqUn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
