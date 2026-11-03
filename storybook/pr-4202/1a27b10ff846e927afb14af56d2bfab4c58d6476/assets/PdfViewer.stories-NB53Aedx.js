import{j as r,M as s}from"./iframe-DnOey83C.js";import{P as p}from"./pdf-viewer-D4uheQ9n.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-KC9_UmdK.js";import"./preload-helper-CEV440E1.js";import"./PdfViewer-jey-ra0o.js";import"./index-BIJ6fYvk.js";import"./BasePdfViewer-BJcOdaEY.js";import"./BasePdfViewer.module.css-CWmBuy83.js";import"./PdfViewerAnnotationLayer-BGoV6cYy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bl5upZc9.js";import"./PdfViewerOutlineSidebar-U6DPXIka.js";import"./PdfViewerSidebarHeader-DSIW4NPJ.js";import"./useBaseUiId-DYH1wxfF.js";import"./useControlled-CV8__y_P.js";import"./CompositeRoot-DF0ihy5G.js";import"./CompositeItem-3RLloUvB.js";import"./ToolbarRootContext-BHnzj6Hz.js";import"./composite-uM8HrJm1.js";import"./svgIconContainer-BX0rooyi.js";import"./PdfViewerSearchBar-g4g_o2Lj.js";import"./chevron-up-BAg6sNM2.js";import"./chevron-down-D_dDeZyS.js";import"./cross-B4zEOr1u.js";import"./PdfViewerSidebar-BIfUv10U.js";import"./index-CuODewOH.js";import"./index-gVUj6237.js";import"./index-DPxA-l2q.js";import"./PdfViewerToolbar-BN-P617k.js";import"./Button-CQihg8uV.js";import"./chevron-right-Cipvc6I6.js";import"./Input-C3af8CQ0.js";import"./search-CqHVyKly.js";import"./spin-C_ZWKIVK.js";import"./error-2pL8Nqzq.js";import"./withOsdkMetrics-DLqBodbC.js";import"./makeExternalStore-DlRIBm2d.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
