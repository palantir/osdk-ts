import{j as r,M as s}from"./iframe-B-owY9Z7.js";import{P as p}from"./pdf-viewer-hY8ZNMvZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D35cgesa.js";import"./preload-helper-9dohNchO.js";import"./PdfViewer-BNJhb0Ch.js";import"./index-B6FNdyul.js";import"./BasePdfViewer-BRpes0al.js";import"./BasePdfViewer.module.css-Dn_hdUq3.js";import"./PdfViewerAnnotationLayer-Cp81sxB1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DDN6plBG.js";import"./PdfViewerOutlineSidebar-Cb0wA0uH.js";import"./PdfViewerSidebarHeader-D389bW0u.js";import"./useBaseUiId-BuygkMJa.js";import"./useControlled-DU5wctnz.js";import"./CompositeRoot-M1Bf3EMV.js";import"./CompositeItem-Czc0ACb3.js";import"./ToolbarRootContext-PF-H9oB3.js";import"./composite-CruT5ftQ.js";import"./svgIconContainer-SVfmpuZH.js";import"./PdfViewerSearchBar-CsLkAVpC.js";import"./chevron-up-CF-KM72b.js";import"./chevron-down-KtY7GIs6.js";import"./cross-DAeYv9DV.js";import"./PdfViewerSidebar-iHFbI2tG.js";import"./index-CHVvDRh4.js";import"./index-D6Mlo6-X.js";import"./index-BLL9qzqo.js";import"./PdfViewerToolbar-Dl5NPLjn.js";import"./Button-CdoyG0J5.js";import"./chevron-right-BZUKbz3n.js";import"./Input-DO0-uKR0.js";import"./search-CeJ8ph1L.js";import"./spin-DkZEhYJj.js";import"./error-BnApDvy6.js";import"./withOsdkMetrics-D7Kd4RWC.js";import"./makeExternalStore-DCMzogXn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
