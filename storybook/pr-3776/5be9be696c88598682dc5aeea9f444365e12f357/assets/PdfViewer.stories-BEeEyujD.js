import{j as r,M as s}from"./iframe-BcrluB4l.js";import{P as p}from"./pdf-viewer-BOOKg-oW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DaA4gXCI.js";import"./preload-helper-CMptGl2f.js";import"./PdfRenderer-BLdTbeNP.js";import"./index-BPHTN-Ic.js";import"./PdfViewer-CQwvJAUA.js";import"./PdfViewer.module.css-CG5h4BI1.js";import"./PdfViewerAnnotationLayer-BuS5RP6E.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C4y7W301.js";import"./PdfViewerOutlineSidebar-CE3qCXlY.js";import"./PdfViewerSidebarHeader-DPIKeJxe.js";import"./useBaseUiId-COen3SNx.js";import"./useControlled-s5y_Kd6s.js";import"./CompositeRoot-BEB_0tF-.js";import"./CompositeItem-BXCgv3jv.js";import"./ToolbarRootContext-D34lClUE.js";import"./composite-BL4i_Dd_.js";import"./svgIconContainer-BPAup90b.js";import"./PdfViewerSearchBar-DNLqi1Ko.js";import"./chevron-up-E4d-eGLf.js";import"./chevron-down-DL5tAbBo.js";import"./cross-CbMBUGlC.js";import"./PdfViewerSidebar-BJ0unpxs.js";import"./index-B-I3Uh8K.js";import"./index-DB61AMZ9.js";import"./index-DyKMSrbe.js";import"./PdfViewerToolbar-CaH8JJLp.js";import"./Button-BOymE2P8.js";import"./chevron-right-DJ7OhMdN.js";import"./Input-BWZEIjN7.js";import"./search-UY8sNtzX.js";import"./spin-BWd4Gswa.js";import"./error-CycMySYi.js";import"./withOsdkMetrics-WV7mv1fL.js";import"./makeExternalStore-CLPl01nQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
