import{j as r,M as s}from"./iframe-Dz5rdWKc.js";import{P as p}from"./pdf-viewer-0_ZTiCAw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D1cyqqmC.js";import"./preload-helper-XATaYvna.js";import"./PdfRenderer-DVH3XUQl.js";import"./index-CytlZwKK.js";import"./PdfViewer-AoaLwyll.js";import"./PdfViewer.module.css-DRHehuni.js";import"./PdfViewerAnnotationLayer-CWJXOeMI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-4fwOiERs.js";import"./PdfViewerOutlineSidebar-BNJ5qN3V.js";import"./PdfViewerSidebarHeader-DQN6KAAz.js";import"./useBaseUiId-CcJgBD_T.js";import"./useControlled-4Ksb8v8S.js";import"./CompositeRoot-BABNhv_5.js";import"./CompositeItem-C7V_Skuq.js";import"./ToolbarRootContext-MoW5PjEQ.js";import"./composite-uePQiAd3.js";import"./svgIconContainer-CUN1j48t.js";import"./PdfViewerSearchBar-CwsAyEeZ.js";import"./chevron-up-Ol-ucKOR.js";import"./chevron-down-DwfjrTJ-.js";import"./cross-CWOW4qd9.js";import"./PdfViewerSidebar-D-q58bu-.js";import"./index-CEPBw93X.js";import"./index-DbprldD0.js";import"./index-DwniMKUL.js";import"./PdfViewerToolbar-CFVDJaEA.js";import"./Button-Byc2y57h.js";import"./chevron-right-C7EcB5v7.js";import"./Input-obGi4R-h.js";import"./search-BFHO--qI.js";import"./spin-BPPW2Rqz.js";import"./error-CrVFNvEo.js";import"./withOsdkMetrics-zHx2V0mr.js";import"./makeExternalStore-CHpDPlpc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
