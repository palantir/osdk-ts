import{j as r,M as s}from"./iframe-BkXStBnn.js";import{P as p}from"./pdf-viewer-R1W2NklA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BGL2D7be.js";import"./preload-helper-C6eJ-LAJ.js";import"./PdfViewer-CYRdY_De.js";import"./index-CQxVyxO9.js";import"./BasePdfViewer-C7ev7S8R.js";import"./BasePdfViewer.module.css-Fm4XUt-C.js";import"./PdfViewerAnnotationLayer-DwLx9ldH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8HxED2i.js";import"./PdfViewerOutlineSidebar-CipEhz38.js";import"./PdfViewerSidebarHeader-DHulApUA.js";import"./useBaseUiId-96F5yHVy.js";import"./useControlled-Bs-hAIWu.js";import"./CompositeRoot-BKjzZtKd.js";import"./CompositeItem-CqdHioqm.js";import"./ToolbarRootContext-CPU8X__7.js";import"./composite-DEOhu-ZQ.js";import"./svgIconContainer-BOZhbAbH.js";import"./PdfViewerSearchBar-CH2xfc1Q.js";import"./chevron-up-8UqiQzNM.js";import"./chevron-down-BqO1VsFu.js";import"./cross-kW0EKRmx.js";import"./PdfViewerSidebar-BgxAq2f5.js";import"./index-mxwJCmPs.js";import"./index-CtVGck09.js";import"./index-CDh6F1Zg.js";import"./PdfViewerToolbar-Da64fLk4.js";import"./Button-tcqZupxX.js";import"./chevron-right-Cq_LDzAe.js";import"./Input-DxDpsYC6.js";import"./search-BVUjqmoy.js";import"./spin-2EvMFWY_.js";import"./error-BWtJwOh6.js";import"./withOsdkMetrics-CndFlT5a.js";import"./makeExternalStore-D61zLkvo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
