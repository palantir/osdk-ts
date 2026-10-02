import{j as r,M as s}from"./iframe-_L5VjRrt.js";import{P as p}from"./pdf-viewer-2YVZYk_A.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BrHwCFyI.js";import"./preload-helper-2Th1jMen.js";import"./PdfViewer-BPb0fhHL.js";import"./index-C21TqT6A.js";import"./BasePdfViewer-XDpxdxjZ.js";import"./BasePdfViewer.module.css-Dx1ugZfg.js";import"./PdfViewerAnnotationLayer-CR4JGyLB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BSrsdUoC.js";import"./PdfViewerOutlineSidebar-D-epESVC.js";import"./PdfViewerSidebarHeader-DlOCFi6d.js";import"./useBaseUiId-CLf0rG-Y.js";import"./useControlled-BOvXcwwU.js";import"./CompositeRoot-BV-YfMJK.js";import"./CompositeItem-CGUDnveH.js";import"./ToolbarRootContext-DgA7tKZV.js";import"./composite-BKH4xaR3.js";import"./svgIconContainer-BHdOMCzo.js";import"./PdfViewerSearchBar-BxkA6RMo.js";import"./chevron-up-c3mcCtyQ.js";import"./chevron-down-C1AwO93k.js";import"./cross-CeGchC5k.js";import"./PdfViewerSidebar-BwuoqNqE.js";import"./index-CgBjnwND.js";import"./index-C59OjD3A.js";import"./index-CAYM-DXb.js";import"./PdfViewerToolbar-BU1JUikj.js";import"./Button-3S271LoP.js";import"./chevron-right-BMA6bRWP.js";import"./Input-CBdQ7CLm.js";import"./search-R2xVmJoP.js";import"./spin-D_scN0sG.js";import"./error-CIgeHO6b.js";import"./withOsdkMetrics-Clckg0kN.js";import"./makeExternalStore-T_eRZyL4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
