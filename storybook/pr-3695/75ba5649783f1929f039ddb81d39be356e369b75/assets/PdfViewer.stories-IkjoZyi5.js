import{j as r,M as s}from"./iframe-C83e49Oj.js";import{P as p}from"./pdf-viewer-B_0hMVjm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DVKtdOqM.js";import"./preload-helper-CbqtAsjO.js";import"./PdfRenderer-D-vC7mVg.js";import"./index-DcnaT4jY.js";import"./PdfViewer-BUQYJ7lZ.js";import"./PdfViewer.module.css-BUeSqJm3.js";import"./PdfViewerAnnotationLayer-CF2ajMYT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ds-qri6f.js";import"./PdfViewerOutlineSidebar-lXUeMMqL.js";import"./PdfViewerSidebarHeader-DWwk8fMp.js";import"./useBaseUiId-B47GCAhn.js";import"./useControlled-BNqI90Zu.js";import"./CompositeRoot-CaN3FlRZ.js";import"./CompositeItem-DWf1m0lc.js";import"./ToolbarRootContext-BIbuViDJ.js";import"./composite-BqiJtIFT.js";import"./svgIconContainer-DH4bJu3m.js";import"./PdfViewerSearchBar-I0wiuKSZ.js";import"./chevron-up-SJrAThfC.js";import"./chevron-down-DA_u5D-b.js";import"./cross-Dsco1o_E.js";import"./PdfViewerSidebar-DjAQvrRC.js";import"./index-CGYOVVHz.js";import"./index-kls1y_WF.js";import"./index-DgHYRznF.js";import"./PdfViewerToolbar-Duc62Teb.js";import"./Button-DZMkI9DU.js";import"./chevron-right-PCc3lucZ.js";import"./Input-CY0ql7Nm.js";import"./search-CsYpQxdZ.js";import"./spin-DxYwabRE.js";import"./error-BqLzYqLe.js";import"./withOsdkMetrics-wjyANmnY.js";import"./makeExternalStore-Dv_sKBJg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
