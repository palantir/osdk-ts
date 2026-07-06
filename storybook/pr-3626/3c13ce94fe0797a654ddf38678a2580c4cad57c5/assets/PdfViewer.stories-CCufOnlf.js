import{j as r,M as s}from"./iframe-Uj1mp38m.js";import{P as p}from"./pdf-viewer-Cqjf67ag.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-v4bLtDl7.js";import"./preload-helper-BSqn5y6A.js";import"./PdfRenderer-Dx3p-Qak.js";import"./index-BHk0TP8m.js";import"./PdfViewer-BN8VsBHc.js";import"./PdfViewer.module.css-CseH-1MA.js";import"./PdfViewerAnnotationLayer-BMbx2_ig.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D_0H_LF3.js";import"./PdfViewerOutlineSidebar-DZ0cPrng.js";import"./PdfViewerSidebarHeader-BIY4gpey.js";import"./useBaseUiId-DCffWhkR.js";import"./useControlled-DmdXr2zx.js";import"./CompositeRoot-4rwFcJzC.js";import"./CompositeItem-ZKnOOnR6.js";import"./ToolbarRootContext-DbrB9g4j.js";import"./composite-BeZ0xZol.js";import"./svgIconContainer-DytKrQTL.js";import"./PdfViewerSearchBar-BiDbZ0Gr.js";import"./chevron-up-q_5TXMOh.js";import"./chevron-down-C4LEllXz.js";import"./cross-Dosy3bkn.js";import"./PdfViewerSidebar-CTvoTavi.js";import"./index-CSkmIX8m.js";import"./index-CItR5Z3S.js";import"./index-CbsB4Pba.js";import"./PdfViewerToolbar-aCQ9hLsI.js";import"./Button-Cprf-AF-.js";import"./chevron-right-BQysC-3U.js";import"./Input-BXvcZIHQ.js";import"./search-CM1fnS7G.js";import"./spin-BajIF2sZ.js";import"./error-Db-oMMpD.js";import"./withOsdkMetrics-Ap7Nh5n5.js";import"./makeExternalStore-CnbOevEA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
