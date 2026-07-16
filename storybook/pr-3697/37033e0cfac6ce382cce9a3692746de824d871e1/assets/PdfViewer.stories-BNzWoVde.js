import{j as r,M as s}from"./iframe-DvSsWOGD.js";import{P as p}from"./pdf-viewer-DPXAcnkL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DU9z8P2m.js";import"./preload-helper-Dw7LDbE4.js";import"./PdfRenderer-C607i9XR.js";import"./index-CRD1OKKx.js";import"./PdfViewer-DaR-9ZKl.js";import"./PdfViewer.module.css-CIQWb9fh.js";import"./PdfViewerAnnotationLayer-RcorPqOy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BHUFYJn2.js";import"./PdfViewerOutlineSidebar-DqoufDZt.js";import"./PdfViewerSidebarHeader-CV7WzZFD.js";import"./useBaseUiId-BXtbo1zV.js";import"./useControlled-B-YI8NeY.js";import"./CompositeRoot-BcVOsCmJ.js";import"./CompositeItem-CzWG2HR2.js";import"./ToolbarRootContext-B-CTABm3.js";import"./composite-BifI5eLe.js";import"./svgIconContainer-DYt0LuCy.js";import"./PdfViewerSearchBar-BoodCGth.js";import"./chevron-up-CAjQVEG9.js";import"./chevron-down-DiHtOlUa.js";import"./cross-9OtffuUq.js";import"./PdfViewerSidebar-DoCQRZK_.js";import"./index-DVyyh1QX.js";import"./index-DqQLR9pm.js";import"./index-NEDzvt0j.js";import"./PdfViewerToolbar-C564Ps-1.js";import"./Button-CDEfdqWP.js";import"./chevron-right-BO6hcYF9.js";import"./Input-Dn9RdB6-.js";import"./search-CBMSVh9L.js";import"./spin-DnsB6vIJ.js";import"./error-BS8X9T93.js";import"./withOsdkMetrics-CJlHKlRX.js";import"./makeExternalStore-D5i6UVaC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
