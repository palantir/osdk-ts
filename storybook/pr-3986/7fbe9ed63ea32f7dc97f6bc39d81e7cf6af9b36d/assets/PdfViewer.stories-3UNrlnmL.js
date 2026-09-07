import{j as r,M as s}from"./iframe-NrfGywpz.js";import{P as p}from"./pdf-viewer-fGKkEAPA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cebu8db_.js";import"./preload-helper-B_PzSpqk.js";import"./PdfViewer-CGZ7JtDy.js";import"./index-B4J3JGGr.js";import"./BasePdfViewer-DRTPjwt1.js";import"./BasePdfViewer.module.css-BAdR4OQw.js";import"./PdfViewerAnnotationLayer-CIeoDWGr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-K9IzMs4n.js";import"./PdfViewerOutlineSidebar-CUGUAQ9e.js";import"./PdfViewerSidebarHeader-Djh3hamG.js";import"./useBaseUiId-DgnEpncS.js";import"./useControlled-DTlMTcYw.js";import"./CompositeRoot-DpR0zZ54.js";import"./CompositeItem-DkX84chI.js";import"./ToolbarRootContext-DXSxTdJI.js";import"./composite-DA8gx3Og.js";import"./svgIconContainer-Cgk6hNay.js";import"./PdfViewerSearchBar-hwLcyyro.js";import"./chevron-up-Cnlk7Nam.js";import"./chevron-down-Cswe4CW9.js";import"./cross-Caw6Pz43.js";import"./PdfViewerSidebar-D6i0xUN8.js";import"./index-hEzcpiCN.js";import"./index-D-R7Oq4i.js";import"./index-ALjvoOKD.js";import"./PdfViewerToolbar-D3VwCiHb.js";import"./Button-DIZaR5tq.js";import"./chevron-right-kqEflTJU.js";import"./Input-CCWHU-92.js";import"./search-DU1IM6NB.js";import"./spin-uQJfkV6r.js";import"./error-DaUrBpBS.js";import"./withOsdkMetrics-5_2pgCwu.js";import"./makeExternalStore-D2ri9UvN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
