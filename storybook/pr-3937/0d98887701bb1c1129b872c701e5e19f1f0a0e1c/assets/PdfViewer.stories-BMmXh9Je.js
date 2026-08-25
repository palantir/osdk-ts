import{j as r,M as s}from"./iframe-Bno8djo7.js";import{P as p}from"./pdf-viewer-hq1aldy5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C6vt7gVU.js";import"./preload-helper-DoyMSojG.js";import"./PdfViewer-B6QR9fbA.js";import"./index-Bp1l5rWD.js";import"./BasePdfViewer-DNkRStzK.js";import"./BasePdfViewer.module.css-QbDSL1N9.js";import"./PdfViewerAnnotationLayer-Cy4jJxt5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ldZhvc1T.js";import"./PdfViewerOutlineSidebar-D1uy3lYG.js";import"./PdfViewerSidebarHeader-B8g6pBNc.js";import"./useBaseUiId-CysbO9z2.js";import"./useControlled-c3pzkWI7.js";import"./CompositeRoot-B-N6TCua.js";import"./CompositeItem-4hPgfCxC.js";import"./ToolbarRootContext-Dql3SctO.js";import"./composite-DfMqUtsP.js";import"./svgIconContainer-BnD58swH.js";import"./PdfViewerSearchBar-lymV4w5U.js";import"./chevron-up-bLOYSLOQ.js";import"./chevron-down-DPAZwO7T.js";import"./cross-QI68TLXt.js";import"./PdfViewerSidebar-iBGRBSCQ.js";import"./index-CyXtkMiX.js";import"./index-CTCxNRd0.js";import"./index-zlVZaIXm.js";import"./PdfViewerToolbar-DrjRywte.js";import"./Button-C9PyxqvP.js";import"./chevron-right-Cl_Aeju9.js";import"./Input-DbgwKTdL.js";import"./search-Cwwb_s2u.js";import"./spin-B4Brnz5p.js";import"./error-DdObSOoZ.js";import"./withOsdkMetrics-DvUN-3xf.js";import"./makeExternalStore-BAXThE2g.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
