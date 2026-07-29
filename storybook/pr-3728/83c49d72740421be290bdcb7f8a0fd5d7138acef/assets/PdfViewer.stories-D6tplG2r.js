import{j as r,M as s}from"./iframe-CefCqiaR.js";import{P as p}from"./pdf-viewer-BFWAjiiA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BTFo23Ep.js";import"./preload-helper-BbZ5zaD4.js";import"./PdfRenderer-g2ftzNM5.js";import"./index-CPwptoLW.js";import"./PdfViewer-DAPboQfU.js";import"./PdfViewer.module.css-wispDxa7.js";import"./PdfViewerAnnotationLayer--m5lpX-4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-GQ9-o82j.js";import"./PdfViewerOutlineSidebar-CCGcv0N6.js";import"./PdfViewerSidebarHeader-DUcnTYw3.js";import"./useBaseUiId--cf_zvwI.js";import"./useControlled-CYAavFS_.js";import"./CompositeRoot-DcjmwE9A.js";import"./CompositeItem-BcGhlmFP.js";import"./ToolbarRootContext-6o4iFsuQ.js";import"./composite-CaFtD7Fw.js";import"./svgIconContainer-BWT0TxKV.js";import"./PdfViewerSearchBar-CBfWPKOe.js";import"./chevron-up-BexdKNMk.js";import"./chevron-down-vR75fc7-.js";import"./cross-DzRvqWD9.js";import"./PdfViewerSidebar-Dz225_nf.js";import"./index-iDkTeg2b.js";import"./index-DxmvKgU9.js";import"./index-BmTM_Qdn.js";import"./PdfViewerToolbar-BEJRpWUa.js";import"./Button-CqMZznRG.js";import"./chevron-right-BFqIzJNX.js";import"./Input-CnwwjYHv.js";import"./search-B0y7ohsg.js";import"./spin-D-KLsGwv.js";import"./error-CxYINkuo.js";import"./withOsdkMetrics-9UynMHiU.js";import"./makeExternalStore-B-ZoqTkF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
