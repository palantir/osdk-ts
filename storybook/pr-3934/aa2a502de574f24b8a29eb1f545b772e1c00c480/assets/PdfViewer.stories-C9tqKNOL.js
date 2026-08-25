import{j as r,M as s}from"./iframe-DYuNygDT.js";import{P as p}from"./pdf-viewer-m1jKNW9E.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BiF4cUke.js";import"./preload-helper-DNcVOp9p.js";import"./PdfViewer-C0yFGw0E.js";import"./index-Z-VamNUn.js";import"./BasePdfViewer-B6k6_C-K.js";import"./BasePdfViewer.module.css-BjcjhBL9.js";import"./PdfViewerAnnotationLayer-Df3A5d9r.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CHfP3UCH.js";import"./PdfViewerOutlineSidebar-ee4oYBiy.js";import"./PdfViewerSidebarHeader-63xpy4uB.js";import"./useBaseUiId-BcxI-vr3.js";import"./useControlled-BuiEHDXU.js";import"./CompositeRoot-P-hnmmhH.js";import"./CompositeItem-DAdd__ur.js";import"./ToolbarRootContext-BNqu3LLk.js";import"./composite-B8-6F05C.js";import"./svgIconContainer-DW4S_s8v.js";import"./PdfViewerSearchBar-ECHMBSOo.js";import"./chevron-up-L85UIa65.js";import"./chevron-down-DwRyFZmE.js";import"./cross-BAgwegJv.js";import"./PdfViewerSidebar-DMWp0FDo.js";import"./index-Bq3G2Qv2.js";import"./index-CJc8tiXf.js";import"./index-B54hZF59.js";import"./PdfViewerToolbar-qrboXSga.js";import"./Button-BsHu9zTC.js";import"./chevron-right-Bnw5KYFF.js";import"./Input-CDNL1w7C.js";import"./search-DIPEzkiP.js";import"./spin-UvLa36zZ.js";import"./error-DXNNzXjG.js";import"./withOsdkMetrics-DuapMseQ.js";import"./makeExternalStore-BtgLem_Q.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
