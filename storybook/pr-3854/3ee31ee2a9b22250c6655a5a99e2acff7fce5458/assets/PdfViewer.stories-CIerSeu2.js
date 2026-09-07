import{j as r,M as s}from"./iframe-BRcSfazb.js";import{P as p}from"./pdf-viewer-79yLy9sh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dpda5dwh.js";import"./preload-helper-BThzV-GG.js";import"./PdfRenderer-_vjffa7J.js";import"./index-DySxQINm.js";import"./PdfViewer-D2sUB639.js";import"./PdfViewer.module.css-BCeD0bMl.js";import"./PdfViewerAnnotationLayer-DQHK8bQ4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BmLXlqJr.js";import"./PdfViewerOutlineSidebar-DjzSSZAK.js";import"./PdfViewerSidebarHeader-BtZq43V8.js";import"./useBaseUiId-BZvlmCQ4.js";import"./useControlled-DVF1OsTI.js";import"./CompositeRoot-vdjp1B6i.js";import"./CompositeItem-BZBUwPb5.js";import"./ToolbarRootContext-nXfAGVO2.js";import"./composite-AJQkq8yV.js";import"./svgIconContainer-DFKBkWeR.js";import"./PdfViewerSearchBar-ODR9DYa5.js";import"./chevron-up-CGe0fKNi.js";import"./chevron-down-g3mf6yyW.js";import"./cross-CzKOFjwP.js";import"./PdfViewerSidebar-DyyGYDoM.js";import"./index-C7jMOB_Z.js";import"./index-Bj7tQvH9.js";import"./index-C16WPibF.js";import"./PdfViewerToolbar-DHA7I0jA.js";import"./Button-B_Mp1Nhv.js";import"./chevron-right-v9cVbkRV.js";import"./Input-Dlwmy4kD.js";import"./search-BmQN2RwS.js";import"./spin-BpPOs8Mf.js";import"./error-CmdKI6uR.js";import"./withOsdkMetrics-jypHlMPF.js";import"./makeExternalStore-B5f_GCis.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
