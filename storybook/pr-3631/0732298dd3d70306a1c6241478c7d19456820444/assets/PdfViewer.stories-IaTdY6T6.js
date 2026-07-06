import{j as r,M as s}from"./iframe-Caoetw6_.js";import{P as p}from"./pdf-viewer-DQumL0gk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CtvzGRLt.js";import"./preload-helper-SZ30oZAw.js";import"./PdfRenderer-DQQe1ko6.js";import"./index-CCzpBXXF.js";import"./PdfViewer-Bc2wY_hQ.js";import"./PdfViewer.module.css-BZN_c0p2.js";import"./PdfViewerAnnotationLayer-ClzRbslZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BixunNr6.js";import"./PdfViewerOutlineSidebar-A_J--M3w.js";import"./PdfViewerSidebarHeader-DCay2H6r.js";import"./useBaseUiId-Ciu3MufG.js";import"./useControlled-ChKxV85n.js";import"./CompositeRoot-DVu5RjyF.js";import"./CompositeItem-CVZHUpv4.js";import"./ToolbarRootContext-C6sMNeZZ.js";import"./composite-Di6SQr-1.js";import"./svgIconContainer-B6cLoNG8.js";import"./PdfViewerSearchBar-DsLaHerE.js";import"./chevron-up-BAvHlJmk.js";import"./chevron-down-CDhh-yxK.js";import"./cross-SqcWWNCE.js";import"./PdfViewerSidebar-9pifZjvW.js";import"./index-DshzZ2zn.js";import"./index-Bzf-NvMI.js";import"./index-t110U8eF.js";import"./PdfViewerToolbar-g_aQm__Q.js";import"./Button-DREVl4c5.js";import"./chevron-right-B6u1ee_T.js";import"./Input-CPc0IIx2.js";import"./search-DTiCpr8d.js";import"./spin-CZTCAlVO.js";import"./error-CfA61cfJ.js";import"./withOsdkMetrics-Dz388qsn.js";import"./makeExternalStore-uBpjLFtx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
