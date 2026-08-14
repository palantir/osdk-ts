import{j as r,M as s}from"./iframe-CRVmTQY5.js";import{P as p}from"./pdf-viewer-ehjRBVYE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DpbVgHWL.js";import"./preload-helper-COtteTaQ.js";import"./PdfViewer-VvdS77pK.js";import"./index-Dw_-9fsS.js";import"./BasePdfViewer-D35HKrPj.js";import"./BasePdfViewer.module.css-BtDER2Fv.js";import"./PdfViewerAnnotationLayer-DTiieHzo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0crxNGn.js";import"./PdfViewerOutlineSidebar-DxiifU7x.js";import"./PdfViewerSidebarHeader-CTQ38CHn.js";import"./useBaseUiId-D67cR8AP.js";import"./useControlled-BqiQYi-d.js";import"./CompositeRoot-CVIWnlHb.js";import"./CompositeItem-U_R9UZKK.js";import"./ToolbarRootContext-DwYXvC-Y.js";import"./composite-BzmHlTbJ.js";import"./svgIconContainer-dBFN_To1.js";import"./PdfViewerSearchBar-DOSiGjGc.js";import"./chevron-up-BwjOUECa.js";import"./chevron-down-CNBvsY8h.js";import"./cross-BTxRvC3_.js";import"./PdfViewerSidebar-CohCN9Ij.js";import"./index-DlWFsW2l.js";import"./index-CQe3SKlh.js";import"./index-ASaPE2Ya.js";import"./PdfViewerToolbar-x6_UOI1j.js";import"./Button-W6OP53wY.js";import"./chevron-right-Bb6yjBKy.js";import"./Input-H1MlkSJg.js";import"./search-DNHDuEbV.js";import"./spin-DiPV0_KJ.js";import"./error-BhsW8xEv.js";import"./withOsdkMetrics-0XIdQxec.js";import"./makeExternalStore-CzFcgJvi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
