import{j as r,M as s}from"./iframe-C4zdqVWj.js";import{P as p}from"./pdf-viewer-BZAdb1LN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DHPGQgKs.js";import"./preload-helper-B7IRCv2i.js";import"./PdfRenderer-DSIyu-ww.js";import"./index-CDa3Dpks.js";import"./PdfViewer-B7NwVFV-.js";import"./PdfViewer.module.css-DNUu7oHz.js";import"./PdfViewerAnnotationLayer-CGh-IP0A.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Df3RlfOE.js";import"./PdfViewerOutlineSidebar-D8MnDkcE.js";import"./PdfViewerSidebarHeader-Bd0vlQqU.js";import"./useBaseUiId-C3-O81r1.js";import"./useControlled-BrGKFAOi.js";import"./CompositeRoot-B6khdL-k.js";import"./CompositeItem-BBqAN0oe.js";import"./ToolbarRootContext-Cs3bwfMD.js";import"./composite-BOKzBbqE.js";import"./svgIconContainer-Dl60orHi.js";import"./PdfViewerSearchBar-ByHKFWgb.js";import"./chevron-up-L_BXcmpr.js";import"./chevron-down-BfWdzJim.js";import"./cross-CcKzwauY.js";import"./PdfViewerSidebar-D823vzNP.js";import"./index-DaQh8MoE.js";import"./index-C-EVsM9H.js";import"./index-Bm-WBCaz.js";import"./PdfViewerToolbar-DSBTHQ6W.js";import"./Button-DnwMOogo.js";import"./chevron-right-lg11NBqN.js";import"./Input-CS5KY3Rt.js";import"./search-D_jp9buf.js";import"./spin-BwOA0Z6X.js";import"./error--oEoM1lA.js";import"./withOsdkMetrics-1nDs0-t4.js";import"./makeExternalStore-DB6uj4vP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
