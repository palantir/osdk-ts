import{j as r,M as s}from"./iframe-C8v16k98.js";import{P as p}from"./pdf-viewer-CinZnf6u.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-c16jcmx6.js";import"./preload-helper-CTIvj4s1.js";import"./PdfRenderer-gnr9XB0f.js";import"./index-f0YWfbBx.js";import"./PdfViewer-B9WU8Vrk.js";import"./PdfViewer.module.css-DQwbjFu8.js";import"./PdfViewerAnnotationLayer-4lybFzNy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-rk-j-oPo.js";import"./PdfViewerOutlineSidebar-CWq3qXdU.js";import"./PdfViewerSidebarHeader-CSk9FwQW.js";import"./useBaseUiId-BeqTmLCE.js";import"./useControlled-Be5wZWlu.js";import"./CompositeRoot-BqqB3YBP.js";import"./CompositeItem-CR0-7tBN.js";import"./ToolbarRootContext-DA-OiDrZ.js";import"./composite-BdHgeVz1.js";import"./svgIconContainer-2XqMCtfu.js";import"./PdfViewerSearchBar-CUxf1xNJ.js";import"./chevron-up-CrsczwyB.js";import"./chevron-down-BhMQKpnE.js";import"./cross-2SBchWKW.js";import"./PdfViewerSidebar-Bq576aM5.js";import"./index-BQPgWn6y.js";import"./index-Bwu6itB9.js";import"./index-Aj7xkOVT.js";import"./PdfViewerToolbar-CSim-S0W.js";import"./Button-BiFBHNqb.js";import"./chevron-right-C5D-h9CC.js";import"./Input-D1r8rOe3.js";import"./search-6el8p7xI.js";import"./spin-BWJ_KyFX.js";import"./error-D1sq84rm.js";import"./withOsdkMetrics-CF0NLiGy.js";import"./makeExternalStore-DuKpND8W.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
