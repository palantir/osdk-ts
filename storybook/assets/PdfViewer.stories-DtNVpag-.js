import{j as r,M as s}from"./iframe-BFbL1Gdy.js";import{P as p}from"./pdf-viewer-BNoTzSu_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-dJkIujUe.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-C3gPzsH9.js";import"./index-B-4LJO37.js";import"./BasePdfViewer-D05irbX-.js";import"./BasePdfViewer.module.css-CiwkXjJ7.js";import"./PdfViewerAnnotationLayer-FAHQxotE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D48-0q99.js";import"./PdfViewerOutlineSidebar-62Mk8_2H.js";import"./PdfViewerSidebarHeader-BcFRP1ym.js";import"./useBaseUiId-B_dYCIar.js";import"./useControlled-ToeGQqG-.js";import"./CompositeRoot-AIUHGmEz.js";import"./CompositeItem-Du8ycWHV.js";import"./ToolbarRootContext-DJCNS1t_.js";import"./composite-CD4lktG6.js";import"./svgIconContainer-0lXizkcA.js";import"./PdfViewerSearchBar-A2xUWN8b.js";import"./chevron-up-CTJ0ou0d.js";import"./chevron-down-BNkVC-pe.js";import"./cross-CiiI7JQR.js";import"./PdfViewerSidebar-DDW9uc94.js";import"./index-DxV3WRGx.js";import"./index-DDIAvSNo.js";import"./index-B-e29tx4.js";import"./PdfViewerToolbar-bg9oMi_M.js";import"./Button-B0F0CQLE.js";import"./chevron-right-bDr5WVl3.js";import"./Input-CYN8k52N.js";import"./search-C8I8REFJ.js";import"./spin-DACUx4qo.js";import"./error-CA9h5Tsj.js";import"./withOsdkMetrics-Ru8uoXDU.js";import"./makeExternalStore-Cttn8Ubc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
