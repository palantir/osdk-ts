import{j as r,M as s}from"./iframe-BpLfy_7x.js";import{P as p}from"./pdf-viewer-Hp2jXkhu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BKa2FoAZ.js";import"./preload-helper-hhne1Nkw.js";import"./PdfRenderer-DyyyMsDg.js";import"./index-CI-PQox6.js";import"./PdfViewer-CZvN5RSj.js";import"./PdfViewer.module.css-DpizDa_o.js";import"./PdfViewerAnnotationLayer-BPR3wLAl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BIr06djA.js";import"./PdfViewerOutlineSidebar-DTIeUUYX.js";import"./PdfViewerSidebarHeader-BwHVPM1d.js";import"./useBaseUiId-DLhvCT2w.js";import"./useControlled-DQnuFJYA.js";import"./CompositeRoot-DmZB2VZQ.js";import"./CompositeItem-Dh49dnMe.js";import"./ToolbarRootContext-CZ4baxUR.js";import"./composite-D6MrKr0W.js";import"./svgIconContainer-BJcxFCQJ.js";import"./PdfViewerSearchBar-C7Vgg7gg.js";import"./chevron-up-Df0hnqPv.js";import"./chevron-down-BWdhcgKJ.js";import"./cross-PuYX_-t_.js";import"./PdfViewerSidebar-BVxfM9Oa.js";import"./index-DsR_IMSl.js";import"./index-CqzGtbz4.js";import"./index-CS2EtUA3.js";import"./PdfViewerToolbar-DV_YBpx1.js";import"./Button-ByGcR2jl.js";import"./chevron-right-CKVpbVSX.js";import"./Input-B6V3A2xO.js";import"./search-CWqxR7My.js";import"./spin-CkQem35W.js";import"./error-gXA04YBk.js";import"./withOsdkMetrics-C4NgfUdQ.js";import"./makeExternalStore-GYdWhjGR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
