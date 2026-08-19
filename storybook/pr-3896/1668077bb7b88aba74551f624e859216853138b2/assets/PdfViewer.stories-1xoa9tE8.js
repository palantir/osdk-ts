import{j as r,M as s}from"./iframe-GgX3iuQS.js";import{P as p}from"./pdf-viewer-Dhg5VeF7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DCLdKxu3.js";import"./preload-helper-DopDlguM.js";import"./PdfViewer-xs8UrZzG.js";import"./index-2cEc6EpX.js";import"./BasePdfViewer-BA5_N0Bp.js";import"./BasePdfViewer.module.css-qaTRlWBq.js";import"./PdfViewerAnnotationLayer-v_gQsQMc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Vudz4UdJ.js";import"./PdfViewerOutlineSidebar-CGiWN0K7.js";import"./PdfViewerSidebarHeader-DCNuz8PR.js";import"./useBaseUiId-RBpeDYi5.js";import"./useControlled-CcoQ1fix.js";import"./CompositeRoot-DcIGMyg7.js";import"./CompositeItem-CaeojGGt.js";import"./ToolbarRootContext-BWdhq6Lq.js";import"./composite-DTJ2CAOA.js";import"./svgIconContainer-DqfRg1i7.js";import"./PdfViewerSearchBar-Oz-nn63B.js";import"./chevron-up-kGP7oWB5.js";import"./chevron-down-BhZlmI0F.js";import"./cross-_o4FWU3M.js";import"./PdfViewerSidebar-iguip18L.js";import"./index-nxvIp1-k.js";import"./index-CqrWKdwO.js";import"./index-BFiXO6wc.js";import"./PdfViewerToolbar-Cu6oyDws.js";import"./Button-QgQBUZaq.js";import"./chevron-right-B7oOXx0m.js";import"./Input-CVnvfPvb.js";import"./search-DiWIaVzY.js";import"./spin-D9sPzhbW.js";import"./error-DEuyLPP2.js";import"./withOsdkMetrics-BW_V9voC.js";import"./makeExternalStore-DX9YQrWu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
