import{j as r,M as s}from"./iframe-X3f60bvr.js";import{P as p}from"./pdf-viewer-CDNjMnTb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CT58ISj6.js";import"./preload-helper-BM2xafaU.js";import"./PdfRenderer-DZJVh37z.js";import"./index-DRTRMMLL.js";import"./PdfViewer-DDw0Z7rW.js";import"./PdfViewer.module.css-CNg1DFJY.js";import"./PdfViewerAnnotationLayer-DdcpTbjU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CmFbRMJy.js";import"./PdfViewerOutlineSidebar-Cyk75GcI.js";import"./PdfViewerSidebarHeader-CJWlz1Yb.js";import"./useBaseUiId-BX0dL2u6.js";import"./useControlled-KSbcmYKr.js";import"./CompositeRoot-rxkiGU74.js";import"./CompositeItem-DLoJyw1H.js";import"./ToolbarRootContext-B0R5guIp.js";import"./composite-Cb4jmYR3.js";import"./svgIconContainer-DFK0Cv_M.js";import"./PdfViewerSearchBar-BbHJUU2y.js";import"./chevron-up-4THY_NVO.js";import"./chevron-down-DchIwrTX.js";import"./cross-DlsSWWII.js";import"./PdfViewerSidebar-DeuVFqkc.js";import"./index-CBMI0VRi.js";import"./index-Dr4t6YVH.js";import"./index-CojZOBk9.js";import"./PdfViewerToolbar-BYEzmyW6.js";import"./Button-Bj-PVnUC.js";import"./chevron-right-hjrJ8HNq.js";import"./Input-Cb8HwdrG.js";import"./search-LkiYhKHU.js";import"./spin-Bw0CyxcS.js";import"./error-Cb5UoREL.js";import"./withOsdkMetrics-DWHUQHjv.js";import"./makeExternalStore-DYoapTb2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
