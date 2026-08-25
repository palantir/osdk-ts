import{j as r,M as s}from"./iframe-Dz1VB-Ug.js";import{P as p}from"./pdf-viewer-DnONl14N.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-TnOAex2Q.js";import"./preload-helper-cJTn69LB.js";import"./PdfViewer-C01JdsAj.js";import"./index-DpMaRJGq.js";import"./BasePdfViewer-DCxlKCZ4.js";import"./BasePdfViewer.module.css-Bw5bRpbj.js";import"./PdfViewerAnnotationLayer-BIL9wy8f.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DAoQir0s.js";import"./PdfViewerOutlineSidebar-D6OJ_9UD.js";import"./PdfViewerSidebarHeader-C-suWd0H.js";import"./useBaseUiId-DBeQxEGH.js";import"./useControlled-qV-s3roQ.js";import"./CompositeRoot-DxDwGbjw.js";import"./CompositeItem-CtgUzBYo.js";import"./ToolbarRootContext-CfOvFLMo.js";import"./composite-DFM5sFvF.js";import"./svgIconContainer-D2McpvpD.js";import"./PdfViewerSearchBar-7zdOzBDm.js";import"./chevron-up-BwF5UoqT.js";import"./chevron-down-MQzS0zY-.js";import"./cross-BHVqJpxe.js";import"./PdfViewerSidebar-DCzs61XO.js";import"./index-CX5UJqJP.js";import"./index-BrZlGDbg.js";import"./index-B09TTsrW.js";import"./PdfViewerToolbar-BKCJLN8u.js";import"./Button-CXoONGN_.js";import"./chevron-right-Dw2u24wY.js";import"./Input-BVvBS9l5.js";import"./search-CkZGsmzb.js";import"./spin-tmnH1TvI.js";import"./error-DU1smNA0.js";import"./withOsdkMetrics-CSiTUGv5.js";import"./makeExternalStore-BALv-RXc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
