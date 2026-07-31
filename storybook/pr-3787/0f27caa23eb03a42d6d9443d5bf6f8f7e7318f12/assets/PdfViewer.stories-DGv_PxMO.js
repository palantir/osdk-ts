import{j as r,M as s}from"./iframe-CeQ9YtV4.js";import{P as p}from"./pdf-viewer-BdZbOk_c.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BvZzOrPF.js";import"./preload-helper-LX8fJrHu.js";import"./PdfRenderer-J8a0WXZg.js";import"./index--uV_mo53.js";import"./PdfViewer-MMauSXND.js";import"./PdfViewer.module.css-14ro6aOS.js";import"./PdfViewerAnnotationLayer-CKIwAV99.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BclkXBg2.js";import"./PdfViewerOutlineSidebar-AdfpmMns.js";import"./PdfViewerSidebarHeader-DelfMhb9.js";import"./useBaseUiId-MCv3qySg.js";import"./useControlled-Cy5Phl1t.js";import"./CompositeRoot-9wcMpSF4.js";import"./CompositeItem-B8rBXA17.js";import"./ToolbarRootContext-CHRb4C_O.js";import"./composite-CeZ8ImGH.js";import"./svgIconContainer-GQ1XFBl8.js";import"./PdfViewerSearchBar-CCJxAxHs.js";import"./chevron-up-DJJh-xva.js";import"./chevron-down-CacDCs_q.js";import"./cross-CmnPk6HR.js";import"./PdfViewerSidebar-D50AWa0-.js";import"./index-BgMHbt7V.js";import"./index-B2gRy6GZ.js";import"./index-CGQM6Os1.js";import"./PdfViewerToolbar-BfQdLcTu.js";import"./Button-uPcuQ9i2.js";import"./chevron-right-BmmL-Z_F.js";import"./Input-H4BR9uZl.js";import"./search-D3yZFVGs.js";import"./spin-Bveqd_PC.js";import"./error-DsKJBY0C.js";import"./withOsdkMetrics-Cjsqhpmc.js";import"./makeExternalStore-Vue07-gf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
