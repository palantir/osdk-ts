import{j as r,M as s}from"./iframe-CeONtGYE.js";import{P as p}from"./pdf-viewer-CrvdACpW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-WnLRhxor.js";import"./preload-helper-DvBXsFR0.js";import"./PdfRenderer-BVIuOJ4n.js";import"./index-bFgDLkru.js";import"./PdfViewer-DSJ9rRXt.js";import"./PdfViewer.module.css-B9dBm6Z2.js";import"./PdfViewerAnnotationLayer-B7SA3IuN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-c-m4n5UH.js";import"./PdfViewerOutlineSidebar-BYtFJh_6.js";import"./PdfViewerSidebarHeader-jEO6nVpd.js";import"./useBaseUiId-Dx7XmX8N.js";import"./useControlled-CG2mEVzV.js";import"./CompositeRoot-CXESh-4O.js";import"./CompositeItem-Cj5a69yU.js";import"./ToolbarRootContext-uLaFcH8c.js";import"./composite-BsZkzPht.js";import"./svgIconContainer-CQgzwcHS.js";import"./PdfViewerSearchBar-BVc4fkvv.js";import"./chevron-up-BPXUv96k.js";import"./chevron-down-2yZeoid0.js";import"./cross-CNEWv4-m.js";import"./PdfViewerSidebar-DBdbR5fE.js";import"./index-CcKLGiy2.js";import"./index-DxRvRo72.js";import"./index-C4EeMnB3.js";import"./PdfViewerToolbar-CBUyznmj.js";import"./Button-ChHvGo4U.js";import"./chevron-right-DUwjkBUD.js";import"./Input-D0sau520.js";import"./search-CVSxuCGC.js";import"./spin-D4zOYBrn.js";import"./error-DarXGylQ.js";import"./withOsdkMetrics-Xgj9igKU.js";import"./makeExternalStore-RXvhCFRl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
