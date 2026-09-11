import{j as r,M as s}from"./iframe-jMwYipi7.js";import{P as p}from"./pdf-viewer-QdBeOffs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C8E1PTN1.js";import"./preload-helper-DuATZxWQ.js";import"./PdfViewer-Yefum8ML.js";import"./index-Dz_M8fMm.js";import"./BasePdfViewer-NJIyerrk.js";import"./BasePdfViewer.module.css-C5zP3A8r.js";import"./PdfViewerAnnotationLayer-BNivZcU7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DAVCRoOb.js";import"./PdfViewerOutlineSidebar-CgI_6M4o.js";import"./PdfViewerSidebarHeader-BTktXisq.js";import"./useBaseUiId-CowvthfG.js";import"./useControlled-CkNav0ZD.js";import"./CompositeRoot-D8EJH4jI.js";import"./CompositeItem-BFcshnAb.js";import"./ToolbarRootContext-CyHNucoq.js";import"./composite-CY5glQip.js";import"./svgIconContainer-C67djf6q.js";import"./PdfViewerSearchBar-C1I9IWrC.js";import"./chevron-up-CGto-75e.js";import"./chevron-down-DoTJVfbo.js";import"./cross-D4s078tN.js";import"./PdfViewerSidebar-CKjzWlxC.js";import"./index-CLIDYXaA.js";import"./index-_q0G2ZtV.js";import"./index-DEfzi2BY.js";import"./PdfViewerToolbar-CEtgVkKY.js";import"./Button-CQ-F38oG.js";import"./chevron-right-BPVe899G.js";import"./Input-yW4xW1y2.js";import"./search-CZYRjLGu.js";import"./spin-DHgVxYBu.js";import"./error-D1FCJ2D3.js";import"./withOsdkMetrics-CY_PsP6V.js";import"./makeExternalStore-DpRr9t8b.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
