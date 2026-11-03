import{j as r,M as s}from"./iframe-mxG0bqmN.js";import{P as p}from"./pdf-viewer-DOMf2dIE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-u-4WjFHw.js";import"./preload-helper-CNw17NEq.js";import"./PdfViewer-BmEK-siF.js";import"./index-29oGgzLZ.js";import"./BasePdfViewer-D5ZQ1KKr.js";import"./BasePdfViewer.module.css-DDG0s6QR.js";import"./PdfViewerAnnotationLayer-BkfsCNU5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C49qkTYU.js";import"./PdfViewerOutlineSidebar-CrhcRyj7.js";import"./PdfViewerSidebarHeader-zQyRvWRZ.js";import"./useBaseUiId-B0pa-b1P.js";import"./useControlled-CwpY0gyY.js";import"./CompositeRoot-B-GjY88p.js";import"./CompositeItem-CqN63eX8.js";import"./ToolbarRootContext-fx2tIRtZ.js";import"./composite-CT4w3sd4.js";import"./svgIconContainer-rUf9sgj2.js";import"./PdfViewerSearchBar-DIzHrR1u.js";import"./chevron-up-CNYf-9NY.js";import"./chevron-down-BPLfSvEY.js";import"./cross-D6Tl4R1E.js";import"./PdfViewerSidebar-kxM_rTsM.js";import"./index-yPM4gYG7.js";import"./index-LiG5jLj1.js";import"./index-xs8nS-0V.js";import"./PdfViewerToolbar-OrEkJTji.js";import"./Button-CoXV5wZD.js";import"./chevron-right-Csbu-w_R.js";import"./Input-DAYbAIy1.js";import"./search-D0vl5yax.js";import"./spin-CP5PTxEZ.js";import"./error-C0pmiaE9.js";import"./withOsdkMetrics-BccI-HLw.js";import"./makeExternalStore-DsBTIsva.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
