import{j as r,M as s}from"./iframe-DK1Bt9lv.js";import{P as p}from"./pdf-viewer-Ci6qro8_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bg5jFCXh.js";import"./preload-helper-Ce-wMa_v.js";import"./PdfRenderer-CyhmR2uL.js";import"./index-CJSZk4qc.js";import"./PdfViewer-O_ZtISD8.js";import"./PdfViewer.module.css-B1dYl4q4.js";import"./PdfViewerAnnotationLayer-D0v-GM6X.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Duqs3J5L.js";import"./PdfViewerOutlineSidebar-BrKTb4Xw.js";import"./PdfViewerSidebarHeader-Duxe-zKf.js";import"./useBaseUiId-DcgI8Re9.js";import"./useControlled-vdS8rpXB.js";import"./CompositeRoot-CSbPByul.js";import"./CompositeItem-ZQw-TopT.js";import"./ToolbarRootContext-B7RkTGG6.js";import"./composite-IGJfPAlR.js";import"./svgIconContainer-DnjSjGLw.js";import"./PdfViewerSearchBar-DjHtuUP6.js";import"./chevron-up-C16bA-Pa.js";import"./chevron-down-P75F9EWq.js";import"./cross-Bx8fvQ0o.js";import"./PdfViewerSidebar-DP-kGQKz.js";import"./index-C4v2X0sV.js";import"./index-BrXtLi8t.js";import"./index-CNbmxn8b.js";import"./PdfViewerToolbar-CtpnEwzk.js";import"./Button-pHFcucNO.js";import"./chevron-right-CvFupxJc.js";import"./Input-AKXtTaZ-.js";import"./search-DHCd6J0K.js";import"./spin-CEQSid3D.js";import"./error-DuaK5v6b.js";import"./withOsdkMetrics-BJBKWdiy.js";import"./makeExternalStore-CwRDfOI3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
