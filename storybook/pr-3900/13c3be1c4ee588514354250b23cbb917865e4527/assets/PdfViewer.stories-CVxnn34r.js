import{j as r,M as s}from"./iframe-CJUBUTub.js";import{P as p}from"./pdf-viewer-BXlDlY_6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CCj1rCYP.js";import"./preload-helper-CIaS7xmC.js";import"./PdfViewer-BPxK8Bne.js";import"./index-D6RKL9xW.js";import"./BasePdfViewer-dfhLOOAB.js";import"./BasePdfViewer.module.css-DP7aks3v.js";import"./PdfViewerAnnotationLayer-DPT_luQ6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BkGoqo0D.js";import"./PdfViewerOutlineSidebar-BVcsBrIr.js";import"./PdfViewerSidebarHeader-B7JKLZSy.js";import"./useBaseUiId-YnyDNtng.js";import"./useControlled-C4N2tr7p.js";import"./CompositeRoot-_mPYu0Ph.js";import"./CompositeItem-CL-JcIqG.js";import"./ToolbarRootContext-BtuYN_1f.js";import"./composite-IgJfsXTy.js";import"./svgIconContainer-CXg-3J8w.js";import"./PdfViewerSearchBar-BjqnsQJg.js";import"./chevron-up-BU00AwFY.js";import"./chevron-down-CuNdvUfz.js";import"./cross-CLjLUeJo.js";import"./PdfViewerSidebar-DLqs_2Fn.js";import"./index-C3hSlA2p.js";import"./index-DmjIOSHs.js";import"./index-BfGfq02Q.js";import"./PdfViewerToolbar-CHdXh-7R.js";import"./Button-DCqz38K7.js";import"./chevron-right-T3lgGsRi.js";import"./Input-DfF7VsZQ.js";import"./search-5t0wk0Gr.js";import"./spin-CGkcGAuz.js";import"./error--zLI5MtK.js";import"./withOsdkMetrics-DJlQtgHI.js";import"./makeExternalStore-DKQcCda3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
