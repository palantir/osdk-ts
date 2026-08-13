import{j as r,M as s}from"./iframe-DqgxXeY0.js";import{P as p}from"./pdf-viewer-P8_CMEgt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DpaUGvuS.js";import"./preload-helper-swuqDPIZ.js";import"./PdfViewer-26Czet4k.js";import"./index-Fs4ToPVt.js";import"./BasePdfViewer-B1VmtzQc.js";import"./BasePdfViewer.module.css-DPl-PfUx.js";import"./PdfViewerAnnotationLayer-BNy_OrCM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BpuWYYeH.js";import"./PdfViewerOutlineSidebar-DoPMV7jd.js";import"./PdfViewerSidebarHeader-CgRXyMnw.js";import"./useBaseUiId-BHCjvXGp.js";import"./useControlled-CXVHehbk.js";import"./CompositeRoot-BO10uDRM.js";import"./CompositeItem-Bs3OF5D8.js";import"./ToolbarRootContext-CCZNhx4y.js";import"./composite-CgO0yOYX.js";import"./svgIconContainer-DJKRTo9s.js";import"./PdfViewerSearchBar-BOMsUxih.js";import"./chevron-up-Ce4b_Ygz.js";import"./chevron-down-CeLBV2f1.js";import"./cross-B3HJExXl.js";import"./PdfViewerSidebar-Bktu4rmd.js";import"./index-LCxHta6h.js";import"./index-Bz8pQAXU.js";import"./index-Ber0h4Jn.js";import"./PdfViewerToolbar-CZtWAoXF.js";import"./Button-D3n3BMyb.js";import"./chevron-right-BM-D8mWk.js";import"./Input-hYuVgO52.js";import"./search-Xkmq_vNk.js";import"./spin-Cl8AAkKo.js";import"./error-CoHaOVWU.js";import"./withOsdkMetrics-Bsc7ScXm.js";import"./makeExternalStore-iwrJkOaf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
