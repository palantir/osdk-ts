import{j as r,M as s}from"./iframe-LK7OOuZ_.js";import{P as p}from"./pdf-viewer-DyeIPmk9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BXNXvRog.js";import"./preload-helper-Day3KTOO.js";import"./PdfViewer-DUXbOi-q.js";import"./index-CwVQ5Krz.js";import"./BasePdfViewer-eMy3bfBv.js";import"./BasePdfViewer.module.css-DhukoDnB.js";import"./PdfViewerAnnotationLayer-VlInphr_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D3L1brjO.js";import"./PdfViewerOutlineSidebar-fn68D_5r.js";import"./PdfViewerSidebarHeader-BnjSRxQG.js";import"./useBaseUiId-B6K6_xMQ.js";import"./useControlled-D18eST4p.js";import"./CompositeRoot-Dmc_j21S.js";import"./CompositeItem-Dzq7tRMR.js";import"./ToolbarRootContext-DqesGwMA.js";import"./composite-lCB-i_uM.js";import"./svgIconContainer-Bm4iT3eI.js";import"./PdfViewerSearchBar-B7bnTLP9.js";import"./chevron-up-Ds1TiWbO.js";import"./chevron-down-Dq5oFVl8.js";import"./cross-BIG9tMZn.js";import"./PdfViewerSidebar-GqrTfIs0.js";import"./index-XVTMlPM4.js";import"./index-BxZZb_0K.js";import"./index-CNFZjGa7.js";import"./PdfViewerToolbar-BY4omDop.js";import"./Button-DOOnpy1b.js";import"./chevron-right-Cephubyw.js";import"./Input-zz_AAM2k.js";import"./search-DoOWQiUr.js";import"./spin-bfmwrEW_.js";import"./error-BqhqjqOC.js";import"./withOsdkMetrics-BMjEIbaa.js";import"./makeExternalStore-BVPBtEqc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
