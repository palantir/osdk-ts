import{j as r,M as s}from"./iframe-85l92LuF.js";import{P as p}from"./pdf-viewer-BSqocVfv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DJyWKD0y.js";import"./preload-helper-DoBjmup7.js";import"./PdfRenderer-DOZccvon.js";import"./index-BnAHZs62.js";import"./PdfViewer-CSHqendi.js";import"./PdfViewer.module.css-DkW7S2kr.js";import"./PdfViewerAnnotationLayer-BAboZBVv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DuQe6dTj.js";import"./PdfViewerOutlineSidebar-C7l5V7Nr.js";import"./PdfViewerSidebarHeader-Cu5RVm5o.js";import"./useBaseUiId-CGJCIeBX.js";import"./useControlled-D-3f0MFO.js";import"./CompositeRoot-Ca9v2Kr5.js";import"./CompositeItem-B2i1pVuI.js";import"./ToolbarRootContext-Bi6RhBRT.js";import"./composite-CaqHqJ_a.js";import"./svgIconContainer-9VtSpFHF.js";import"./PdfViewerSearchBar-BRyb6ZTY.js";import"./chevron-up-B5E2S2IR.js";import"./chevron-down-UflpNh7y.js";import"./cross-DZhpzTXU.js";import"./PdfViewerSidebar-B9bGBnGd.js";import"./index-BPWj9FJk.js";import"./index-zU9OYY3O.js";import"./index-OfsSx2G7.js";import"./PdfViewerToolbar-SXA1fGqb.js";import"./Button-C177onMO.js";import"./chevron-right-DQcsbZ5C.js";import"./Input-Bs9FOxx_.js";import"./search-HhZWfkPx.js";import"./spin-xpfVEUCC.js";import"./error-Cj2vyR90.js";import"./withOsdkMetrics-SMjq4TP8.js";import"./makeExternalStore-WSruEEDk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
