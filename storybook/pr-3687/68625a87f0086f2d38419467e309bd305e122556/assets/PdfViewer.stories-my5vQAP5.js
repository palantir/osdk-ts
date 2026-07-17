import{j as r,M as s}from"./iframe-BhMda2LY.js";import{P as p}from"./pdf-viewer-FA_Tp-1G.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-4pS4REuK.js";import"./preload-helper-75e-5k4t.js";import"./PdfRenderer-BUnd4qpu.js";import"./index-C5L2YS_F.js";import"./PdfViewer-CirL0FMM.js";import"./PdfViewer.module.css-DKAdQUTE.js";import"./PdfViewerAnnotationLayer-CmWCRWsG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D2vVaeTU.js";import"./PdfViewerOutlineSidebar-mmPGTSFo.js";import"./PdfViewerSidebarHeader-lvqvPUE4.js";import"./useBaseUiId-CWyEnpaT.js";import"./useControlled-YvV-9ymG.js";import"./CompositeRoot-CYBSLko_.js";import"./CompositeItem-RIDogeUw.js";import"./ToolbarRootContext-BRlTnNWp.js";import"./composite-CKcHThLd.js";import"./svgIconContainer-Mb9rdeUY.js";import"./PdfViewerSearchBar-D3XwvTQp.js";import"./chevron-up-AivYlxUt.js";import"./chevron-down-pfWabtUx.js";import"./cross-5ajNaQzh.js";import"./PdfViewerSidebar-FyFCM2zC.js";import"./index-D59wFyg4.js";import"./index-BIbgCmH4.js";import"./index-ChI2AZSM.js";import"./PdfViewerToolbar-CZi2_AA1.js";import"./Button-s_pszfzc.js";import"./chevron-right-B40Ozlv1.js";import"./Input-fgFDjqfv.js";import"./search-Dlo0lLNw.js";import"./spin-CYRZNlaz.js";import"./error-Bswcd5QK.js";import"./withOsdkMetrics-DmY73Wc-.js";import"./makeExternalStore-BaQIzF5m.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
