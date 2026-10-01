import{j as r,M as s}from"./iframe-Cq4acRIY.js";import{P as p}from"./pdf-viewer-jkJ7l9NH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CXleXExB.js";import"./preload-helper-MAyNwQdY.js";import"./PdfViewer-CkW1TT3o.js";import"./index-6eoOxZ40.js";import"./BasePdfViewer-BYciTSO8.js";import"./BasePdfViewer.module.css-DxknjHCi.js";import"./PdfViewerAnnotationLayer-DTZ9ctN6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D5GpDiMl.js";import"./PdfViewerOutlineSidebar-DRGhiKx5.js";import"./PdfViewerSidebarHeader-Ce1dkGg3.js";import"./useBaseUiId-Bjm3kLfn.js";import"./useControlled-BhrnnSyx.js";import"./CompositeRoot-CgVN4Qb8.js";import"./CompositeItem-C3jCGG7J.js";import"./ToolbarRootContext-sZwDlHkO.js";import"./composite-Bn47_cTN.js";import"./svgIconContainer-BeKF9m8R.js";import"./PdfViewerSearchBar-Cw4T8m_S.js";import"./chevron-up-Cfl0vVH5.js";import"./chevron-down-CdL9km5b.js";import"./cross-DLXEiws_.js";import"./PdfViewerSidebar-BxwMhz6V.js";import"./index-BZTiDrQp.js";import"./index-DrCCi1us.js";import"./index-Dc9EpWSo.js";import"./PdfViewerToolbar-DAqBY0_o.js";import"./Button-w2RzDLnC.js";import"./chevron-right-BB0VlUC9.js";import"./Input-X1xzUJ9h.js";import"./search-CRBn2Ssp.js";import"./spin-Coy4YSra.js";import"./error-CIJkAMmO.js";import"./withOsdkMetrics-DB5TXya2.js";import"./makeExternalStore-dDHEgDbO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
