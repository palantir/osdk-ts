import{j as r,M as s}from"./iframe-BQr7m57P.js";import{P as p}from"./pdf-viewer-TczVvviu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DY_SE0Iz.js";import"./preload-helper-Don5t6xJ.js";import"./PdfRenderer-BSvErvW8.js";import"./index-H8nXahHz.js";import"./PdfViewer-CiY6inv6.js";import"./PdfViewer.module.css-C6a2xxb0.js";import"./PdfViewerAnnotationLayer-Dp64l7Qa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D5qvDsOt.js";import"./PdfViewerOutlineSidebar-CUxBUajj.js";import"./PdfViewerSidebarHeader-DnxVQnJq.js";import"./useBaseUiId-BF6EbEou.js";import"./useControlled-Tpu3D55U.js";import"./CompositeRoot-GiVG1VvC.js";import"./CompositeItem-BxDlztsz.js";import"./ToolbarRootContext-uOhSmZ0o.js";import"./composite-B8gb6eS7.js";import"./svgIconContainer-Dm9cfv8p.js";import"./PdfViewerSearchBar-aUAqq9cF.js";import"./chevron-up-BW4D_yIW.js";import"./chevron-down-Co2tg5mU.js";import"./cross-YqVZ7uQZ.js";import"./PdfViewerSidebar-Cd32arDD.js";import"./index-qrG-6oRl.js";import"./index-BbJO5frt.js";import"./index-CXQ_prqI.js";import"./PdfViewerToolbar-CTA29nlH.js";import"./Button-DZYEtZfL.js";import"./chevron-right-Mu_7BznD.js";import"./Input-DRJZ9z-s.js";import"./search-DZCrf5le.js";import"./spin-C1PuOETb.js";import"./error-Ceo_ap97.js";import"./withOsdkMetrics-D9SI-c98.js";import"./makeExternalStore-BlNc40mf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
