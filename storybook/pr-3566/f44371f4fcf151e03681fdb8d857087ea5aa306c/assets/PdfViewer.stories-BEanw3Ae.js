import{j as r,M as s}from"./iframe-L0ai1cqu.js";import{P as p}from"./pdf-viewer-D04_Uncr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D7j0CxbR.js";import"./preload-helper-CJV0phFD.js";import"./PdfRenderer-DVRMRo5e.js";import"./index-5z3NwvK-.js";import"./PdfViewer-D0a3GK9k.js";import"./PdfViewer.module.css-BhmVHMQc.js";import"./PdfViewerAnnotationLayer-Bv-6qHFX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B17Z8zZV.js";import"./PdfViewerOutlineSidebar-BVgf5aUY.js";import"./PdfViewerSidebarHeader-DsNT04OB.js";import"./useBaseUiId-uRdy00NM.js";import"./useControlled-DoS-DO0S.js";import"./CompositeRoot-STKp3_iq.js";import"./CompositeItem-BzKbnmXa.js";import"./ToolbarRootContext-UBtY_0iz.js";import"./composite-CFzFTXZM.js";import"./svgIconContainer-BXNeDKfE.js";import"./PdfViewerSearchBar-Bl9txymg.js";import"./chevron-up-PbHP9_L4.js";import"./chevron-down-DVT4pCH4.js";import"./cross-BldMnKGZ.js";import"./PdfViewerSidebar-Cc_AqJ-I.js";import"./index-D9UbhpdK.js";import"./index-goLx_Fcw.js";import"./index-DEaRVqB1.js";import"./PdfViewerToolbar-BiU1L302.js";import"./Button-BSW9_-C2.js";import"./chevron-right-DGHTkUfU.js";import"./Input-BM22UCCJ.js";import"./search-BKS6fiop.js";import"./spin-D1wPbObE.js";import"./error-DF7L9Uny.js";import"./withOsdkMetrics-BNutyxS8.js";import"./makeExternalStore-DSYTVPLR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
