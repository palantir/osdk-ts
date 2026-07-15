import{j as r,M as s}from"./iframe-BLN3c0ny.js";import{P as p}from"./pdf-viewer-CwTMl7ul.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-FF6BLAVa.js";import"./preload-helper-YNn4sAzm.js";import"./PdfRenderer-CY_yp4_t.js";import"./index-C2W4mW7k.js";import"./PdfViewer-CmwYcaOH.js";import"./PdfViewer.module.css-y3TR71QN.js";import"./PdfViewerAnnotationLayer-DdIYht4E.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BJZGpPG9.js";import"./PdfViewerOutlineSidebar-BXGXJPeD.js";import"./PdfViewerSidebarHeader-LMxgSWKb.js";import"./useBaseUiId-CXuD1HYt.js";import"./useControlled-DHQ1gK1Z.js";import"./CompositeRoot-DF2Mupd4.js";import"./CompositeItem-DwO22Lb_.js";import"./ToolbarRootContext-BUImLfjc.js";import"./composite-Nm1NmS0N.js";import"./svgIconContainer-BdZesHFS.js";import"./PdfViewerSearchBar-DwIhEswa.js";import"./chevron-up-DLEzUQ8c.js";import"./chevron-down-CuzDNcNa.js";import"./cross-BI_OHT9E.js";import"./PdfViewerSidebar-BU4g12EO.js";import"./index-BRP9fXLP.js";import"./index-DbM9L159.js";import"./index-BeAUbI1J.js";import"./PdfViewerToolbar-DesVAlJQ.js";import"./Button-Cg8SRRwY.js";import"./chevron-right-B0jctb6I.js";import"./Input-CApTyOle.js";import"./search-BLsF3Nkl.js";import"./spin-sKhBvr4B.js";import"./error-B6PTXWnS.js";import"./withOsdkMetrics-DkRRLrbq.js";import"./makeExternalStore-CIYI4EDM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
