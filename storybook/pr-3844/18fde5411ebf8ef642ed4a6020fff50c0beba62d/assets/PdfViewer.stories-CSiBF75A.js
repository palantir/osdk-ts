import{j as r,M as s}from"./iframe-HbxVHZeS.js";import{P as p}from"./pdf-viewer-D5k_pGrQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CERJz5lm.js";import"./preload-helper-DKTEKqDP.js";import"./PdfRenderer-LOpBuGau.js";import"./index-_HuXWBMo.js";import"./PdfViewer-ArSp2825.js";import"./PdfViewer.module.css-C_iXgy5I.js";import"./PdfViewerAnnotationLayer-CHtzNj9w.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ed2H1noa.js";import"./PdfViewerOutlineSidebar-NIAR17Ax.js";import"./PdfViewerSidebarHeader-XBgzWjM0.js";import"./useBaseUiId-CeUDsPHA.js";import"./useControlled-0_Lx4vTT.js";import"./CompositeRoot-b1vjRTWh.js";import"./CompositeItem-DlRQsEAc.js";import"./ToolbarRootContext-Bfx00Fpp.js";import"./composite-0yZaiGel.js";import"./svgIconContainer-DB1CdLm7.js";import"./PdfViewerSearchBar-CwtDekHg.js";import"./chevron-up-DuLQLwbZ.js";import"./chevron-down-CsImW_M5.js";import"./cross-Bbtec1AH.js";import"./PdfViewerSidebar-UrT4wFOv.js";import"./index-clvcww1x.js";import"./index-DMqlf5ki.js";import"./index-Cd-PRAMm.js";import"./PdfViewerToolbar-DgzYBRDO.js";import"./Button-hh7S8JbN.js";import"./chevron-right-CmSH8RJK.js";import"./Input-V8GsltIX.js";import"./search-DEtheuwO.js";import"./spin-D4_OzGg9.js";import"./error-_Ix0v8YA.js";import"./withOsdkMetrics-B9ZHRpAC.js";import"./makeExternalStore-CeeZV4L3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
