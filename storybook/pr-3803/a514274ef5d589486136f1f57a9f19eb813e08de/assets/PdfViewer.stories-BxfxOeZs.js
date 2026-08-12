import{j as r,M as s}from"./iframe-B3wk8kVZ.js";import{P as p}from"./pdf-viewer-D0ne2jKT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BspLKhuD.js";import"./preload-helper-C31FCm5E.js";import"./PdfRenderer-Ch7O2Gul.js";import"./index-3CUWClbk.js";import"./PdfViewer-D33rU7j0.js";import"./PdfViewer.module.css-D354WfzC.js";import"./PdfViewerAnnotationLayer-D--fJyZ3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BEQBe43L.js";import"./PdfViewerOutlineSidebar-CXba9O-m.js";import"./PdfViewerSidebarHeader-BXkAoXAB.js";import"./useBaseUiId-CklL5-7z.js";import"./useControlled-OgnUzg5x.js";import"./CompositeRoot-B6ewgQ7f.js";import"./CompositeItem-C_xzt7Yx.js";import"./ToolbarRootContext-ffWwb0UY.js";import"./composite-Bre4iFt0.js";import"./svgIconContainer-tw0lZiQJ.js";import"./PdfViewerSearchBar-CeD9IMvR.js";import"./chevron-up-fMoBS7de.js";import"./chevron-down-CF60htEO.js";import"./cross-BaLLkSHI.js";import"./PdfViewerSidebar-DVFzjtha.js";import"./index-Bh7yWO4s.js";import"./index-CqtqFd9-.js";import"./index-Bu1K1z8v.js";import"./PdfViewerToolbar-g3Wpi99c.js";import"./Button-DQgybiWB.js";import"./chevron-right-Bl_gL-6Z.js";import"./Input-D8tm8Vwt.js";import"./search-BTUcl0ov.js";import"./spin-tAY5Zp4f.js";import"./error-Ceiy10ri.js";import"./withOsdkMetrics-DQFY8goa.js";import"./makeExternalStore-CEwzLxnH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
