import{j as r,M as s}from"./iframe-C3gWLFeF.js";import{P as p}from"./pdf-viewer-D08A3Jio.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CqscLneb.js";import"./preload-helper-B5WkgH5S.js";import"./PdfViewer-BaIk-kbi.js";import"./index-zbAiaIKZ.js";import"./BasePdfViewer-4QtA8yko.js";import"./BasePdfViewer.module.css-DGaEjPA2.js";import"./PdfViewerAnnotationLayer-BFz29wqY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D96vaSTC.js";import"./PdfViewerOutlineSidebar-eqOLCEBA.js";import"./PdfViewerSidebarHeader-CCqhSeS-.js";import"./useBaseUiId-u8lDlXG3.js";import"./useControlled-D4ZhQDM-.js";import"./CompositeRoot-BIS6Rb04.js";import"./CompositeItem-aMc0HNV_.js";import"./ToolbarRootContext-CXNAcqNV.js";import"./composite-wYiSASeA.js";import"./svgIconContainer-CatKefh0.js";import"./PdfViewerSearchBar-Dbnb_8lq.js";import"./chevron-up-CYJpFQHq.js";import"./chevron-down-C2wXIFgz.js";import"./cross-OJYwbU-X.js";import"./PdfViewerSidebar-r7AoPA-Z.js";import"./index-B-Yw7Cy9.js";import"./index-B5sOm2sk.js";import"./index-RpbhQ7R2.js";import"./PdfViewerToolbar-Co5mm0KB.js";import"./Button-z5VY6lqA.js";import"./chevron-right-mIqhQO5i.js";import"./Input-DxK0rYjH.js";import"./search-C7TpUcEG.js";import"./spin-6z-Int5k.js";import"./error-BM64Bzf-.js";import"./withOsdkMetrics-BIxduPTg.js";import"./makeExternalStore-y3W5E1gl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
