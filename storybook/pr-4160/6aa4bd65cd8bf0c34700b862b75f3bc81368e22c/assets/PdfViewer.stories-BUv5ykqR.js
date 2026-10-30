import{j as r,M as s}from"./iframe-B5CnmteN.js";import{P as p}from"./pdf-viewer-Dag95vc1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cr_baTss.js";import"./preload-helper-BvIIyaRb.js";import"./PdfViewer-N2ESQJY0.js";import"./index-8frbvTc0.js";import"./BasePdfViewer-DOhN6JdK.js";import"./BasePdfViewer.module.css-C8_kbAJU.js";import"./PdfViewerAnnotationLayer-jejpWVHy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DGGka_FP.js";import"./PdfViewerOutlineSidebar-DkhLpWuI.js";import"./PdfViewerSidebarHeader-dLzCBkBi.js";import"./useBaseUiId-CpmUOtyx.js";import"./useControlled-BIkM9vG3.js";import"./CompositeRoot-BQsQ6gQs.js";import"./CompositeItem-GDYb2RvJ.js";import"./ToolbarRootContext-BCLdmU7d.js";import"./composite-DzRtfXwG.js";import"./svgIconContainer-Q-T6gYyn.js";import"./PdfViewerSearchBar-S4PDkYgi.js";import"./chevron-up-DjQU85Ir.js";import"./chevron-down-Yu587uLP.js";import"./cross-pkR4RJ0Q.js";import"./PdfViewerSidebar-CUAWklZo.js";import"./index-NUZYU-eZ.js";import"./index-DJMwC2E0.js";import"./index-COZUZoux.js";import"./PdfViewerToolbar-DHeZnbnM.js";import"./Button-k7Ft62HK.js";import"./chevron-right-C-bc-r_D.js";import"./Input-BFwAdaEg.js";import"./search-BS3g1UNT.js";import"./spin-DFqHBS65.js";import"./error-DnL9Bib9.js";import"./withOsdkMetrics-Dx9osySV.js";import"./makeExternalStore-DQ9Dnm6S.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
