import{j as r,M as s}from"./iframe-CwQyvPXr.js";import{P as p}from"./pdf-viewer-C30w8d0W.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-wZdaWbmz.js";import"./preload-helper-nPWeI9RW.js";import"./PdfRenderer-JUI3C26s.js";import"./index-9af34HI7.js";import"./PdfViewer-D8xoYJl5.js";import"./PdfViewer.module.css-AeQDp4IG.js";import"./PdfViewerAnnotationLayer-DAi0Dims.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CdyaEtk-.js";import"./PdfViewerOutlineSidebar-d7HvCNSv.js";import"./PdfViewerSidebarHeader-BcdIz8tQ.js";import"./useBaseUiId-ChwMhbSq.js";import"./useControlled-C8JNZz-A.js";import"./CompositeRoot-D_XW_cMc.js";import"./CompositeItem-BIC57Pt6.js";import"./ToolbarRootContext-srCRfALr.js";import"./composite-DoyUokVD.js";import"./svgIconContainer-CRE1ctgD.js";import"./PdfViewerSearchBar-C3Gckv1p.js";import"./chevron-up-Cc-ZvcRQ.js";import"./chevron-down-CTW1e4Xq.js";import"./cross-DVZdLFyf.js";import"./PdfViewerSidebar-DlSL4WRt.js";import"./index-DAInQTbe.js";import"./index-DRKHNjEq.js";import"./index-D-pe9IzG.js";import"./PdfViewerToolbar-BG8E6qhx.js";import"./Button-B0hT9H_M.js";import"./chevron-right-bIbY6avU.js";import"./Input-C6MXRUFM.js";import"./search-BlHvZBtL.js";import"./spin-C_NgO3xU.js";import"./error-UdfzbvcV.js";import"./withOsdkMetrics-DIsQZe29.js";import"./makeExternalStore-CqNNKoNM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
