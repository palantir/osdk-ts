import{j as r,M as s}from"./iframe-6a_kvn9r.js";import{P as p}from"./pdf-viewer-B-6wNnN6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BgM0WlA0.js";import"./preload-helper-UmLrF_r9.js";import"./PdfViewer-Cq87oV-z.js";import"./index-DZsq7FTs.js";import"./BasePdfViewer-SO3uv_Ym.js";import"./BasePdfViewer.module.css-7kv1H96r.js";import"./PdfViewerAnnotationLayer-BqfOumCl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DLWdM5Um.js";import"./PdfViewerOutlineSidebar-CTE_Mzze.js";import"./PdfViewerSidebarHeader-C_WDvldM.js";import"./useBaseUiId-BwFLjng5.js";import"./useControlled-DlWAEbXA.js";import"./CompositeRoot-CwVOlDsf.js";import"./CompositeItem-r_UKZCPX.js";import"./ToolbarRootContext-8rOO4UX6.js";import"./composite-BqONz2GB.js";import"./svgIconContainer-BMlsWZH7.js";import"./PdfViewerSearchBar-DiB1-9FE.js";import"./chevron-up-GcxZbCbu.js";import"./chevron-down-CWTTgj3w.js";import"./cross-ClFn7dec.js";import"./PdfViewerSidebar-CT4Gfe5P.js";import"./index-BGR9g80G.js";import"./index-De5jnlky.js";import"./index-BA8CMsKZ.js";import"./PdfViewerToolbar-BElePZS1.js";import"./Button-BY6mG_TR.js";import"./chevron-right-D4QOBaYy.js";import"./Input-BN6wpSvl.js";import"./search-DOcCo1oD.js";import"./spin-DQugbBYW.js";import"./error-C1tZ3x6V.js";import"./withOsdkMetrics-D0t1junC.js";import"./makeExternalStore-B7ja9LyT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
