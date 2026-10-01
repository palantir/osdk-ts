import{j as r,M as s}from"./iframe-CPvF6ZzM.js";import{P as p}from"./pdf-viewer-DFZjQZac.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CaJeApSi.js";import"./preload-helper-BI1t_NCm.js";import"./PdfViewer-DsZTlo4B.js";import"./index-DfPxhOot.js";import"./BasePdfViewer-BQ2O17mM.js";import"./BasePdfViewer.module.css-DQW03Oob.js";import"./PdfViewerAnnotationLayer-DX0_PF_J.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-M87V0Y-z.js";import"./PdfViewerOutlineSidebar-e11LmQqR.js";import"./PdfViewerSidebarHeader-Fpy4c5H4.js";import"./useBaseUiId-XltkNyEi.js";import"./useControlled-C9Dlz_cg.js";import"./CompositeRoot-B4vETXff.js";import"./CompositeItem-Hn04YYBd.js";import"./ToolbarRootContext-CXaq262I.js";import"./composite-BWoYEjdT.js";import"./svgIconContainer-DKpS56Vd.js";import"./PdfViewerSearchBar-DNJ2l93O.js";import"./chevron-up-THwyyKMi.js";import"./chevron-down-eYoSNu4v.js";import"./cross-CmlX3m4X.js";import"./PdfViewerSidebar-BxncJzpr.js";import"./index-DlqK99lM.js";import"./index-lsySavSd.js";import"./index-MWDzLIPR.js";import"./PdfViewerToolbar-DGTjgGpm.js";import"./Button-BOq8HNJy.js";import"./chevron-right-BscbyCph.js";import"./Input-Bc7_Uhxn.js";import"./search-BLNtYnra.js";import"./spin-Bn-73xWn.js";import"./error-B87OsGL8.js";import"./withOsdkMetrics-BRD3Y2PF.js";import"./makeExternalStore-S4D4bUbQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
