import{j as r,M as s}from"./iframe-BppbSrhx.js";import{P as p}from"./pdf-viewer-DzyHEAA3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DOrwWySB.js";import"./preload-helper-Bw11sjj1.js";import"./PdfViewer-DuYOin9b.js";import"./index-CJZanbl2.js";import"./BasePdfViewer-SfHqrMKQ.js";import"./BasePdfViewer.module.css-BuH_PFBi.js";import"./PdfViewerAnnotationLayer-DfpcPHtm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-FNKMCk5z.js";import"./PdfViewerOutlineSidebar-BIUNAqIA.js";import"./PdfViewerSidebarHeader-BiMV1iPQ.js";import"./useBaseUiId-qZ19-Hcf.js";import"./useControlled-Cyv1OlQu.js";import"./CompositeRoot-D8L7w82i.js";import"./CompositeItem-Bf84ptir.js";import"./ToolbarRootContext-Us9sChGo.js";import"./composite-C3Q3MArL.js";import"./svgIconContainer-DQpEIb1x.js";import"./PdfViewerSearchBar-CM3tXRY2.js";import"./chevron-up-BZbgJtjJ.js";import"./chevron-down-RK-wSJaV.js";import"./cross-Q-zXxGGB.js";import"./PdfViewerSidebar-YBuRo2LR.js";import"./index-Bg7F7AhM.js";import"./index-BTrAPlHS.js";import"./index-LD31CDcT.js";import"./PdfViewerToolbar-MtFebQRd.js";import"./Button-CpCWCMtk.js";import"./chevron-right-BwxZdxlU.js";import"./Input-TL4PyLM9.js";import"./search-4uPMjt9H.js";import"./spin-CQCb4GBO.js";import"./error-B6rYlYt_.js";import"./withOsdkMetrics-CEFcST5F.js";import"./makeExternalStore-Bbh9MWGd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
