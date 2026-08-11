import{j as r,M as s}from"./iframe-BfP11NvA.js";import{P as p}from"./pdf-viewer-OTOEGb0E.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-L6XZjK02.js";import"./preload-helper-Ar0nMGVE.js";import"./PdfRenderer-IKqnyFQa.js";import"./index-BtDjnjzp.js";import"./PdfViewer-CZxFzPRH.js";import"./PdfViewer.module.css-C9fiGL0I.js";import"./PdfViewerAnnotationLayer-BzGLfvio.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DBMF81T4.js";import"./PdfViewerOutlineSidebar-DqwqJTbv.js";import"./PdfViewerSidebarHeader-BaCfeLzb.js";import"./useBaseUiId-B7gorTvD.js";import"./useControlled-CHjSEWNF.js";import"./CompositeRoot-C6fU6xLi.js";import"./CompositeItem-D36geE3c.js";import"./ToolbarRootContext-DH5dsK8B.js";import"./composite-_14HkfA4.js";import"./svgIconContainer-CxA6KOQ9.js";import"./PdfViewerSearchBar-ChHlt74R.js";import"./chevron-up-WprPzPar.js";import"./chevron-down-DZOqnKTY.js";import"./cross-COrWa_24.js";import"./PdfViewerSidebar-BlSle5Td.js";import"./index-x1DBPJSn.js";import"./index-Yx7vvy63.js";import"./index-BimT9-xO.js";import"./PdfViewerToolbar-DLgFpTHw.js";import"./Button-C9Ik4Jdr.js";import"./chevron-right-DjDaCARV.js";import"./Input-RCL9WojW.js";import"./search-NB8ZSPAF.js";import"./spin-CStLz2Kw.js";import"./error-CCCFoFwU.js";import"./withOsdkMetrics-kOUFMrtB.js";import"./makeExternalStore-D_R0EHxO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
