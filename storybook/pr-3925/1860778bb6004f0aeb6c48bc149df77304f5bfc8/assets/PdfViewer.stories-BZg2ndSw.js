import{j as r,M as s}from"./iframe-CKQO8Vx8.js";import{P as p}from"./pdf-viewer-FXcEiMmC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DzR1FTVN.js";import"./preload-helper-CwEBdSMT.js";import"./PdfViewer-DCPtqHvZ.js";import"./index-CdmnUnhF.js";import"./BasePdfViewer-CTa6K6LU.js";import"./BasePdfViewer.module.css-CL9bTq-g.js";import"./PdfViewerAnnotationLayer-CPDjyMB4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-uilYqCue.js";import"./PdfViewerOutlineSidebar-C2dADIMx.js";import"./PdfViewerSidebarHeader-BuBqcUy1.js";import"./useBaseUiId-q6qw1H5x.js";import"./useControlled-BG6xoYyK.js";import"./CompositeRoot-BlXx2j_R.js";import"./CompositeItem-DNmbzFT9.js";import"./ToolbarRootContext-C-XgkwmF.js";import"./composite-DUJXG-6e.js";import"./svgIconContainer-8H3QdML_.js";import"./PdfViewerSearchBar-DWNCsD2e.js";import"./chevron-up-Ch1WKNmy.js";import"./chevron-down-Di9IPq2H.js";import"./cross-DO9NTRmS.js";import"./PdfViewerSidebar-6bkHD8Jr.js";import"./index-Bw61tY6z.js";import"./index-C6tRhyNC.js";import"./index-DyVj7mZ2.js";import"./PdfViewerToolbar-eh6mIR1v.js";import"./Button-C_uhqqdD.js";import"./chevron-right-BVMr4rER.js";import"./Input-DbZHyI8w.js";import"./search-DzGwW1te.js";import"./spin-BQgLLRwK.js";import"./error-BJLkldHu.js";import"./withOsdkMetrics-CV_1aUYl.js";import"./makeExternalStore-BYH0sOuo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
