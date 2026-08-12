import{j as r,M as s}from"./iframe-BPstW6ZE.js";import{P as p}from"./pdf-viewer-B_GIxxtN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BNTHfP1K.js";import"./preload-helper-C1yaL2qB.js";import"./PdfRenderer-BF6JOnVR.js";import"./index-oeOs9xDH.js";import"./PdfViewer-DOuaWpFf.js";import"./PdfViewer.module.css-CstD1gD9.js";import"./PdfViewerAnnotationLayer-CmubIhzz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cqbq5bLW.js";import"./PdfViewerOutlineSidebar-ByALiMRd.js";import"./PdfViewerSidebarHeader-aO-vo4xV.js";import"./useBaseUiId-DQCTx5tU.js";import"./useControlled-CMlf5svM.js";import"./CompositeRoot-Bt89MyYu.js";import"./CompositeItem-DKvCwQV-.js";import"./ToolbarRootContext-6fjF2uPZ.js";import"./composite-BvwNFg7y.js";import"./svgIconContainer-P3rHXEhC.js";import"./PdfViewerSearchBar-BUE6I_UB.js";import"./chevron-up-HjalTx4k.js";import"./chevron-down-BAdvtM20.js";import"./cross-h_pVI4NA.js";import"./PdfViewerSidebar-DZDOelhV.js";import"./index-DT1CG8gQ.js";import"./index-BsuF2ON3.js";import"./index-D870R5ia.js";import"./PdfViewerToolbar-X5KMVfPV.js";import"./Button-DpEn25wX.js";import"./chevron-right-DK1UJfvh.js";import"./Input-CJQqoWu9.js";import"./search-luiRnVuA.js";import"./spin-Cd67sYJ-.js";import"./error-CcPkSYDi.js";import"./withOsdkMetrics-D8kGTVyU.js";import"./makeExternalStore-BKSRaA4m.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
