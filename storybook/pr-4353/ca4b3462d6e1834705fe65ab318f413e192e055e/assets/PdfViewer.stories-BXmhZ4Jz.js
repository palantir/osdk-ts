import{j as r,M as s}from"./iframe-C-tkmioo.js";import{P as p}from"./pdf-viewer-CDjA145-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CW_iHRqs.js";import"./preload-helper-DfuNKgCp.js";import"./PdfViewer-qAAFZxPr.js";import"./index-mhh8JEg6.js";import"./BasePdfViewer-BpGhbyGg.js";import"./BasePdfViewer.module.css-CoYPXmf-.js";import"./PdfViewerAnnotationLayer-BgqscmiO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DKvN2AoI.js";import"./PdfViewerOutlineSidebar-Bf2_BKny.js";import"./PdfViewerSidebarHeader-DBVvTYD7.js";import"./useBaseUiId-Cm7MFvra.js";import"./useControlled-C9aUqxO7.js";import"./CompositeRoot-CG7HGsV7.js";import"./CompositeItem-Byuaai_8.js";import"./ToolbarRootContext-BgWudj9O.js";import"./composite-C8fhvEre.js";import"./svgIconContainer-CWpp_2jS.js";import"./PdfViewerSearchBar-c4mg8daO.js";import"./chevron-up-0X7OS9a0.js";import"./chevron-down-CDLMbCJ_.js";import"./cross-C44ftUHc.js";import"./PdfViewerSidebar-DZpXN_HU.js";import"./index-C_kRO_H9.js";import"./index-hoVNSPuR.js";import"./index-B90a8S-M.js";import"./PdfViewerToolbar-CbAV2RCo.js";import"./Button-CGB2DjlW.js";import"./chevron-right-Cf2q8DiW.js";import"./Input-DLE-7B-W.js";import"./search-i-B1QBlz.js";import"./spin-DVCJK9LM.js";import"./error-CXAWYJfd.js";import"./withOsdkMetrics-vqDit70J.js";import"./makeExternalStore-Bksv4soB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
