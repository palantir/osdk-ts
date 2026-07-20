import{j as r,M as s}from"./iframe-BKo2uFPD.js";import{P as p}from"./pdf-viewer-3N33PSdZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CBg2HROH.js";import"./preload-helper-Bp44i-n6.js";import"./PdfRenderer-B2Fsm79Q.js";import"./index-CVRtTsuh.js";import"./PdfViewer-BtYOsh-5.js";import"./PdfViewer.module.css-n0I3xcKy.js";import"./PdfViewerAnnotationLayer-Bz_LigAH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwEj7jIC.js";import"./PdfViewerOutlineSidebar-mZj2Wpwv.js";import"./PdfViewerSidebarHeader-C46itDEd.js";import"./useBaseUiId-CyDgzil7.js";import"./useControlled-B1uvXyTX.js";import"./CompositeRoot-DUMsOyxH.js";import"./CompositeItem-BcVlMzq9.js";import"./ToolbarRootContext-TkHSZSpS.js";import"./composite-ohdRGAbz.js";import"./svgIconContainer-BGezaTTE.js";import"./PdfViewerSearchBar-CTf5mDRh.js";import"./chevron-up-CkHDreK1.js";import"./chevron-down-CqPslCtx.js";import"./cross-B7OXBUo9.js";import"./PdfViewerSidebar-E9wE2HaE.js";import"./index-W5UCG72k.js";import"./index-176BX6Gy.js";import"./index-CAT4j1UC.js";import"./PdfViewerToolbar-BV6nFwtF.js";import"./Button-DKTycR-o.js";import"./chevron-right-Bl_G6XEq.js";import"./Input-D_-Ck7Be.js";import"./search-DoqkvAor.js";import"./spin-iYCBQSJw.js";import"./error-BRu96KcQ.js";import"./withOsdkMetrics-DBwDZ3nQ.js";import"./makeExternalStore-Q-JusHk-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
