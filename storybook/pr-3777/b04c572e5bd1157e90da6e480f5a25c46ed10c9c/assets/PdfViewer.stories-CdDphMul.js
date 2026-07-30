import{j as r,M as s}from"./iframe-B_IZKh8P.js";import{P as p}from"./pdf-viewer-BLrvsqF5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CelqDjJS.js";import"./preload-helper-BSCxhMTJ.js";import"./PdfRenderer-BTd1S-jc.js";import"./index-CnhyFb-r.js";import"./PdfViewer-BHrWY3f8.js";import"./PdfViewer.module.css-rdM8cPs3.js";import"./PdfViewerAnnotationLayer-BbZ9kdDb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DkgZiiOk.js";import"./PdfViewerOutlineSidebar-v0_ndiBz.js";import"./PdfViewerSidebarHeader-CwZSAD2K.js";import"./useBaseUiId-Dr3xYZYx.js";import"./useControlled-DNbx2H9c.js";import"./CompositeRoot-BRoVhuqi.js";import"./CompositeItem-CFKw5_bq.js";import"./ToolbarRootContext-B8yBsSST.js";import"./composite-D9C4oNf8.js";import"./svgIconContainer-Xsv1xEak.js";import"./PdfViewerSearchBar-B__9QEPU.js";import"./chevron-up-BG9WPaB1.js";import"./chevron-down-D7PGg54t.js";import"./cross-hQMC7b3L.js";import"./PdfViewerSidebar-D8pSKvZ6.js";import"./index-C0Lj84kX.js";import"./index-Cn6YA2O8.js";import"./index-CEu3xKdf.js";import"./PdfViewerToolbar-DOTDMHMU.js";import"./Button-BzbSQLjH.js";import"./chevron-right-C40D93QE.js";import"./Input-fcRS9Kmg.js";import"./search-Bd9-hZh2.js";import"./spin-C-pYF6EH.js";import"./error-SgZGkoCP.js";import"./withOsdkMetrics-Ch4rRkhY.js";import"./makeExternalStore-BAf1vw2Z.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
