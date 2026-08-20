import{j as r,M as s}from"./iframe-6HLyOHdg.js";import{P as p}from"./pdf-viewer-CoOb1RmW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BB6K4ExD.js";import"./preload-helper-lnZu1Hku.js";import"./PdfViewer-CzHd0tII.js";import"./index-DddEJcCL.js";import"./BasePdfViewer-BmKSbheF.js";import"./BasePdfViewer.module.css-BF1_SXYz.js";import"./PdfViewerAnnotationLayer-BN-wiRQQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-WML6dIRp.js";import"./PdfViewerOutlineSidebar-BpqMNQnD.js";import"./PdfViewerSidebarHeader-l8x40gLw.js";import"./useBaseUiId-CIjMevu3.js";import"./useControlled-CWJ6yU13.js";import"./CompositeRoot-DC9J8VfT.js";import"./CompositeItem-CRehYzcR.js";import"./ToolbarRootContext-LDbs2zUX.js";import"./composite-BM-mnNQY.js";import"./svgIconContainer-Cen0mKtu.js";import"./PdfViewerSearchBar-Hl3wCde0.js";import"./chevron-up-XhwRkuYZ.js";import"./chevron-down-CJW3cPUU.js";import"./cross-D90aPG-h.js";import"./PdfViewerSidebar-Bo8qpcWu.js";import"./index-CEc6v-Oz.js";import"./index-BeSpr_z9.js";import"./index-BfmI1DCD.js";import"./PdfViewerToolbar-Pl2WwLSk.js";import"./Button-Mer8XKS3.js";import"./chevron-right-Y3ItvHC_.js";import"./Input-D3asMaDe.js";import"./search-B78YoXrH.js";import"./spin-DJBdSTBi.js";import"./error-DLYWmfkx.js";import"./withOsdkMetrics-eihAybMP.js";import"./makeExternalStore-ySOpHfFQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
