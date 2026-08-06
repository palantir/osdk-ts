import{j as r,M as s}from"./iframe-DiX2626k.js";import{P as p}from"./pdf-viewer-CGDlWoB1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DgbqGBDh.js";import"./preload-helper-CgOT8OGd.js";import"./PdfRenderer-Dkhs8j_s.js";import"./index-C_a3B7P8.js";import"./PdfViewer-DGet8oQx.js";import"./PdfViewer.module.css-xjp9QwJs.js";import"./PdfViewerAnnotationLayer-8_qvay5P.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CDaaj3Jw.js";import"./PdfViewerOutlineSidebar-BPM3ShkQ.js";import"./PdfViewerSidebarHeader-MrsBQCJJ.js";import"./useBaseUiId-Dw9BhH-r.js";import"./useControlled-CxjPKzUJ.js";import"./CompositeRoot-Bb5CeisG.js";import"./CompositeItem-ZBpRCkxX.js";import"./ToolbarRootContext-DHdMmgSm.js";import"./composite-BiL7kwGo.js";import"./svgIconContainer-BHXjiRCE.js";import"./PdfViewerSearchBar-D_EBu1vV.js";import"./chevron-up-CYl3noIi.js";import"./chevron-down-BU7zIy-t.js";import"./cross-ChthWFmt.js";import"./PdfViewerSidebar-Cdu2CZ_H.js";import"./index-q-Uvoyav.js";import"./index-BU1sDqZl.js";import"./index-BN-4XXfM.js";import"./PdfViewerToolbar-Bh0iU6FT.js";import"./Button-DcxIJd10.js";import"./chevron-right-keHnuZUD.js";import"./Input-0BqYVGVX.js";import"./search-Ch6GmwTu.js";import"./spin-CwsWpiy0.js";import"./error-BCYvkDQZ.js";import"./withOsdkMetrics-D26ty9CF.js";import"./makeExternalStore-BnR4KHg7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
