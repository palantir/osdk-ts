import{j as r,M as s}from"./iframe-HPk8PS_c.js";import{P as p}from"./pdf-viewer-DflfHOXN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CTNaPvCU.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-B1He9GAa.js";import"./index-ycotQEUY.js";import"./BasePdfViewer-ByRI_gjE.js";import"./BasePdfViewer.module.css-BZVTDMik.js";import"./PdfViewerAnnotationLayer-B5hs-UrL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ei5H2QiO.js";import"./PdfViewerOutlineSidebar-wYwoa0HH.js";import"./PdfViewerSidebarHeader-CTbpc2JD.js";import"./useBaseUiId-DyhY13O7.js";import"./useControlled-Km1VPfUr.js";import"./CompositeRoot-XE0ypHkD.js";import"./CompositeItem-GZD7DweO.js";import"./ToolbarRootContext-Bc6ZO6TN.js";import"./composite-CDSdRi3O.js";import"./svgIconContainer-BMj1NZEz.js";import"./PdfViewerSearchBar-DOxnw-_k.js";import"./chevron-up-Cexr6nds.js";import"./chevron-down-bsQWt5c5.js";import"./cross-qvgLowaP.js";import"./PdfViewerSidebar-DPWC4BJH.js";import"./index-CJv58edI.js";import"./index-Bnjs_noj.js";import"./index-0ACB6LG3.js";import"./PdfViewerToolbar-CJnv7bL9.js";import"./Button-rjBOsBth.js";import"./chevron-right-BkDZB1lE.js";import"./Input-Bh9c4kB6.js";import"./search-x6xgpOK0.js";import"./spin-DEtH1-5o.js";import"./error-B-DQrxK7.js";import"./withOsdkMetrics-DPrVQQ1f.js";import"./makeExternalStore-BZC1NDUy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
