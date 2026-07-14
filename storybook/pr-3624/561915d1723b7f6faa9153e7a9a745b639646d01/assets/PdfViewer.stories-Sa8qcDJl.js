import{j as r,M as s}from"./iframe-IM5MKsNo.js";import{P as p}from"./pdf-viewer-nfyrb3W5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CtTZgf7a.js";import"./preload-helper-DkOZHUYy.js";import"./PdfRenderer-YgL9Whb7.js";import"./index-yiVv8N5R.js";import"./PdfViewer-CL_68CEl.js";import"./PdfViewer.module.css-DJixOw_n.js";import"./PdfViewerAnnotationLayer-CVmXd_xh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BU256in1.js";import"./PdfViewerOutlineSidebar-B5LLWkSY.js";import"./PdfViewerSidebarHeader-C7yUoWm3.js";import"./useBaseUiId-BFRilBEC.js";import"./useControlled-DRL4ydof.js";import"./CompositeRoot-DsNemEFI.js";import"./CompositeItem-BCynY363.js";import"./ToolbarRootContext-wNHw0rqX.js";import"./composite-CiTvp-Ft.js";import"./svgIconContainer-BZvVBooi.js";import"./PdfViewerSearchBar-CBBcQHXG.js";import"./chevron-up-CZnA1vXs.js";import"./chevron-down-BwAY1etc.js";import"./cross-C1wCax7T.js";import"./PdfViewerSidebar-BGkEJlvi.js";import"./index-CuyH1L8L.js";import"./index-_kOz-9LW.js";import"./index-CXNLKzTV.js";import"./PdfViewerToolbar-DYZ19WEn.js";import"./Button-CQtPSfFd.js";import"./chevron-right-Defu9Cj6.js";import"./Input-DbPZgDd-.js";import"./search-BB-S2IIC.js";import"./spin-CCzhAAta.js";import"./error-C-1VgRxM.js";import"./withOsdkMetrics-DqzhxCRf.js";import"./makeExternalStore-DA9gjpUy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
