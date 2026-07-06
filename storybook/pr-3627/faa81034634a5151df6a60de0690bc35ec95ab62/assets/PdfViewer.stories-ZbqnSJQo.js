import{j as r,M as s}from"./iframe-DSQxWpEG.js";import{P as p}from"./pdf-viewer-CJr9jRKG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BvOGPpif.js";import"./preload-helper-CKI0la7c.js";import"./PdfRenderer-z9TtyVFx.js";import"./index-Yx2NrZhE.js";import"./PdfViewer-C6gMkJah.js";import"./PdfViewer.module.css-B5axqHUC.js";import"./PdfViewerAnnotationLayer-B10xg4a_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DSrIf--d.js";import"./PdfViewerOutlineSidebar-CRhdjw8f.js";import"./PdfViewerSidebarHeader-CfK5Ngjq.js";import"./useBaseUiId-afGmRM5V.js";import"./useControlled-fIuaNnjT.js";import"./CompositeRoot-CRHIY4Ys.js";import"./CompositeItem-DkpU-y6g.js";import"./ToolbarRootContext-0t2MeBsN.js";import"./composite-DI-GZpC1.js";import"./svgIconContainer-BrlbKQ-C.js";import"./PdfViewerSearchBar-CBFfoGJT.js";import"./chevron-up-B-9MkyCe.js";import"./chevron-down-BaQD7-Xj.js";import"./cross-BGnIbKJe.js";import"./PdfViewerSidebar-k1N6eGsN.js";import"./index-CR25DbLz.js";import"./index-BrRDEOU4.js";import"./index-CUc3ubfl.js";import"./PdfViewerToolbar-VSKu-zCo.js";import"./Button-DT9QUUB5.js";import"./chevron-right-DfLB0_fv.js";import"./Input-Cll8RmXv.js";import"./search-CbIjbFBw.js";import"./spin-DLSmwG95.js";import"./error-CtwIf2_-.js";import"./withOsdkMetrics-DpOGBXCo.js";import"./makeExternalStore-B21q_WfP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
