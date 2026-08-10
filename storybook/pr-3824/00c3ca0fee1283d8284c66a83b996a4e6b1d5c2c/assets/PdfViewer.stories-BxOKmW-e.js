import{j as r,M as s}from"./iframe-BBtjza0D.js";import{P as p}from"./pdf-viewer-VQ1-F4bB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-xXzb-vmh.js";import"./preload-helper-DIpLrdyg.js";import"./PdfRenderer-D4zVi76V.js";import"./index-B5Ib5NgX.js";import"./PdfViewer-DLYZ08ze.js";import"./PdfViewer.module.css-vYr_RMN8.js";import"./PdfViewerAnnotationLayer-BAQRoweY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-taeJSCxE.js";import"./PdfViewerOutlineSidebar-D_LQJyfy.js";import"./PdfViewerSidebarHeader-CvYicJ0C.js";import"./useBaseUiId-HwKRTBOZ.js";import"./useControlled-n1nITqfY.js";import"./CompositeRoot-DGzGyEuv.js";import"./CompositeItem-CDPE0MsY.js";import"./ToolbarRootContext-DZE0giUi.js";import"./composite-BoMOOGfe.js";import"./svgIconContainer-Cv3Whexl.js";import"./PdfViewerSearchBar-CWqB-YQG.js";import"./chevron-up-DuF4tCNy.js";import"./chevron-down-BM8P94BW.js";import"./cross-BAgiJhuh.js";import"./PdfViewerSidebar-BYlrP6W9.js";import"./index-3zRTNHrM.js";import"./index-CzUdZzH9.js";import"./index-z3NWRD_P.js";import"./PdfViewerToolbar-PLtono4Z.js";import"./Button-DGjGmxxw.js";import"./chevron-right-ogI-0Pnc.js";import"./Input-CLtZs9ea.js";import"./search-DOUHr1do.js";import"./spin-CbB-lhT7.js";import"./error-WTxwKOKI.js";import"./withOsdkMetrics-CouVRm-f.js";import"./makeExternalStore-DRwq3rQb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
