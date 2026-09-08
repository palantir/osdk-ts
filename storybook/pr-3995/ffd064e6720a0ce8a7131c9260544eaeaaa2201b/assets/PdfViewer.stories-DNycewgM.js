import{j as r,M as s}from"./iframe-CI9rENOr.js";import{P as p}from"./pdf-viewer-Xu75c1E5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DWIL1Vnk.js";import"./preload-helper-C65H2kRp.js";import"./PdfViewer-MRLxcotq.js";import"./index-BaGMdRan.js";import"./BasePdfViewer-Des6-1Ls.js";import"./BasePdfViewer.module.css-D_hex7wN.js";import"./PdfViewerAnnotationLayer-BqkhELYx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CymmJNcY.js";import"./PdfViewerOutlineSidebar-CdPyiO9z.js";import"./PdfViewerSidebarHeader-ChvDSW49.js";import"./useBaseUiId-sOlDVMc5.js";import"./useControlled-Cem_rLXf.js";import"./CompositeRoot-76lj2YVG.js";import"./CompositeItem-C1H6xqvv.js";import"./ToolbarRootContext-ZE_LxgeM.js";import"./composite-DmfEV9z-.js";import"./svgIconContainer-BcUTFG9y.js";import"./PdfViewerSearchBar-BvGpKRXX.js";import"./chevron-up-DS_sfcQU.js";import"./chevron-down-CcfRnQgG.js";import"./cross-DbBPFO7V.js";import"./PdfViewerSidebar-DJPVqfMk.js";import"./index-C7fkS1TJ.js";import"./index-DgVrz3v8.js";import"./index-2mtmcLVe.js";import"./PdfViewerToolbar-D77z8dLf.js";import"./Button-DhFEEkGk.js";import"./chevron-right-CvFxnphB.js";import"./Input-DVQjs6N1.js";import"./search-C3IyHFqm.js";import"./spin-Dxlg2vqM.js";import"./error-DGU8szJe.js";import"./withOsdkMetrics-DCX_NY4O.js";import"./makeExternalStore-BWkGDDsC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
