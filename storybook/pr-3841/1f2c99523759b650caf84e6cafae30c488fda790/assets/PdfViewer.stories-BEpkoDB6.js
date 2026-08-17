import{j as r,M as s}from"./iframe-BqP11lAl.js";import{P as p}from"./pdf-viewer-KG5ETBry.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-M02bhuJP.js";import"./preload-helper-CC6pDEnd.js";import"./PdfRenderer-t0s4h7QL.js";import"./index-C64P8eBz.js";import"./PdfViewer-Fsd69Lzh.js";import"./PdfViewer.module.css-CS_v2iJc.js";import"./PdfViewerAnnotationLayer-CwuGfTOs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BVUX_YcG.js";import"./PdfViewerOutlineSidebar-DwPwH9Up.js";import"./PdfViewerSidebarHeader-D5OHI8ye.js";import"./useBaseUiId-Djy5KSNq.js";import"./useControlled-C68p10XH.js";import"./CompositeRoot-BPzUjMK_.js";import"./CompositeItem-BmMUGQ2w.js";import"./ToolbarRootContext-ClCfVHHi.js";import"./composite-kMucuKDb.js";import"./svgIconContainer-oPNNgG6X.js";import"./PdfViewerSearchBar-DY3tiWOc.js";import"./chevron-up-Bzxbeafl.js";import"./chevron-down-DCtv2YH3.js";import"./cross-HwIuLDzz.js";import"./PdfViewerSidebar-Csa4E_fL.js";import"./index-Bc_u8_gZ.js";import"./index-BB8CgDAM.js";import"./index-CGSFhzHU.js";import"./PdfViewerToolbar-BGFqkDdi.js";import"./Button-CeOJx0M4.js";import"./chevron-right-CZlq9uWX.js";import"./Input-B380zOW0.js";import"./search-BJsW39qj.js";import"./spin-BaACIy_3.js";import"./error-BNv6Et6s.js";import"./withOsdkMetrics-CWSxEVx_.js";import"./makeExternalStore-BC_XfyUC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
