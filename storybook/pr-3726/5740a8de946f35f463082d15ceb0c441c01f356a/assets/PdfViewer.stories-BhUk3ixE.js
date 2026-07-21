import{j as r,M as s}from"./iframe-DaH--uhd.js";import{P as p}from"./pdf-viewer-_I5zd-pz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DAihE2G7.js";import"./preload-helper-DvIIoUzm.js";import"./PdfRenderer-Bu7gxKkt.js";import"./index-BMAlonby.js";import"./PdfViewer-B_ai83P2.js";import"./PdfViewer.module.css-BKtiWMQS.js";import"./PdfViewerAnnotationLayer-lfX9rBZB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CaWvvkaj.js";import"./PdfViewerOutlineSidebar-BSf86EaK.js";import"./PdfViewerSidebarHeader-BJ2UQmYS.js";import"./useBaseUiId-B7uZjrGK.js";import"./useControlled-D1CRiWBA.js";import"./CompositeRoot-BMh9joId.js";import"./CompositeItem-D7o3XeFm.js";import"./ToolbarRootContext-NQxvR3jh.js";import"./composite-DX-GZFZ7.js";import"./svgIconContainer-DgPHag9Q.js";import"./PdfViewerSearchBar-ClFD8NHa.js";import"./chevron-up-CEqdv45z.js";import"./chevron-down-D1uqpDzw.js";import"./cross-BpuWeFt4.js";import"./PdfViewerSidebar-CzQO8Sqk.js";import"./index-Bl6bztV4.js";import"./index-Db03BdH7.js";import"./index-D4iMbXkN.js";import"./PdfViewerToolbar-BY55P7rw.js";import"./Button-BZrLDah9.js";import"./chevron-right-DMg_1E5L.js";import"./Input-3kt0-xJW.js";import"./search-By5kcg3e.js";import"./spin-DO4kGwYP.js";import"./error-EuQ7YeVu.js";import"./withOsdkMetrics-DuOgLxTw.js";import"./makeExternalStore-POweBG66.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
