import{j as r,M as s}from"./iframe-DUz-OrqR.js";import{P as p}from"./pdf-viewer-uG0IZ44R.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Oyl0D0sS.js";import"./preload-helper-WEmf-dAi.js";import"./PdfViewer-CpyWyRuP.js";import"./index-DPNIRnN8.js";import"./BasePdfViewer-BAvT2t9y.js";import"./BasePdfViewer.module.css-BZctDOBU.js";import"./PdfViewerAnnotationLayer-5cHDGz0v.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CNiPl5I9.js";import"./PdfViewerOutlineSidebar-CHxYnTza.js";import"./PdfViewerSidebarHeader-Ca8xZn_6.js";import"./useBaseUiId-faWN6al-.js";import"./useControlled-CC5aVJEJ.js";import"./CompositeRoot-DZmslOsU.js";import"./CompositeItem-C7hFkHG3.js";import"./ToolbarRootContext-BvHshB_C.js";import"./composite-5JSlF-Dr.js";import"./svgIconContainer-D7O_Fxw5.js";import"./PdfViewerSearchBar-s0j48ji1.js";import"./chevron-up-Dv5r4L62.js";import"./chevron-down-b_QMdGXW.js";import"./cross-CCEYas7q.js";import"./PdfViewerSidebar-CEYBX5mH.js";import"./index-BwuUX6bY.js";import"./index-DYvQRBeB.js";import"./index-BiD7WpJZ.js";import"./PdfViewerToolbar-mA82sX2N.js";import"./Button-CsUtrvR7.js";import"./chevron-right-DKXqKGhq.js";import"./Input-CbwTlgOh.js";import"./search-Bcz0i2pz.js";import"./spin-DoHfr8ep.js";import"./error-DKqly0Za.js";import"./withOsdkMetrics-DJx9VGp_.js";import"./makeExternalStore-D6Z3VA3j.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
