import{j as r,M as s}from"./iframe-B2ls_m6L.js";import{P as p}from"./pdf-viewer-Q5Z1UEtx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-AByCK2f5.js";import"./preload-helper-DP2nAHeT.js";import"./PdfViewer-D7rJdfRn.js";import"./index-DcpRv5Au.js";import"./BasePdfViewer-CR-CpX3B.js";import"./BasePdfViewer.module.css-07r7ZSUx.js";import"./PdfViewerAnnotationLayer-C8GwF1cU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVm0QrR9.js";import"./PdfViewerOutlineSidebar-DAo3sWNw.js";import"./PdfViewerSidebarHeader-xE2sWCVq.js";import"./useBaseUiId-D1As3N2D.js";import"./useControlled-DyDb9EZF.js";import"./CompositeRoot-DvA7DpLL.js";import"./CompositeItem-uAkHZ6IU.js";import"./ToolbarRootContext-BCVvVfQ9.js";import"./composite-nADOaRwJ.js";import"./svgIconContainer-Dtr7_c7L.js";import"./PdfViewerSearchBar-CeSzsiLd.js";import"./chevron-up--8rPvZQh.js";import"./chevron-down-CD5bKFpW.js";import"./cross-DiYUblgV.js";import"./PdfViewerSidebar-DQwI2DaU.js";import"./index-C3iibYgA.js";import"./index-HgFM_z-w.js";import"./index-BKdY56eR.js";import"./PdfViewerToolbar-D3yL8tnp.js";import"./Button-DJwARfG7.js";import"./chevron-right-B_RWIPz9.js";import"./Input-Cxa2FMNZ.js";import"./search-C0yxcI0O.js";import"./spin-dtCSOe7L.js";import"./error-xfz1itQC.js";import"./withOsdkMetrics-6BgTImPT.js";import"./makeExternalStore-Dex4IqlO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
