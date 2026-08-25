import{j as r,M as s}from"./iframe-SRRO8i30.js";import{P as p}from"./pdf-viewer-KHG0WcX0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D5tz4seU.js";import"./preload-helper-NPyRSWZ_.js";import"./PdfViewer-CC9n06DU.js";import"./index-DPLSpa0G.js";import"./BasePdfViewer-BHKJXr-h.js";import"./BasePdfViewer.module.css-puGY4jjc.js";import"./PdfViewerAnnotationLayer-RkyITr1p.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BKVBw9LZ.js";import"./PdfViewerOutlineSidebar-BFDcAt4N.js";import"./PdfViewerSidebarHeader-qYvreUG8.js";import"./useBaseUiId-8g00ulSi.js";import"./useControlled-ClmtJZxj.js";import"./CompositeRoot-Bz5eMCaE.js";import"./CompositeItem-C-s0XknV.js";import"./ToolbarRootContext-CAXfGmDY.js";import"./composite-B29UKLrp.js";import"./svgIconContainer-D3SUPO2O.js";import"./PdfViewerSearchBar-Dgnqg9mn.js";import"./chevron-up-4yOwzgPJ.js";import"./chevron-down-CG5p7RNd.js";import"./cross-jyQgcZ52.js";import"./PdfViewerSidebar-wFp0H6HC.js";import"./index-BAxp49FW.js";import"./index-C3IHmxZW.js";import"./index-CXi1lZFs.js";import"./PdfViewerToolbar-CBUbaW7r.js";import"./Button-DYyi-OV6.js";import"./chevron-right-DtORtH2X.js";import"./Input-1ZE3LQ1g.js";import"./search-Dwq18lHC.js";import"./spin-D8P2jobr.js";import"./error-Dr6abEJ3.js";import"./withOsdkMetrics-B4tyiiTI.js";import"./makeExternalStore-BSLUfzC5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
