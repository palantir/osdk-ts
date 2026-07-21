import{j as r,M as s}from"./iframe-CdeK_m9p.js";import{P as p}from"./pdf-viewer-cYxT4Rpp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DCjJVgwW.js";import"./preload-helper-CPtNC1d5.js";import"./PdfRenderer-DeXa5M_1.js";import"./index-BJipoRsc.js";import"./PdfViewer-CyRm6mKt.js";import"./PdfViewer.module.css-DH52gk7C.js";import"./PdfViewerAnnotationLayer-CW2Q_edx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BVCx0kdO.js";import"./PdfViewerOutlineSidebar-Dwqs5_k1.js";import"./PdfViewerSidebarHeader-C6nbgKn3.js";import"./useBaseUiId-DRNKw_F3.js";import"./useControlled-BI9YxZuO.js";import"./CompositeRoot-C1tYDSwE.js";import"./CompositeItem-Chf3us8U.js";import"./ToolbarRootContext-C_UW42FB.js";import"./composite-D5YfbABk.js";import"./svgIconContainer-CQbYofg8.js";import"./PdfViewerSearchBar-O0yKQLyT.js";import"./chevron-up-DsYFSvQN.js";import"./chevron-down-EJgT6ntn.js";import"./cross-C26_YocD.js";import"./PdfViewerSidebar-BQZ4Wugh.js";import"./index-BK58JfM-.js";import"./index-M0FyPOAa.js";import"./index-CbDhTWgq.js";import"./PdfViewerToolbar-x9jBUZkX.js";import"./Button-Dkc54Zqj.js";import"./chevron-right-CG_zFr69.js";import"./Input-CVZtNSkB.js";import"./search-D6pt1BQi.js";import"./spin-BQB63azE.js";import"./error-BgIRU5ry.js";import"./withOsdkMetrics-KRCUE5r3.js";import"./makeExternalStore-DBXV5lJR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
