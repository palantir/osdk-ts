import{j as r,M as s}from"./iframe-DtBbG9ub.js";import{P as p}from"./pdf-viewer-BB7lQj6b.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-aMRYXi78.js";import"./preload-helper-CKqQHump.js";import"./PdfRenderer-y5vZHNYF.js";import"./index-BNVRawFZ.js";import"./PdfViewer-Dv8PV1mp.js";import"./PdfViewer.module.css-bw5fB6RS.js";import"./PdfViewerAnnotationLayer-BuTg33om.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dk14hygX.js";import"./PdfViewerOutlineSidebar-DNyHsrQo.js";import"./PdfViewerSidebarHeader-B0Tz0NlD.js";import"./useBaseUiId-tUXy-r9e.js";import"./useControlled-C7YYJ7SZ.js";import"./CompositeRoot-CD_nOKbR.js";import"./CompositeItem-BzT3Jsrd.js";import"./ToolbarRootContext-htCg31Ng.js";import"./composite-7sC3O7Er.js";import"./svgIconContainer-BSDh2cSh.js";import"./PdfViewerSearchBar-DPrYnqMT.js";import"./chevron-up-CeiMHCxa.js";import"./chevron-down-BtYcm6jh.js";import"./cross-DIyvJNHW.js";import"./PdfViewerSidebar-DLFAgMsg.js";import"./index-BIgVDJqH.js";import"./index-DvIS35-4.js";import"./index-BEnCWhpy.js";import"./PdfViewerToolbar-XrBGbLqr.js";import"./Button-Esowa-jc.js";import"./chevron-right-r8ONjOfR.js";import"./Input-CAYv7kt0.js";import"./search-Bsn7yrB3.js";import"./spin-BaPKR2Ad.js";import"./error-B45wk9AO.js";import"./withOsdkMetrics-AhCC2N-G.js";import"./makeExternalStore-DhJItYLX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
