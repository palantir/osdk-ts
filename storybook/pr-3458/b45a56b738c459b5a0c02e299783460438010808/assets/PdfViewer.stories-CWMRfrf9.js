import{j as r,M as s}from"./iframe-QL9jjgtT.js";import{P as p}from"./pdf-viewer-q71pa8nW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_bFEQj8.js";import"./preload-helper-BNL5tg_R.js";import"./PdfRenderer-Dt1HTbMO.js";import"./index-C7yMPf9I.js";import"./PdfViewer-B2GXauPv.js";import"./PdfViewer.module.css-D_NY9azE.js";import"./PdfViewerAnnotationLayer-CS4128_q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DzrXe7G2.js";import"./PdfViewerOutlineSidebar-6PmZAwD3.js";import"./PdfViewerSidebarHeader-D1S3WcUl.js";import"./useBaseUiId-CS5_kO7T.js";import"./useControlled-jF4Qz43A.js";import"./CompositeRoot-D3UUcRo4.js";import"./CompositeItem-Uw6eZL9e.js";import"./ToolbarRootContext-CwQjdto9.js";import"./composite-TMeVl6ts.js";import"./svgIconContainer-Cq56KS1n.js";import"./PdfViewerSearchBar-tUaic9ic.js";import"./chevron-up-DczPZbq5.js";import"./chevron-down-DBVO4jIp.js";import"./cross-D9J_OWJu.js";import"./PdfViewerSidebar-DYEcEUaP.js";import"./index-CcNAU_ui.js";import"./index-CyfCophj.js";import"./index-B5jORrz6.js";import"./PdfViewerToolbar-Bfvy81ML.js";import"./Button-BrIIDNdE.js";import"./chevron-right-Dqkd5LnI.js";import"./Input-BxbdEwYe.js";import"./search-Bzm9Q_D2.js";import"./spin-BE2b4dn3.js";import"./error-H-jfmF3B.js";import"./withOsdkMetrics-Dst5838R.js";import"./makeExternalStore-DJkBOpRI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
