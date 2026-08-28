import{j as r,M as s}from"./iframe-q6NKVMOW.js";import{P as p}from"./pdf-viewer-BSh6tVG6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-n2GQeV0W.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-B5VOneth.js";import"./index-B5MNjG-7.js";import"./BasePdfViewer--0G0yUoD.js";import"./BasePdfViewer.module.css-CqxYdbVP.js";import"./PdfViewerAnnotationLayer-D-W5CXLW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-kxGiF6BA.js";import"./PdfViewerOutlineSidebar-DjLDjvU0.js";import"./PdfViewerSidebarHeader-P6vm2P4K.js";import"./useBaseUiId-DS12ecTt.js";import"./useControlled-rHUBc6dP.js";import"./CompositeRoot-D8GdE3vQ.js";import"./CompositeItem-Cm8x2Oga.js";import"./ToolbarRootContext-CrOFR8_B.js";import"./composite-DWdzf7xq.js";import"./svgIconContainer-Cl-19u26.js";import"./PdfViewerSearchBar-BQP9jTZH.js";import"./chevron-up-BNEr1Umu.js";import"./chevron-down-DeyzUbGB.js";import"./cross-kBxFNNzf.js";import"./PdfViewerSidebar-BZ4qN4ly.js";import"./index-N79EOdPZ.js";import"./index-CXmB_YXt.js";import"./index-B8pCVHdG.js";import"./PdfViewerToolbar-DgRSRhau.js";import"./Button-B0F_wJsq.js";import"./chevron-right-QWNMHK6V.js";import"./Input-CW_LwEgU.js";import"./search-BG6VKYDl.js";import"./spin-C6NcM_x3.js";import"./error-C3FqO6Mu.js";import"./withOsdkMetrics-B0o7MA2A.js";import"./makeExternalStore-C_DYB-ey.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
