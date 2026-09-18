import{j as r,M as s}from"./iframe-CCVL4Idp.js";import{P as p}from"./pdf-viewer-BXRmzXfp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cl9gSvfi.js";import"./preload-helper-Bfdvow4t.js";import"./PdfViewer-R5PlOZO1.js";import"./index-CqRYjhYr.js";import"./BasePdfViewer-CK_1FBhQ.js";import"./BasePdfViewer.module.css-UALosLiV.js";import"./PdfViewerAnnotationLayer-BSBv7-aO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CAx9a884.js";import"./PdfViewerOutlineSidebar-Bj8bjY2O.js";import"./PdfViewerSidebarHeader-fNy_o56l.js";import"./useBaseUiId-CNDNQCax.js";import"./useControlled-wuiuTdj_.js";import"./CompositeRoot-Ye2awaYZ.js";import"./CompositeItem-BVwr5vb2.js";import"./ToolbarRootContext-B9eib1V0.js";import"./composite-8_zPWC08.js";import"./svgIconContainer-DLYZviFk.js";import"./PdfViewerSearchBar-CfLgdJ_D.js";import"./chevron-up-BnRVROxV.js";import"./chevron-down-Ve2FZYZx.js";import"./cross-Bpaou5px.js";import"./PdfViewerSidebar-DcITvsCF.js";import"./index-BsgThsOD.js";import"./index-f-mV_Lh2.js";import"./index-CuMFdNkD.js";import"./PdfViewerToolbar-DqyRqWcH.js";import"./Button-DYSDt2wl.js";import"./chevron-right-rNNqcpt7.js";import"./Input-Cn7fB1Ph.js";import"./search-C00pZ1Ly.js";import"./spin-bGslpe9t.js";import"./error-DNOpGdYX.js";import"./withOsdkMetrics-BTy9Ees1.js";import"./makeExternalStore-Bx0vFg8y.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
