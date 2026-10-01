import{j as r,M as s}from"./iframe-BTVQ2MDu.js";import{P as p}from"./pdf-viewer-BS210vEM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BaTGpqga.js";import"./preload-helper-V8IN1a25.js";import"./PdfViewer-aHSmkZqz.js";import"./index-De5UO2WD.js";import"./BasePdfViewer-CAadad9T.js";import"./BasePdfViewer.module.css-CWBPsLiQ.js";import"./PdfViewerAnnotationLayer-Dm3FFN61.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DvImdSHW.js";import"./PdfViewerOutlineSidebar-DVastFwB.js";import"./PdfViewerSidebarHeader-DS9Ws1w1.js";import"./useBaseUiId-ageCLcwt.js";import"./useControlled-BNBhFfAy.js";import"./CompositeRoot-mRv2Eqz3.js";import"./CompositeItem-BYdhC28O.js";import"./ToolbarRootContext-BKviL8sB.js";import"./composite-j0A6Y-jy.js";import"./svgIconContainer-Z92KrpXF.js";import"./PdfViewerSearchBar-C1HMHRyr.js";import"./chevron-up-BUeM2TE9.js";import"./chevron-down-B2iYughc.js";import"./cross-CiaqJ3Ct.js";import"./PdfViewerSidebar-BOMkerTs.js";import"./index-DHPYKUwx.js";import"./index-BQEu1zYD.js";import"./index-kvy3rFgR.js";import"./PdfViewerToolbar-Cxg14hlw.js";import"./Button-Ca-Rehkm.js";import"./chevron-right-C5XisiS3.js";import"./Input-BfcaF7JW.js";import"./search-DG5bPe3Q.js";import"./spin-CKiD61c3.js";import"./error-B4_XiTjG.js";import"./withOsdkMetrics-sKDJTdCS.js";import"./makeExternalStore-CteyryqD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
