import{j as r,M as s}from"./iframe-CAxD4pEZ.js";import{P as p}from"./pdf-viewer-BX4obFQp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B01bn5Dj.js";import"./preload-helper-cv8tk-is.js";import"./PdfRenderer-DjvU-eNi.js";import"./index-DlY3DWZs.js";import"./PdfViewer-CvzD4wNd.js";import"./PdfViewer.module.css-BHujkkhQ.js";import"./PdfViewerAnnotationLayer-DUx7jDII.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CKJFlky8.js";import"./PdfViewerOutlineSidebar-B_W451pn.js";import"./PdfViewerSidebarHeader-zaB6Btyg.js";import"./useBaseUiId-D2zcvs6X.js";import"./useControlled-CGdyEJo1.js";import"./CompositeRoot-tbaL-bRE.js";import"./CompositeItem-ClL9Rn_X.js";import"./ToolbarRootContext-yGM8NHmL.js";import"./composite-H3Jc2oFy.js";import"./svgIconContainer-D0Ul3QRA.js";import"./PdfViewerSearchBar-Cbt5Sycy.js";import"./chevron-up-DDcMG9BP.js";import"./chevron-down-Dtz8PPrm.js";import"./cross-D22f60Ip.js";import"./PdfViewerSidebar-DiQpSSnO.js";import"./index-57QH5stG.js";import"./index-nQREIoe8.js";import"./index-CHDzEGvN.js";import"./PdfViewerToolbar-CrAcVt_f.js";import"./Button-oBzJmSqx.js";import"./chevron-right-Bdcf8mLD.js";import"./Input-B3Sr0GJ5.js";import"./search-sndjbWNW.js";import"./spin-BWQLUQd3.js";import"./error-Cbgjfijt.js";import"./withOsdkMetrics-CgBsOBZ3.js";import"./makeExternalStore-BjuyQ1D_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
