import{j as r,M as s}from"./iframe-D0tV0cI9.js";import{P as p}from"./pdf-viewer-vbE1zuWA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CNTR09R-.js";import"./preload-helper-BMejyDSI.js";import"./PdfViewer-RCY8f6yJ.js";import"./index--X-dIIbK.js";import"./BasePdfViewer-BgZNeeuo.js";import"./BasePdfViewer.module.css-BJ0pgmPn.js";import"./PdfViewerAnnotationLayer-DUnCPw6l.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cs9EdiKF.js";import"./PdfViewerOutlineSidebar-BZuHsg7n.js";import"./PdfViewerSidebarHeader-CwSM3hgW.js";import"./useBaseUiId-DOX0bj2Y.js";import"./useControlled-LJkicshM.js";import"./CompositeRoot-Tol4TLHR.js";import"./CompositeItem-Ch1OySWF.js";import"./ToolbarRootContext-BrObQQEc.js";import"./composite-eLTYJf7x.js";import"./svgIconContainer-D4vQ8nMV.js";import"./PdfViewerSearchBar-D2JBGGT6.js";import"./chevron-up-C-76tjxf.js";import"./chevron-down-BYHSUQw3.js";import"./cross-D1A4Ur2n.js";import"./PdfViewerSidebar-r9z-fqCQ.js";import"./index-DUZjOP9_.js";import"./index-PxTuLgQ7.js";import"./index--qRovy9Z.js";import"./PdfViewerToolbar-DUikd8Mx.js";import"./Button-DgOszdIa.js";import"./chevron-right-2D2BiRGZ.js";import"./Input-COsc6IX5.js";import"./search-Cnl0jIoS.js";import"./spin-BYzuX0Ei.js";import"./error-BLp0q_TC.js";import"./withOsdkMetrics-C1pmSZXh.js";import"./makeExternalStore-CczQoVJf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
