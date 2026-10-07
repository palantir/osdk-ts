import{j as r,M as s}from"./iframe-BuDnfqKQ.js";import{P as p}from"./pdf-viewer-CHwBa0tc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-FtGaKkB4.js";import"./preload-helper-B6J6BeBc.js";import"./PdfViewer-BYfkjWX-.js";import"./index-B6xFqDwW.js";import"./BasePdfViewer-BNcyPOAn.js";import"./BasePdfViewer.module.css-C4ETDlyP.js";import"./PdfViewerAnnotationLayer-lEkNH_tW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-iUXAl2ja.js";import"./PdfViewerOutlineSidebar-Bu9ISqrf.js";import"./PdfViewerSidebarHeader-DMGbcqWB.js";import"./useBaseUiId-Cy8x85cF.js";import"./useControlled-BWRXH__P.js";import"./CompositeRoot-CooFzpS9.js";import"./CompositeItem-Dc19RcBz.js";import"./ToolbarRootContext-DTTMwqZv.js";import"./composite-DOI6fCuf.js";import"./svgIconContainer-DN1WNNEt.js";import"./PdfViewerSearchBar-BtKWE8-m.js";import"./chevron-up-ju3oQ9KM.js";import"./chevron-down-C4fOxkM5.js";import"./cross-FLwBoLKf.js";import"./PdfViewerSidebar-C0KL1S_a.js";import"./index-zf1BCIO_.js";import"./index-VpAGjtCA.js";import"./index-Bcup2US4.js";import"./PdfViewerToolbar-DkCFYN-A.js";import"./Button-Ckrw6oVp.js";import"./chevron-right-CS94RCPN.js";import"./Input-fZvrHimm.js";import"./search-CoDCGLUE.js";import"./spin-BiAFAsZe.js";import"./error-DtRlIBmm.js";import"./withOsdkMetrics-cl6CbOTk.js";import"./makeExternalStore-CDWi_CU5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
