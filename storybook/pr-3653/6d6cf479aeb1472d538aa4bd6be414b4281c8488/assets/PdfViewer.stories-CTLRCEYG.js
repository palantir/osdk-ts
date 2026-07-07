import{j as r,M as s}from"./iframe-C5aCmoNO.js";import{P as p}from"./pdf-viewer-B7JLtuIF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-TiXPfrcf.js";import"./preload-helper-WhdHBd3t.js";import"./PdfRenderer-DQfewU1A.js";import"./index-cSFONtJU.js";import"./PdfViewer-BWgXNN9K.js";import"./PdfViewer.module.css--94GCqAn.js";import"./PdfViewerAnnotationLayer-BAWX5VlV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CLRXkfOO.js";import"./PdfViewerOutlineSidebar-twp3l4QG.js";import"./PdfViewerSidebarHeader-bu1iiDnU.js";import"./useBaseUiId-CZFdvPLq.js";import"./useControlled-DV86-8Mx.js";import"./CompositeRoot-R_DH6Z9e.js";import"./CompositeItem-j_9AjjOt.js";import"./ToolbarRootContext-dz5ogJMW.js";import"./composite-ycAiGuBV.js";import"./svgIconContainer-MBJNi3sf.js";import"./PdfViewerSearchBar-40siiRP8.js";import"./chevron-up-CycRlFeZ.js";import"./chevron-down-zYcwkkW1.js";import"./cross-Dziqcvjd.js";import"./PdfViewerSidebar-D4bMf5cW.js";import"./index-BsgkMab_.js";import"./index-BYMUbS1D.js";import"./index-VK30H4xM.js";import"./PdfViewerToolbar-BmaU4sJ8.js";import"./Button-Dg_73S_B.js";import"./chevron-right-HxzZQ1b4.js";import"./Input-UxbHtRcv.js";import"./search-CXEAIpAp.js";import"./spin-DDVS4v7q.js";import"./error-BgTzr7up.js";import"./withOsdkMetrics-NIUjjKKK.js";import"./makeExternalStore-hJeL3jdd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
