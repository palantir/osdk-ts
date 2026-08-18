import{j as r,M as s}from"./iframe-Bm2xIDK5.js";import{P as p}from"./pdf-viewer-BYQJAmJK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BFj74lCR.js";import"./preload-helper-DjaAX_dd.js";import"./PdfViewer-Db6CvdoX.js";import"./index-CRCzPeKr.js";import"./BasePdfViewer-B_Te3TzL.js";import"./BasePdfViewer.module.css-CsFdMnDA.js";import"./PdfViewerAnnotationLayer-mgq1AyNd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dkvfe6p9.js";import"./PdfViewerOutlineSidebar-DGMMEuBM.js";import"./PdfViewerSidebarHeader-DmeYwqIc.js";import"./useBaseUiId-BiVvMHjj.js";import"./useControlled-ct5PUNgp.js";import"./CompositeRoot-u-X1AdKW.js";import"./CompositeItem-C2KXSrkE.js";import"./ToolbarRootContext-BpHcU6MJ.js";import"./composite-CbVqY-fJ.js";import"./svgIconContainer-ZRcJnPU8.js";import"./PdfViewerSearchBar-DuZEnMAi.js";import"./chevron-up-CU17LZ85.js";import"./chevron-down-BWun0Vbz.js";import"./cross-CkbifLjz.js";import"./PdfViewerSidebar-VC3hPyl1.js";import"./index-D54hbR-G.js";import"./index-C4KdMwTz.js";import"./index-BPaiiW9-.js";import"./PdfViewerToolbar-DYengl9U.js";import"./Button-B6A5AFkI.js";import"./chevron-right-8iRoTXQR.js";import"./Input-DAk1mrJi.js";import"./search-BUI-KeZj.js";import"./spin-DgalRBPD.js";import"./error-DiQG4vMl.js";import"./withOsdkMetrics-YdolIAmM.js";import"./makeExternalStore-B3tvKJjP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
