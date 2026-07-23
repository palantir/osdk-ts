import{j as r,M as s}from"./iframe-C_Pv3Jbd.js";import{P as p}from"./pdf-viewer-DRdxXGzp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-q629uPPN.js";import"./preload-helper-BAWBxbEF.js";import"./PdfRenderer-DpzcBZDw.js";import"./index-CP6e4PYC.js";import"./PdfViewer-D4nnCQ4i.js";import"./PdfViewer.module.css-DnMmakJQ.js";import"./PdfViewerAnnotationLayer-BDR4JkGC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DZQIUMnt.js";import"./PdfViewerOutlineSidebar-mhxvjr15.js";import"./PdfViewerSidebarHeader-6UJ7cAys.js";import"./useBaseUiId-DYizqAnY.js";import"./useControlled-CqvE6bu2.js";import"./CompositeRoot-B0P-FyG-.js";import"./CompositeItem-Cl-rdabj.js";import"./ToolbarRootContext-DYmJz4jF.js";import"./composite-DgoWnZCr.js";import"./svgIconContainer-Ce7urqQf.js";import"./PdfViewerSearchBar-DRJKFIAG.js";import"./chevron-up-BYA26e8T.js";import"./chevron-down-Cp5ec-M-.js";import"./cross-DTseTQ2Z.js";import"./PdfViewerSidebar-Cms3X9ck.js";import"./index-Ca4GGAAu.js";import"./index-SADmy14t.js";import"./index-a8UjtM81.js";import"./PdfViewerToolbar-BSHtDq6g.js";import"./Button-Bm1k5fAp.js";import"./chevron-right-C9ehhIdh.js";import"./Input-D8GpyMjX.js";import"./search-DX7DB_41.js";import"./spin-BXwfoBVf.js";import"./error-CxH-v8gH.js";import"./withOsdkMetrics-CqP5kgBK.js";import"./makeExternalStore-Bmfsg2Df.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
