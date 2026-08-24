import{j as r,M as s}from"./iframe-B3mx1e7o.js";import{P as p}from"./pdf-viewer-Cc_oGn4P.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B8EYSW6d.js";import"./preload-helper-CYshz4VR.js";import"./PdfViewer-WbHl5Qi2.js";import"./index-DGYUX92V.js";import"./BasePdfViewer-D7pC60vQ.js";import"./BasePdfViewer.module.css-DM4zWcZz.js";import"./PdfViewerAnnotationLayer-CZ4uULaX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-aVHrlRzc.js";import"./PdfViewerOutlineSidebar-Co0sPqpS.js";import"./PdfViewerSidebarHeader-CbnLlyj9.js";import"./useBaseUiId-jhGUmvK_.js";import"./useControlled-NC3pjcpV.js";import"./CompositeRoot-pAkhzTE_.js";import"./CompositeItem-BYviqqVz.js";import"./ToolbarRootContext-CWnM7U0U.js";import"./composite-B6Bzb-Bh.js";import"./svgIconContainer-FK5xU_Ww.js";import"./PdfViewerSearchBar-BoiHDap1.js";import"./chevron-up-CLwA8wmG.js";import"./chevron-down-CK-ezsYC.js";import"./cross-B9kPzvEC.js";import"./PdfViewerSidebar-5pQbAIid.js";import"./index-COi3FVZS.js";import"./index-DkggUZJz.js";import"./index-okIslH3U.js";import"./PdfViewerToolbar-D32vdiVM.js";import"./Button-BLh3Q0Cn.js";import"./chevron-right-BAGuXDH4.js";import"./Input-DMnsQZMf.js";import"./search-C3rgfEDS.js";import"./spin-4QCmI3xP.js";import"./error-BPT5rBPO.js";import"./withOsdkMetrics-ChTwZ6CU.js";import"./makeExternalStore-y1Nxnt7J.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
