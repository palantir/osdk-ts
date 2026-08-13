import{j as r,M as s}from"./iframe-KbQIFRGa.js";import{P as p}from"./pdf-viewer-fjxpVzMb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BJAqL2PL.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-B8BJVaxc.js";import"./index-oNQDT3pN.js";import"./BasePdfViewer-dNf1b19j.js";import"./BasePdfViewer.module.css-R17bchhd.js";import"./PdfViewerAnnotationLayer-09GB6Fsq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CfBL44F_.js";import"./PdfViewerOutlineSidebar-CXrInvsh.js";import"./PdfViewerSidebarHeader-BRatpo93.js";import"./useBaseUiId-C5Z8PN8H.js";import"./useControlled-IL1laNWB.js";import"./CompositeRoot-C1qQzjfI.js";import"./CompositeItem-Du9x_QN-.js";import"./ToolbarRootContext-DVI-t-Yd.js";import"./composite-GGTk9X_4.js";import"./svgIconContainer-sykDQB1x.js";import"./PdfViewerSearchBar-kjb52YKg.js";import"./chevron-up-C1ToCpnG.js";import"./chevron-down-sNT3G-Lr.js";import"./cross-DoOTv_Kw.js";import"./PdfViewerSidebar-Ctwf5l9Z.js";import"./index-BwbXqol-.js";import"./index-D106GrLT.js";import"./index-bW-kSRQs.js";import"./PdfViewerToolbar-BRxBTfyA.js";import"./Button-DJ-kvAuB.js";import"./chevron-right-Ikv-kKM7.js";import"./Input-DCRhBd7X.js";import"./search-CWIUc-iX.js";import"./spin-BUUJPsG3.js";import"./error-BfNvRC5H.js";import"./withOsdkMetrics-CE7F9eew.js";import"./makeExternalStore-CkNn2ki8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
