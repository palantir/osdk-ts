import{j as r,M as s}from"./iframe-CDdobGVl.js";import{P as p}from"./pdf-viewer-B0qtZ32l.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BNDTpl2j.js";import"./preload-helper-fzUqsnoB.js";import"./PdfRenderer-DXErTMM7.js";import"./index-UG7IPa_e.js";import"./PdfViewer-DQA4t6Oe.js";import"./PdfViewer.module.css-DX3bmOUO.js";import"./PdfViewerAnnotationLayer-BOyL0nqI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-amlzTuU-.js";import"./PdfViewerOutlineSidebar-Brf6qOnO.js";import"./PdfViewerSidebarHeader-BQhJmROd.js";import"./useBaseUiId-DRnSBJCG.js";import"./useControlled-y0BuUqJ1.js";import"./CompositeRoot-MlCPyca4.js";import"./CompositeItem-BV2a_jIB.js";import"./ToolbarRootContext-eacV9sqC.js";import"./composite-B7TSCQsg.js";import"./svgIconContainer-CgDgIgq2.js";import"./PdfViewerSearchBar-BbN5t8vW.js";import"./chevron-up-Chz6R7ng.js";import"./chevron-down-D3adfjjO.js";import"./cross-DCH_An2W.js";import"./PdfViewerSidebar-UHdZ1gjV.js";import"./index-Dtnd9Ao8.js";import"./index-DuK41-3i.js";import"./index-DsQcLISu.js";import"./PdfViewerToolbar-CghbUboW.js";import"./Button-DV2ka0Gf.js";import"./chevron-right-Cs65iOtV.js";import"./Input-B8c3wvNn.js";import"./search-DhR-FEPU.js";import"./spin-CDiU0vw9.js";import"./error-CWlEyLzu.js";import"./withOsdkMetrics-B9eQL1mQ.js";import"./makeExternalStore-BwTsluQv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
