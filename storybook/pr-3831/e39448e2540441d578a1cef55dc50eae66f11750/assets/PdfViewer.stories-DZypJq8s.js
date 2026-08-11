import{j as r,M as s}from"./iframe-BAzoJD_n.js";import{P as p}from"./pdf-viewer-COFyv9mf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DJMfsiq-.js";import"./preload-helper-DSHDaNkC.js";import"./PdfRenderer-D4PBu5O2.js";import"./index-s4lAOVrs.js";import"./PdfViewer-1IW-WBNN.js";import"./PdfViewer.module.css-C7PEELq1.js";import"./PdfViewerAnnotationLayer-IUMtsoCN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-vdWvbXfv.js";import"./PdfViewerOutlineSidebar-5gJe1K8o.js";import"./PdfViewerSidebarHeader-DAoQ1SvD.js";import"./useBaseUiId-X8JbO_jF.js";import"./useControlled-cRyxw0TO.js";import"./CompositeRoot-CdFLNi9z.js";import"./CompositeItem-Dx_RF7XZ.js";import"./ToolbarRootContext-DHhHK4Vd.js";import"./composite-C2ZeH-nt.js";import"./svgIconContainer-DcEtiJnJ.js";import"./PdfViewerSearchBar-DdEmRz46.js";import"./chevron-up-BsCHzEXN.js";import"./chevron-down-BgJhhOtE.js";import"./cross-Cz9X-8vp.js";import"./PdfViewerSidebar-G0txYdCZ.js";import"./index-RB9l46zQ.js";import"./index-DnptcgYz.js";import"./index-BMCs90I6.js";import"./PdfViewerToolbar-jmP-q_26.js";import"./Button-C6-5CX8D.js";import"./chevron-right-DUghkqi6.js";import"./Input-DvNrW-kH.js";import"./search-BX5F8_z_.js";import"./spin-C_QdVxGv.js";import"./error-3n0FpK4k.js";import"./withOsdkMetrics-CiR7QeDt.js";import"./makeExternalStore-C_ctE6bz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
