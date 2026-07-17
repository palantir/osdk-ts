import{j as r,M as s}from"./iframe-JVFEa_gL.js";import{P as p}from"./pdf-viewer-Etb7Nns7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-xlOrzVE6.js";import"./preload-helper-7NlBF8sB.js";import"./PdfRenderer-Cjv67YLO.js";import"./index-dYientEh.js";import"./PdfViewer-jwsbwsTg.js";import"./PdfViewer.module.css-qDJM_Avx.js";import"./PdfViewerAnnotationLayer-BBLXMJHF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-6GAQdi6E.js";import"./PdfViewerOutlineSidebar-CTDab6bM.js";import"./PdfViewerSidebarHeader-CReM7TiO.js";import"./useBaseUiId-ReaL4_FG.js";import"./useControlled-BaqKUlJs.js";import"./CompositeRoot-BWjOb9Km.js";import"./CompositeItem-DQPtIbAf.js";import"./ToolbarRootContext-CMeOM6rz.js";import"./composite-sl0dwwdF.js";import"./svgIconContainer-TEcc7c63.js";import"./PdfViewerSearchBar-UkDGnYM3.js";import"./chevron-up-Zj_tjjyw.js";import"./chevron-down-CShsdakr.js";import"./cross-DgijNux0.js";import"./PdfViewerSidebar-Yafj5Yh_.js";import"./index-BEhdqmzr.js";import"./index-D86khk7q.js";import"./index-B6cRgO_Y.js";import"./PdfViewerToolbar-E0q7A3i1.js";import"./Button-C8Wh4CSL.js";import"./chevron-right-f3Yxqrhx.js";import"./Input-sYxZrQly.js";import"./search-D0pHKG36.js";import"./spin-CQvrTNiI.js";import"./error-Yv4CRBQm.js";import"./withOsdkMetrics-Bh6l5zNU.js";import"./makeExternalStore-CrqO0EwC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
