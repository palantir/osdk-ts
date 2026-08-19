import{j as r,M as s}from"./iframe-Deq8U_R6.js";import{P as p}from"./pdf-viewer-DivLnbmY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-zuw1YxSV.js";import"./preload-helper-gHh2KtG1.js";import"./PdfViewer-h-AaW1qO.js";import"./index-DrQOBAHk.js";import"./BasePdfViewer-Di5PwjDC.js";import"./BasePdfViewer.module.css-Bf43DGBF.js";import"./PdfViewerAnnotationLayer-BDboQQqH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DDpVJUaX.js";import"./PdfViewerOutlineSidebar-HMtWD3FM.js";import"./PdfViewerSidebarHeader-DpNyiw-9.js";import"./useBaseUiId-BUXl0t0L.js";import"./useControlled-B13sGWuv.js";import"./CompositeRoot-D9Mr3cxX.js";import"./CompositeItem-9mNZQz-k.js";import"./ToolbarRootContext-ujlL6MZj.js";import"./composite-BNSug7gR.js";import"./svgIconContainer-Mlvk9_It.js";import"./PdfViewerSearchBar-Bw6Biqdq.js";import"./chevron-up-DsQxStL1.js";import"./chevron-down-BX8QITO3.js";import"./cross-CR8D9GYw.js";import"./PdfViewerSidebar-Bj21SfBZ.js";import"./index-B5E1rin5.js";import"./index-BqwGDeu0.js";import"./index-DihHNdBD.js";import"./PdfViewerToolbar-C2_jO1l_.js";import"./Button-BwL9fd7Z.js";import"./chevron-right-BeLsImMK.js";import"./Input-BTtCqGCw.js";import"./search-YieMSLSV.js";import"./spin-qPIwSO22.js";import"./error-BGW1gWTs.js";import"./withOsdkMetrics-CHdYjQDf.js";import"./makeExternalStore-Da72kyzN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
