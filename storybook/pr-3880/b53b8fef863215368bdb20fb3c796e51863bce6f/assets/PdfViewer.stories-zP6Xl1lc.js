import{j as r,M as s}from"./iframe-C9HB86if.js";import{P as p}from"./pdf-viewer-D74z61Jy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BIDPqQP-.js";import"./preload-helper-rFANKmdh.js";import"./PdfViewer-D9_s1atB.js";import"./index-CVyRPfKn.js";import"./BasePdfViewer-Cae2iM8E.js";import"./BasePdfViewer.module.css-BVsHaLzT.js";import"./PdfViewerAnnotationLayer-B6NabeTh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BEdSbxAr.js";import"./PdfViewerOutlineSidebar-DqKckdCN.js";import"./PdfViewerSidebarHeader-C-M-SEc7.js";import"./useBaseUiId-ClGI3kD_.js";import"./useControlled-EwxAbnnM.js";import"./CompositeRoot-DIFQ_VLs.js";import"./CompositeItem-CsJuLa-c.js";import"./ToolbarRootContext-DXQuQHMp.js";import"./composite-C64kubUR.js";import"./svgIconContainer-DWuV-Vpk.js";import"./PdfViewerSearchBar-DQXEKQjV.js";import"./chevron-up-CjfbohAU.js";import"./chevron-down-DIEjexWB.js";import"./cross-D03jwveB.js";import"./PdfViewerSidebar-8eall3B6.js";import"./index-CuMVRYrp.js";import"./index-C_aN6gDN.js";import"./index-BZ_jxMnq.js";import"./PdfViewerToolbar-CG8prs8d.js";import"./Button-Dy6rgqj6.js";import"./chevron-right-D9auTPMe.js";import"./Input-AYOPk6Tg.js";import"./search-DZMUxcm3.js";import"./spin-x2tsQb-D.js";import"./error-44gbpeNf.js";import"./withOsdkMetrics-BhEmmhw8.js";import"./makeExternalStore-eol4uEvM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
