import{j as r,M as s}from"./iframe-Zg3agjVA.js";import{P as p}from"./pdf-viewer-BjcDwjuO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-10jpjSYq.js";import"./preload-helper-BXRBmtzA.js";import"./PdfRenderer-CAMPaNJ-.js";import"./index-COc2doys.js";import"./PdfViewer-JAAZo_x3.js";import"./PdfViewer.module.css-B_Pjq0Yh.js";import"./PdfViewerAnnotationLayer-TgURRSOd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DLaaRJv2.js";import"./PdfViewerOutlineSidebar-DICIqOwj.js";import"./PdfViewerSidebarHeader-C2lrJfmF.js";import"./useBaseUiId-DRojaVbZ.js";import"./useControlled-CcIGpRzc.js";import"./CompositeRoot-DdZIUeRW.js";import"./CompositeItem-sHUrGE0o.js";import"./ToolbarRootContext-uC1AZv1t.js";import"./composite-CY6EnEDk.js";import"./svgIconContainer-7JSyjSbU.js";import"./PdfViewerSearchBar-BQMtDoEQ.js";import"./chevron-up-Chpb5ijz.js";import"./chevron-down-CtGcJNNE.js";import"./cross-3gwJUULA.js";import"./PdfViewerSidebar-q6yscksF.js";import"./index-BBvO76wk.js";import"./index-Do1Ejht1.js";import"./index-B1LfTOb2.js";import"./PdfViewerToolbar-BleuRARW.js";import"./Button-BYrujQNz.js";import"./chevron-right-BAh_oHL8.js";import"./Input-qYz4RN-U.js";import"./search-i7uPZuYO.js";import"./spin-DMTWkbwr.js";import"./error-BbQ-Z9B4.js";import"./withOsdkMetrics-Dl0gKApc.js";import"./makeExternalStore-DLtPHmhK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
