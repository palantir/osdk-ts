import{j as r,M as s}from"./iframe-BX6zTnij.js";import{P as p}from"./pdf-viewer-DSysoWFm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BjYgIC2U.js";import"./preload-helper-CIctYDkr.js";import"./PdfRenderer-sL0n-iGa.js";import"./index-COyl-fnK.js";import"./PdfViewer-D8fRNnEb.js";import"./PdfViewer.module.css-BOq2OUs5.js";import"./PdfViewerAnnotationLayer-BCRpVZdY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CLGNyeYX.js";import"./PdfViewerOutlineSidebar-C1phQ-a1.js";import"./PdfViewerSidebarHeader-CaJv_6Gb.js";import"./useBaseUiId-Iiv9zSt_.js";import"./useControlled-BbWNiggX.js";import"./CompositeRoot-DxzjAE8h.js";import"./CompositeItem-BFxojHmW.js";import"./ToolbarRootContext-BEqq6mNC.js";import"./composite-tNjYOXwg.js";import"./svgIconContainer-YvrcWCz5.js";import"./PdfViewerSearchBar-BqHiR8CY.js";import"./chevron-up-DkhOo29C.js";import"./chevron-down-CJR3WBq7.js";import"./cross-DQs-8X1Y.js";import"./PdfViewerSidebar-Bq41y0ay.js";import"./index-BpLkgj3w.js";import"./index-BXMmQHN1.js";import"./index-BBTcolHi.js";import"./PdfViewerToolbar-93AEs3T2.js";import"./Button-pMsIGg4G.js";import"./chevron-right-DmxQxNPW.js";import"./Input-CSzJ0VGU.js";import"./search-CxVBrsXo.js";import"./spin-BTYPofJ-.js";import"./error-DLJXEcMM.js";import"./withOsdkMetrics-B5u35hN9.js";import"./makeExternalStore-BWA0mUfB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
