import{j as r,M as s}from"./iframe-BDDoLmha.js";import{P as p}from"./pdf-viewer-BWTTQKZA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CJNbGMU-.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-Ck0cnSs5.js";import"./index-BC_PGuPP.js";import"./PdfViewer-B6RZVPt7.js";import"./PdfViewer.module.css-DWeLH4R5.js";import"./PdfViewerAnnotationLayer-C9shQvxT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BeHFiv7i.js";import"./PdfViewerOutlineSidebar-DD8qAj1j.js";import"./PdfViewerSidebarHeader-Fno8QOTW.js";import"./useBaseUiId-C1stYciJ.js";import"./useControlled-fTso5J1v.js";import"./CompositeRoot-DFaSbPJZ.js";import"./CompositeItem-C_P6sqif.js";import"./ToolbarRootContext-D9qFS7IX.js";import"./composite-WWEtFGhY.js";import"./svgIconContainer-kcsw0qZe.js";import"./PdfViewerSearchBar-C-WOYTwE.js";import"./chevron-up-DYm7gu0l.js";import"./chevron-down-WvOrsc4J.js";import"./cross-ClU8WQkB.js";import"./PdfViewerSidebar-DJM7M8hh.js";import"./index-TFGv77Bk.js";import"./index-CM61V-po.js";import"./index-CGMmpBla.js";import"./PdfViewerToolbar-CYpVzVO5.js";import"./Button-B67G3YaJ.js";import"./chevron-right-CoWf15Gr.js";import"./Input-DyN46OQh.js";import"./search-uNkqFKpB.js";import"./spin-B0G42g7-.js";import"./error-j5R04zP-.js";import"./withOsdkMetrics-Beir_CMD.js";import"./makeExternalStore-DH38KA5d.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
