import{j as r,M as s}from"./iframe-DQN-Pq2T.js";import{P as p}from"./pdf-viewer-Bwn40_dd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C3CP-9iS.js";import"./preload-helper-ClfwPwjs.js";import"./PdfRenderer-rJQjZbJb.js";import"./index-Chu8aKzj.js";import"./PdfViewer-BS9wrGGe.js";import"./PdfViewer.module.css-BfRuYaiV.js";import"./PdfViewerAnnotationLayer-BY4tfrgH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-yVa6QNAb.js";import"./PdfViewerOutlineSidebar-CM0yBcZl.js";import"./PdfViewerSidebarHeader-DoXrNWAg.js";import"./useBaseUiId-DkaPH0Rf.js";import"./useControlled-8x2p57kR.js";import"./CompositeRoot-DJR87dM3.js";import"./CompositeItem-D-EwU_cS.js";import"./ToolbarRootContext-De5GksnA.js";import"./composite-Dbvdjp0t.js";import"./svgIconContainer-BP9Z-tDZ.js";import"./PdfViewerSearchBar-qDDRNAG7.js";import"./chevron-up-CrXSXFjz.js";import"./chevron-down-Bf5jOaiw.js";import"./cross-3ovuSxzt.js";import"./PdfViewerSidebar-g6aRiROv.js";import"./index-B-hvhj9n.js";import"./index-Bp1bTyR_.js";import"./index-Cce1HCVa.js";import"./PdfViewerToolbar-CggNE6y3.js";import"./Button-BY76ulQB.js";import"./chevron-right-D2mqWq-q.js";import"./Input-TdFqwFJ9.js";import"./search-CoQIVL1G.js";import"./spin-C4DapHDd.js";import"./error-D2knBKFU.js";import"./withOsdkMetrics-C7yAfJYl.js";import"./makeExternalStore-B1QPW6-K.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
