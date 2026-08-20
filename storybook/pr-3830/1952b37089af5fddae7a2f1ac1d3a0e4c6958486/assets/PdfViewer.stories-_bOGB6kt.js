import{j as r,M as s}from"./iframe-4oHGkuTU.js";import{P as p}from"./pdf-viewer-zehOMsDP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-2EoDtJVO.js";import"./preload-helper-CaPHuCn3.js";import"./PdfRenderer-D-jATn6q.js";import"./index-kQMuiEEZ.js";import"./PdfViewer-BL8ANu7P.js";import"./PdfViewer.module.css-DKHvVxh5.js";import"./PdfViewerAnnotationLayer-C2JM07m_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-0Yqfxck-.js";import"./PdfViewerOutlineSidebar-CV5s1OpB.js";import"./PdfViewerSidebarHeader-BeyxqoIk.js";import"./useBaseUiId-L69EryzD.js";import"./useControlled-DqhxuUIS.js";import"./CompositeRoot-C5crMzw6.js";import"./CompositeItem-Bws-ThTH.js";import"./ToolbarRootContext-Dnje_Y91.js";import"./composite-DvY8KKq7.js";import"./svgIconContainer-BYtzLwSJ.js";import"./PdfViewerSearchBar-BnOPjag2.js";import"./chevron-up-BqihjKvr.js";import"./chevron-down-BAfkw_KU.js";import"./cross-CS-E3Jqr.js";import"./PdfViewerSidebar-BFZrU9-I.js";import"./index-BCA2Tmmy.js";import"./index-CdFiVlz_.js";import"./index-MlSSfkvS.js";import"./PdfViewerToolbar-B2EIlIVO.js";import"./Button-DuiD40L5.js";import"./chevron-right-hUapR2Nf.js";import"./Input-CMGw5uoM.js";import"./search-CzC2mfci.js";import"./spin-fESvmRnZ.js";import"./error-XGL3A7TA.js";import"./withOsdkMetrics-C3D8HdW9.js";import"./makeExternalStore-DF89X3xe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
