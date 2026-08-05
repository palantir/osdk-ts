import{j as r,M as s}from"./iframe-BRmpzCZE.js";import{P as p}from"./pdf-viewer-Cs1kbjKt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-_FQAk2_Y.js";import"./preload-helper-B5zwBkL_.js";import"./PdfRenderer-3lU7IMti.js";import"./index-DTo1AYJc.js";import"./PdfViewer-TGC6vtWy.js";import"./PdfViewer.module.css-D3h7rBHi.js";import"./PdfViewerAnnotationLayer-CNIo70T8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dkj-yQUF.js";import"./PdfViewerOutlineSidebar-w1UPX5tw.js";import"./PdfViewerSidebarHeader-C-N7fjgq.js";import"./useBaseUiId-BWWrNU9X.js";import"./useControlled-0nxGMda2.js";import"./CompositeRoot-H7maBnXS.js";import"./CompositeItem-B9M_u-lg.js";import"./ToolbarRootContext-Czmaa9ZO.js";import"./composite-BoPdrtMz.js";import"./svgIconContainer-ClB0EAWF.js";import"./PdfViewerSearchBar-QuLCQ3px.js";import"./chevron-up-BgHdgWw6.js";import"./chevron-down-9MEkRqsE.js";import"./cross-BrjpUCyw.js";import"./PdfViewerSidebar-ChXY9G6Z.js";import"./index-DyDKdM2i.js";import"./index-CNCITnU0.js";import"./index-CuSmUnvX.js";import"./PdfViewerToolbar-rGMUdtFR.js";import"./Button-D9yfxBKS.js";import"./chevron-right-BZJCUwDn.js";import"./Input-DevgbnOf.js";import"./search-QrPcr5Jb.js";import"./spin-V6e_I_OE.js";import"./error-Cbn_oEWX.js";import"./withOsdkMetrics-CD_RD48C.js";import"./makeExternalStore-CeZQOp3r.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
