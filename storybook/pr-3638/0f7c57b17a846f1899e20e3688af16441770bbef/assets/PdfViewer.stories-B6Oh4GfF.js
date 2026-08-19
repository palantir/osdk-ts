import{j as r,M as s}from"./iframe-CCxrc5uu.js";import{P as p}from"./pdf-viewer-CBBr8Hu_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-lfI6Vnbk.js";import"./preload-helper-D9q9R3OD.js";import"./PdfViewer-BuQSW_LZ.js";import"./index-qDidCFPc.js";import"./BasePdfViewer-xQ7GW1Cf.js";import"./BasePdfViewer.module.css-t4IuHMel.js";import"./PdfViewerAnnotationLayer-CerIQkGq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BpxG0io2.js";import"./PdfViewerOutlineSidebar-D1_OF1kp.js";import"./PdfViewerSidebarHeader-BUw3ZClo.js";import"./useBaseUiId-BGcK0dYJ.js";import"./useControlled-zCfwXGMX.js";import"./CompositeRoot-BjJ9Puwu.js";import"./CompositeItem-D76iKrer.js";import"./ToolbarRootContext-BnL2264j.js";import"./composite-BPcLlFHy.js";import"./svgIconContainer-CkLZQvG4.js";import"./PdfViewerSearchBar-BdePjC-B.js";import"./chevron-up-Bx0YDAmO.js";import"./chevron-down-uBVJdRCo.js";import"./cross-BmJWQ0-J.js";import"./PdfViewerSidebar-BclleL6C.js";import"./index-C_rJszoR.js";import"./index-XpQZglWM.js";import"./index-DgxjKFwf.js";import"./PdfViewerToolbar-C6EOtUV1.js";import"./Button-BxUO2cyH.js";import"./chevron-right-BpPjI9Tx.js";import"./Input-D9VrK1lm.js";import"./search-jlcS54Ws.js";import"./spin-CZsJV6Sw.js";import"./error-ecSZs2U2.js";import"./withOsdkMetrics-jldHoxNz.js";import"./makeExternalStore-B_4U4xcV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
