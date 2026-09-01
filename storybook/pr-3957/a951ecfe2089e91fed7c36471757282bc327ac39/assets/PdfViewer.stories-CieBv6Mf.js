import{j as r,M as s}from"./iframe-C9qhmNcZ.js";import{P as p}from"./pdf-viewer-C7CeRF9Y.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B_upeGf0.js";import"./preload-helper-wNbJb-Pp.js";import"./PdfViewer-Bu2E52Mi.js";import"./index-B8P3LB4x.js";import"./BasePdfViewer-5s5JYBW4.js";import"./BasePdfViewer.module.css-BujLcd2j.js";import"./PdfViewerAnnotationLayer-BiqmayEp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-14aazNs2.js";import"./PdfViewerOutlineSidebar-DhoTAiVy.js";import"./PdfViewerSidebarHeader-CfpODMbU.js";import"./useBaseUiId-BTthXH_t.js";import"./useControlled-BTlBSM6y.js";import"./CompositeRoot-DzCV1pem.js";import"./CompositeItem-CA3YvoYV.js";import"./ToolbarRootContext-tAljMxWu.js";import"./composite-z0XknHYc.js";import"./svgIconContainer-_uLEbp2C.js";import"./PdfViewerSearchBar-CaF1ssQF.js";import"./chevron-up-Q3YTZHTm.js";import"./chevron-down-CJK_UNyE.js";import"./cross-DabX7tW-.js";import"./PdfViewerSidebar-DTAIQDHn.js";import"./index-7d_bwMVc.js";import"./index-DsqCXRoD.js";import"./index-DqJwTMkP.js";import"./PdfViewerToolbar-CbEP6tbY.js";import"./Button-HuNNWrG7.js";import"./chevron-right-BUkjIgVn.js";import"./Input-BAGZIUmV.js";import"./search-BDZY5Txu.js";import"./spin-Srmhn8SO.js";import"./error-Pw2WsETW.js";import"./withOsdkMetrics-COlZnM_t.js";import"./makeExternalStore-D9Eq3Efe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
