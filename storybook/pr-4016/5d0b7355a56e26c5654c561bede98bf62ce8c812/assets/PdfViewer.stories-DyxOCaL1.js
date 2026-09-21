import{j as r,M as s}from"./iframe-8LpzfSDn.js";import{P as p}from"./pdf-viewer-BhypC6KG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-COrvl_wc.js";import"./preload-helper-DtRM003F.js";import"./PdfViewer-gboNmuT0.js";import"./index-BUf0-n6f.js";import"./BasePdfViewer-DF4bZbWG.js";import"./BasePdfViewer.module.css-WNhcSCBc.js";import"./PdfViewerAnnotationLayer-EqH7TOYh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CRtx2LMv.js";import"./PdfViewerOutlineSidebar-84dIv41h.js";import"./PdfViewerSidebarHeader-yxIZkR_Z.js";import"./useBaseUiId-4wN8rdaw.js";import"./useControlled-CoRLjGHB.js";import"./CompositeRoot-BrfRlm5J.js";import"./CompositeItem-CnGxkne-.js";import"./ToolbarRootContext-40dyuA6p.js";import"./composite-2A5pk4b0.js";import"./svgIconContainer-BKZgIvjb.js";import"./PdfViewerSearchBar-YPdsvGoY.js";import"./chevron-up-ViIGz9oL.js";import"./chevron-down-DsREyE6f.js";import"./cross-CCb0fI9c.js";import"./PdfViewerSidebar-3l-zgF6e.js";import"./index-BPBF2E68.js";import"./index-RVyoUJfW.js";import"./index-BjrAvEhr.js";import"./PdfViewerToolbar-DxdaHq0d.js";import"./Button-BApq-zP_.js";import"./chevron-right-BoAyBjUS.js";import"./Input-Dv-by0TU.js";import"./search-zhneh-KF.js";import"./spin-DlKwq3B_.js";import"./error-B-6NO-zU.js";import"./withOsdkMetrics-eiA9ax16.js";import"./makeExternalStore-DEN8pBF9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
