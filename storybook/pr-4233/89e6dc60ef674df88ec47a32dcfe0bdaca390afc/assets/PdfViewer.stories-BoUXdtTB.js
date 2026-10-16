import{j as r,M as s}from"./iframe-BgteeNK7.js";import{P as p}from"./pdf-viewer-B8H9wpfj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DmW492oG.js";import"./preload-helper-D1QQRU4G.js";import"./PdfViewer-uswL2Bfp.js";import"./index-Dh7VeDie.js";import"./BasePdfViewer-DKJulYeI.js";import"./BasePdfViewer.module.css-C8MnoEj7.js";import"./PdfViewerAnnotationLayer-DlbGSrbs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B8haD9xg.js";import"./PdfViewerOutlineSidebar-DYKGXDF1.js";import"./PdfViewerSidebarHeader-D-X7pN79.js";import"./useBaseUiId-Du-nzkw5.js";import"./useControlled-DtLnayup.js";import"./CompositeRoot-plqng5Am.js";import"./CompositeItem-DbN5tfcI.js";import"./ToolbarRootContext-D9ylwIx5.js";import"./composite-Bw2x2Ls7.js";import"./svgIconContainer-DMbES6r9.js";import"./PdfViewerSearchBar-B8LDQhyy.js";import"./chevron-up-CG4XOjIZ.js";import"./chevron-down-BazaCq4r.js";import"./cross-DvJO6axF.js";import"./PdfViewerSidebar-B1b-bqS9.js";import"./index--nUSuqMP.js";import"./index-D7D5AllY.js";import"./index-jEkUh6V5.js";import"./PdfViewerToolbar-ByD7aind.js";import"./Button-CTMGDM5U.js";import"./chevron-right-qQGTpoBL.js";import"./Input-BLKefb3k.js";import"./search-DnqpkQaz.js";import"./spin-BI3Jf46l.js";import"./error-CHdhKpK1.js";import"./withOsdkMetrics-BGKMncSr.js";import"./makeExternalStore-D3iXBhr4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
