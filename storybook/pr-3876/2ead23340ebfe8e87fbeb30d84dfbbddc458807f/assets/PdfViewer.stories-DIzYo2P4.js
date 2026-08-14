import{j as r,M as s}from"./iframe-d99A6dy_.js";import{P as p}from"./pdf-viewer-iJ1NIi8k.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BXUtYSp4.js";import"./preload-helper-BXXDbSLQ.js";import"./PdfViewer-DdroTKzg.js";import"./index-BvI0aYJU.js";import"./BasePdfViewer-DheEHFo9.js";import"./BasePdfViewer.module.css-yRezsWOh.js";import"./PdfViewerAnnotationLayer-DATa04Ws.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cxp8v9HS.js";import"./PdfViewerOutlineSidebar-CCn1YTxJ.js";import"./PdfViewerSidebarHeader-DagVe_0w.js";import"./useBaseUiId-DayFylep.js";import"./useControlled-Res_vZF_.js";import"./CompositeRoot-C_PehcNK.js";import"./CompositeItem-CY0DaOXF.js";import"./ToolbarRootContext-BBcTGc1X.js";import"./composite-C_nWduZ1.js";import"./svgIconContainer-CQFp9MIY.js";import"./PdfViewerSearchBar-DzChHKMu.js";import"./chevron-up-CcvcS0Gu.js";import"./chevron-down-CUgj8iAn.js";import"./cross-dpi7xDM4.js";import"./PdfViewerSidebar-CmmU5xxc.js";import"./index-B0OryjOF.js";import"./index-BipUzWZ7.js";import"./index-DpKUv_nP.js";import"./PdfViewerToolbar-B7wo7Lv0.js";import"./Button-Bf5OJd4p.js";import"./chevron-right-CNsyOLMN.js";import"./Input-CwRTaEny.js";import"./search-xcjteEAF.js";import"./spin-CvduKX2O.js";import"./error-CXkBkCdL.js";import"./withOsdkMetrics-k5Ap-NK7.js";import"./makeExternalStore-CUVJJI81.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
