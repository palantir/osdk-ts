import{j as r,M as s}from"./iframe-C0YRWbnk.js";import{P as p}from"./pdf-viewer-BHQOMk9b.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DStDYajP.js";import"./preload-helper-DJm-S9xr.js";import"./PdfRenderer-DniHpAFn.js";import"./index-D-GnFbFW.js";import"./PdfViewer-BAbcPnnN.js";import"./PdfViewer.module.css-CcMcHDJE.js";import"./PdfViewerAnnotationLayer-DHbQrlwf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DgINn34L.js";import"./PdfViewerOutlineSidebar-D9XJ93h7.js";import"./PdfViewerSidebarHeader-B17Gdn8J.js";import"./useBaseUiId-9LAdo2XB.js";import"./useControlled-C38K3gha.js";import"./CompositeRoot-JUA2dJXG.js";import"./CompositeItem-BSQSWm01.js";import"./ToolbarRootContext-BLdmsZs5.js";import"./composite-DCtqrRFQ.js";import"./svgIconContainer-Bv3t7ToX.js";import"./PdfViewerSearchBar-DNfeKLoF.js";import"./chevron-up-fTVWdMJY.js";import"./chevron-down-DJVFIxzo.js";import"./cross-CtvSxEum.js";import"./PdfViewerSidebar--Ul-EKos.js";import"./index-BqSO3L2_.js";import"./index-C_1SSvBg.js";import"./index-2U3G7mDw.js";import"./PdfViewerToolbar-Cp_0R2Nl.js";import"./Button-8q1iQczr.js";import"./chevron-right-eI1oZuSl.js";import"./Input-Dn7f8cPG.js";import"./search-BPkPp-4N.js";import"./spin-DaLRUxi0.js";import"./error-BU7Rjf2b.js";import"./withOsdkMetrics-DI8dqYrl.js";import"./makeExternalStore-gx_YSkq8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
