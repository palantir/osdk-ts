import{j as r,M as s}from"./iframe-CSDQN0H7.js";import{P as p}from"./pdf-viewer-BIRTF4Ck.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-OHVw-YJm.js";import"./preload-helper-CogmwM7N.js";import"./PdfRenderer-C1oCfvNd.js";import"./index-yl5IXyEv.js";import"./PdfViewer-CVYSZmq4.js";import"./PdfViewer.module.css-B4HEFVnY.js";import"./PdfViewerAnnotationLayer-Bjn7FQlG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bo7TWcUG.js";import"./PdfViewerOutlineSidebar-LEkAH5WY.js";import"./PdfViewerSidebarHeader-DG1uMwP2.js";import"./useBaseUiId-CvMCsZtd.js";import"./useControlled-D48I7YQp.js";import"./CompositeRoot-BSq0Wgjh.js";import"./CompositeItem-BRUblGbs.js";import"./ToolbarRootContext-CYNYeNMx.js";import"./composite-CkHOUmoC.js";import"./svgIconContainer-BawUlnx9.js";import"./PdfViewerSearchBar-DnI65YlI.js";import"./chevron-up-CrjDttn6.js";import"./chevron-down-Canc_bc9.js";import"./cross-Dnnue40e.js";import"./PdfViewerSidebar--3qYAGkj.js";import"./index-7AcbBDGr.js";import"./index-D_3ES6Wr.js";import"./index-B79nei2k.js";import"./PdfViewerToolbar-CefrPyDb.js";import"./Button-VHpYDsB0.js";import"./chevron-right-BTZNMT0F.js";import"./Input-Dl_5uMeJ.js";import"./search-DhAPGoPJ.js";import"./spin-C6kzBUXk.js";import"./error-C4QmCDiq.js";import"./withOsdkMetrics-OPJnIEEa.js";import"./makeExternalStore-DG4oGFRu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
