import{j as r,M as s}from"./iframe-Da5478sC.js";import{P as p}from"./pdf-viewer-CTK9g-Ho.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dfq3N3yj.js";import"./preload-helper-DIyxpJKV.js";import"./PdfRenderer-Cs2Be_Ff.js";import"./index-DNUZO8F_.js";import"./PdfViewer-C4kTz1CL.js";import"./PdfViewer.module.css-ClLMdxki.js";import"./PdfViewerAnnotationLayer-CMt4isfP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D6yUggje.js";import"./PdfViewerOutlineSidebar-MEldnkNd.js";import"./PdfViewerSidebarHeader-BYeqEVcT.js";import"./useBaseUiId-D_WzVsv0.js";import"./useControlled-CbcU3cLx.js";import"./CompositeRoot-NZ-REEgR.js";import"./CompositeItem-BYPj8kaj.js";import"./ToolbarRootContext-DU3i--I5.js";import"./composite-DnOwfSyn.js";import"./svgIconContainer-C6HFRanw.js";import"./PdfViewerSearchBar-C_kWY08l.js";import"./chevron-up-kqJQuDW2.js";import"./chevron-down-DDVlB3SF.js";import"./cross-CnU_MB9h.js";import"./PdfViewerSidebar-J2HT_Cjh.js";import"./index-2vHiu-ON.js";import"./index-BxjGMzYA.js";import"./index-Dg9rFNqX.js";import"./PdfViewerToolbar-DXzvAfQO.js";import"./Button-u_Jmn4Ee.js";import"./chevron-right-Y3Qj3nkK.js";import"./Input-C8_9EasY.js";import"./search-CeQH1KSS.js";import"./spin-Bq23o5h4.js";import"./error-CuOqzkrV.js";import"./withOsdkMetrics-BXagX8Z0.js";import"./makeExternalStore-DxUA_WKV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
