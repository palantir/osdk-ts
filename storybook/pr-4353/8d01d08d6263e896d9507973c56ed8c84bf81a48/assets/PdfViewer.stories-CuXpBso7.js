import{j as r,M as s}from"./iframe-2CZ5tyet.js";import{P as p}from"./pdf-viewer-C2xIryRv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CPIiXEx_.js";import"./preload-helper-PdhlwSnk.js";import"./PdfViewer-lN26px1-.js";import"./index-BEbGGmzC.js";import"./BasePdfViewer-CyLDmSNy.js";import"./BasePdfViewer.module.css-C8b_AzH6.js";import"./PdfViewerAnnotationLayer-Dd5p3ukB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9ZbFeZN.js";import"./PdfViewerOutlineSidebar-8WiHnCg-.js";import"./PdfViewerSidebarHeader-B4TVUbFg.js";import"./useBaseUiId-DmeaPkXN.js";import"./useControlled-Dh1VVbb0.js";import"./CompositeRoot-76cTM_3o.js";import"./CompositeItem-_M4T2kN5.js";import"./ToolbarRootContext-C-QqQ4cn.js";import"./composite-D3k21xgh.js";import"./svgIconContainer-CNOiLZ-C.js";import"./PdfViewerSearchBar-By1XArfG.js";import"./chevron-up-C0GYKdBI.js";import"./chevron-down-9zPbKgFH.js";import"./cross-L_JwSQIU.js";import"./PdfViewerSidebar-BqZsPWDv.js";import"./index-DlBbVzYN.js";import"./index-DJ2zkz4W.js";import"./index-BzLD7IFo.js";import"./PdfViewerToolbar-CAV7Vpmh.js";import"./Button-eNpy85xj.js";import"./chevron-right-mixEo0wD.js";import"./Input-nyDT7hKf.js";import"./search-DVGk6bce.js";import"./spin-CJbnDIaV.js";import"./error-_JBSJ8K6.js";import"./withOsdkMetrics-CV77OAmc.js";import"./makeExternalStore-47_tyIYI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
