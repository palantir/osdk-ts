import{j as r,M as s}from"./iframe-BeWD4gFl.js";import{P as p}from"./pdf-viewer-DL22gfMn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BwOUraBm.js";import"./preload-helper-Dw7qT2Q0.js";import"./PdfRenderer-C2h6S14T.js";import"./index-BXKqMrkH.js";import"./PdfViewer-CyCG4wk4.js";import"./PdfViewer.module.css-DK10JmxS.js";import"./PdfViewerAnnotationLayer-DReJkXjN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BQV2NWoY.js";import"./PdfViewerOutlineSidebar-oroFJFxP.js";import"./PdfViewerSidebarHeader-D5ln82zm.js";import"./useBaseUiId-BGPDWa3G.js";import"./useControlled-Dqdvh-ch.js";import"./CompositeRoot-C-XgTyoc.js";import"./CompositeItem-B0kK1CX0.js";import"./ToolbarRootContext-D9znTR5H.js";import"./composite-nAA0SdpW.js";import"./svgIconContainer-DXjOt0sW.js";import"./PdfViewerSearchBar-Bq9slKsr.js";import"./chevron-up-B6aZlup3.js";import"./chevron-down-jcoLaz3a.js";import"./cross-D5kvX5ak.js";import"./PdfViewerSidebar-MmnL6TvZ.js";import"./index-CAel4vVU.js";import"./index-Cl6Uh4EY.js";import"./index-4cN8XWCC.js";import"./PdfViewerToolbar-DOnNT3ip.js";import"./Button-CRhC6gUl.js";import"./chevron-right-BZdggGE3.js";import"./Input-CAOYmcYS.js";import"./search-CI0bdP3y.js";import"./spin-Bc4DJe7n.js";import"./error-zP3pcuoR.js";import"./withOsdkMetrics-t9e0BscJ.js";import"./makeExternalStore-C1_YkvoA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
