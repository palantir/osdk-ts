import{j as r,M as s}from"./iframe-DUenp6lH.js";import{P as p}from"./pdf-viewer-FfD6ZYMy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_BWqeRM.js";import"./preload-helper-BrQ2IwN3.js";import"./PdfViewer-ClvYdG0W.js";import"./index-CR7YeDMv.js";import"./BasePdfViewer-DPKqSFrj.js";import"./BasePdfViewer.module.css-DiNJ30ZB.js";import"./PdfViewerAnnotationLayer-DsE3Ax6L.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D_aD1Sz1.js";import"./PdfViewerOutlineSidebar-CxacyYAR.js";import"./PdfViewerSidebarHeader-B1IZIUEk.js";import"./useBaseUiId-C5AD1Gq1.js";import"./useControlled-CqXkm6hT.js";import"./CompositeRoot-Cem-KCcr.js";import"./CompositeItem-C4zuFT9w.js";import"./ToolbarRootContext-CHqPptLt.js";import"./composite-cl-eg-Mr.js";import"./svgIconContainer-CPPwWmWb.js";import"./PdfViewerSearchBar-d6vGT-FZ.js";import"./chevron-up-B2sbYsO1.js";import"./chevron-down-iXJuV4q7.js";import"./cross-DwLsQDiH.js";import"./PdfViewerSidebar-BZ_dszUi.js";import"./index-CVMpflAU.js";import"./index-DiIhoR1V.js";import"./index-Ki6h912l.js";import"./PdfViewerToolbar-CYfj50nq.js";import"./Button-HrxQOGa9.js";import"./chevron-right-siaGF_6c.js";import"./Input-D9S29-Xm.js";import"./search-DYKYo547.js";import"./spin-B0AQ8J5K.js";import"./error-BN9liXL6.js";import"./withOsdkMetrics-Zv84aaRv.js";import"./makeExternalStore-8dLgdQIB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
