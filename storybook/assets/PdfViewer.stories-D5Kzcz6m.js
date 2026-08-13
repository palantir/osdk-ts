import{j as r,M as s}from"./iframe-C8bv5M5q.js";import{P as p}from"./pdf-viewer-BTIzXfnw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D-tfuYr0.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-CyVROpOP.js";import"./index-aA6dFdbY.js";import"./BasePdfViewer-DdneFGGy.js";import"./BasePdfViewer.module.css-B33Wjz9Q.js";import"./PdfViewerAnnotationLayer-3oz28Lr6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVUW8e_I.js";import"./PdfViewerOutlineSidebar-DWzEeUZk.js";import"./PdfViewerSidebarHeader-B_wUezEe.js";import"./useBaseUiId-DGJFJt6n.js";import"./useControlled-BCYGQpmo.js";import"./CompositeRoot-DTy2zQ6V.js";import"./CompositeItem-CV5yn9v3.js";import"./ToolbarRootContext-C4tMhNXy.js";import"./composite-BERdqvW-.js";import"./svgIconContainer-D7NvghIU.js";import"./PdfViewerSearchBar-YYBTxRpW.js";import"./chevron-up-CyqJw4DZ.js";import"./chevron-down-C7oxNI6k.js";import"./cross-BoinwVnp.js";import"./PdfViewerSidebar-CayxtLOE.js";import"./index-BKjCZT87.js";import"./index-BLJUhLms.js";import"./index-CLxUnHEQ.js";import"./PdfViewerToolbar-Bi8BWx3T.js";import"./Button-Cl8oC4P3.js";import"./chevron-right-sCN9hrMC.js";import"./Input-BEhEtBHk.js";import"./search-Bk10Osf-.js";import"./spin-RU0qTLhg.js";import"./error-GoMWkPTV.js";import"./withOsdkMetrics-CmCV1Tt1.js";import"./makeExternalStore-DYR8gV5O.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
