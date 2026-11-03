import{j as r,M as s}from"./iframe-9A7AV9Cy.js";import{P as p}from"./pdf-viewer-CrnPeVRP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dbk-JvOl.js";import"./preload-helper-CK_ZcGGF.js";import"./PdfViewer-D8BlCoZZ.js";import"./index-Bkgk7vsR.js";import"./BasePdfViewer-DSM3pvKT.js";import"./BasePdfViewer.module.css-Dv5WlaXM.js";import"./PdfViewerAnnotationLayer-CyKiGNbT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CZx8Hn_v.js";import"./PdfViewerOutlineSidebar-vxDYkrsA.js";import"./PdfViewerSidebarHeader-Bqarf29R.js";import"./useBaseUiId-q7QIFNkg.js";import"./useControlled-DIFFKw6v.js";import"./CompositeRoot-BMKjJp3f.js";import"./CompositeItem-DoPsMeEK.js";import"./ToolbarRootContext-DCS282rA.js";import"./composite-CEEJ0vWU.js";import"./svgIconContainer-CR0pIEyo.js";import"./PdfViewerSearchBar-CaXuUliJ.js";import"./chevron-up-DkUeqybM.js";import"./chevron-down-Bi1tvw_Y.js";import"./cross-B7t6TzDw.js";import"./PdfViewerSidebar-DAGiDdoK.js";import"./index-CzE6ZkZ0.js";import"./index-C7xfgMTV.js";import"./index-BV5cRfRG.js";import"./PdfViewerToolbar-gLCjuEuL.js";import"./Button-CKepLiXu.js";import"./chevron-right-Dujl-Bl3.js";import"./Input-CCxEn7sH.js";import"./search-BWRhS2Qj.js";import"./spin-DgS7jHwT.js";import"./error-C8bHM7uj.js";import"./withOsdkMetrics-B5obnKQC.js";import"./makeExternalStore-UebcDacP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
