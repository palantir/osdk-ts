import{j as r,M as s}from"./iframe-S84xAba9.js";import{P as p}from"./pdf-viewer-DyoQbPA7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BZrIdzNL.js";import"./preload-helper-DJNCezcd.js";import"./PdfViewer-Ppibz77b.js";import"./index-8j0T478k.js";import"./BasePdfViewer-BKZRsMpl.js";import"./BasePdfViewer.module.css-C6XMHzTl.js";import"./PdfViewerAnnotationLayer-D73Iw9o8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DPaFdhNb.js";import"./PdfViewerOutlineSidebar-ClRIKPMU.js";import"./PdfViewerSidebarHeader-Ba3Lv1EW.js";import"./useBaseUiId-YpbERV6F.js";import"./useControlled-BfYdfQhZ.js";import"./CompositeRoot-CcrZrJVC.js";import"./CompositeItem-D1oKuNmK.js";import"./ToolbarRootContext-Dx--qbfa.js";import"./composite-BPZV-Yhr.js";import"./svgIconContainer-BlYa3pTV.js";import"./PdfViewerSearchBar-D1iiLBb8.js";import"./chevron-up-CJ-ExJ1Z.js";import"./chevron-down-B21hEOy9.js";import"./cross-D931JdRi.js";import"./PdfViewerSidebar-BxiP9Je-.js";import"./index-7bPdWCKR.js";import"./index-DUM3Z7TI.js";import"./index-DafAAkcf.js";import"./PdfViewerToolbar-RMKkz1Sc.js";import"./Button-BASBXCLw.js";import"./chevron-right-BuLU3d0F.js";import"./Input-Cif3XMX5.js";import"./search-DhFsI6Pf.js";import"./spin-DsTjLR95.js";import"./error-CTVY3lwb.js";import"./withOsdkMetrics-3ZtUgCqV.js";import"./makeExternalStore-CaEUyt0v.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
