import{j as r,M as s}from"./iframe-C6LBpvuI.js";import{P as p}from"./pdf-viewer-BBhgqtsa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CyTCK4mz.js";import"./preload-helper-D5MgSTAG.js";import"./PdfViewer-i82alUsx.js";import"./index-NiT3c2LR.js";import"./BasePdfViewer-DXsM3fV0.js";import"./BasePdfViewer.module.css-C4tI7VNN.js";import"./PdfViewerAnnotationLayer-Cx2rNQiq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DG_8ZpZ2.js";import"./PdfViewerOutlineSidebar-B4khtXyR.js";import"./PdfViewerSidebarHeader-S0Cm9kru.js";import"./useBaseUiId-D9K-3OOp.js";import"./useControlled-35bEpDbg.js";import"./CompositeRoot-Becs0LHq.js";import"./CompositeItem-Cmb1U36q.js";import"./ToolbarRootContext-DJRyp8mD.js";import"./composite-CIL5RRbh.js";import"./svgIconContainer-Bqb8q1fz.js";import"./PdfViewerSearchBar-C927SICJ.js";import"./chevron-up-sJlGUkQk.js";import"./chevron-down-Bw9bT84C.js";import"./cross-_DiJsQ5N.js";import"./PdfViewerSidebar-CUp2n0MV.js";import"./index-vMfLr8EK.js";import"./index-CPv3k7C8.js";import"./index-DwcGPrXk.js";import"./PdfViewerToolbar-BpAnALQO.js";import"./Button-DcSoFPNd.js";import"./chevron-right-DhOxVU2U.js";import"./Input-CYIsQ-Xl.js";import"./search-CkHqN668.js";import"./spin-UkXqLGEJ.js";import"./error-CGV30LyY.js";import"./withOsdkMetrics-Dgn4gd8E.js";import"./makeExternalStore-qoO0AqK1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
