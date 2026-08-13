import{j as r,M as s}from"./iframe-Ctqv_q3b.js";import{P as p}from"./pdf-viewer-GVEpjOYn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cnj3IevK.js";import"./preload-helper-CQZuIYGg.js";import"./PdfViewer-DrNO1WDC.js";import"./index-COouxyZO.js";import"./BasePdfViewer-DgL9ZSHS.js";import"./BasePdfViewer.module.css-BbjdLY82.js";import"./PdfViewerAnnotationLayer-ZrTr6xzn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BKOPVCUr.js";import"./PdfViewerOutlineSidebar-GJNvm2xA.js";import"./PdfViewerSidebarHeader-f5U-5Bjr.js";import"./useBaseUiId-DZHr37Fe.js";import"./useControlled-rzg3Zo0J.js";import"./CompositeRoot-CrLR4V6u.js";import"./CompositeItem-CT2tdkFE.js";import"./ToolbarRootContext-CGZ73ibv.js";import"./composite-CWKR683w.js";import"./svgIconContainer-CpTpThnP.js";import"./PdfViewerSearchBar-CXVqSNDa.js";import"./chevron-up-C19PiVJv.js";import"./chevron-down-BZmTuAF0.js";import"./cross-Cwp0jMM_.js";import"./PdfViewerSidebar-BnMXo57A.js";import"./index-qzd4Xvj_.js";import"./index-YZLh4MO8.js";import"./index-KwZ8xn8U.js";import"./PdfViewerToolbar-DockA_wh.js";import"./Button-BQ9Vn2Zh.js";import"./chevron-right-D-8TM1Z4.js";import"./Input-cHlxiCnh.js";import"./search-qo74ErBn.js";import"./spin-BC1u4j44.js";import"./error-TI6uq-Zv.js";import"./withOsdkMetrics-CpCINEs8.js";import"./makeExternalStore-BVIKqe7o.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
