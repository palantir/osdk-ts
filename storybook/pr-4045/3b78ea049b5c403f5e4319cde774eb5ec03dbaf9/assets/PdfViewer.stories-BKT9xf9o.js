import{j as r,M as s}from"./iframe-DGxn_FfA.js";import{P as p}from"./pdf-viewer-CE17LAo_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-fQKvK2WP.js";import"./preload-helper-K_1Peegk.js";import"./PdfViewer-B3Aqdbb4.js";import"./index-DRUA9-Xo.js";import"./BasePdfViewer-B39eNGPr.js";import"./BasePdfViewer.module.css-CQffT6Lg.js";import"./PdfViewerAnnotationLayer-DVTOHgHP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BaTVvorT.js";import"./PdfViewerOutlineSidebar-DZErc-6i.js";import"./PdfViewerSidebarHeader-ClIhI7WC.js";import"./useBaseUiId-CmBmMESo.js";import"./useControlled-SGdv5sh_.js";import"./CompositeRoot-BWWmQ5xh.js";import"./CompositeItem-CqRwnn1g.js";import"./ToolbarRootContext-BvwYmpzB.js";import"./composite-DsQ0vKV8.js";import"./svgIconContainer-BTT_iTBU.js";import"./PdfViewerSearchBar-DrwLCmLY.js";import"./chevron-up-CBn2RU_T.js";import"./chevron-down-kbFfOEdC.js";import"./cross-BbLFpAfM.js";import"./PdfViewerSidebar-CIjJAf1g.js";import"./index-BzK3-5ei.js";import"./index-Cn-ogudX.js";import"./index-C09U9z-b.js";import"./PdfViewerToolbar-CLZzd66k.js";import"./Button-dnprDbN8.js";import"./chevron-right-CWJifr7J.js";import"./Input-vHhrLUUa.js";import"./search-D7bJBEOM.js";import"./spin-CcZBLzZl.js";import"./error-GM-hvFd6.js";import"./withOsdkMetrics-S3mu6MhE.js";import"./makeExternalStore-Bpd5p4CZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
