import{j as r,M as s}from"./iframe-SCQrgHSr.js";import{P as p}from"./pdf-viewer-d9g3f_cJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C3yPNaPZ.js";import"./preload-helper-ruFAjrX8.js";import"./PdfViewer-JF_NcYWU.js";import"./index-BUtIlNP3.js";import"./BasePdfViewer-cJHfEz4_.js";import"./BasePdfViewer.module.css-BcmJ0CEX.js";import"./PdfViewerAnnotationLayer-DwQYU5N6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBfqV98e.js";import"./PdfViewerOutlineSidebar-CQNOxjVI.js";import"./PdfViewerSidebarHeader-Cl_GlXV3.js";import"./useBaseUiId-BR-Fy_C2.js";import"./useControlled-Cz7FsEHc.js";import"./CompositeRoot-BCA50m_r.js";import"./CompositeItem-Co12UxPz.js";import"./ToolbarRootContext-BfCeEs7c.js";import"./composite-Dt5lUk_W.js";import"./svgIconContainer-PYczuJwB.js";import"./PdfViewerSearchBar-yWShgWFv.js";import"./chevron-up-DkMOD8xG.js";import"./chevron-down-CgTNl4cy.js";import"./cross-RzKZrUkh.js";import"./PdfViewerSidebar-CCJhuukd.js";import"./index-ZLSkTGBP.js";import"./index--0Ld1SF2.js";import"./index-w54i75Ov.js";import"./PdfViewerToolbar-Dc3NwNem.js";import"./Button-CuEtz6jx.js";import"./chevron-right-GCWvYjW8.js";import"./Input-CnPO-APv.js";import"./search-Dm4EdHL9.js";import"./spin-_buxEs4I.js";import"./error-bDXyKJC8.js";import"./withOsdkMetrics-tKMMAYTA.js";import"./makeExternalStore-CUOtWXW6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
