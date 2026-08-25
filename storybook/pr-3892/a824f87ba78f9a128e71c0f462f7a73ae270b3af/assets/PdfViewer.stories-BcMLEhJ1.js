import{j as r,M as s}from"./iframe-CjrvQ8Eq.js";import{P as p}from"./pdf-viewer-Duks2d4A.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CSGVGFXJ.js";import"./preload-helper-BPg6l9d3.js";import"./PdfViewer-rTZNu5gQ.js";import"./index-DB-uoMhr.js";import"./BasePdfViewer-06t8vJCW.js";import"./BasePdfViewer.module.css-BPTIZmOY.js";import"./PdfViewerAnnotationLayer-CwzHXFsO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DIBaIQsx.js";import"./PdfViewerOutlineSidebar-C8iPaoha.js";import"./PdfViewerSidebarHeader-CfR5I9lI.js";import"./useBaseUiId-BUaVaBCu.js";import"./useControlled-nb9nN5WZ.js";import"./CompositeRoot-DsK89E-C.js";import"./CompositeItem-B9gYo-S0.js";import"./ToolbarRootContext-DcQsKFzE.js";import"./composite-BdOz1pLd.js";import"./svgIconContainer-CnoHMalv.js";import"./PdfViewerSearchBar-p2f5Q-8H.js";import"./chevron-up-BShVMvHY.js";import"./chevron-down-CKpFjGQX.js";import"./cross-CZEvBoD0.js";import"./PdfViewerSidebar-BCL8dPqY.js";import"./index-BcucvAIU.js";import"./index-BMCwP6lU.js";import"./index-AcJBEuLY.js";import"./PdfViewerToolbar-Cb-mG5ra.js";import"./Button-BZpeRQKg.js";import"./chevron-right-DeyZSFPY.js";import"./Input-Pixh_UaU.js";import"./search-DnFytF8-.js";import"./spin-Dyyit8HQ.js";import"./error-tjFs6guL.js";import"./withOsdkMetrics-DofP_XMa.js";import"./makeExternalStore-DfWi3bI5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
