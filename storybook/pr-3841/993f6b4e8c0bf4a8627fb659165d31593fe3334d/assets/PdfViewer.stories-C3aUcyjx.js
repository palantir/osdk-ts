import{j as r,M as s}from"./iframe-BX_ZglJt.js";import{P as p}from"./pdf-viewer-DxD-EhHi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CF4E1krw.js";import"./preload-helper-DgkZQ_xq.js";import"./PdfRenderer-CGG8QaEx.js";import"./index-Bc3Cl_41.js";import"./PdfViewer-DNMHCx95.js";import"./PdfViewer.module.css-Dhw3Wiaa.js";import"./PdfViewerAnnotationLayer-qNxRLsyI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-wxvFp6bp.js";import"./PdfViewerOutlineSidebar-B5pDNrdY.js";import"./PdfViewerSidebarHeader-CLIVvStd.js";import"./useBaseUiId-B1-OngoV.js";import"./useControlled-CJlGLYfk.js";import"./CompositeRoot-1eVTJiVS.js";import"./CompositeItem-nc6zMu_C.js";import"./ToolbarRootContext-DkSLh-9D.js";import"./composite-zDdFGMPL.js";import"./svgIconContainer-BXbbsTGb.js";import"./PdfViewerSearchBar-DYQSa_5s.js";import"./chevron-up-C-nHSuTO.js";import"./chevron-down-Enjce5n9.js";import"./cross-Bb6sq-qZ.js";import"./PdfViewerSidebar-BmUT3KVU.js";import"./index-CEWEVwT2.js";import"./index-f-SNNIDI.js";import"./index-DEXm8OLH.js";import"./PdfViewerToolbar-BrYx0oNr.js";import"./Button-E6kiD0yr.js";import"./chevron-right-DkHK5xjJ.js";import"./Input-Dhz0W6pJ.js";import"./search-fr7iJOod.js";import"./spin-C_IfEszP.js";import"./error-aw4kUWZA.js";import"./withOsdkMetrics-CwOfdRmG.js";import"./makeExternalStore-BMycxTdB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
