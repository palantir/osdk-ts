import{j as r,M as s}from"./iframe-C6xDkpL_.js";import{P as p}from"./pdf-viewer-BFhHNSxB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BKTvvvAD.js";import"./preload-helper-BAViXO5q.js";import"./PdfRenderer-D6bi4VBi.js";import"./index-C6MVQouO.js";import"./PdfViewer-Bj_0-hI-.js";import"./PdfViewer.module.css-B5XEZFo4.js";import"./PdfViewerAnnotationLayer-C8EtqxAx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-wSpKiQ6l.js";import"./PdfViewerOutlineSidebar-D1WaNgu0.js";import"./PdfViewerSidebarHeader-BPJk0Tts.js";import"./useBaseUiId-D6ssAiPF.js";import"./useControlled-De-rJN5p.js";import"./CompositeRoot-tCle-BQ1.js";import"./CompositeItem-C56Q588H.js";import"./ToolbarRootContext-CgrQlAcm.js";import"./composite-DFd1O6P2.js";import"./svgIconContainer-CdyNM_fM.js";import"./PdfViewerSearchBar-fSQBr4NJ.js";import"./chevron-up-LUKdjihD.js";import"./chevron-down-_i2-cqyT.js";import"./cross-DoloqHI6.js";import"./PdfViewerSidebar-DVUgGcpi.js";import"./index-CJ9az84z.js";import"./index-8nNjBhn6.js";import"./index-B9fL4M4R.js";import"./PdfViewerToolbar-YHKmi7XC.js";import"./Button-CJGEFDOi.js";import"./chevron-right-WoFuVxzm.js";import"./Input-CwXgJ7o8.js";import"./search-B146ryND.js";import"./spin-BdZKZgLP.js";import"./error-BKQEETqk.js";import"./withOsdkMetrics-CeWAAesK.js";import"./makeExternalStore-Bs5Z2Kjz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
