import{j as r,M as s}from"./iframe-CxT5Jan_.js";import{P as p}from"./pdf-viewer-DwE3vQ2g.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B9l7trjy.js";import"./preload-helper-B2aJWYzQ.js";import"./PdfViewer-D5BS6iiq.js";import"./index-Dtz5PgLF.js";import"./BasePdfViewer-H3dKPKg5.js";import"./BasePdfViewer.module.css-C6NxNxSg.js";import"./PdfViewerAnnotationLayer-C23DsZvM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-fl5djkLG.js";import"./PdfViewerOutlineSidebar-DdZyO5Ye.js";import"./PdfViewerSidebarHeader-BLbw1WAl.js";import"./useBaseUiId-B-OQdXnZ.js";import"./useControlled-HfGVJvVO.js";import"./CompositeRoot-C4Oy7lR0.js";import"./CompositeItem-DLM-dgwp.js";import"./ToolbarRootContext-BXaU4Z9h.js";import"./composite-DGmZ6kEt.js";import"./svgIconContainer-hCqCvGhu.js";import"./PdfViewerSearchBar-CuLWfLmZ.js";import"./chevron-up-DSPUQjSQ.js";import"./chevron-down-CJ808Qtk.js";import"./cross-CN6xf_dQ.js";import"./PdfViewerSidebar-BriWoeWK.js";import"./index-qScKd8ht.js";import"./index-DMUTvrAf.js";import"./index-odz-bzs8.js";import"./PdfViewerToolbar-CO1PrEBn.js";import"./Button-g3dA2T-X.js";import"./chevron-right-JiKnLmEK.js";import"./Input-uXNf_zLb.js";import"./search-CDYNfwYQ.js";import"./spin-BIEn0L18.js";import"./error-ABOYqx1m.js";import"./withOsdkMetrics-Dv_WEx2y.js";import"./makeExternalStore-z4BPzaiv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
