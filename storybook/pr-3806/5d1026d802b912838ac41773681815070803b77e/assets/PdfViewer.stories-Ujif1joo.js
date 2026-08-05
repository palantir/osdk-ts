import{j as r,M as s}from"./iframe-DrKqnq_q.js";import{P as p}from"./pdf-viewer-CnlZ0v2U.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-SLpkKwcM.js";import"./preload-helper-qHDf4bMQ.js";import"./PdfRenderer-CK1nD3Ih.js";import"./index-oqhI0w-j.js";import"./PdfViewer-BUU4W7xU.js";import"./PdfViewer.module.css-CqCNSSe_.js";import"./PdfViewerAnnotationLayer-C8AbjBic.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-mMcH5D5J.js";import"./PdfViewerOutlineSidebar-BUqRvB5I.js";import"./PdfViewerSidebarHeader-Y1VYdxq-.js";import"./useBaseUiId-BUFR3R_E.js";import"./useControlled-CzpQezbz.js";import"./CompositeRoot-BCKtmBcl.js";import"./CompositeItem-D1W5a8R6.js";import"./ToolbarRootContext-CVGyCRId.js";import"./composite-T0CUtM4R.js";import"./svgIconContainer-2L2lvnX_.js";import"./PdfViewerSearchBar-I5i4J-60.js";import"./chevron-up-DywdpIu9.js";import"./chevron-down-BpeVjwjl.js";import"./cross-BpfGUZC-.js";import"./PdfViewerSidebar-Cc8MWxqb.js";import"./index-BP4U2YmN.js";import"./index-3em6fiz2.js";import"./index-DUKrIkwM.js";import"./PdfViewerToolbar-Ba04XHLP.js";import"./Button-CxnSYTOO.js";import"./chevron-right-CmngUTHY.js";import"./Input-C3Gx_MN3.js";import"./search-BpFzV3Uw.js";import"./spin-ClykwH7O.js";import"./error-ByTGymY6.js";import"./withOsdkMetrics-CCERPSNj.js";import"./makeExternalStore-BwpiJv42.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
