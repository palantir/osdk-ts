import{j as r,M as s}from"./iframe-CxgAHdD_.js";import{P as p}from"./pdf-viewer-gUxExufp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cc_V5pjs.js";import"./preload-helper-DzzfBRd8.js";import"./PdfViewer-DBI9pLpm.js";import"./index-B6MbbFlT.js";import"./BasePdfViewer-Blh0A3qm.js";import"./BasePdfViewer.module.css-C6YnfpHy.js";import"./PdfViewerAnnotationLayer-B9-Xue1h.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DZTijWND.js";import"./PdfViewerOutlineSidebar-Bao9Z13k.js";import"./PdfViewerSidebarHeader-y97MCo2d.js";import"./useBaseUiId-DFqoi1rW.js";import"./useControlled-UHTW7SDW.js";import"./CompositeRoot-CDlqzIwZ.js";import"./CompositeItem-rluq41vP.js";import"./ToolbarRootContext-CWhOmDUt.js";import"./composite-BPWDb3yK.js";import"./svgIconContainer-DjIuQsyB.js";import"./PdfViewerSearchBar-CPE21GxA.js";import"./chevron-up-mSDs35JY.js";import"./chevron-down-BzYJ5JTr.js";import"./cross-EITDvaH2.js";import"./PdfViewerSidebar-4_dN9aW7.js";import"./index-8jFysFom.js";import"./index-JYYI4S_c.js";import"./index-C5Y_pAhG.js";import"./PdfViewerToolbar-Q6c5IUVB.js";import"./Button-CKsUHdvx.js";import"./chevron-right-D6J5tpNW.js";import"./Input-DwYZqNpM.js";import"./search-DdlCwk58.js";import"./spin-C3aVE59w.js";import"./error-BEe-jKvu.js";import"./withOsdkMetrics-CAH8aQvL.js";import"./makeExternalStore-BX4690TY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
