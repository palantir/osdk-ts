import{j as r,M as s}from"./iframe-BeLDoJDJ.js";import{P as p}from"./pdf-viewer-rTrRkL7P.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-rIgfqFbE.js";import"./preload-helper-BZlWemWx.js";import"./PdfRenderer-DX78Eukt.js";import"./index-CNOIOIrb.js";import"./PdfViewer-CQbuX8RM.js";import"./PdfViewer.module.css-CeSKP0Ym.js";import"./PdfViewerAnnotationLayer-Dqp5DA1_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BpMaTpy1.js";import"./PdfViewerOutlineSidebar-CKrnGJ2V.js";import"./PdfViewerSidebarHeader-BEaDRICa.js";import"./useBaseUiId-LQ15WLyH.js";import"./useControlled-CwF9sQpL.js";import"./CompositeRoot-ozUuTSmL.js";import"./CompositeItem-CA7jBmHf.js";import"./ToolbarRootContext-CGUoqwzM.js";import"./composite-S97I0_tU.js";import"./svgIconContainer-BBtkfVDC.js";import"./PdfViewerSearchBar-CT_bWUNN.js";import"./chevron-up-HFzy-H7r.js";import"./chevron-down-nLhl25OO.js";import"./cross-DCG5TLV4.js";import"./PdfViewerSidebar-CWVAN13E.js";import"./index-Cqa5ciEF.js";import"./index-Bt3oe8vo.js";import"./index-CfZxJNPe.js";import"./PdfViewerToolbar-CVSkVkfw.js";import"./Button-EnitxwgO.js";import"./chevron-right-BV-u-ds3.js";import"./Input-BJCADyvA.js";import"./search-BmHzBiZs.js";import"./spin-C5HAMAPn.js";import"./error-67kJMO00.js";import"./withOsdkMetrics-DtwNEj0a.js";import"./makeExternalStore-DDJLENiS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
