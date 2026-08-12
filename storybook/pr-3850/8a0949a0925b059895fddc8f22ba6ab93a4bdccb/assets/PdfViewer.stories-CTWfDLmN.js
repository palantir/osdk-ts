import{j as r,M as s}from"./iframe-BAHulxpJ.js";import{P as p}from"./pdf-viewer-Dp0oVZ8F.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-pn6HnJrw.js";import"./preload-helper-5aV3zbER.js";import"./PdfRenderer-CkxxTMkL.js";import"./index-BQXofWlU.js";import"./PdfViewer-BmmQqVZH.js";import"./PdfViewer.module.css-D7DrIc4Q.js";import"./PdfViewerAnnotationLayer-BxgY-tLc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CoU7iLzA.js";import"./PdfViewerOutlineSidebar-DpByZDIM.js";import"./PdfViewerSidebarHeader-BUOkcmsM.js";import"./useBaseUiId-4VVoMa3J.js";import"./useControlled-DIFuATpA.js";import"./CompositeRoot-BNcHjMMH.js";import"./CompositeItem-CzEEDLGh.js";import"./ToolbarRootContext-D5ZmFT_T.js";import"./composite-CNE1JcBa.js";import"./svgIconContainer-Cm-IMBSr.js";import"./PdfViewerSearchBar-4EGkjrKj.js";import"./chevron-up-DyqLhAeQ.js";import"./chevron-down-pYaR9_5X.js";import"./cross-B9q1-ifJ.js";import"./PdfViewerSidebar-Bs6sltkg.js";import"./index-B0GpXZaG.js";import"./index-DoA2rgK3.js";import"./index-WmCUx70V.js";import"./PdfViewerToolbar-SW7YoruW.js";import"./Button-CQQZwN_7.js";import"./chevron-right-yFwBGb72.js";import"./Input-BrRAx9lQ.js";import"./search-OXklcGGP.js";import"./spin-B0ZbFSqt.js";import"./error-CcsT2Wai.js";import"./withOsdkMetrics-Bp9A7LOQ.js";import"./makeExternalStore-Cb1RY-_V.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
