import{j as r,M as s}from"./iframe-CQw56iWo.js";import{P as p}from"./pdf-viewer-CE8_e7bw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BRS_fGVk.js";import"./preload-helper-Cb-iTVGL.js";import"./PdfViewer-BLZOlU4q.js";import"./index-BbcRXNNj.js";import"./BasePdfViewer-CL0wbRss.js";import"./BasePdfViewer.module.css-C40JEXK6.js";import"./PdfViewerAnnotationLayer-_9LIqsGZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CHz6AoUd.js";import"./PdfViewerOutlineSidebar-DoL9M7Xq.js";import"./PdfViewerSidebarHeader-DWxvvc87.js";import"./useBaseUiId-wSHMnGD-.js";import"./useControlled-Brc4EdI6.js";import"./CompositeRoot-CjUpH7v4.js";import"./CompositeItem-B1bezKZw.js";import"./ToolbarRootContext-R1fb82vZ.js";import"./composite-CrcBBrnx.js";import"./svgIconContainer-CJszD9JX.js";import"./PdfViewerSearchBar-CBGutdNn.js";import"./chevron-up-DvH-xrGm.js";import"./chevron-down-Df0py7y_.js";import"./cross-Nlfk9xaA.js";import"./PdfViewerSidebar-Da04zlxu.js";import"./index-C5iZ-ss4.js";import"./index-3NrBg7OY.js";import"./index-B-4hZkSR.js";import"./PdfViewerToolbar-lyBuO6BV.js";import"./Button-CE9o7PIg.js";import"./chevron-right-BbVJt6tq.js";import"./Input-BjEM47WF.js";import"./search-BeZpj5L6.js";import"./spin-ibjtE4nq.js";import"./error-C5hkCc6v.js";import"./withOsdkMetrics-D9HOSlTb.js";import"./makeExternalStore-CCwV61OO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
