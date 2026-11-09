import{j as r,M as s}from"./iframe-Bz_J2W1Z.js";import{P as p}from"./pdf-viewer-C-KmHJJp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-aWGXbDft.js";import"./preload-helper-ok-MzX3c.js";import"./PdfViewer-CCmA3tkO.js";import"./index-FW_HsjU0.js";import"./BasePdfViewer-DFZ8N2jq.js";import"./BasePdfViewer.module.css-BJYDdeNR.js";import"./PdfViewerAnnotationLayer-BeQlzl3r.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CT-bkJ11.js";import"./PdfViewerOutlineSidebar-BdVrSZ1w.js";import"./PdfViewerSidebarHeader-CiGmOb8H.js";import"./useBaseUiId-BhmZfUtN.js";import"./useControlled-BuUO4LJj.js";import"./CompositeRoot-BjCOeqd9.js";import"./CompositeItem-BJ3s4VzC.js";import"./ToolbarRootContext-D7Swefso.js";import"./composite-DlQjNEH4.js";import"./svgIconContainer-CIyUQzFt.js";import"./PdfViewerSearchBar-CC7vvEvt.js";import"./chevron-up-CZn9Cw4t.js";import"./chevron-down-Cd0pn5Sr.js";import"./cross-DddIN5az.js";import"./PdfViewerSidebar-DNdusxaz.js";import"./index-DLug1g0P.js";import"./index-Vqi0hlz6.js";import"./index--E2gQV8-.js";import"./PdfViewerToolbar-B48CPWV4.js";import"./Button-DvYR9GFC.js";import"./chevron-right-Bucm5VY7.js";import"./Input-Bb2RIbvF.js";import"./search-LR9m9GUO.js";import"./spin-C822PQyR.js";import"./error-Cf_kxNf8.js";import"./withOsdkMetrics-wwBOvirA.js";import"./makeExternalStore-BAdkPAIU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
