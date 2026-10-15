import{j as r,M as s}from"./iframe-B6ilqw57.js";import{P as p}from"./pdf-viewer-CuONdBud.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ca1GRv8Y.js";import"./preload-helper-D-9CJsjA.js";import"./PdfViewer-DGWixmdV.js";import"./index-DbyNdYIV.js";import"./BasePdfViewer-CtPE3ljk.js";import"./BasePdfViewer.module.css-DFx9-Rbl.js";import"./PdfViewerAnnotationLayer-BpSDJpRw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVOYjvEP.js";import"./PdfViewerOutlineSidebar-C8yAjjFV.js";import"./PdfViewerSidebarHeader-BxyW20lH.js";import"./useBaseUiId-DHE-id5O.js";import"./useControlled-B3abm0PF.js";import"./CompositeRoot-CuK8dVS1.js";import"./CompositeItem-C4j1wUUU.js";import"./ToolbarRootContext-DC1oDeWo.js";import"./composite-DlL-mJ_3.js";import"./svgIconContainer-cN2FPQGz.js";import"./PdfViewerSearchBar-vmaBpSwU.js";import"./chevron-up-CoZprayK.js";import"./chevron-down-CMdh2Fjb.js";import"./cross-DPKuiR4p.js";import"./PdfViewerSidebar-DvOX70M6.js";import"./index-FPD_SzEe.js";import"./index-P1JTOsnm.js";import"./index-Df4HlJX1.js";import"./PdfViewerToolbar-DUgGvFtb.js";import"./Button-dJtUFXII.js";import"./chevron-right-DNXlQEZ4.js";import"./Input-DWSs0FOD.js";import"./search-QZJd4Wc4.js";import"./spin-BYwWBAmZ.js";import"./error-DqxELFjs.js";import"./withOsdkMetrics-D8k6BHrp.js";import"./makeExternalStore-C_9OaqSF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
