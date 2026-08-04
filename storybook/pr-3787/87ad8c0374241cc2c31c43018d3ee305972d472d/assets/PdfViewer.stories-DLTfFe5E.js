import{j as r,M as s}from"./iframe-TwL9Rdcu.js";import{P as p}from"./pdf-viewer-Bt4D5WA5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B4porl_t.js";import"./preload-helper-Dtd1x7f0.js";import"./PdfRenderer-cgsife5w.js";import"./index-B37Vkn7p.js";import"./PdfViewer-CHA4KWjC.js";import"./PdfViewer.module.css-7DCGpURN.js";import"./PdfViewerAnnotationLayer-DwhroMlm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CuLkfXCA.js";import"./PdfViewerOutlineSidebar-Cajl3JGd.js";import"./PdfViewerSidebarHeader-CvW7ctmk.js";import"./useBaseUiId-CA6_Pr4t.js";import"./useControlled-Ee5pocfV.js";import"./CompositeRoot-DrNWU5Nu.js";import"./CompositeItem-DDQiXXk3.js";import"./ToolbarRootContext-3L1WJeQb.js";import"./composite-Aws6OWjh.js";import"./svgIconContainer-Cn5jlibP.js";import"./PdfViewerSearchBar-CdXp3qTM.js";import"./chevron-up-5RjBP9ca.js";import"./chevron-down-CfEskrRU.js";import"./cross-DEXmuJ6S.js";import"./PdfViewerSidebar-CyFCXgJ-.js";import"./index-ClR5kgm1.js";import"./index-DiSmLK3F.js";import"./index-BzhMbvob.js";import"./PdfViewerToolbar-Dxjm-mPH.js";import"./Button-93iZ1g0B.js";import"./chevron-right-DfIW31sf.js";import"./Input-D1m7PFdq.js";import"./search-M01QHkXX.js";import"./spin-K60AxntW.js";import"./error-3oWabdkP.js";import"./withOsdkMetrics-DF9gmOzI.js";import"./makeExternalStore-BX0FhRjZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
