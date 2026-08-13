import{j as r,M as s}from"./iframe-C_rZf8VU.js";import{P as p}from"./pdf-viewer-DEXH7eQ4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CBm1nhmC.js";import"./preload-helper-BDRz06lj.js";import"./PdfViewer-BfMA-qG1.js";import"./index-0eoKNTmj.js";import"./BasePdfViewer-Bkr5jX_H.js";import"./BasePdfViewer.module.css-BBu6YgXL.js";import"./PdfViewerAnnotationLayer-Cr0fXm1P.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C8iXffWZ.js";import"./PdfViewerOutlineSidebar-O53jCqQo.js";import"./PdfViewerSidebarHeader-DUcEmo94.js";import"./useBaseUiId-D4-miswd.js";import"./useControlled-CAVvn1qm.js";import"./CompositeRoot-B7YLP0lg.js";import"./CompositeItem-BHXn5rIh.js";import"./ToolbarRootContext-ncvyqHVi.js";import"./composite-CvGq7Rf9.js";import"./svgIconContainer-DQ_1btmp.js";import"./PdfViewerSearchBar-BbVTH-2U.js";import"./chevron-up-DC1pQ1Nv.js";import"./chevron-down-A3EFqNUF.js";import"./cross-C3Hnu-vp.js";import"./PdfViewerSidebar-Da-_q2_s.js";import"./index-BlIltlDF.js";import"./index-CV71ZL8j.js";import"./index-O2QWzze5.js";import"./PdfViewerToolbar-CNEn47O0.js";import"./Button-DzuEmTO3.js";import"./chevron-right-D2DpuOOZ.js";import"./Input-B7jGxhwp.js";import"./search-5vADHBeS.js";import"./spin-BCEMgh3S.js";import"./error-C3qfOBR-.js";import"./withOsdkMetrics-Br1MzUKy.js";import"./makeExternalStore-a58P_dwm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
