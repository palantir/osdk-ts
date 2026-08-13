import{j as r,M as s}from"./iframe-DY1GCbMw.js";import{P as p}from"./pdf-viewer-5rb_mbXa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DbGbR9lp.js";import"./preload-helper-CBmLF2uv.js";import"./PdfViewer-ZcAD8ygy.js";import"./index-D14LjQ6n.js";import"./BasePdfViewer-DKZ_2t_t.js";import"./BasePdfViewer.module.css-B298QQiO.js";import"./PdfViewerAnnotationLayer-CzoZJ6Qw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7pfQHnB.js";import"./PdfViewerOutlineSidebar-Dk_XPrVW.js";import"./PdfViewerSidebarHeader-cP6TLk-o.js";import"./useBaseUiId-DuGGt2wk.js";import"./useControlled-DgmoUEMa.js";import"./CompositeRoot-Cx-ZloLM.js";import"./CompositeItem-CyVQmu_E.js";import"./ToolbarRootContext-CKGq1FSG.js";import"./composite-BpnSt9TV.js";import"./svgIconContainer-BFVaOhpV.js";import"./PdfViewerSearchBar-Yl5SLP5J.js";import"./chevron-up-BWn3wUXM.js";import"./chevron-down-DwvhxFZN.js";import"./cross-CmkMCGAt.js";import"./PdfViewerSidebar-62PeDJ7j.js";import"./index-Cw53nmwf.js";import"./index-w54taWD8.js";import"./index-DRgBoERL.js";import"./PdfViewerToolbar-DIU7ZLRa.js";import"./Button-lZzhyPA5.js";import"./chevron-right-UmMitfgQ.js";import"./Input-BHRf24lx.js";import"./search-DozuAt7g.js";import"./spin-3FTkmWOT.js";import"./error-B-msJLHi.js";import"./withOsdkMetrics-C-yRlBMm.js";import"./makeExternalStore-CPaZopZ5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
