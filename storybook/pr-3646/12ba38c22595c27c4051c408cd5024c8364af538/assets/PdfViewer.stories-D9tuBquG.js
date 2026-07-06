import{j as r,M as s}from"./iframe-DEgD9mwP.js";import{P as p}from"./pdf-viewer-Cf57HcQO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-X8MF_GV3.js";import"./preload-helper-DDVA4ssE.js";import"./PdfRenderer-ipPd0WGL.js";import"./index-bdJVEOKe.js";import"./PdfViewer-Jwqld_l6.js";import"./PdfViewer.module.css-Co8TkMlc.js";import"./PdfViewerAnnotationLayer-CH3Cyf0Z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-pbGK42G-.js";import"./PdfViewerOutlineSidebar-XWrJB6c8.js";import"./PdfViewerSidebarHeader-DqSQIQEA.js";import"./useBaseUiId-CXEqk653.js";import"./useControlled-CWY5C05I.js";import"./CompositeRoot-BvIMK1zO.js";import"./CompositeItem-BLihv9qS.js";import"./ToolbarRootContext-YbsD03ko.js";import"./composite-uwHeBaDd.js";import"./svgIconContainer-D_vAAkRY.js";import"./PdfViewerSearchBar-KE8Cmt8g.js";import"./chevron-up-BRWIPu7d.js";import"./chevron-down-Dr67unvz.js";import"./cross-XtumbLI8.js";import"./PdfViewerSidebar-B0CbbbkE.js";import"./index-WNHw1y1q.js";import"./index-DpvTJa_l.js";import"./index-BWKTLOrJ.js";import"./PdfViewerToolbar-LYHCN7IC.js";import"./Button-DWmScXnL.js";import"./chevron-right-DGECgMlY.js";import"./Input-BOIlH6v-.js";import"./search-Bj4YLvo-.js";import"./spin-1Y5ORzTl.js";import"./error-BGBSCHKT.js";import"./withOsdkMetrics-D0TGCU5y.js";import"./makeExternalStore-HdU3nr6h.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
