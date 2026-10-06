import{j as r,M as s}from"./iframe-CDH1WiIm.js";import{P as p}from"./pdf-viewer-Dcrk-Ih0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BcyPFYZW.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-DgqCzeWp.js";import"./index-B7I34VMP.js";import"./BasePdfViewer-DkXfxwLu.js";import"./BasePdfViewer.module.css-CfChhPhx.js";import"./PdfViewerAnnotationLayer-Bnd0vTTb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dh2wvomO.js";import"./PdfViewerOutlineSidebar-DUV5mf6m.js";import"./PdfViewerSidebarHeader-B65VwibZ.js";import"./useBaseUiId-JwegC6SR.js";import"./useControlled-A612R_Ug.js";import"./CompositeRoot-CI9BxcPh.js";import"./CompositeItem-Bb5XEEzb.js";import"./ToolbarRootContext-C2jXlctC.js";import"./composite-DFKUfi-t.js";import"./svgIconContainer-Da2lUN6l.js";import"./PdfViewerSearchBar-Cni5QDjA.js";import"./chevron-up-DXnjnfvl.js";import"./chevron-down-NcW2HNuz.js";import"./cross-DSLkFMBK.js";import"./PdfViewerSidebar-zu0vv9Gf.js";import"./index-CWdGZp3O.js";import"./index-DCeQ8dAs.js";import"./index-D4yRNX2z.js";import"./PdfViewerToolbar-r8oRagv7.js";import"./Button-BAc-Yi4x.js";import"./chevron-right-DOlp6MVg.js";import"./Input-C3uKrLbE.js";import"./search-X3YzFylv.js";import"./spin-BIl8fgmI.js";import"./error-CzptjxzD.js";import"./withOsdkMetrics-BG-JB_sg.js";import"./makeExternalStore-BAbkp8fW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
