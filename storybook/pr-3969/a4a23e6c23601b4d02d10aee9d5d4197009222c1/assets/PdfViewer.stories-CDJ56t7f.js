import{j as r,M as s}from"./iframe-DetImBFL.js";import{P as p}from"./pdf-viewer-BkRXa8Nj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Clf4Sh4h.js";import"./preload-helper-DN6cOUrg.js";import"./PdfViewer-Z2JHrDf_.js";import"./index-CjK2QqlI.js";import"./BasePdfViewer-Dqo3j01u.js";import"./BasePdfViewer.module.css-BbzuU-0j.js";import"./PdfViewerAnnotationLayer-C2JSMG50.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DUe-TDdO.js";import"./PdfViewerOutlineSidebar-DH2Aw5tQ.js";import"./PdfViewerSidebarHeader-Bmuy-mLI.js";import"./useBaseUiId-DyXUSeTY.js";import"./useControlled-BLemWNqF.js";import"./CompositeRoot-3k0S2our.js";import"./CompositeItem-DSZEDG_X.js";import"./ToolbarRootContext-CemVikP4.js";import"./composite-BM_kJ03V.js";import"./svgIconContainer-CuWFsLi_.js";import"./PdfViewerSearchBar-DCFPRR9n.js";import"./chevron-up-9DGhV6mb.js";import"./chevron-down-CGCRcDmq.js";import"./cross-BTvDRRjf.js";import"./PdfViewerSidebar-AiH3aiPx.js";import"./index-Dz3fekal.js";import"./index-Dbo0Nida.js";import"./index-1NP1-UWN.js";import"./PdfViewerToolbar-CkdBGrU4.js";import"./Button-CQ4Oxn8O.js";import"./chevron-right-NQ9qHnK9.js";import"./Input-X6MfJgE7.js";import"./search-e2lLNT_b.js";import"./spin-PnQ85gm5.js";import"./error-CePwHWcz.js";import"./withOsdkMetrics-tYPfHwL4.js";import"./makeExternalStore-Dta9gR3b.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
