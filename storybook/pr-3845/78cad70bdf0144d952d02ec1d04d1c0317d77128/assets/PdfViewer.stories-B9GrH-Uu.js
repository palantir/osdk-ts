import{j as r,M as s}from"./iframe-B5w1MiMB.js";import{P as p}from"./pdf-viewer-CTB9urEl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C0WeCEPj.js";import"./preload-helper-CU1AtdIz.js";import"./PdfRenderer-BHbTEfb1.js";import"./index-CtjXdvRc.js";import"./PdfViewer-D1zquXvD.js";import"./PdfViewer.module.css-2ucYBy4c.js";import"./PdfViewerAnnotationLayer-0iq74ZOy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B_m0v0IH.js";import"./PdfViewerOutlineSidebar-w-GapPbs.js";import"./PdfViewerSidebarHeader-CcLOxXj8.js";import"./useBaseUiId-1DFIpK_I.js";import"./useControlled-N5ZmUmtW.js";import"./CompositeRoot-BC5dSySR.js";import"./CompositeItem-B9-flLpX.js";import"./ToolbarRootContext-DXnkpKvw.js";import"./composite-DdCZUanX.js";import"./svgIconContainer-B7EdkAw1.js";import"./PdfViewerSearchBar-LcHsipfW.js";import"./chevron-up-DJQSx4_U.js";import"./chevron-down-BplLrpUt.js";import"./cross-CV9fpUOl.js";import"./PdfViewerSidebar-CxknnsEa.js";import"./index-BqopfQQ5.js";import"./index-CLavCOv2.js";import"./index-Cxsp0K40.js";import"./PdfViewerToolbar-C44rM1Wg.js";import"./Button-BwuNtGpm.js";import"./chevron-right-DfI1DDmN.js";import"./Input-j9KFgO4e.js";import"./search-CzP4ABR3.js";import"./spin-DWcLCYKl.js";import"./error-DbvnMx8s.js";import"./withOsdkMetrics-CMmNO-Cj.js";import"./makeExternalStore-DG987ZvC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
