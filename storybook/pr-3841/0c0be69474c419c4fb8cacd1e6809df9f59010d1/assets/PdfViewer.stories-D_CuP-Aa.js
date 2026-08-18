import{j as r,M as s}from"./iframe-p9M8Eb1o.js";import{P as p}from"./pdf-viewer-DHSiPhOz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CEWEKEPL.js";import"./preload-helper-BmPKtly3.js";import"./PdfViewer-B_4GzrLQ.js";import"./index-C7HqDw_m.js";import"./BasePdfViewer-CmDJwLu3.js";import"./BasePdfViewer.module.css-DPZ85W23.js";import"./PdfViewerAnnotationLayer-CnMuJICS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0EudFlN.js";import"./PdfViewerOutlineSidebar--1hmZRJ5.js";import"./PdfViewerSidebarHeader-BR-vvc3W.js";import"./useBaseUiId-44IrCziu.js";import"./useControlled-4rsFBSOI.js";import"./CompositeRoot-DapZFHSH.js";import"./CompositeItem-ZctO4SwH.js";import"./ToolbarRootContext-tC1th2e9.js";import"./composite-VcTvRuc6.js";import"./svgIconContainer-ORV28Ze3.js";import"./PdfViewerSearchBar-Cd9OM0e6.js";import"./chevron-up-CLZaXA7l.js";import"./chevron-down-SljOnwRS.js";import"./cross-DvJLudhK.js";import"./PdfViewerSidebar-CvSSEAGQ.js";import"./index-C8zfpOdA.js";import"./index-DErAUfdw.js";import"./index-KTI1yLVe.js";import"./PdfViewerToolbar-CgamCR2U.js";import"./Button-C6WWR2wI.js";import"./chevron-right-DxMzjkYF.js";import"./Input-C1Qbw3qy.js";import"./search-BgxntRlT.js";import"./spin-CZfsSxjj.js";import"./error-qZyqYi81.js";import"./withOsdkMetrics-CirbbHCI.js";import"./makeExternalStore-BEpV-olz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
