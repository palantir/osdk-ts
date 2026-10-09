import{j as r,M as s}from"./iframe-Cw3LH66c.js";import{P as p}from"./pdf-viewer-DOac9ZIw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B-ynY98J.js";import"./preload-helper-0zDabIei.js";import"./PdfViewer-hc_hnoQK.js";import"./index-BEERWgVy.js";import"./BasePdfViewer-CMtf9og6.js";import"./BasePdfViewer.module.css-CXuZEjDM.js";import"./PdfViewerAnnotationLayer-BZac5sLH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-W7RF3olQ.js";import"./PdfViewerOutlineSidebar-CvVEFOpd.js";import"./PdfViewerSidebarHeader-D9d4OaOm.js";import"./useBaseUiId-BSwJaM6C.js";import"./useControlled-0OhiGPgb.js";import"./CompositeRoot-Df4xFFN1.js";import"./CompositeItem-C2idg_k-.js";import"./ToolbarRootContext-f4q0b_R5.js";import"./composite-DkWEa617.js";import"./svgIconContainer-By_Zx8bX.js";import"./PdfViewerSearchBar-CuqNfbq6.js";import"./chevron-up-B9HGNRu3.js";import"./chevron-down-DRmznTzQ.js";import"./cross-BxwRmAhN.js";import"./PdfViewerSidebar-DBbYnnuY.js";import"./index-DQ4AskLW.js";import"./index-Dvk9IgkK.js";import"./index-Di_GE7Jl.js";import"./PdfViewerToolbar-BxQ4c63Z.js";import"./Button-dLCYbHpS.js";import"./chevron-right-Dp0HuUfB.js";import"./Input-CtFwY591.js";import"./search-CZ_uh4ZV.js";import"./spin-30eDZTiR.js";import"./error-CmY3qZ0u.js";import"./withOsdkMetrics-D2csPQg7.js";import"./makeExternalStore-Di2REqsM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
