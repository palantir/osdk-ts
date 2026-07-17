import{j as r,M as s}from"./iframe-DVuzAlfH.js";import{P as p}from"./pdf-viewer-DWWZkDZJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BIQjP5C8.js";import"./preload-helper-VSftk98X.js";import"./PdfRenderer-qBIsqgSI.js";import"./index-G2Ae4Loa.js";import"./PdfViewer-C7e58hJE.js";import"./PdfViewer.module.css-PkDbNxzc.js";import"./PdfViewerAnnotationLayer-QMfELvQ_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B2bD2W8p.js";import"./PdfViewerOutlineSidebar-vynm-hfd.js";import"./PdfViewerSidebarHeader-Cw4hp7Dl.js";import"./useBaseUiId-DCUs709h.js";import"./useControlled-D-j9SdN7.js";import"./CompositeRoot-B7x7-ciB.js";import"./CompositeItem-CVRxwOF2.js";import"./ToolbarRootContext-sNDE-Hwv.js";import"./composite-CFbRDSTc.js";import"./svgIconContainer-rlD9uYrP.js";import"./PdfViewerSearchBar-CSPnGP4J.js";import"./chevron-up-Bp3p_JMK.js";import"./chevron-down-7OzRGjeM.js";import"./cross-BfvpiQsM.js";import"./PdfViewerSidebar-DSSsisQC.js";import"./index-Sj7yOGyv.js";import"./index-r_JxIcz1.js";import"./index-DN-x1yEJ.js";import"./PdfViewerToolbar-kCDRgaZL.js";import"./Button-CKoJEZvW.js";import"./chevron-right-KP-tCmAZ.js";import"./Input-BqYFFuO4.js";import"./search-DF2gxwRx.js";import"./spin-Md6c-OAX.js";import"./error-DiX46IHw.js";import"./withOsdkMetrics-SWW3I-lj.js";import"./makeExternalStore-BTG-ldQg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
