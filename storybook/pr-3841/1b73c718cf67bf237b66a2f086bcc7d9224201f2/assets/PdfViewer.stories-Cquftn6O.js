import{j as r,M as s}from"./iframe-D7UfG5lN.js";import{P as p}from"./pdf-viewer-C0HCdwA-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Crood5BX.js";import"./preload-helper-fsR8YlZl.js";import"./PdfViewer-D3UaOC9g.js";import"./index-CX_4Y7_E.js";import"./BasePdfViewer-B8LQnkia.js";import"./BasePdfViewer.module.css-DKyvV5i4.js";import"./PdfViewerAnnotationLayer-Cs0zjMkh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bp71plFF.js";import"./PdfViewerOutlineSidebar-CyC4Ak0x.js";import"./PdfViewerSidebarHeader-BfLdoSIZ.js";import"./useBaseUiId-DO-f1Z6D.js";import"./useControlled-9hlnEbGI.js";import"./CompositeRoot-DtdNAfWf.js";import"./CompositeItem-fbZDtKEs.js";import"./ToolbarRootContext-49Q9r-mz.js";import"./composite-CgMpynF4.js";import"./svgIconContainer-DJd8wnEJ.js";import"./PdfViewerSearchBar-Bdw4hpcS.js";import"./chevron-up-DAlTtwEK.js";import"./chevron-down-6NKtD6R3.js";import"./cross-BqS1fcFn.js";import"./PdfViewerSidebar-BJGPNziw.js";import"./index-C29X8ucR.js";import"./index-lBcmGDx7.js";import"./index-F7_7yuPT.js";import"./PdfViewerToolbar-Cgdkrpq0.js";import"./Button-Bwe_2Hp9.js";import"./chevron-right-Nm73nVXK.js";import"./Input-CWcjnHAg.js";import"./search-DtcC4DIl.js";import"./spin-C0rOuDJV.js";import"./error-CNylSIIz.js";import"./withOsdkMetrics-C0ALIoPR.js";import"./makeExternalStore-CCIQpKDE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
