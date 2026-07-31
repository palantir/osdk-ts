import{j as r,M as s}from"./iframe-BIlQe-_e.js";import{P as p}from"./pdf-viewer-D9-amImG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DU0LrFzJ.js";import"./preload-helper-BFh2Wy6v.js";import"./PdfRenderer-DqRG5D0C.js";import"./index-DyQxAk9R.js";import"./PdfViewer-DlXCVouN.js";import"./PdfViewer.module.css-BTIqb9Oq.js";import"./PdfViewerAnnotationLayer-CmI9jUSg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bon2ZrH-.js";import"./PdfViewerOutlineSidebar-SlqcWv05.js";import"./PdfViewerSidebarHeader-CDTwmyPQ.js";import"./useBaseUiId-Lc4z0DNa.js";import"./useControlled-BXHG-GT_.js";import"./CompositeRoot-D-RvZsZG.js";import"./CompositeItem-CMnAuhM-.js";import"./ToolbarRootContext-BiHeKQZa.js";import"./composite-CXGKVIWm.js";import"./svgIconContainer-CnLOcakL.js";import"./PdfViewerSearchBar-38V9afdD.js";import"./chevron-up-CGHmI735.js";import"./chevron-down-CkrYyXCx.js";import"./cross-CmtgrNNa.js";import"./PdfViewerSidebar-DXlc3XAW.js";import"./index-D1LAJk1I.js";import"./index-KCNI5t5s.js";import"./index-DpNXYgWj.js";import"./PdfViewerToolbar-rlllB7CG.js";import"./Button-BIbJzGLK.js";import"./chevron-right-DoFd7Q91.js";import"./Input-DUUbREQT.js";import"./search-CvXaJDz5.js";import"./spin-DSGrDfiL.js";import"./error-BCCPbpND.js";import"./withOsdkMetrics-DGZYkXqG.js";import"./makeExternalStore-Dm1wHibL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
