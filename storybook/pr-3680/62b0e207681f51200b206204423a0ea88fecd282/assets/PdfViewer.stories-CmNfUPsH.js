import{j as r,M as s}from"./iframe-QZNV0zY0.js";import{P as p}from"./pdf-viewer-sTwWQIhJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D3ylaC9e.js";import"./preload-helper-KM8tXi5L.js";import"./PdfRenderer-ByA8RMiV.js";import"./index-DBM_aGHQ.js";import"./PdfViewer-Co6MjRq4.js";import"./PdfViewer.module.css-BBrJusb-.js";import"./PdfViewerAnnotationLayer-BVAefIxG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B-mIMOVF.js";import"./PdfViewerOutlineSidebar-D3s5-w5L.js";import"./PdfViewerSidebarHeader-BNjbs109.js";import"./useBaseUiId-DGf8qofv.js";import"./useControlled-DihNxNbE.js";import"./CompositeRoot-DFmqsCO-.js";import"./CompositeItem-P4J3iqkU.js";import"./ToolbarRootContext-DaCpu9EQ.js";import"./composite-CmJ23A7k.js";import"./svgIconContainer-B8Ql_wUB.js";import"./PdfViewerSearchBar-CFPiy0Lh.js";import"./chevron-up-yymixiVi.js";import"./chevron-down-BX_1bk7N.js";import"./cross-J9xkeTdd.js";import"./PdfViewerSidebar-CYEW-PlM.js";import"./index-Crk9oV48.js";import"./index-Dt775aIT.js";import"./index-Bq588UAZ.js";import"./PdfViewerToolbar-CiG14aBJ.js";import"./Button-9l069q3l.js";import"./chevron-right-DivsKzP5.js";import"./Input-2byi3xAm.js";import"./search-BB3pPNkM.js";import"./spin-wf1bMgKk.js";import"./error-B6j2nIx9.js";import"./withOsdkMetrics-CyFyHeyy.js";import"./makeExternalStore-CtcgWyO0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
