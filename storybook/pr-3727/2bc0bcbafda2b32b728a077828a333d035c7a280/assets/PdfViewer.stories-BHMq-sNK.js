import{j as r,M as s}from"./iframe-0rqtpzMT.js";import{P as p}from"./pdf-viewer-CVpmoMZX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-eWFYVZ4a.js";import"./preload-helper-C-4TUSMQ.js";import"./PdfRenderer-BPf8fzWu.js";import"./index-BkI2yq5W.js";import"./PdfViewer-DEc-QhP8.js";import"./PdfViewer.module.css-4IIIr1FH.js";import"./PdfViewerAnnotationLayer-DaFvrKMi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-RfrF6fYl.js";import"./PdfViewerOutlineSidebar-BxQuGkB2.js";import"./PdfViewerSidebarHeader-D-F2sNwI.js";import"./useBaseUiId-BAMevgqu.js";import"./useControlled-Bj0iKUJ5.js";import"./CompositeRoot-B3aBmftd.js";import"./CompositeItem-BEzpzojI.js";import"./ToolbarRootContext-C5RokYlI.js";import"./composite-vErU7hi9.js";import"./svgIconContainer-Cy8TuwcG.js";import"./PdfViewerSearchBar-reknSail.js";import"./chevron-up-BGNdaUUs.js";import"./chevron-down-BqYHuFRP.js";import"./cross-CJIAGxzU.js";import"./PdfViewerSidebar-C6ozhenC.js";import"./index-2cq3jVVy.js";import"./index-BP9VSl-L.js";import"./index-BG27IzRI.js";import"./PdfViewerToolbar-Bpj3vthh.js";import"./Button-BWPtdaY9.js";import"./chevron-right-BEl2FKOo.js";import"./Input-DbYHqXSd.js";import"./search-DRt2tHKM.js";import"./spin-DfmiDfUU.js";import"./error-cQ5-x4_F.js";import"./withOsdkMetrics-B7-f_PGX.js";import"./makeExternalStore-olQJIU6f.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
