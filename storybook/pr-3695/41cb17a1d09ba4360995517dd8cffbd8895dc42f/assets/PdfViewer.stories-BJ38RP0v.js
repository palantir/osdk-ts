import{j as r,M as s}from"./iframe-B3ON-Bh8.js";import{P as p}from"./pdf-viewer-fXmzb2Pa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B4bJ-8w4.js";import"./preload-helper-DrAZwIhC.js";import"./PdfRenderer-CFw3qRhE.js";import"./index-eNh6hv_-.js";import"./PdfViewer-s49yDhhW.js";import"./PdfViewer.module.css-CMaxED_y.js";import"./PdfViewerAnnotationLayer-DZQpFKXo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BmWxAXjq.js";import"./PdfViewerOutlineSidebar-B0OTJkm2.js";import"./PdfViewerSidebarHeader-dE8xlHvC.js";import"./useBaseUiId-DK_xnagp.js";import"./useControlled-DmnnRIQ_.js";import"./CompositeRoot-D5DZeyTV.js";import"./CompositeItem-BVGkt4zB.js";import"./ToolbarRootContext-DCiCihYc.js";import"./composite-BuMlRczj.js";import"./svgIconContainer-vmYm-prF.js";import"./PdfViewerSearchBar-4gUh9xsc.js";import"./chevron-up-Dd9H4_7a.js";import"./chevron-down-CVq2PDOV.js";import"./cross-Cdzhm16M.js";import"./PdfViewerSidebar-DjLQS2tR.js";import"./index-CH_p88jr.js";import"./index-Bn0evHgr.js";import"./index-Cm9O8KIX.js";import"./PdfViewerToolbar-BS-bTfVW.js";import"./Button-m63Z_so0.js";import"./chevron-right-UxzuRwlQ.js";import"./Input-WA17603D.js";import"./search-g9bviAUS.js";import"./spin-BmmMCNH4.js";import"./error-DcSOw756.js";import"./withOsdkMetrics-K_Pzkso4.js";import"./makeExternalStore-Cu-SjYrY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
