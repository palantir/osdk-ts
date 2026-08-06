import{j as r,M as s}from"./iframe-BG7t1Vmm.js";import{P as p}from"./pdf-viewer-B476nymg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-IZ8MLO2M.js";import"./preload-helper-CP3oW2I4.js";import"./PdfRenderer-DlDqWqfq.js";import"./index-DNP-skbR.js";import"./PdfViewer-BnjAIiNH.js";import"./PdfViewer.module.css-imPM0C7L.js";import"./PdfViewerAnnotationLayer-hvkwMIDn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CpEjbnTJ.js";import"./PdfViewerOutlineSidebar-DHYiWsFS.js";import"./PdfViewerSidebarHeader-c4PRKK9j.js";import"./useBaseUiId-wOo7_51r.js";import"./useControlled-cqUbBSR9.js";import"./CompositeRoot-SVDTOQYF.js";import"./CompositeItem-BOvhxDt7.js";import"./ToolbarRootContext-DHIMXwmc.js";import"./composite-DjXoYun8.js";import"./svgIconContainer-DoguVSwu.js";import"./PdfViewerSearchBar-ArHz7kMi.js";import"./chevron-up-DJ6rWFgD.js";import"./chevron-down-Dlge6__9.js";import"./cross-BgA3bxZe.js";import"./PdfViewerSidebar-BNh7anOf.js";import"./index-QQ1acmH5.js";import"./index-D5aAagqo.js";import"./index-LP8SaJdm.js";import"./PdfViewerToolbar-DC0z4Ma_.js";import"./Button-BpJLAHN7.js";import"./chevron-right-BiuSusYe.js";import"./Input-BtDQA_93.js";import"./search-DYV4c-c-.js";import"./spin-Da4XMsto.js";import"./error-CU6tir3a.js";import"./withOsdkMetrics-DPDNp8Fq.js";import"./makeExternalStore-DKKDnTU0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
