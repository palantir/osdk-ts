import{j as r,M as s}from"./iframe-C7p8bC4z.js";import{P as p}from"./pdf-viewer-y89mZgtg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CZE9uOKT.js";import"./preload-helper-yARIFMHO.js";import"./PdfViewer-DMQA8sB3.js";import"./index-BSFFflxO.js";import"./BasePdfViewer-BYB8N92E.js";import"./BasePdfViewer.module.css-GlHbTtVo.js";import"./PdfViewerAnnotationLayer-oOyHgwiI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B-DqyHSH.js";import"./PdfViewerOutlineSidebar-Cc1jDXz_.js";import"./PdfViewerSidebarHeader-wr7J_3XR.js";import"./useBaseUiId-D7Bs2_0o.js";import"./useControlled-CwSyNuxB.js";import"./CompositeRoot-CuL_EM0J.js";import"./CompositeItem-D2oL3zur.js";import"./ToolbarRootContext-D3hUmd4P.js";import"./composite-BOtNh-Av.js";import"./svgIconContainer-Bh8CNGr-.js";import"./PdfViewerSearchBar-B2kRH4Ej.js";import"./chevron-up-CAk_Znt8.js";import"./chevron-down-DB23ilQg.js";import"./cross-D8SQea4D.js";import"./PdfViewerSidebar-Du2kaasd.js";import"./index-TDqpefMN.js";import"./index-z04c2hdv.js";import"./index-c3k5U_lr.js";import"./PdfViewerToolbar-C9jmy7sM.js";import"./Button-DmUpkepK.js";import"./chevron-right-B3lUyoQs.js";import"./Input-BAFeVd23.js";import"./search-D9u2yYuj.js";import"./spin-CYbPB2k2.js";import"./error-DM0DBmSQ.js";import"./withOsdkMetrics-CpiFq1j5.js";import"./makeExternalStore-DDCjJxWP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
