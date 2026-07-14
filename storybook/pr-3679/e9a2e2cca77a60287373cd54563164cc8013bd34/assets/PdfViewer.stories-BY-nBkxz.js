import{j as r,M as s}from"./iframe-DNMmx6Si.js";import{P as p}from"./pdf-viewer-C-qnf9Db.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DMzPhl6X.js";import"./preload-helper-B1C098Cz.js";import"./PdfRenderer-BVxXdRom.js";import"./index-BZhLFndM.js";import"./PdfViewer-BhEnhl69.js";import"./PdfViewer.module.css-Ct1ICy05.js";import"./PdfViewerAnnotationLayer-pcuUpvwl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BycA3AQj.js";import"./PdfViewerOutlineSidebar-DdCkGXiJ.js";import"./PdfViewerSidebarHeader-AqvWunrG.js";import"./useBaseUiId-DtSuWrMk.js";import"./useControlled-DrbXtnkc.js";import"./CompositeRoot-B7fo95do.js";import"./CompositeItem-CHAE4geL.js";import"./ToolbarRootContext-BNfRMznZ.js";import"./composite-DB3ZBswo.js";import"./svgIconContainer-D2PwOoz0.js";import"./PdfViewerSearchBar-DhjieliG.js";import"./chevron-up-4VBTAn6n.js";import"./chevron-down-BmnrMR4d.js";import"./cross-CeSpPuQx.js";import"./PdfViewerSidebar-BPzhdslb.js";import"./index-iN6-cvPZ.js";import"./index-Cb0pqKCg.js";import"./index-D64uu6P9.js";import"./PdfViewerToolbar-D0bJ3X_I.js";import"./Button-ByNN6eB9.js";import"./chevron-right-BFNrPuwb.js";import"./Input-cuE84c5_.js";import"./search-pbEf8tls.js";import"./spin-1SFgcApD.js";import"./error-jHk7Y2QZ.js";import"./withOsdkMetrics-C3JDtrZP.js";import"./makeExternalStore-DdKyYX8n.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
