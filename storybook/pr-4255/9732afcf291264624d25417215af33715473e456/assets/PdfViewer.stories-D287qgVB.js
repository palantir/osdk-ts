import{j as r,M as s}from"./iframe-D6y6_Ifg.js";import{P as p}from"./pdf-viewer-ChyI3a1x.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BIoqDhbF.js";import"./preload-helper-DyU-boOC.js";import"./PdfViewer-BObBJF79.js";import"./index-BGSHUEgZ.js";import"./BasePdfViewer-B4IKP_oO.js";import"./BasePdfViewer.module.css-D0k_rF8G.js";import"./PdfViewerAnnotationLayer-mUWtBRyR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BIHDP-ts.js";import"./PdfViewerOutlineSidebar-B10MuUY0.js";import"./PdfViewerSidebarHeader-DJDVO3_t.js";import"./useBaseUiId-BqYaQHeS.js";import"./useControlled-BqujvQcb.js";import"./CompositeRoot-DumO2App.js";import"./CompositeItem-DO83W1mC.js";import"./ToolbarRootContext-CGSlDNd6.js";import"./composite-DjaGlwPS.js";import"./svgIconContainer-kSsZGyO3.js";import"./PdfViewerSearchBar-BeRtnJJh.js";import"./chevron-up-B2dMjxiG.js";import"./chevron-down-tZEFHgnG.js";import"./cross-DjwwagZM.js";import"./PdfViewerSidebar-Brc0QJf1.js";import"./index-qwFFssEr.js";import"./index-DCLjYuV8.js";import"./index-BgYri-U-.js";import"./PdfViewerToolbar-De40ufsu.js";import"./Button-CWXM-Cv5.js";import"./chevron-right-d780j150.js";import"./Input-yKev__cZ.js";import"./search-Ds3QYjxm.js";import"./spin-DS3IIvJ2.js";import"./error-kgzj6SX8.js";import"./withOsdkMetrics-DLWDjTSp.js";import"./makeExternalStore-ITPdtG8P.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
