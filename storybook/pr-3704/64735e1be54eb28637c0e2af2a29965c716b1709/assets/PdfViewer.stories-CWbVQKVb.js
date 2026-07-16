import{j as r,M as s}from"./iframe-DU2asgHi.js";import{P as p}from"./pdf-viewer-aAUw8vWE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-6bwsmKZe.js";import"./preload-helper-DsqXxi_A.js";import"./PdfRenderer-SJzpox3R.js";import"./index-DFhnaaAr.js";import"./PdfViewer-DaIlcpbo.js";import"./PdfViewer.module.css-CthS6Zyl.js";import"./PdfViewerAnnotationLayer-_ZHaTn5H.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-e8RFtcHV.js";import"./PdfViewerOutlineSidebar-DeAToCjl.js";import"./PdfViewerSidebarHeader-DyJ82PF4.js";import"./useBaseUiId-BPYAUhe_.js";import"./useControlled-B_Wddgsf.js";import"./CompositeRoot-coC2uNOX.js";import"./CompositeItem-j9eZ3SSA.js";import"./ToolbarRootContext-DOV4hBBf.js";import"./composite-BO_QtSwT.js";import"./svgIconContainer-BKWt3i43.js";import"./PdfViewerSearchBar-DV-T7R63.js";import"./chevron-up-OFADc827.js";import"./chevron-down-BwlEqaIf.js";import"./cross-C6UrNyea.js";import"./PdfViewerSidebar-DHSX3fY0.js";import"./index-BIeU9ja5.js";import"./index-B61C-7go.js";import"./index-BBpWeKP6.js";import"./PdfViewerToolbar-DhzjWYIq.js";import"./Button-BoKqauNA.js";import"./chevron-right-oNKaEiN9.js";import"./Input-CFKQAvGp.js";import"./search-Bj-aA1ip.js";import"./spin-DtmWP6YT.js";import"./error-BLPZYUEH.js";import"./withOsdkMetrics-B4h2Vzuy.js";import"./makeExternalStore-C5_0kV4g.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
