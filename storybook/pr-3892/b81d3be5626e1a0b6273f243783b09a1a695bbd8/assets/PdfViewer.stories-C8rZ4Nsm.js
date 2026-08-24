import{j as r,M as s}from"./iframe-Cp-OZSnu.js";import{P as p}from"./pdf-viewer-CoIhdxsR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BIYjI538.js";import"./preload-helper-D0TF71Jy.js";import"./PdfViewer-DjVHxmUw.js";import"./index-CkF9JaVm.js";import"./BasePdfViewer-GINMTwKv.js";import"./BasePdfViewer.module.css-Lv2Jt4tz.js";import"./PdfViewerAnnotationLayer--7VQQ7qK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DPAxFsTb.js";import"./PdfViewerOutlineSidebar-BiYyiX8N.js";import"./PdfViewerSidebarHeader--mrgib_T.js";import"./useBaseUiId-IikVfOCL.js";import"./useControlled-IGbL1OgU.js";import"./CompositeRoot-CvncTLhG.js";import"./CompositeItem-7Cd8Z46E.js";import"./ToolbarRootContext-DfeiVioE.js";import"./composite-D2o-jxlM.js";import"./svgIconContainer-CxRnbkUR.js";import"./PdfViewerSearchBar-Bg4W9K1F.js";import"./chevron-up-C9iVtggh.js";import"./chevron-down-CqsW6wc2.js";import"./cross-B5c-VWRK.js";import"./PdfViewerSidebar-ygeLWEdj.js";import"./index-C46CdtdM.js";import"./index-JtC5fr_f.js";import"./index-XQPE0BXO.js";import"./PdfViewerToolbar-rvehLi-N.js";import"./Button-10bMmHGl.js";import"./chevron-right-Dp8A5TKT.js";import"./Input-BS6nNy2e.js";import"./search-BXFPe1aS.js";import"./spin-DBOrVHNb.js";import"./error-o2ED4R93.js";import"./withOsdkMetrics-DSHyV5CB.js";import"./makeExternalStore-D9rplt6T.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
