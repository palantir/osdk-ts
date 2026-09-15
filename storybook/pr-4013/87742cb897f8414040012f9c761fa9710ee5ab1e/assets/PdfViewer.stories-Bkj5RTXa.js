import{j as r,M as s}from"./iframe-B-0GKdAh.js";import{P as p}from"./pdf-viewer-Dy8N4dv0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CwH2jE6N.js";import"./preload-helper-BxGs137T.js";import"./PdfViewer-T6m3kHTh.js";import"./index-CeTv2GEb.js";import"./BasePdfViewer-CezGGXzI.js";import"./BasePdfViewer.module.css-CwrgK3OO.js";import"./PdfViewerAnnotationLayer-f8QceEo5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwkE99mt.js";import"./PdfViewerOutlineSidebar-uWtNni83.js";import"./PdfViewerSidebarHeader-DMrQpjBy.js";import"./useBaseUiId-CuPeP6_V.js";import"./useControlled-CvXSRSaz.js";import"./CompositeRoot-CPS5Fm7u.js";import"./CompositeItem-nISr-y05.js";import"./ToolbarRootContext-CwO2Drzb.js";import"./composite-LajQ-4YU.js";import"./svgIconContainer-D680pERF.js";import"./PdfViewerSearchBar-Dop3ocah.js";import"./chevron-up-CPdcUnzM.js";import"./chevron-down-CJ1qMpgz.js";import"./cross-ysBsIoNl.js";import"./PdfViewerSidebar-Bgu9uQZc.js";import"./index-CChF4OqZ.js";import"./index-B28VTjrg.js";import"./index-Bvaqc28t.js";import"./PdfViewerToolbar-DTgNW7cO.js";import"./Button-DglVf80r.js";import"./chevron-right-On5EB7bc.js";import"./Input-m2Y-zZM0.js";import"./search-wHoqdl81.js";import"./spin-tne7Hu3q.js";import"./error-z9s112Ur.js";import"./withOsdkMetrics-DXKy8BiX.js";import"./makeExternalStore-CNR6geF1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
