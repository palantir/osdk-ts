import{j as r,M as s}from"./iframe-BvlK2p8r.js";import{P as p}from"./pdf-viewer-DP9sV9Wc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BN3NQ2Au.js";import"./preload-helper-Bf1QTDA3.js";import"./PdfRenderer-DS2GPa2V.js";import"./index-CJtyvgYT.js";import"./PdfViewer-4Q9btXb5.js";import"./PdfViewer.module.css-veq1YJ3M.js";import"./PdfViewerAnnotationLayer-l1aX69Fu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-5QK77UKX.js";import"./PdfViewerOutlineSidebar-90zFRyeh.js";import"./PdfViewerSidebarHeader-D_f9bWer.js";import"./useBaseUiId-DiGEHRWv.js";import"./useControlled-B_OuFYE6.js";import"./CompositeRoot-BCPSBy2O.js";import"./CompositeItem-DBLtjtTq.js";import"./ToolbarRootContext-B8YXpq5u.js";import"./composite-DLYbiM9i.js";import"./svgIconContainer-CLWMH6Fx.js";import"./PdfViewerSearchBar-BhtyWQJY.js";import"./chevron-up-BKan1BT8.js";import"./chevron-down-Bpyob3k8.js";import"./cross-XBkVoEMi.js";import"./PdfViewerSidebar-2SZ3BMeE.js";import"./index-C-Bgj_rI.js";import"./index-BXSqz-r8.js";import"./index-DR4zhZlK.js";import"./PdfViewerToolbar-Di2mxHyO.js";import"./Button-CwuonV3H.js";import"./chevron-right-DVXfWGSm.js";import"./Input-5I-CO4CQ.js";import"./search-CWi8yKUA.js";import"./spin-CHdIsH6o.js";import"./error-CHnt8F1v.js";import"./withOsdkMetrics-BEFCVJp2.js";import"./makeExternalStore-uNOWdKm-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
