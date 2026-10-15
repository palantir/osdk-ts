import{j as r,M as s}from"./iframe-wexfgXTt.js";import{P as p}from"./pdf-viewer-CPYCtlbO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BlhrdUgA.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-c-F36VRF.js";import"./index-5jQIelx0.js";import"./BasePdfViewer-CAm1OOLK.js";import"./BasePdfViewer.module.css-BPMLCBho.js";import"./PdfViewerAnnotationLayer-BiFxEt7U.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DJ17Vs4D.js";import"./PdfViewerOutlineSidebar-CkgcyEy2.js";import"./PdfViewerSidebarHeader-BYeIVd1O.js";import"./useBaseUiId-tTVgJH6a.js";import"./useControlled-Brxeqh9t.js";import"./CompositeRoot-goXp_MNG.js";import"./CompositeItem-vT5UWhUx.js";import"./ToolbarRootContext-Co9O2tJK.js";import"./composite-CdBx6VEN.js";import"./svgIconContainer-BE9D8hDG.js";import"./PdfViewerSearchBar-Ck67JqlG.js";import"./chevron-up-DOhJ2Bjs.js";import"./chevron-down-D1BLGLwp.js";import"./cross-FTqBbSE_.js";import"./PdfViewerSidebar-C1PmeGBh.js";import"./index-KggX9Fax.js";import"./index-BurzpHQL.js";import"./index-TxpmNhC2.js";import"./PdfViewerToolbar-BJj5ozoz.js";import"./Button-ChxS4llL.js";import"./chevron-right-BjW0I9Sc.js";import"./Input-CWdLE-mu.js";import"./search-XEMgs_jY.js";import"./spin-CitqDDjE.js";import"./error-B2QY0TvC.js";import"./withOsdkMetrics-C9edCeaC.js";import"./makeExternalStore-CYRdbRiy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
