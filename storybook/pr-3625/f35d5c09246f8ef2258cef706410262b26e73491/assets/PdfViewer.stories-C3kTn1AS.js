import{j as r,M as s}from"./iframe-Baj4quOh.js";import{P as p}from"./pdf-viewer-C0wYXK8_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BNDDHX26.js";import"./preload-helper-C_OitlJ6.js";import"./PdfRenderer-DQohsZEx.js";import"./index-Q4qU6G5G.js";import"./PdfViewer-BTUWdc0E.js";import"./PdfViewer.module.css-la3JfWCD.js";import"./PdfViewerAnnotationLayer-CnkeU7oY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BeTqgZUJ.js";import"./PdfViewerOutlineSidebar-BJRAj6LJ.js";import"./PdfViewerSidebarHeader-CsGLxMcl.js";import"./useBaseUiId-fhaoQTAN.js";import"./useControlled-CbgIzrGw.js";import"./CompositeRoot-k2GGQPpC.js";import"./CompositeItem-BcPnpCMU.js";import"./ToolbarRootContext-mcOzEY4U.js";import"./composite-C3M2PNVB.js";import"./svgIconContainer-CsgxmVJX.js";import"./PdfViewerSearchBar-6k6nb0vE.js";import"./chevron-up-DKEb-288.js";import"./chevron-down-2fbTO193.js";import"./cross-Cx7FqWeo.js";import"./PdfViewerSidebar-RK55jQ_W.js";import"./index-BGp5-ojG.js";import"./index-uZz_nwe5.js";import"./index-BuLkE7J9.js";import"./PdfViewerToolbar-Dbpv0TFB.js";import"./Button-TO_HdB2E.js";import"./chevron-right-BKky3_hB.js";import"./Input-D1Ff4O9g.js";import"./search-DzRn76hI.js";import"./spin-BzsyCan6.js";import"./error-DQZv8iv4.js";import"./withOsdkMetrics-D-yhAWwr.js";import"./makeExternalStore-UYlpadtJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
