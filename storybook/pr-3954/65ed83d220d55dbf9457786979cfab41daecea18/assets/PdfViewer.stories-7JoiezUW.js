import{j as r,M as s}from"./iframe-CUxo3m6Y.js";import{P as p}from"./pdf-viewer-C5h1lv2L.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-UOr63yML.js";import"./preload-helper-l6s3tcls.js";import"./PdfViewer-CDy3FxKr.js";import"./index-DTuBVR6H.js";import"./BasePdfViewer-Bp0OXLRr.js";import"./BasePdfViewer.module.css-CksjIdYL.js";import"./PdfViewerAnnotationLayer-hxW3YTFA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ya8ZO0dF.js";import"./PdfViewerOutlineSidebar-B7sR2V-_.js";import"./PdfViewerSidebarHeader-Pvr-5L6S.js";import"./useBaseUiId-Cfk1xeZo.js";import"./useControlled-CW8X9itX.js";import"./CompositeRoot-C1V5cSo-.js";import"./CompositeItem-BVjd-TkC.js";import"./ToolbarRootContext-CJO8_3PY.js";import"./composite-QDblzbOe.js";import"./svgIconContainer-CNkl-Wwt.js";import"./PdfViewerSearchBar-DMlkCfko.js";import"./chevron-up-v5gRdlak.js";import"./chevron-down-BOa4nBg1.js";import"./cross-BrW7tcZq.js";import"./PdfViewerSidebar-D19n_p8m.js";import"./index-BEOdQoLT.js";import"./index-CDPyuaTW.js";import"./index-DKD0s-Lm.js";import"./PdfViewerToolbar-BYkiCsYB.js";import"./Button-Bp7sJ37u.js";import"./chevron-right-BGsY3puw.js";import"./Input-n5RT_2o8.js";import"./search-C5XD9rFV.js";import"./spin-B5cxm6Hs.js";import"./error-D3zX7u9C.js";import"./withOsdkMetrics-CSx29j57.js";import"./makeExternalStore-D-euk5kW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
