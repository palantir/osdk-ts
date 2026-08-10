import{j as r,M as s}from"./iframe-Bbf4FjDU.js";import{P as p}from"./pdf-viewer-GJftzrZW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-OLlp_nYc.js";import"./preload-helper-YaXZfCQV.js";import"./PdfRenderer-DgIZStF7.js";import"./index-DLE1jPtg.js";import"./PdfViewer-BvEIE-23.js";import"./PdfViewer.module.css-CsyQn_w_.js";import"./PdfViewerAnnotationLayer-C6aVIkFk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CrDGcaGA.js";import"./PdfViewerOutlineSidebar-CrNdid1P.js";import"./PdfViewerSidebarHeader-CLYGwb1-.js";import"./useBaseUiId-BRh9XTyf.js";import"./useControlled-DoIPYusQ.js";import"./CompositeRoot-C_N5HiMP.js";import"./CompositeItem-CqrYPqsZ.js";import"./ToolbarRootContext-BBqjW-rY.js";import"./composite-B1F8KCAM.js";import"./svgIconContainer-4ZiBMY0_.js";import"./PdfViewerSearchBar-B1yeGit5.js";import"./chevron-up-CHVqHWna.js";import"./chevron-down-Cc8MIWBV.js";import"./cross-CgPr2XxJ.js";import"./PdfViewerSidebar-Cxe-Pzgv.js";import"./index-C9cY3Iny.js";import"./index-BoMF0LF3.js";import"./index-D4hTQg7R.js";import"./PdfViewerToolbar-CsCh79bk.js";import"./Button-BYft6qk9.js";import"./chevron-right-CFylnCS9.js";import"./Input-g6XLjkNm.js";import"./search-DsV4MpL_.js";import"./spin-0bTtrN_E.js";import"./error-Cvn0KVtL.js";import"./withOsdkMetrics-CXfNwoqS.js";import"./makeExternalStore-CCrsK6D4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
