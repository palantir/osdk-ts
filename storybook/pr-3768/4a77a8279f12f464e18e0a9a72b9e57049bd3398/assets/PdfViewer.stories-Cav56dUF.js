import{j as r,M as s}from"./iframe-BFrg0_G6.js";import{P as p}from"./pdf-viewer-BvvY-KyS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-j_lqYbBC.js";import"./preload-helper-DCHyxNf-.js";import"./PdfRenderer-Cb_twVt2.js";import"./index-BbTS_0ql.js";import"./PdfViewer-CdZ8M9Rj.js";import"./PdfViewer.module.css-SQXj-XWA.js";import"./PdfViewerAnnotationLayer-DL_abZ5r.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BdFhXtTH.js";import"./PdfViewerOutlineSidebar-hA2x_3vr.js";import"./PdfViewerSidebarHeader-Co1_4spN.js";import"./useBaseUiId-E-s0fCKQ.js";import"./useControlled-BXk3f0MQ.js";import"./CompositeRoot-DUAVapON.js";import"./CompositeItem-Duz7YqvH.js";import"./ToolbarRootContext-y5WYMk6Y.js";import"./composite-Bj_txaLg.js";import"./svgIconContainer-C3A4Lnit.js";import"./PdfViewerSearchBar-CkExxVSg.js";import"./chevron-up-D6hTfRWA.js";import"./chevron-down-DdY7c1tH.js";import"./cross-C40Lh1kR.js";import"./PdfViewerSidebar-LBUECTA3.js";import"./index-D3rKwtfg.js";import"./index-Dgz7cx6a.js";import"./index-Cqvom3Bd.js";import"./PdfViewerToolbar-C6K-uKkG.js";import"./Button-DEq5-vBs.js";import"./chevron-right-DBod_TxX.js";import"./Input-BW0b3JTl.js";import"./search-PML7rR61.js";import"./spin-BqdL3mPX.js";import"./error-iK44Tvf9.js";import"./withOsdkMetrics-fB2lnNbV.js";import"./makeExternalStore-9ImN4-B2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
