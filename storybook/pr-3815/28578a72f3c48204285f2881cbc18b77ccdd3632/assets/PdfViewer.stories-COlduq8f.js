import{j as r,M as s}from"./iframe-adBEvIDP.js";import{P as p}from"./pdf-viewer-Cz94EHaY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CTomCRus.js";import"./preload-helper-BhBV5VvG.js";import"./PdfRenderer-BNi3TNKf.js";import"./index-BDD5zJf7.js";import"./PdfViewer-BGVfp4dQ.js";import"./PdfViewer.module.css-DxxjCnQH.js";import"./PdfViewerAnnotationLayer-B2ZK41TY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BLzS3o6e.js";import"./PdfViewerOutlineSidebar-Bsib17UX.js";import"./PdfViewerSidebarHeader-DOjff9Af.js";import"./useBaseUiId-DyFDvApR.js";import"./useControlled-CVmz4Ros.js";import"./CompositeRoot-Buuof1lo.js";import"./CompositeItem-CP4Xva_b.js";import"./ToolbarRootContext-MfBf8pTt.js";import"./composite-JUgX4sxF.js";import"./svgIconContainer-Bl3q8D9_.js";import"./PdfViewerSearchBar-Cz5IJey6.js";import"./chevron-up-8qqcIBIm.js";import"./chevron-down-DGGvLAME.js";import"./cross-Bif6nOGI.js";import"./PdfViewerSidebar-CFFMnRKb.js";import"./index-0Syumzr1.js";import"./index-DMEf-8YF.js";import"./index-OkLbN1Mo.js";import"./PdfViewerToolbar-C9McdFUH.js";import"./Button-DV46QcLx.js";import"./chevron-right-Bc7XQ4Bq.js";import"./Input-BDn5fHA0.js";import"./search-kHOlebpK.js";import"./spin-BrWg4Hb5.js";import"./error-Bi_YGwJE.js";import"./withOsdkMetrics-0n2sREvo.js";import"./makeExternalStore-0SxKyWnk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
