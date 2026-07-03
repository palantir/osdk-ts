import{j as r,M as s}from"./iframe-EXlB8Hw6.js";import{P as p}from"./pdf-viewer-nxFlNp-v.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DlreFSuR.js";import"./preload-helper-ClJqTI8x.js";import"./PdfRenderer-BgEVcx1Z.js";import"./index-DB8CD6tO.js";import"./PdfViewer-Db-ST7yS.js";import"./PdfViewer.module.css-Bsr6D4Xq.js";import"./PdfViewerAnnotationLayer-DBm0PQE7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-SFTw3MJV.js";import"./PdfViewerOutlineSidebar-CF9oIBDe.js";import"./PdfViewerSidebarHeader-CZ55_BGB.js";import"./useBaseUiId-BYM8-nrE.js";import"./useControlled-5OO73DFu.js";import"./CompositeRoot-yuYrG5BX.js";import"./CompositeItem-LC3PwtMw.js";import"./ToolbarRootContext-DmSWX11M.js";import"./composite-VJWAxNgE.js";import"./svgIconContainer-C19VWNJ9.js";import"./PdfViewerSearchBar-Brl0mPZ8.js";import"./chevron-up-B5lrcKeE.js";import"./chevron-down-DQ9ZolpR.js";import"./cross-Sn4ImGfp.js";import"./PdfViewerSidebar-BJF0uIXa.js";import"./index-DkyRNjBs.js";import"./index-BR01vcID.js";import"./index-BjC3rOZD.js";import"./PdfViewerToolbar-DDwnvAZQ.js";import"./Button-DSEVwf8U.js";import"./chevron-right-BCfJs_kI.js";import"./Input-DO4sGZbG.js";import"./search-B3sopoRm.js";import"./spin-DRYwDycK.js";import"./error-Ch7ezjp9.js";import"./withOsdkMetrics-Csf8AqAg.js";import"./makeExternalStore-CUi8XUT6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
