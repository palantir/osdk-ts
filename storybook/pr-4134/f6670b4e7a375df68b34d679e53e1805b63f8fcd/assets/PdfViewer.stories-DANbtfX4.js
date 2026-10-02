import{j as r,M as s}from"./iframe-Bjs833GT.js";import{P as p}from"./pdf-viewer-JG8cSCrf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CQYkfiAO.js";import"./preload-helper-BlVzQ63h.js";import"./PdfViewer-62ajvzSu.js";import"./index-ouW-uxFy.js";import"./BasePdfViewer-DSAPOtIr.js";import"./BasePdfViewer.module.css-4C7_ukWC.js";import"./PdfViewerAnnotationLayer-D2v9i9vJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CQTp23d7.js";import"./PdfViewerOutlineSidebar-kV7Zc7yx.js";import"./PdfViewerSidebarHeader-DUG9zgPd.js";import"./useBaseUiId-azhLq6E8.js";import"./useControlled-T6eskrKs.js";import"./CompositeRoot-EKerA01W.js";import"./CompositeItem-BOsNn8o6.js";import"./ToolbarRootContext-Gv05lgLU.js";import"./composite-DAp8GgCU.js";import"./svgIconContainer-B50GNB1l.js";import"./PdfViewerSearchBar-BnQIv4a0.js";import"./chevron-up-GvP0eTV7.js";import"./chevron-down-DSKsXuZi.js";import"./cross-odZi7HLt.js";import"./PdfViewerSidebar-RAMNpU57.js";import"./index-Ci1PABP6.js";import"./index-Cd4CH7YJ.js";import"./index-BIIN4O4s.js";import"./PdfViewerToolbar-C7490Xqv.js";import"./Button-Bi0CmGS9.js";import"./chevron-right-BUr6JS25.js";import"./Input-jDIiSSPg.js";import"./search-Bz3i30zB.js";import"./spin-DDOugBM0.js";import"./error-D5mhWRkN.js";import"./withOsdkMetrics-CZSiJ0-9.js";import"./makeExternalStore-DPdJKiEp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
