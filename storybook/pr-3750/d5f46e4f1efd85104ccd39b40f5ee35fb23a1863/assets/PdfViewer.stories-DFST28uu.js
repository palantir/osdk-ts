import{j as r,M as s}from"./iframe-CzXyKteJ.js";import{P as p}from"./pdf-viewer-D6HFgLzE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DqP0R7Q9.js";import"./preload-helper-BtA1fO60.js";import"./PdfRenderer-CVBC17rN.js";import"./index-n_H_jwj_.js";import"./PdfViewer-CF8LvndP.js";import"./PdfViewer.module.css-Dn77gXhd.js";import"./PdfViewerAnnotationLayer-DO13nMRt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CetXtGyU.js";import"./PdfViewerOutlineSidebar-BwJ23l00.js";import"./PdfViewerSidebarHeader-BFteD8Hc.js";import"./useBaseUiId-DFni2TzW.js";import"./useControlled-BNTSXjm5.js";import"./CompositeRoot-DO_OPjGW.js";import"./CompositeItem-B9seLPIq.js";import"./ToolbarRootContext-DP20GWxN.js";import"./composite-BOMrbHlv.js";import"./svgIconContainer-Btsr4gWM.js";import"./PdfViewerSearchBar-X9ofMcxr.js";import"./chevron-up-C5LmTr7e.js";import"./chevron-down-2uq3yvyE.js";import"./cross-B881VNei.js";import"./PdfViewerSidebar-RGH1pIHG.js";import"./index-CwELXqcq.js";import"./index-Bk_q8mAy.js";import"./index-DArwu2FJ.js";import"./PdfViewerToolbar-JdQmfqSd.js";import"./Button-D88wUQtr.js";import"./chevron-right-O_tqKP8V.js";import"./Input-CskI9HNq.js";import"./search-Kg3rAhij.js";import"./spin-BFoKK-CG.js";import"./error-YEC2L9e4.js";import"./withOsdkMetrics-Bf0ACKKN.js";import"./makeExternalStore-deaRhxWg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
