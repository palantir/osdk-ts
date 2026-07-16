import{j as r,M as s}from"./iframe-BrNUdAJB.js";import{P as p}from"./pdf-viewer-DqZZlMUu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-UYI3udH_.js";import"./preload-helper-CTmFEwj1.js";import"./PdfRenderer-CHZfQEC8.js";import"./index-ClxT7YU8.js";import"./PdfViewer-JnSsNWeo.js";import"./PdfViewer.module.css--iLgQQP_.js";import"./PdfViewerAnnotationLayer-5vSHY6zO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CZw3YIeW.js";import"./PdfViewerOutlineSidebar-Dqf3_QCR.js";import"./PdfViewerSidebarHeader-DNHMdsgR.js";import"./useBaseUiId-B7bo3rkW.js";import"./useControlled-D44LS_W_.js";import"./CompositeRoot-B6kQp3vI.js";import"./CompositeItem-3hiN0sUn.js";import"./ToolbarRootContext-CpIkUIlF.js";import"./composite-BqOHdNLc.js";import"./svgIconContainer-QCCLAHhT.js";import"./PdfViewerSearchBar-_N1YnRvN.js";import"./chevron-up-C7nJbn27.js";import"./chevron-down-DEH2Uss5.js";import"./cross-D-1UO6cK.js";import"./PdfViewerSidebar-DNfsCx3F.js";import"./index-Bbjz2YJF.js";import"./index-p7P79wue.js";import"./index-DfQ_Asrk.js";import"./PdfViewerToolbar-DgNaa0zt.js";import"./Button-BgucdCIm.js";import"./chevron-right-D7Q0BK-j.js";import"./Input-DGYBHAiJ.js";import"./search-H3XEzbZe.js";import"./spin-D2t2z997.js";import"./error-sge2T3L6.js";import"./withOsdkMetrics-BX-_Emcs.js";import"./makeExternalStore-CUfVEJNr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
