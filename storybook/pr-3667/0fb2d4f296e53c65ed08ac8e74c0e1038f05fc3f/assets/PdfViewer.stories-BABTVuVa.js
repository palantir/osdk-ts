import{j as r,M as s}from"./iframe-Bje1PeXU.js";import{P as p}from"./pdf-viewer-DTsWOWNA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BMDuoRyC.js";import"./preload-helper-C9cEDirq.js";import"./PdfRenderer-Ci8GKqO_.js";import"./index-BaO-uBYL.js";import"./PdfViewer-CQkp444U.js";import"./PdfViewer.module.css-C25B3JTn.js";import"./PdfViewerAnnotationLayer-MqZ4V8_9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-MU7rwYqD.js";import"./PdfViewerOutlineSidebar-DUVfy6fa.js";import"./PdfViewerSidebarHeader-BMGuFEbE.js";import"./useBaseUiId-DHobwu9M.js";import"./useControlled-CNTUQqmb.js";import"./CompositeRoot-BrvNvxWt.js";import"./CompositeItem-CbDPgCh-.js";import"./ToolbarRootContext-BzphdH9N.js";import"./composite-Dezx9PFo.js";import"./svgIconContainer-2VGySw6h.js";import"./PdfViewerSearchBar-DZSIsyPS.js";import"./chevron-up-CcPV8gYE.js";import"./chevron-down-D2rppxKJ.js";import"./cross-TzUlRH64.js";import"./PdfViewerSidebar-BbdfKRhB.js";import"./index-DYEDQ1mz.js";import"./index-BX-js2Qc.js";import"./index-DKJRCQ3B.js";import"./PdfViewerToolbar-BzvH3vdu.js";import"./Button-B_mhpdsw.js";import"./chevron-right-Dc5ogotT.js";import"./Input-DB2Y3-TH.js";import"./search-Qxl1jFm7.js";import"./spin-DYlDswgn.js";import"./error-D0d9BVEp.js";import"./withOsdkMetrics-KW-nKQQF.js";import"./makeExternalStore-BQG5_Y3O.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
