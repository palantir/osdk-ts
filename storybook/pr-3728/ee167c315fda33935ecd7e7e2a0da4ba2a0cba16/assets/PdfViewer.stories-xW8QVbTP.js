import{j as r,M as s}from"./iframe-CGHuNhZa.js";import{P as p}from"./pdf-viewer-DXF_oTe-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CBPvdI2f.js";import"./preload-helper-BFimkkay.js";import"./PdfRenderer-BSn1F4g2.js";import"./index-Cd9iBkhG.js";import"./PdfViewer-C1V898gj.js";import"./PdfViewer.module.css-2CmDos3V.js";import"./PdfViewerAnnotationLayer-CFnvS804.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DNf1PEoq.js";import"./PdfViewerOutlineSidebar-BHQm3Eie.js";import"./PdfViewerSidebarHeader-ChPqs2kK.js";import"./useBaseUiId-0kJLkjQb.js";import"./useControlled-B1Q3SMM2.js";import"./CompositeRoot-CEHFd-sG.js";import"./CompositeItem-I7gIakhP.js";import"./ToolbarRootContext-ElOMa9PH.js";import"./composite-Owh1o6gR.js";import"./svgIconContainer-DSjk454u.js";import"./PdfViewerSearchBar-BmA6THEm.js";import"./chevron-up-BJpT5MSB.js";import"./chevron-down-BGSt3VIA.js";import"./cross-DR5PTAdZ.js";import"./PdfViewerSidebar-zHa1lhCg.js";import"./index-BbrkUmtY.js";import"./index-BKyQcedJ.js";import"./index-pZgEXI2B.js";import"./PdfViewerToolbar-DgLa7WNv.js";import"./Button-DTBh-eoN.js";import"./chevron-right-Z4Eqlov_.js";import"./Input-CAqJgJ9F.js";import"./search-YesNjiEL.js";import"./spin-BgE_BRBo.js";import"./error-Bz23TTWr.js";import"./withOsdkMetrics-CZFxDcvi.js";import"./makeExternalStore-4ZWsXdY2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
