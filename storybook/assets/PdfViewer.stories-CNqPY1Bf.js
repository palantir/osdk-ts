import{j as r,M as s}from"./iframe-DbF5D9-_.js";import{P as p}from"./pdf-viewer-Aj0EqiQm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bt624rM8.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-BcgG_D0_.js";import"./index-vNZRhGQ3.js";import"./PdfViewer-1xVJM_tM.js";import"./PdfViewer.module.css-BqDeQhHU.js";import"./PdfViewerAnnotationLayer-CFF3Xk5n.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-S2ZPHefI.js";import"./PdfViewerOutlineSidebar-jUmN2s5E.js";import"./PdfViewerSidebarHeader-CYPjUMIk.js";import"./useBaseUiId-BYKXNZCL.js";import"./useControlled-DBlDVYGv.js";import"./CompositeRoot-DB4evZ1w.js";import"./CompositeItem-DXcm1g9b.js";import"./ToolbarRootContext-t3iqgFfl.js";import"./composite-BvIaIlJz.js";import"./svgIconContainer-CYL48BhS.js";import"./PdfViewerSearchBar-BQ0RRIn4.js";import"./chevron-up-BNvssNu9.js";import"./chevron-down-BrDC1vMO.js";import"./cross-DpsL6xSn.js";import"./PdfViewerSidebar-B157mdMW.js";import"./index-DHKOapB1.js";import"./index-C3rOI0HH.js";import"./index-BdoDUFMf.js";import"./PdfViewerToolbar-Ci1hKHTu.js";import"./Button-faj9AFom.js";import"./chevron-right-Dq6_ON7u.js";import"./Input-Cj8VgrV5.js";import"./search-CsGznyHB.js";import"./spin-Nd9QGKcU.js";import"./error-14LmHoiQ.js";import"./withOsdkMetrics-Fcwwb7tB.js";import"./makeExternalStore-Ca1T37Md.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
