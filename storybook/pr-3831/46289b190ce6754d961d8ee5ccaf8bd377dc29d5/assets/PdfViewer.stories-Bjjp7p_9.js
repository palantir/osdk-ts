import{j as r,M as s}from"./iframe-YaQI_dO_.js";import{P as p}from"./pdf-viewer-cAhHAyOd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C3nm76WS.js";import"./preload-helper-BJlRXhvO.js";import"./PdfRenderer-CPbd9eGu.js";import"./index-BII9TVsB.js";import"./PdfViewer-Bhu-Lh-o.js";import"./PdfViewer.module.css-Hc4ioU2v.js";import"./PdfViewerAnnotationLayer-CbkbJYv7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C1RU8rUx.js";import"./PdfViewerOutlineSidebar-WdO4R_Ps.js";import"./PdfViewerSidebarHeader-CKGikhXp.js";import"./useBaseUiId-hHgDQcmK.js";import"./useControlled-DsDu70zE.js";import"./CompositeRoot-CVDxLmHx.js";import"./CompositeItem-Bdp4KkQW.js";import"./ToolbarRootContext-DnHqnj_P.js";import"./composite-s68hKVHL.js";import"./svgIconContainer-DmCuTEF7.js";import"./PdfViewerSearchBar-D5d09AV3.js";import"./chevron-up-CXn9sRL7.js";import"./chevron-down-_xlutfBF.js";import"./cross-CxRmiocS.js";import"./PdfViewerSidebar-wCSeH6vG.js";import"./index-pW2uRZ-o.js";import"./index-D8V8l3ab.js";import"./index-CroinZGW.js";import"./PdfViewerToolbar-DD7FQVp8.js";import"./Button-CKHrXp_-.js";import"./chevron-right-DPu0ED4w.js";import"./Input-Cychji4a.js";import"./search-Bq1E_0aL.js";import"./spin-C7RAzleJ.js";import"./error-B-n8pXYz.js";import"./withOsdkMetrics-DuLoxkUu.js";import"./makeExternalStore-A6cpUQ1F.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
