import{j as r,M as s}from"./iframe-BqwIL6HW.js";import{P as p}from"./pdf-viewer-BXbZFiyy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DoMBb2S9.js";import"./preload-helper-C2aBQR0i.js";import"./PdfViewer-Df9CcBco.js";import"./index-Cae-eAYf.js";import"./BasePdfViewer-2nO4qmWj.js";import"./BasePdfViewer.module.css-V6rf6N0r.js";import"./PdfViewerAnnotationLayer-DbtnQvvy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CpuOB0TJ.js";import"./PdfViewerOutlineSidebar-DZoVj_5f.js";import"./PdfViewerSidebarHeader-DDwSsQKz.js";import"./useBaseUiId-BrjtMHRo.js";import"./useControlled-Cn8olvRX.js";import"./CompositeRoot-DW3Jh7ms.js";import"./CompositeItem-CbgN92a5.js";import"./ToolbarRootContext-DUNP2109.js";import"./composite-ByfMjDoy.js";import"./svgIconContainer-COFarK7B.js";import"./PdfViewerSearchBar-CAYENqLV.js";import"./chevron-up-C3xvIoU0.js";import"./chevron-down-S5K5GEQg.js";import"./cross-BT2F3WaS.js";import"./PdfViewerSidebar-DiU5xARX.js";import"./index-BkbUCulf.js";import"./index-B_ClGvof.js";import"./index-D80ub2hK.js";import"./PdfViewerToolbar-B0SC70aP.js";import"./Button-DY9YVtH3.js";import"./chevron-right-D60UHwG2.js";import"./Input-5dPcAYXy.js";import"./search-B46OZpsx.js";import"./spin-CXjeLaEu.js";import"./error-rHIfSgQZ.js";import"./withOsdkMetrics-BCVV0LnC.js";import"./makeExternalStore-CWQKdOgP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
