import{j as r,M as s}from"./iframe-DPayKrhQ.js";import{P as p}from"./pdf-viewer-9a07WmuV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C4wzdCHD.js";import"./preload-helper-qQf5mZcY.js";import"./PdfRenderer-Dq_oMEq4.js";import"./index-DWKYvG9V.js";import"./PdfViewer-DT1hiEXx.js";import"./PdfViewer.module.css-D2vDXhi_.js";import"./PdfViewerAnnotationLayer-Bio-pSN5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B1WcgICO.js";import"./PdfViewerOutlineSidebar-Qhglxiz6.js";import"./PdfViewerSidebarHeader-CSx2NZ-e.js";import"./useBaseUiId-DNI8EcAR.js";import"./useControlled-SvDubTm2.js";import"./CompositeRoot-DcDCpgkZ.js";import"./CompositeItem-Bb4siO63.js";import"./ToolbarRootContext-2Pb0-xcD.js";import"./composite-Cke6VlZT.js";import"./svgIconContainer-ENB8v_KB.js";import"./PdfViewerSearchBar-D_ZMvK8V.js";import"./chevron-up-9KMwzNVD.js";import"./chevron-down-oMnKKoWq.js";import"./cross-C2IePcD5.js";import"./PdfViewerSidebar-CnNt3ftv.js";import"./index-CUEs57Ga.js";import"./index-Xjpnzzz2.js";import"./index-BrP54DIT.js";import"./PdfViewerToolbar-Kt9It45a.js";import"./Button-CX965R45.js";import"./chevron-right-C3mVty2w.js";import"./Input-CNbFsRtW.js";import"./search-DgJNyoZT.js";import"./spin-CBYrxNUy.js";import"./error-CXgnUpf7.js";import"./withOsdkMetrics-BEB15fyq.js";import"./makeExternalStore-DNQ6k_aA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
