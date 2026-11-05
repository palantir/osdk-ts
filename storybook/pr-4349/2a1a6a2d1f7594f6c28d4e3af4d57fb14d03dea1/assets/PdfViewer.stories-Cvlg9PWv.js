import{j as r,M as s}from"./iframe-_xCtEPM4.js";import{P as p}from"./pdf-viewer-B_DYw8D8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DIyMuKQn.js";import"./preload-helper-BvkLr_T8.js";import"./PdfViewer-BtPoYb3O.js";import"./index-BBF2nMyv.js";import"./BasePdfViewer-C30SSQvz.js";import"./BasePdfViewer.module.css-jKsGzCiC.js";import"./PdfViewerAnnotationLayer-DD72hQGV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-wRcZOj7N.js";import"./PdfViewerOutlineSidebar-C8qLQXw3.js";import"./PdfViewerSidebarHeader-CsMhr71Q.js";import"./useBaseUiId-qq3Q_R-A.js";import"./useControlled-BqnjfWyt.js";import"./CompositeRoot-BPGEspbY.js";import"./CompositeItem-C0afETt6.js";import"./ToolbarRootContext-B_pkS0jH.js";import"./composite-RG9aVNdC.js";import"./svgIconContainer-5YMx1lyC.js";import"./PdfViewerSearchBar-C3X3vW-w.js";import"./chevron-up-UTj1N2qv.js";import"./chevron-down-Dgi1lUDW.js";import"./cross-YJjC_kdM.js";import"./PdfViewerSidebar-C426ESHK.js";import"./index-Dp_8qpaL.js";import"./index-Ch2OG5I0.js";import"./index-oRHr0Ey_.js";import"./PdfViewerToolbar-B1rA3c7G.js";import"./Button-B5hG9nBO.js";import"./chevron-right-CAYwGgUx.js";import"./Input-CbxbAG1i.js";import"./search-EgEnIgJy.js";import"./spin-DC1Sc4_Z.js";import"./error-CPk-KRIB.js";import"./withOsdkMetrics-Sswq0Wu_.js";import"./makeExternalStore-DP7fUFlc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
