import{j as r,M as s}from"./iframe-PSEd73NB.js";import{P as p}from"./pdf-viewer-DMyq3W1B.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C5d8PEMc.js";import"./preload-helper-1GV8hhoq.js";import"./PdfRenderer-CucsfPoi.js";import"./index-NVpWWHhl.js";import"./PdfViewer-C8gZ3Yht.js";import"./PdfViewer.module.css-ms2WyWG4.js";import"./PdfViewerAnnotationLayer-s3KIsPoN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CaS0aufg.js";import"./PdfViewerOutlineSidebar-h6ydIh7w.js";import"./PdfViewerSidebarHeader-SqJFtr-8.js";import"./useBaseUiId-xie1JhLt.js";import"./useControlled-ClhVTb83.js";import"./CompositeRoot-B5sjizTv.js";import"./CompositeItem-BPO1Jify.js";import"./ToolbarRootContext-ny_fraWs.js";import"./composite-DRmXisBv.js";import"./svgIconContainer-Cer1IrhT.js";import"./PdfViewerSearchBar-DRmPSsN0.js";import"./chevron-up-B9z4xPkw.js";import"./chevron-down-xnJkXJWa.js";import"./cross-DUR72zJ7.js";import"./PdfViewerSidebar-C1b6HBBP.js";import"./index-CTJJ11lg.js";import"./index-kUkNYXaQ.js";import"./index-wWSeiS7y.js";import"./PdfViewerToolbar-wcLoA1kU.js";import"./Button-BKvLONJz.js";import"./chevron-right-B3Gb6zMx.js";import"./Input-D8coZK1U.js";import"./search-B8xwdlL_.js";import"./spin-y2u5SoFO.js";import"./error-BrPsupgI.js";import"./withOsdkMetrics-VXn3cz-B.js";import"./makeExternalStore-CvL344Sn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
