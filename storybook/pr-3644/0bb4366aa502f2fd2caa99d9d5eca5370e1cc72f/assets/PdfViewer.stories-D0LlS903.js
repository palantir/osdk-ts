import{j as r,M as s}from"./iframe-CcA7-Rjw.js";import{P as p}from"./pdf-viewer-BxjcgvMb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ae5-Kn8W.js";import"./preload-helper-nvkubxzv.js";import"./PdfRenderer-nax9Zvtd.js";import"./index-AvY0EKRf.js";import"./PdfViewer-DLkkXC71.js";import"./PdfViewer.module.css-Bn6_E93t.js";import"./PdfViewerAnnotationLayer-D1QOqniP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bws8Tdw-.js";import"./PdfViewerOutlineSidebar-BEPxNbBE.js";import"./PdfViewerSidebarHeader-OS2r2TX1.js";import"./useBaseUiId-BjFl5fKj.js";import"./useControlled-nd8aPGMS.js";import"./CompositeRoot-YqnSEZap.js";import"./CompositeItem-BPuGHInU.js";import"./ToolbarRootContext-BiU2w5wb.js";import"./composite-2XJp13CO.js";import"./svgIconContainer-DckiNDXi.js";import"./PdfViewerSearchBar-DAMSyeFQ.js";import"./chevron-up-BFVKzna6.js";import"./chevron-down-hciG8vuR.js";import"./cross-ChHYC8Yw.js";import"./PdfViewerSidebar-D7Gp99eo.js";import"./index-Zn-uiKn9.js";import"./index-vSBXvFMR.js";import"./index-Bp3ioUAC.js";import"./PdfViewerToolbar-CHy3RHLG.js";import"./Button-ol1baUYT.js";import"./chevron-right-BHsbbP4D.js";import"./Input-CWdjMBiV.js";import"./search-poOCX-UW.js";import"./spin-CXCOOtFg.js";import"./error-bsTt9ox-.js";import"./withOsdkMetrics-CqsRELMI.js";import"./makeExternalStore-CP-_NU5h.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
