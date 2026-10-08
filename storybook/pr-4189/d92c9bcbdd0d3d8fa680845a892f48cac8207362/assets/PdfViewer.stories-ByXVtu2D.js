import{j as r,M as s}from"./iframe-BQiIs3LK.js";import{P as p}from"./pdf-viewer-C1xwAkFz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-oaw1QmD0.js";import"./preload-helper-Dw2jPLDK.js";import"./PdfViewer-BtJnq5XR.js";import"./index-z86HRZpN.js";import"./BasePdfViewer-HYlOKprF.js";import"./BasePdfViewer.module.css-CY2BDWGV.js";import"./PdfViewerAnnotationLayer-CrB7YZep.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CDrn3dsn.js";import"./PdfViewerOutlineSidebar-ZNUNQdmK.js";import"./PdfViewerSidebarHeader-Ca492BxS.js";import"./useBaseUiId-CLlcPdwB.js";import"./useControlled-CUE02bZW.js";import"./CompositeRoot-Cq1j3l5k.js";import"./CompositeItem-B87J6QYh.js";import"./ToolbarRootContext-BJUtIxN4.js";import"./composite-CMA2GnO4.js";import"./svgIconContainer-De2PI1mj.js";import"./PdfViewerSearchBar-BJzUSwnf.js";import"./chevron-up-C47dfhRB.js";import"./chevron-down-DNRgePmp.js";import"./cross-BBOEsUzu.js";import"./PdfViewerSidebar-BfIK21f9.js";import"./index-CGjn93Dw.js";import"./index-D61lICmk.js";import"./index-zzfNqQm7.js";import"./PdfViewerToolbar-CZZPNhxy.js";import"./Button-mut1rbst.js";import"./chevron-right-o_j8EtBn.js";import"./Input-CZoH0d1X.js";import"./search-CwMbCA9x.js";import"./spin-BwowDh4j.js";import"./error-Cm3qz5vo.js";import"./withOsdkMetrics-CvdPVaRc.js";import"./makeExternalStore-CZnmcOAZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
