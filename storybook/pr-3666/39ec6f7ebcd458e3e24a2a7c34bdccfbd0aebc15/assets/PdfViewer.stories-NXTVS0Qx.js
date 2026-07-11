import{j as r,M as s}from"./iframe-BhnINO4e.js";import{P as p}from"./pdf-viewer-CF8uRPvd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BrvYY52W.js";import"./preload-helper-Btob_6a7.js";import"./PdfRenderer-DMxcooon.js";import"./index-BCs216IN.js";import"./PdfViewer-B59BIOey.js";import"./PdfViewer.module.css-DPOKHQsu.js";import"./PdfViewerAnnotationLayer-z_Jfzg-y.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-F1_XV0AP.js";import"./PdfViewerOutlineSidebar-DApCGtO7.js";import"./PdfViewerSidebarHeader-Bl4qJVIE.js";import"./useBaseUiId-DfXxSOr4.js";import"./useControlled-C-H5nWhD.js";import"./CompositeRoot-B7vxXnOm.js";import"./CompositeItem-a0psnQ2u.js";import"./ToolbarRootContext-BzKw37iN.js";import"./composite-C6UQpI1w.js";import"./svgIconContainer-qoCiNjam.js";import"./PdfViewerSearchBar-CD6FCwrF.js";import"./chevron-up-xanv8-7j.js";import"./chevron-down-BThcgbEe.js";import"./cross-JOd8z0MY.js";import"./PdfViewerSidebar-BKLVdQFb.js";import"./index-CVFFvWtS.js";import"./index-DBDuuWp4.js";import"./index-EBTsre-T.js";import"./PdfViewerToolbar-Doxof2-E.js";import"./Button-CmpsHaRG.js";import"./chevron-right-K1zS26w9.js";import"./Input-22ZvK9e6.js";import"./search-4hHFLBiv.js";import"./spin-B_tFIG3A.js";import"./error-DdF7WtTH.js";import"./withOsdkMetrics-CIueimwg.js";import"./makeExternalStore-DJaVwCYK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
