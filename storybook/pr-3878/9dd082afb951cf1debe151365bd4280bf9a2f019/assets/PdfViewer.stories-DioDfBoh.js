import{j as r,M as s}from"./iframe-DOW2bXFs.js";import{P as p}from"./pdf-viewer-cjA6Yk56.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BjBfZbQA.js";import"./preload-helper-BHuniwci.js";import"./PdfViewer-BR_ZX9sa.js";import"./index-4oJsk_tB.js";import"./BasePdfViewer-Cqdd5yLm.js";import"./BasePdfViewer.module.css-Dz-KUmyc.js";import"./PdfViewerAnnotationLayer-C4begueR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BaqUwSpP.js";import"./PdfViewerOutlineSidebar-2HZIrbmv.js";import"./PdfViewerSidebarHeader-SWUjh-my.js";import"./useBaseUiId-B_0mQGPv.js";import"./useControlled-NJi6VJOf.js";import"./CompositeRoot-D7k_ayKs.js";import"./CompositeItem-CPRbyJMO.js";import"./ToolbarRootContext-C3gCOQD7.js";import"./composite-CqPSq466.js";import"./svgIconContainer-CT_KO30M.js";import"./PdfViewerSearchBar-Cgtb1rS3.js";import"./chevron-up-vMviOrs0.js";import"./chevron-down-CRcrwjTm.js";import"./cross-COlHBJoz.js";import"./PdfViewerSidebar-CxcQWDmx.js";import"./index-DPfBrSuZ.js";import"./index-Bn8LPSeX.js";import"./index-GSo9ng3g.js";import"./PdfViewerToolbar-B5yiPTda.js";import"./Button-DZdYaU0k.js";import"./chevron-right-fzYaH8ej.js";import"./Input-CSOHEyA0.js";import"./search-BWbB-AxZ.js";import"./spin-DzsI7pYE.js";import"./error-D3fDFL5e.js";import"./withOsdkMetrics-XWnXG2iZ.js";import"./makeExternalStore-4Ndi4CXn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
