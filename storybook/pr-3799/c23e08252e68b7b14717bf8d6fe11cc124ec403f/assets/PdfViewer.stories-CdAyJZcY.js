import{j as r,M as s}from"./iframe-B5HqSCrD.js";import{P as p}from"./pdf-viewer-pFFw5ig0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CpEttw_B.js";import"./preload-helper-DE0BuRVC.js";import"./PdfRenderer-CJjQm361.js";import"./index-3d_Ih8uu.js";import"./PdfViewer-DHjr3jW5.js";import"./PdfViewer.module.css-CVeWFUWk.js";import"./PdfViewerAnnotationLayer-By0xPTcN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BxbQmCNm.js";import"./PdfViewerOutlineSidebar-LBFu0utE.js";import"./PdfViewerSidebarHeader-C_2WwAFG.js";import"./useBaseUiId-CeyHJ71C.js";import"./useControlled-BmEUk3EV.js";import"./CompositeRoot-kC1uvx9l.js";import"./CompositeItem-B8KMobiC.js";import"./ToolbarRootContext-CDgHazHY.js";import"./composite-BZoJUTZ6.js";import"./svgIconContainer-CO9jRBk2.js";import"./PdfViewerSearchBar-BR_7J_9s.js";import"./chevron-up-iV0NYOtF.js";import"./chevron-down-n8kYFotX.js";import"./cross-VDxjcvXQ.js";import"./PdfViewerSidebar-DujjcQnV.js";import"./index-DQiInoFX.js";import"./index-Dmjh6VFf.js";import"./index-DYzYrR48.js";import"./PdfViewerToolbar-wmuouP0K.js";import"./Button-iUWC51LE.js";import"./chevron-right-BlHxltse.js";import"./Input-B9x2qENv.js";import"./search-CuXh0Rqq.js";import"./spin-CHwaL6lr.js";import"./error-CIQ5NIBk.js";import"./withOsdkMetrics-GMU0XdN8.js";import"./makeExternalStore-DH9SaGtV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
