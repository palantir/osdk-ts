import{j as r,M as s}from"./iframe-B1cjW9lN.js";import{P as p}from"./pdf-viewer-ebYyj7dE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DWxipxsI.js";import"./preload-helper-esge5jOw.js";import"./PdfViewer-vBOIx3t4.js";import"./index-DBKcAKBa.js";import"./BasePdfViewer-CqJ1oUjB.js";import"./BasePdfViewer.module.css-D8j6GUWV.js";import"./PdfViewerAnnotationLayer-K8w2dFvi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dl5G21Py.js";import"./PdfViewerOutlineSidebar-D660eWge.js";import"./PdfViewerSidebarHeader-BjoXotmA.js";import"./useBaseUiId-CtX_9P1W.js";import"./useControlled-DdMiAZ8X.js";import"./CompositeRoot-C1BaCtLB.js";import"./CompositeItem-CR9WkMFf.js";import"./ToolbarRootContext-CQYaUzuu.js";import"./composite-rAM9AtlZ.js";import"./svgIconContainer-z9g6oSzF.js";import"./PdfViewerSearchBar-CPkCw4ES.js";import"./chevron-up-D8Q_lFV8.js";import"./chevron-down-Qs9iMpX5.js";import"./cross-B-sNKi3J.js";import"./PdfViewerSidebar-CwkkkmoB.js";import"./index-B7TJ5Vg6.js";import"./index-CuHejiQW.js";import"./index-CalZYv_8.js";import"./PdfViewerToolbar-DYxCCcGM.js";import"./Button-Dy6NAp_j.js";import"./chevron-right-DpAEFy3I.js";import"./Input-DbrQZdXa.js";import"./search-050tV6oC.js";import"./spin-D2yhMrjA.js";import"./error-4QB3sX_8.js";import"./withOsdkMetrics-NF_KYzrC.js";import"./makeExternalStore-CvmwDfYu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
