import{j as r,M as s}from"./iframe-CVDpL90O.js";import{P as p}from"./pdf-viewer-BBrBKLUb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-AFkUABbT.js";import"./preload-helper-CIPjJPKp.js";import"./PdfViewer-DHeXtJZx.js";import"./index-BF0HWBEB.js";import"./BasePdfViewer-DAfbyu0_.js";import"./BasePdfViewer.module.css-3pkpkApF.js";import"./PdfViewerAnnotationLayer-DcHFVmEP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cunb7hJj.js";import"./PdfViewerOutlineSidebar-wKdlURXs.js";import"./PdfViewerSidebarHeader-zCymlfU2.js";import"./useBaseUiId-BCC_HzQ6.js";import"./useControlled-DZoipFBP.js";import"./CompositeRoot-DymiOgXh.js";import"./CompositeItem-Cv4L9909.js";import"./ToolbarRootContext-ibPgpNdZ.js";import"./composite-lCZw7hw2.js";import"./svgIconContainer-XCs7jcMS.js";import"./PdfViewerSearchBar-BhUvOMcB.js";import"./chevron-up-BUJfcqle.js";import"./chevron-down-h1ntsUGU.js";import"./cross-vYjtUHUt.js";import"./PdfViewerSidebar-Ca3GyIPA.js";import"./index-DY-TprZd.js";import"./index-Ds1Aymw0.js";import"./index-CULs0xL-.js";import"./PdfViewerToolbar-B9HRnjAm.js";import"./Button-BH6PW13i.js";import"./chevron-right-Cu2ehvjB.js";import"./Input-j-X_dej_.js";import"./search-DRW19Kos.js";import"./spin-BwduRFo6.js";import"./error-DF2Qy4tB.js";import"./withOsdkMetrics-Bl2KNckA.js";import"./makeExternalStore-fRsFu06A.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
