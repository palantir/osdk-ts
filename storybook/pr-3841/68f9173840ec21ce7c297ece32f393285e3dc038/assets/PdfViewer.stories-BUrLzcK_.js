import{j as r,M as s}from"./iframe-BFm_OPcJ.js";import{P as p}from"./pdf-viewer-DOEAe1x4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-LXMSelSN.js";import"./preload-helper-D-hWMdww.js";import"./PdfViewer-DRm7PXPP.js";import"./index-D6OldzKg.js";import"./BasePdfViewer-BNA2u51K.js";import"./BasePdfViewer.module.css-DVgmAezq.js";import"./PdfViewerAnnotationLayer-B8B6jNyT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-9CoL2chT.js";import"./PdfViewerOutlineSidebar-K8mBygRA.js";import"./PdfViewerSidebarHeader-DRU_0Nng.js";import"./useBaseUiId-Bdo2oKJK.js";import"./useControlled-DARaGIjq.js";import"./CompositeRoot-BY7YOAiK.js";import"./CompositeItem-Dv9cYPny.js";import"./ToolbarRootContext-B9b_DGi_.js";import"./composite-ClIBPGgl.js";import"./svgIconContainer-DFBJL56Q.js";import"./PdfViewerSearchBar-MUyNUcKc.js";import"./chevron-up-DNPbFXgy.js";import"./chevron-down-DYcOsbsP.js";import"./cross-DAfVMEHB.js";import"./PdfViewerSidebar-zQpGTCsX.js";import"./index-DlKJFgce.js";import"./index-D0NN2v4g.js";import"./index-D_unebpF.js";import"./PdfViewerToolbar-LapgzWmV.js";import"./Button-C_avm1ie.js";import"./chevron-right-2CBgSzGY.js";import"./Input-EUSvaA_S.js";import"./search-JGyx4lc7.js";import"./spin-DsUnjv8h.js";import"./error-BSGKVmqD.js";import"./withOsdkMetrics-1bFznkGS.js";import"./makeExternalStore-C1VxggOZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
