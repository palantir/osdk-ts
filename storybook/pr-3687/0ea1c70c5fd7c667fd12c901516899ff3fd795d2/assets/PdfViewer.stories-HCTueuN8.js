import{j as r,M as s}from"./iframe-D8D8Fd7N.js";import{P as p}from"./pdf-viewer-DX-_Xnvn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cu1nBwgT.js";import"./preload-helper-HfLRyj_M.js";import"./PdfRenderer-BVIMhFGb.js";import"./index-DawESuRM.js";import"./PdfViewer-CmqyArBC.js";import"./PdfViewer.module.css-DIULax7I.js";import"./PdfViewerAnnotationLayer-CMRmwNpw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DxEf9XTB.js";import"./PdfViewerOutlineSidebar-Cu31Yx8Z.js";import"./PdfViewerSidebarHeader-DvrRSy10.js";import"./useBaseUiId-qsdqGWpP.js";import"./useControlled-BTUrnS98.js";import"./CompositeRoot-DKXnB_4d.js";import"./CompositeItem-BdVAy7o5.js";import"./ToolbarRootContext-V4KuPQFG.js";import"./composite-CIUikIoi.js";import"./svgIconContainer-D6lNkQ7D.js";import"./PdfViewerSearchBar-DoJAb2FN.js";import"./chevron-up-CoFMy3d7.js";import"./chevron-down-CWk43xwC.js";import"./cross-Bczuw6HZ.js";import"./PdfViewerSidebar-BuMNS5KZ.js";import"./index-D0UWbO9T.js";import"./index-DYipZiVM.js";import"./index-QS9SuPH9.js";import"./PdfViewerToolbar-Wr0shKhf.js";import"./Button-DFUhNqlH.js";import"./chevron-right-iAEe1Ihf.js";import"./Input-5Zfe1Eu4.js";import"./search-CzCT0qg7.js";import"./spin-7qUcTbcX.js";import"./error-BqsCvt66.js";import"./withOsdkMetrics-CtnhpNYC.js";import"./makeExternalStore-BrMWIuuv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
