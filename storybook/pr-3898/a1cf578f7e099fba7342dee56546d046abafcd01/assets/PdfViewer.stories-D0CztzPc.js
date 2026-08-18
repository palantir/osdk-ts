import{j as r,M as s}from"./iframe-DdQFRxp3.js";import{P as p}from"./pdf-viewer-DrCoEXYN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DU9cHROr.js";import"./preload-helper-DRTLQAg9.js";import"./PdfViewer-_1N-yGWq.js";import"./index-TaYeYo9P.js";import"./BasePdfViewer-DiLl4HtF.js";import"./BasePdfViewer.module.css-CYvN94mK.js";import"./PdfViewerAnnotationLayer-iI2gjgHP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CAMaoviJ.js";import"./PdfViewerOutlineSidebar-UgOa9tK2.js";import"./PdfViewerSidebarHeader-DIn7YX70.js";import"./useBaseUiId-vUIL2zRu.js";import"./useControlled-Cq-T_M7n.js";import"./CompositeRoot-ONM-3NeG.js";import"./CompositeItem-8f3x543_.js";import"./ToolbarRootContext-DCNtGQN6.js";import"./composite-CE_Dj80Q.js";import"./svgIconContainer-uAn5cIaB.js";import"./PdfViewerSearchBar-Dam_ewBi.js";import"./chevron-up-B8YxUO-w.js";import"./chevron-down-BosSoN29.js";import"./cross-sSLLNBfX.js";import"./PdfViewerSidebar-PKwXoVR1.js";import"./index-mv95Zkl0.js";import"./index-CWWT09XN.js";import"./index-sOpdPN6D.js";import"./PdfViewerToolbar-DLbBp4U9.js";import"./Button-BdP51mHG.js";import"./chevron-right-CKtFLrr4.js";import"./Input-Dylmv0nm.js";import"./search-nJivgl6W.js";import"./spin-CX80bDuk.js";import"./error-CvWe5-Ao.js";import"./withOsdkMetrics-Bp0vBcfz.js";import"./makeExternalStore-peJQO0Rf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
