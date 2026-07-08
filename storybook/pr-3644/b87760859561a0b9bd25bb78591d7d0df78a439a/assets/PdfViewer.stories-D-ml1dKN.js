import{j as r,M as s}from"./iframe-DjySQ7rG.js";import{P as p}from"./pdf-viewer-1kuUhe7U.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BPYJqxRj.js";import"./preload-helper-CIgVa9We.js";import"./PdfRenderer-B_GIyTLy.js";import"./index-Bd6DGpSd.js";import"./PdfViewer-BN-eKM_M.js";import"./PdfViewer.module.css-B1mD5Wc3.js";import"./PdfViewerAnnotationLayer-CJZh72wz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DEmwSAK4.js";import"./PdfViewerOutlineSidebar-B_cFVRtA.js";import"./PdfViewerSidebarHeader-CtPJb4yZ.js";import"./useBaseUiId-D6CaYaBf.js";import"./useControlled-BCsEanuS.js";import"./CompositeRoot-CNEONtVY.js";import"./CompositeItem-DYzR2KlF.js";import"./ToolbarRootContext-IMcRNGop.js";import"./composite-C5fuEr92.js";import"./svgIconContainer-CT7d8rBE.js";import"./PdfViewerSearchBar-VtoBP9K-.js";import"./chevron-up-C-O7LrQK.js";import"./chevron-down-CcbPaUaB.js";import"./cross-C_e6DyPY.js";import"./PdfViewerSidebar-r_m_SIG9.js";import"./index-CSAsjnsn.js";import"./index-6XzXhnTB.js";import"./index-Df20DDE5.js";import"./PdfViewerToolbar-CXgCnn55.js";import"./Button-BoUYQZGI.js";import"./chevron-right-BTvwf64o.js";import"./Input-MSfp4l71.js";import"./search-aBbNIVHX.js";import"./spin-7yiypAZI.js";import"./error-DEspa3T_.js";import"./withOsdkMetrics-Cn3JpTCt.js";import"./makeExternalStore-CHUDZOYx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
