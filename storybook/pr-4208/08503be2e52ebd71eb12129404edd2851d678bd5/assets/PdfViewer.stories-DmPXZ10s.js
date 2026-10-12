import{j as r,M as s}from"./iframe-Bg9VnJHM.js";import{P as p}from"./pdf-viewer-DA6NMXgE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-_UWFVnKf.js";import"./preload-helper-m1Y4Llv5.js";import"./PdfViewer-B0pNq9o6.js";import"./index-CrJT52a7.js";import"./BasePdfViewer-DoHDc91B.js";import"./BasePdfViewer.module.css-XrlMr-72.js";import"./PdfViewerAnnotationLayer-rY01AEVe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C4OpayyA.js";import"./PdfViewerOutlineSidebar-BZ_esk8e.js";import"./PdfViewerSidebarHeader-BzLgsAWe.js";import"./useBaseUiId-CYMqm51-.js";import"./useControlled-CD1625aB.js";import"./CompositeRoot-D9oIoUrH.js";import"./CompositeItem-Doe6baU0.js";import"./ToolbarRootContext-CPQhz84F.js";import"./composite-CF0kxpXB.js";import"./svgIconContainer-B5yPj85L.js";import"./PdfViewerSearchBar-DTsmD5fR.js";import"./chevron-up-CUz40NU0.js";import"./chevron-down-DMUuxvLr.js";import"./cross-DEexlnSb.js";import"./PdfViewerSidebar-PO8HUDta.js";import"./index-LhIP_XZe.js";import"./index-B_gLEwxs.js";import"./index-CG5WNHLL.js";import"./PdfViewerToolbar-DT5Xl3m1.js";import"./Button-bC6hWzK9.js";import"./chevron-right-CLpuQWrp.js";import"./Input--DCIJnB7.js";import"./search-B3ctgFIA.js";import"./spin-BHTuKFy-.js";import"./error-Cbas_szk.js";import"./withOsdkMetrics-UJO3eOQJ.js";import"./makeExternalStore-CC5GqevO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
