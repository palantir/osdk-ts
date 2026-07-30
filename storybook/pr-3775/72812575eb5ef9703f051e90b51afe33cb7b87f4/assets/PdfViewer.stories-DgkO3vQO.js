import{j as r,M as s}from"./iframe-O-bmwq56.js";import{P as p}from"./pdf-viewer-Dr7PnWr6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B2Y5j0rj.js";import"./preload-helper-6pTVH5-1.js";import"./PdfRenderer-C8BZwpT1.js";import"./index-C4WTlxbW.js";import"./PdfViewer-Cbf8iBja.js";import"./PdfViewer.module.css-BllBYkrS.js";import"./PdfViewerAnnotationLayer-DQ-CygNd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CyF7ocUX.js";import"./PdfViewerOutlineSidebar-C3tBg3Oj.js";import"./PdfViewerSidebarHeader-CwVTajvz.js";import"./useBaseUiId-CZlalpMb.js";import"./useControlled-CV44Tu2L.js";import"./CompositeRoot-BY07S_sY.js";import"./CompositeItem-CMtOHnnd.js";import"./ToolbarRootContext-idxGzI-q.js";import"./composite-D_QdLVWO.js";import"./svgIconContainer-Ck6gQcV_.js";import"./PdfViewerSearchBar-B-2m6vXf.js";import"./chevron-up-B-qSb-5K.js";import"./chevron-down-C3iVKDWO.js";import"./cross-CizIoSTz.js";import"./PdfViewerSidebar-CprzKANE.js";import"./index-DR49W70f.js";import"./index-CC-chcDG.js";import"./index-BkAaa8ff.js";import"./PdfViewerToolbar-Bhg4u9Sj.js";import"./Button-Dk1ohzyh.js";import"./chevron-right-DB1VehOB.js";import"./Input-By_d8TXu.js";import"./search-BcZ9FECg.js";import"./spin-Cd21XWCw.js";import"./error-B8Kd5ARc.js";import"./withOsdkMetrics-C9XRYbxI.js";import"./makeExternalStore-CkoSDh27.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
