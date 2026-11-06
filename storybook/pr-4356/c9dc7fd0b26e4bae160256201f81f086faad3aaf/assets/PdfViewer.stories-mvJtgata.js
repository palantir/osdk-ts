import{j as r,M as s}from"./iframe-V97s0gAW.js";import{P as p}from"./pdf-viewer-B-6EdWcg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DMlgQkfJ.js";import"./preload-helper-3HSTeFHP.js";import"./PdfViewer-aixfcyxd.js";import"./index-DpgCkzdC.js";import"./BasePdfViewer-DN7Q43YS.js";import"./BasePdfViewer.module.css-ePpNxAUm.js";import"./PdfViewerAnnotationLayer-pgQ90UXV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBjwheh6.js";import"./PdfViewerOutlineSidebar-veyz_MYp.js";import"./PdfViewerSidebarHeader-CZCkCKDZ.js";import"./useBaseUiId-Bab3TUT0.js";import"./useControlled-CturneKY.js";import"./CompositeRoot-DXoEOf9m.js";import"./CompositeItem-Dp8TKMUS.js";import"./ToolbarRootContext-Cm4dkNA7.js";import"./composite-CbcGiMzv.js";import"./svgIconContainer-DcsfwCI6.js";import"./PdfViewerSearchBar-BNRhx6Gl.js";import"./chevron-up-h5sAfkDO.js";import"./chevron-down-D6e3j0_s.js";import"./cross-D1lQCJW7.js";import"./PdfViewerSidebar-NP6LxLKs.js";import"./index-DF7F2J8l.js";import"./index-mHMhPLDN.js";import"./index-D4Dl5EM_.js";import"./PdfViewerToolbar-DQZJOvSf.js";import"./Button-BO5_Znwd.js";import"./chevron-right-DwLDxBBZ.js";import"./Input-C6RT56dE.js";import"./search-B7TbVw6W.js";import"./spin-BrYtjBs9.js";import"./error-3rN_CcIw.js";import"./withOsdkMetrics-OMK47pZ9.js";import"./makeExternalStore-CCWCHpFp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
