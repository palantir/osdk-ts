import{j as r,M as s}from"./iframe-D50gvACc.js";import{P as p}from"./pdf-viewer-BiLxpJME.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C3fS6L0M.js";import"./preload-helper-m4a9UOSi.js";import"./PdfRenderer-XWWVIibH.js";import"./index-D9W_tl0t.js";import"./PdfViewer-DHhaZDKo.js";import"./PdfViewer.module.css-DXtpQKwA.js";import"./PdfViewerAnnotationLayer-BCVoOIqE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DOxlUGOb.js";import"./PdfViewerOutlineSidebar-C7yt3_B8.js";import"./PdfViewerSidebarHeader-D6BqZLGU.js";import"./useBaseUiId-B4CrM7Z9.js";import"./useControlled-DhIeaHMy.js";import"./CompositeRoot-DzyGwNvV.js";import"./CompositeItem-nz8C8OlV.js";import"./ToolbarRootContext-Bo9_3IT0.js";import"./composite-ZZ8bIc9H.js";import"./svgIconContainer-CrMVLaIb.js";import"./PdfViewerSearchBar-DS81htqc.js";import"./chevron-up-r75R0h3o.js";import"./chevron-down-Bre7sq7M.js";import"./cross-Pq5KldeO.js";import"./PdfViewerSidebar-DB1lCZ89.js";import"./index-CvJL4ig_.js";import"./index-DV6IgZCx.js";import"./index-r25c1lQA.js";import"./PdfViewerToolbar-B5xZyXW_.js";import"./Button-Cc_XGaKn.js";import"./chevron-right-CE4Z5pec.js";import"./Input-BVlUigg9.js";import"./search-B-iaR71s.js";import"./spin-C9uNrOnc.js";import"./error-D_eBDVCi.js";import"./withOsdkMetrics-BboHIQkZ.js";import"./makeExternalStore-DAih4Bbz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
