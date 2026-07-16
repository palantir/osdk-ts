import{j as r,M as s}from"./iframe-C7RbzeK7.js";import{P as p}from"./pdf-viewer-D2-WI2ei.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-aVl_OMxm.js";import"./preload-helper-Dbj4vdNE.js";import"./PdfRenderer-DreuVmFT.js";import"./index-BK_nkc1Q.js";import"./PdfViewer-DZbm1HI4.js";import"./PdfViewer.module.css-pF7D9bt2.js";import"./PdfViewerAnnotationLayer-DrJNn3Ch.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D6bgBvy2.js";import"./PdfViewerOutlineSidebar-Dg8AOKfY.js";import"./PdfViewerSidebarHeader-DLmQOVRF.js";import"./useBaseUiId-Dvti5PKd.js";import"./useControlled-B79A5d4I.js";import"./CompositeRoot-DV8RrEW7.js";import"./CompositeItem-Byg1oty-.js";import"./ToolbarRootContext-Dms0sPDt.js";import"./composite-Cru-yikx.js";import"./svgIconContainer-D1OlHHBH.js";import"./PdfViewerSearchBar-_M7b8PCi.js";import"./chevron-up-DVHtTZCy.js";import"./chevron-down-DziG3VI9.js";import"./cross-TlwZaFD6.js";import"./PdfViewerSidebar-BnM2jO8a.js";import"./index-CYdIyBr8.js";import"./index-DafpuAji.js";import"./index-JI73MFaz.js";import"./PdfViewerToolbar-CJ69_k93.js";import"./Button-BXsqc2zz.js";import"./chevron-right-B_TDCKeL.js";import"./Input-Ctm1nILd.js";import"./search-BRSriY8I.js";import"./spin-GRJ5qxaY.js";import"./error-BnlTpVJP.js";import"./withOsdkMetrics-DEUiXF0c.js";import"./makeExternalStore-DOnwaLXN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
