import{j as r,M as s}from"./iframe-BrKtZUsT.js";import{P as p}from"./pdf-viewer-B1BoqugX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-qurErulj.js";import"./preload-helper-DbjT-_Ls.js";import"./PdfRenderer-to4Ew-v_.js";import"./index-vtvn72me.js";import"./PdfViewer-C3yNIoWs.js";import"./PdfViewer.module.css-7N9slrgw.js";import"./PdfViewerAnnotationLayer-P2hXAdN5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DamoUvSE.js";import"./PdfViewerOutlineSidebar-CLcAEuTX.js";import"./PdfViewerSidebarHeader-Dj3ScMK4.js";import"./useBaseUiId-DgDyrgEz.js";import"./useControlled-DeDJ_4v3.js";import"./CompositeRoot-RC1RK9J6.js";import"./CompositeItem-BOcbjoko.js";import"./ToolbarRootContext-yF-LHglg.js";import"./composite-B9u5gOL2.js";import"./svgIconContainer-w8hpQ2Rb.js";import"./PdfViewerSearchBar-_UXLqnhG.js";import"./chevron-up-BXrR_Eh1.js";import"./chevron-down-BRRQ9R96.js";import"./cross-DzCC5MlF.js";import"./PdfViewerSidebar-CptcJUnt.js";import"./index-BUUG3WKx.js";import"./index-CPbXjYZC.js";import"./index-CpuYkPV_.js";import"./PdfViewerToolbar-o9ZNOJJw.js";import"./Button-BNY1_NM5.js";import"./chevron-right-BnNcdL55.js";import"./Input-BIkfquP3.js";import"./search-BSeWp_3r.js";import"./spin-B_UY5K9v.js";import"./error-DL5n4kY8.js";import"./withOsdkMetrics-BaPoTDrh.js";import"./makeExternalStore-BZpd9OjK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
