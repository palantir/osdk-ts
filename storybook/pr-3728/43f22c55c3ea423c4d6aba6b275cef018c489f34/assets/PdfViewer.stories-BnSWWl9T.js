import{j as r,M as s}from"./iframe-DGqAxy0c.js";import{P as p}from"./pdf-viewer-BVic8nMS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ClhMYY1v.js";import"./preload-helper-DOu5LciR.js";import"./PdfRenderer-CmRZLEwH.js";import"./index-DKVHPnER.js";import"./PdfViewer-B00KgRMz.js";import"./PdfViewer.module.css-az49bhDN.js";import"./PdfViewerAnnotationLayer-B7VxgXtx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DCOPIZuz.js";import"./PdfViewerOutlineSidebar-Cla-LCRm.js";import"./PdfViewerSidebarHeader-BX_RVFJG.js";import"./useBaseUiId-C0sG7UN2.js";import"./useControlled-BP_B87Zc.js";import"./CompositeRoot-DAWo_1gn.js";import"./CompositeItem-Bz35U6U_.js";import"./ToolbarRootContext-B_tVNmjA.js";import"./composite-D73ytotq.js";import"./svgIconContainer-DFE3qBEK.js";import"./PdfViewerSearchBar-3z3QGAQZ.js";import"./chevron-up-B31ILHb5.js";import"./chevron-down-mI4RWT8g.js";import"./cross-Br8T-iI2.js";import"./PdfViewerSidebar-D5wSDXMW.js";import"./index-DeBUQceq.js";import"./index-DN9D6M_y.js";import"./index-BAufJju8.js";import"./PdfViewerToolbar-8VSE4MYO.js";import"./Button-CF2ri-xc.js";import"./chevron-right-iIF5aWX4.js";import"./Input-DVJhqCpr.js";import"./search-C1O3fBRz.js";import"./spin-8K-RIfft.js";import"./error-DGKlIM1X.js";import"./withOsdkMetrics-Bs3jbmHC.js";import"./makeExternalStore-DpgkNH8V.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
