import{j as r,M as s}from"./iframe-Cm_EHC51.js";import{P as p}from"./pdf-viewer-Dj6VpgSQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CyKOqBAh.js";import"./preload-helper-OCJMeOK-.js";import"./PdfRenderer-DJv7TQUJ.js";import"./index-BXlCiAkj.js";import"./PdfViewer-CGvG3n3A.js";import"./PdfViewer.module.css-D534MEOt.js";import"./PdfViewerAnnotationLayer-C8_SfZnW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BptrroSD.js";import"./PdfViewerOutlineSidebar-VZUNE3om.js";import"./PdfViewerSidebarHeader-DN7Duvc5.js";import"./useBaseUiId-D1vJVKRR.js";import"./useControlled-C-jSpOYm.js";import"./CompositeRoot-DvVQZMiW.js";import"./CompositeItem-Cx7vCAIi.js";import"./ToolbarRootContext-49KFllv_.js";import"./composite-CVdzW3sc.js";import"./svgIconContainer-y4xcTkAj.js";import"./PdfViewerSearchBar-BqXkk-GQ.js";import"./chevron-up-BCS2Yzm7.js";import"./chevron-down-BSxwOLLx.js";import"./cross-BRQRT10E.js";import"./PdfViewerSidebar-BfWqnRnA.js";import"./index-ClDcmJ32.js";import"./index-R28diiJ3.js";import"./index-ZKEi5Emz.js";import"./PdfViewerToolbar-BxsqU8VW.js";import"./Button-DIH5t_0T.js";import"./chevron-right-CWUzC_ti.js";import"./Input-zz3lOutb.js";import"./search-30yIUM2-.js";import"./spin-N_5Hyyn5.js";import"./error-BjF7Kl8A.js";import"./withOsdkMetrics-fCWeer_z.js";import"./makeExternalStore-BGELqknt.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
