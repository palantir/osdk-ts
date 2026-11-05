import{j as r,M as s}from"./iframe-CQFC4dx4.js";import{P as p}from"./pdf-viewer-Aezyck8U.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CJ3z7zYi.js";import"./preload-helper-JcY_IPoe.js";import"./PdfViewer-fLCAKkB3.js";import"./index-Cspojgcw.js";import"./BasePdfViewer-BrZS-yPf.js";import"./BasePdfViewer.module.css-BfPa0fAj.js";import"./PdfViewerAnnotationLayer-CNKKdFJ2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CYp_gnDn.js";import"./PdfViewerOutlineSidebar-zg8C_iU0.js";import"./PdfViewerSidebarHeader-CL_bit0a.js";import"./useBaseUiId-Dc6nK4KF.js";import"./useControlled-BVb8ax9g.js";import"./CompositeRoot-CRdRT-Ke.js";import"./CompositeItem-Don4IZ7P.js";import"./ToolbarRootContext-Bi5DI-Ar.js";import"./composite-7q0vYS_p.js";import"./svgIconContainer-BKBde2aY.js";import"./PdfViewerSearchBar-zH1Z-6Zn.js";import"./chevron-up-CyNAIY2e.js";import"./chevron-down-giF0vKbh.js";import"./cross-DOs9H1e3.js";import"./PdfViewerSidebar-B5rkfSue.js";import"./index-xDMkfL05.js";import"./index-P5yCg6P1.js";import"./index-C4XVD7Cr.js";import"./PdfViewerToolbar-DIv1BqdQ.js";import"./Button-CcSga4fz.js";import"./chevron-right-CVaok1W6.js";import"./Input-DXeuXn9d.js";import"./search-BU20I270.js";import"./spin-BRPDi935.js";import"./error-CkMA_OFf.js";import"./withOsdkMetrics-N-oYpdpA.js";import"./makeExternalStore-BfZd500_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
