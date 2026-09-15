import{j as r,M as s}from"./iframe-Eth4DscF.js";import{P as p}from"./pdf-viewer-CDeCruKJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DOnjSUJk.js";import"./preload-helper-D5DT8Gvv.js";import"./PdfViewer-DCkCXJWM.js";import"./index-CaJ3mqr2.js";import"./BasePdfViewer-Lm_FDKJP.js";import"./BasePdfViewer.module.css-CQOHisG3.js";import"./PdfViewerAnnotationLayer-C0XObFby.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BR1kOTt7.js";import"./PdfViewerOutlineSidebar-BBmkNpmb.js";import"./PdfViewerSidebarHeader-Dlj_Yr-S.js";import"./useBaseUiId-B7RIhr15.js";import"./useControlled-E-2hYUgD.js";import"./CompositeRoot-BrF6aMnq.js";import"./CompositeItem-DlxbA5eX.js";import"./ToolbarRootContext-DZvBkO8Q.js";import"./composite-qIMfmfrB.js";import"./svgIconContainer-CoGRC72I.js";import"./PdfViewerSearchBar-D4gYAyV8.js";import"./chevron-up-DDlbaCce.js";import"./chevron-down-CqqSfn04.js";import"./cross-BwB0DXiU.js";import"./PdfViewerSidebar-jv4K6tPu.js";import"./index-Daf7mDrl.js";import"./index-Cfo3ydBu.js";import"./index-B8aJ10lX.js";import"./PdfViewerToolbar-jVwCwIar.js";import"./Button-DxVY95w9.js";import"./chevron-right-ohOlmK8K.js";import"./Input-4EN0R4Wx.js";import"./search-CJHLYodH.js";import"./spin-CYVYczM0.js";import"./error-BXTM1REk.js";import"./withOsdkMetrics-HAEG8t0o.js";import"./makeExternalStore-2rYtWHIa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
