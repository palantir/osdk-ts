import{j as r,M as s}from"./iframe-CeUrNeS8.js";import{P as p}from"./pdf-viewer-Cat92EBG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BhCuXNnZ.js";import"./preload-helper-kClf85ts.js";import"./PdfViewer-CC__QM1c.js";import"./index-CNUBLdqm.js";import"./BasePdfViewer-CB1wmCvE.js";import"./BasePdfViewer.module.css-Coczaw2A.js";import"./PdfViewerAnnotationLayer-Bqt5dG6E.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D7WE6Fbo.js";import"./PdfViewerOutlineSidebar-BUbAtCFS.js";import"./PdfViewerSidebarHeader-CVdBfUNv.js";import"./useBaseUiId-B6MLv2cX.js";import"./useControlled-BdXF-8vf.js";import"./CompositeRoot-BQ6qOj-2.js";import"./CompositeItem-BTE8y1pl.js";import"./ToolbarRootContext-U-LssyxT.js";import"./composite-JSaF2J1s.js";import"./svgIconContainer-Zj5VM8lV.js";import"./PdfViewerSearchBar-DfimFwgg.js";import"./chevron-up-DE9YNH56.js";import"./chevron-down-DI7a3Uf5.js";import"./cross-DWoJVskS.js";import"./PdfViewerSidebar-DybcRBfO.js";import"./index-RhUwFwFJ.js";import"./index-CIe6uhG7.js";import"./index-UtGuVeZo.js";import"./PdfViewerToolbar-Bo-k_UYK.js";import"./Button-BKP5ADZQ.js";import"./chevron-right-tkb9_Bdr.js";import"./Input-C4TGes2g.js";import"./search-D1UF5EaJ.js";import"./spin-ncN1iS29.js";import"./error-BARMDzUn.js";import"./withOsdkMetrics-BcIRH2mN.js";import"./makeExternalStore-BahKFFla.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
