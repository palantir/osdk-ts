import{j as r,M as s}from"./iframe-BOL4lmQu.js";import{P as p}from"./pdf-viewer-BxLhPf-X.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DXX1bD28.js";import"./preload-helper-CF5y6P51.js";import"./PdfViewer-D_RpUvfb.js";import"./index-BlfYN_kO.js";import"./BasePdfViewer-DF8Gqeri.js";import"./BasePdfViewer.module.css-CE1W6hvS.js";import"./PdfViewerAnnotationLayer-YtKAZdQ2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CeOygyah.js";import"./PdfViewerOutlineSidebar-DOFeHI34.js";import"./PdfViewerSidebarHeader-BklzFCw6.js";import"./useBaseUiId-BpGNe3Eg.js";import"./useControlled-1K3KKLgI.js";import"./CompositeRoot-Clj1eK4b.js";import"./CompositeItem-D7t72lc9.js";import"./ToolbarRootContext-DYZSmWFR.js";import"./composite-BV3ZD4mr.js";import"./svgIconContainer-FVhL1hCA.js";import"./PdfViewerSearchBar-DLLAWn35.js";import"./chevron-up-B_PaWScM.js";import"./chevron-down-wPhaZYI3.js";import"./cross-C9_cN1cS.js";import"./PdfViewerSidebar-rHVGJzZ5.js";import"./index-DagXr3NH.js";import"./index-CmApk3zh.js";import"./index-DP_XR25E.js";import"./PdfViewerToolbar-EXWZC4qi.js";import"./Button-BQpmuek9.js";import"./chevron-right-D5EvYleJ.js";import"./Input-CujqDLfg.js";import"./search-Cv260GLX.js";import"./spin-DOKXXDIP.js";import"./error-DWdKle1J.js";import"./withOsdkMetrics-D8Pyw_HQ.js";import"./makeExternalStore-BaKwuUE-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
