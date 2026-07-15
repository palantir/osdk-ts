import{j as r,M as s}from"./iframe-dtQGF2H8.js";import{P as p}from"./pdf-viewer-BQiogLrt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ClcsF4IM.js";import"./preload-helper-BWpFyzI-.js";import"./PdfRenderer-DwoNy_Hg.js";import"./index-La2oWZLR.js";import"./PdfViewer-CU02HhFZ.js";import"./PdfViewer.module.css-DnFmTxen.js";import"./PdfViewerAnnotationLayer-CwW6w3c5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DbWylNNq.js";import"./PdfViewerOutlineSidebar-CwAIZwY3.js";import"./PdfViewerSidebarHeader-CkJ0V4x6.js";import"./useBaseUiId-Azsu5E94.js";import"./useControlled-DThz--pU.js";import"./CompositeRoot-CdtgeAa9.js";import"./CompositeItem-CzqPG5V9.js";import"./ToolbarRootContext-DHEUMd4X.js";import"./composite-CeuAcLgt.js";import"./svgIconContainer-DHcHrD2t.js";import"./PdfViewerSearchBar-CFTJv2Qj.js";import"./chevron-up-B-BqJ8Ka.js";import"./chevron-down-BkVScMkI.js";import"./cross-BjzqCDqF.js";import"./PdfViewerSidebar-BlY1LinL.js";import"./index-BrHrBPS0.js";import"./index-Cp83hyWP.js";import"./index-CBKOlPq_.js";import"./PdfViewerToolbar-Zwt7MJRR.js";import"./Button-eBJ6jWEy.js";import"./chevron-right-BXuiOagL.js";import"./Input-CaHZesQ6.js";import"./search-CPkCqnH_.js";import"./spin-BFkeTzv0.js";import"./error-DvPjLIxS.js";import"./withOsdkMetrics-B0_3LDNQ.js";import"./makeExternalStore-CaYFwkGE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
