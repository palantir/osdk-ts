import{j as r,M as s}from"./iframe-BRf1YbHX.js";import{P as p}from"./pdf-viewer-BZAuQlf2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C4n-YDit.js";import"./preload-helper-DGgabIEW.js";import"./PdfRenderer-g3DSA5GP.js";import"./index-BW32cp61.js";import"./PdfViewer-CHWKhr_q.js";import"./PdfViewer.module.css-BoDsYjQX.js";import"./PdfViewerAnnotationLayer-5y-sSqhQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cptz19r4.js";import"./PdfViewerOutlineSidebar-B4iHVrGK.js";import"./PdfViewerSidebarHeader-BXrvyGZW.js";import"./useBaseUiId-CvubAMpM.js";import"./useControlled-tOUMdbqt.js";import"./CompositeRoot-Dokb4crs.js";import"./CompositeItem-C-XZ9AMd.js";import"./ToolbarRootContext-Btka9goz.js";import"./composite-CdMSFvSg.js";import"./svgIconContainer-BQSmYZFS.js";import"./PdfViewerSearchBar-CtaGvLUK.js";import"./chevron-up-CG6UnAnp.js";import"./chevron-down-CCNuSU_Y.js";import"./cross-DH-1DeB9.js";import"./PdfViewerSidebar-fc1h9Rfg.js";import"./index-Cl10T_A-.js";import"./index-CxMucO3r.js";import"./index-DrmZfwHC.js";import"./PdfViewerToolbar-RvFI7GkC.js";import"./Button-xV56_hno.js";import"./chevron-right-Buh4PsBW.js";import"./Input-DmJIp4x4.js";import"./search-B6TANuqO.js";import"./spin-Jk5aWeGv.js";import"./error-DysCelmF.js";import"./withOsdkMetrics-CQFtgL6W.js";import"./makeExternalStore-BSabzYec.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
