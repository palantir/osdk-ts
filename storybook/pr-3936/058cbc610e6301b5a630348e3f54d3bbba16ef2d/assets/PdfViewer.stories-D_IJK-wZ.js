import{j as r,M as s}from"./iframe-DaheMBBp.js";import{P as p}from"./pdf-viewer-DarwKQK6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D_5g5wX7.js";import"./preload-helper-ogFyI84a.js";import"./PdfViewer-DDRS1PBf.js";import"./index-C3YYW7Av.js";import"./BasePdfViewer-B_zOGGhV.js";import"./BasePdfViewer.module.css-CIUiORZx.js";import"./PdfViewerAnnotationLayer-CRQZhBvg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-OHPTxGKW.js";import"./PdfViewerOutlineSidebar-3bvFzNM9.js";import"./PdfViewerSidebarHeader-DfsFrRdk.js";import"./useBaseUiId-BLpW-viY.js";import"./useControlled-Dcfr4NOJ.js";import"./CompositeRoot-DGFALvTG.js";import"./CompositeItem-CkBG_Idz.js";import"./ToolbarRootContext-DE_UAbqs.js";import"./composite-BEI6HnWE.js";import"./svgIconContainer-B_QTzoaQ.js";import"./PdfViewerSearchBar-Bh1qgok1.js";import"./chevron-up-ClxwTj40.js";import"./chevron-down-MXNqVixY.js";import"./cross-Bby6H2na.js";import"./PdfViewerSidebar-BkFtXX5C.js";import"./index-DtzQd4z2.js";import"./index-C2SDphz6.js";import"./index-CLtbVn_M.js";import"./PdfViewerToolbar-Cn2uZX4N.js";import"./Button-tOMZXVUq.js";import"./chevron-right-CAI0mGhx.js";import"./Input-Bz5EgY5O.js";import"./search-BihmlxdI.js";import"./spin-UYTd4foK.js";import"./error-DQ7GCXA7.js";import"./withOsdkMetrics-BZUZattY.js";import"./makeExternalStore-CWnObUAx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
