import{j as r,M as s}from"./iframe-CKGXZdUd.js";import{P as p}from"./pdf-viewer-BOqbf8f0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DDqjdb0P.js";import"./preload-helper-D-D_Qx_N.js";import"./PdfRenderer-BQV1nqry.js";import"./index-CBZIuX82.js";import"./PdfViewer-DEpPRKMV.js";import"./PdfViewer.module.css-D4PBW7C6.js";import"./PdfViewerAnnotationLayer-Dbiq-ZRr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-PUGyow9s.js";import"./PdfViewerOutlineSidebar-DoVfqfQD.js";import"./PdfViewerSidebarHeader-BPtDloed.js";import"./useBaseUiId-1bUrDpZD.js";import"./useControlled-DtdgmWSi.js";import"./CompositeRoot-BqPQQw-3.js";import"./CompositeItem-DJL6BkdA.js";import"./ToolbarRootContext-EryvHoYA.js";import"./composite-aok1y7nX.js";import"./svgIconContainer-3Trf26hR.js";import"./PdfViewerSearchBar-DaF2mzy0.js";import"./chevron-up-DhzQtfH7.js";import"./chevron-down-DJrgvxMv.js";import"./cross-BkeDnqB2.js";import"./PdfViewerSidebar-Dzj3fR_O.js";import"./index-BITpeDcg.js";import"./index-g0MaeY23.js";import"./index-DAFgbO3H.js";import"./PdfViewerToolbar-G-ACT4Ff.js";import"./Button-Dv61x2nZ.js";import"./chevron-right-6SFVQ-vB.js";import"./Input-C_7sB4VL.js";import"./search-BQODn8Gc.js";import"./spin-B4MNAZxq.js";import"./error-D_aBRd00.js";import"./withOsdkMetrics-CUTak4OL.js";import"./makeExternalStore-t9OzsKWn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
