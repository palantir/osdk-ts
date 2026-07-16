import{j as r,M as s}from"./iframe-CV7oxMAA.js";import{P as p}from"./pdf-viewer-Dbfuc2GY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DW2MvH1h.js";import"./preload-helper-CkuiwHds.js";import"./PdfRenderer-DyAawAmu.js";import"./index-C_nnM2jx.js";import"./PdfViewer-dbCNdpkd.js";import"./PdfViewer.module.css-Da-9f8RV.js";import"./PdfViewerAnnotationLayer-SyaEitCG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DztS9rwV.js";import"./PdfViewerOutlineSidebar-D4uxgiIs.js";import"./PdfViewerSidebarHeader--tTw0Cw0.js";import"./useBaseUiId-Cg8u4ZfO.js";import"./useControlled-HualhFdM.js";import"./CompositeRoot-a-XQ-NVL.js";import"./CompositeItem-DAPrQVEb.js";import"./ToolbarRootContext-Bm3KSKaB.js";import"./composite-BhUOxeqc.js";import"./svgIconContainer-kYrCvsi7.js";import"./PdfViewerSearchBar-CxNuTiO3.js";import"./chevron-up-C_UTO7uJ.js";import"./chevron-down-BM_z1ri0.js";import"./cross-B3R0YG-c.js";import"./PdfViewerSidebar-CvEd1kXu.js";import"./index-C5ddOBQi.js";import"./index-CQ7rwZE6.js";import"./index-zTmSyAXD.js";import"./PdfViewerToolbar-v0IETOk_.js";import"./Button-hkPpZDNU.js";import"./chevron-right-DQWFxWMP.js";import"./Input-HITKfqWe.js";import"./search-BgXA6lwn.js";import"./spin-D5qwDXpl.js";import"./error-BEEZg5s0.js";import"./withOsdkMetrics-DsYJAIL0.js";import"./makeExternalStore-CW2Jq-I3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
