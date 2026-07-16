import{j as r,M as s}from"./iframe-DsOkoFr5.js";import{P as p}from"./pdf-viewer-BZwoJPhp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BS3GOrGT.js";import"./preload-helper-DDrF1arX.js";import"./PdfRenderer-D6LCjltZ.js";import"./index-DOsDpS7O.js";import"./PdfViewer-C_0NS0qL.js";import"./PdfViewer.module.css-BhQ3RhfO.js";import"./PdfViewerAnnotationLayer-C0-860yu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-q06aqY_n.js";import"./PdfViewerOutlineSidebar-C5nBWofE.js";import"./PdfViewerSidebarHeader-BDfsIsny.js";import"./useBaseUiId-BE5v2SQN.js";import"./useControlled-BkLrjPfa.js";import"./CompositeRoot-Du7dt6wJ.js";import"./CompositeItem-DrB_SG8W.js";import"./ToolbarRootContext-CmI7MhD0.js";import"./composite-Dlz3RSxv.js";import"./svgIconContainer-CkZLof82.js";import"./PdfViewerSearchBar-Bl214akY.js";import"./chevron-up-CmVYg3u-.js";import"./chevron-down-dLcXnj71.js";import"./cross-CzTMhPQH.js";import"./PdfViewerSidebar-DQORDU2v.js";import"./index-7T-2Bfvx.js";import"./index-BVf5_tEx.js";import"./index-INnzLx9r.js";import"./PdfViewerToolbar-C8ywtRoW.js";import"./Button-Cd51dD9e.js";import"./chevron-right-CMPrzh2Z.js";import"./Input-CCC1W81Y.js";import"./search-DPhlC-LZ.js";import"./spin-B4bo8R6v.js";import"./error-DPCGqoet.js";import"./withOsdkMetrics-6xBHFVw9.js";import"./makeExternalStore-C3CfdmAs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
