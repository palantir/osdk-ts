import{j as r,M as s}from"./iframe-Cd3assbj.js";import{P as p}from"./pdf-viewer-wYpM-oEM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C2ibjsYy.js";import"./preload-helper-CJDETHpR.js";import"./PdfViewer-BauoR9PE.js";import"./index-CuezTBwu.js";import"./BasePdfViewer-DA1EESrM.js";import"./BasePdfViewer.module.css-BAYF5aoT.js";import"./PdfViewerAnnotationLayer-C_Gug8CJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwC7Y_Lr.js";import"./PdfViewerOutlineSidebar-2NZHidNA.js";import"./PdfViewerSidebarHeader-HMoGmA_M.js";import"./useBaseUiId-BiXP69FS.js";import"./useControlled-C6IOb7yO.js";import"./CompositeRoot-BeW3YXzY.js";import"./CompositeItem-Bvq7b2TM.js";import"./ToolbarRootContext-8Wniw3sv.js";import"./composite-Ba6K1tVR.js";import"./svgIconContainer-mKWT46Ew.js";import"./PdfViewerSearchBar-DWJ8YTgH.js";import"./chevron-up-DpAs353q.js";import"./chevron-down-CJuFpDqg.js";import"./cross-BWupVKMA.js";import"./PdfViewerSidebar-MRLbP8ew.js";import"./index-N34x7HCr.js";import"./index-BAIR5AIA.js";import"./index-Z1uxp6Qk.js";import"./PdfViewerToolbar-BsjFcfuP.js";import"./Button-DL7dr6Eo.js";import"./chevron-right-jhdBagkn.js";import"./Input-CNsHRcz9.js";import"./search-DpDuiZ1l.js";import"./spin-CI8uNEtE.js";import"./error-DnfhABs7.js";import"./withOsdkMetrics-CmAk2EDk.js";import"./makeExternalStore-BWQlbo1w.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
