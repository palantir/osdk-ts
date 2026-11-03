import{j as r,M as s}from"./iframe-CH27AqHZ.js";import{P as p}from"./pdf-viewer-CTTVTdID.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BqHpxYjb.js";import"./preload-helper-DGi0xS-h.js";import"./PdfViewer-Db2zsV4g.js";import"./index-D1s_GF0g.js";import"./BasePdfViewer-TGoo8eG9.js";import"./BasePdfViewer.module.css-B_FfuFo8.js";import"./PdfViewerAnnotationLayer-BA6jA_-4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CmcTHc6u.js";import"./PdfViewerOutlineSidebar-BgmxD4Nr.js";import"./PdfViewerSidebarHeader-Cf88-Y7i.js";import"./useBaseUiId-Bqw5UKiE.js";import"./useControlled-bZT9hVeg.js";import"./CompositeRoot-Cft2Zrfg.js";import"./CompositeItem-Bp-0qryG.js";import"./ToolbarRootContext-CS86aP8Z.js";import"./composite-C0QdjDW_.js";import"./svgIconContainer-CAAPLquq.js";import"./PdfViewerSearchBar-BGtPHyyx.js";import"./chevron-up-CCZRyy15.js";import"./chevron-down-BknLO_BB.js";import"./cross-wK4dNyGg.js";import"./PdfViewerSidebar-ByuotTDn.js";import"./index-CyGPth6m.js";import"./index-w-QWzjNw.js";import"./index-idKZoric.js";import"./PdfViewerToolbar-KNVK6KA7.js";import"./Button-C_aQELrm.js";import"./chevron-right-DeCrxd-8.js";import"./Input-BZHUVJPq.js";import"./search-BvrU7tK_.js";import"./spin-C4NRp_Qr.js";import"./error-ADuRb4lm.js";import"./withOsdkMetrics-w7ir5H-Z.js";import"./makeExternalStore-D2OeNChh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
