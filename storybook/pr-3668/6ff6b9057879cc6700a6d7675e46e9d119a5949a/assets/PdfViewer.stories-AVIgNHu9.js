import{j as r,M as s}from"./iframe-bxRMNczp.js";import{P as p}from"./pdf-viewer-DbMU1ua3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BseKQCpH.js";import"./preload-helper-BDRcmb1W.js";import"./PdfRenderer-COaapZMT.js";import"./index-Z4Cfnvhq.js";import"./PdfViewer-B7ejRrQD.js";import"./PdfViewer.module.css-D1uEpeAu.js";import"./PdfViewerAnnotationLayer-HjueRlCv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDTg0gGe.js";import"./PdfViewerOutlineSidebar-D5sHaFbz.js";import"./PdfViewerSidebarHeader-CzV7L8nj.js";import"./useBaseUiId-BgNfMjA9.js";import"./useControlled-BkN2Lkbv.js";import"./CompositeRoot-CyYMjkCH.js";import"./CompositeItem-BJAbDT9R.js";import"./ToolbarRootContext-T1JrG8bu.js";import"./composite-f5gML3WJ.js";import"./svgIconContainer-7gZ2E55w.js";import"./PdfViewerSearchBar-DXx89kPA.js";import"./chevron-up-BF91xg2i.js";import"./chevron-down-CZhO4R3K.js";import"./cross-R7R5wt6y.js";import"./PdfViewerSidebar-DCcAXS-U.js";import"./index-BOQ6QNM0.js";import"./index-CwC_eRQA.js";import"./index-Br7vQdps.js";import"./PdfViewerToolbar-0SxrU4cs.js";import"./Button-tM0dsnqC.js";import"./chevron-right-CG0nuPkj.js";import"./Input-djjdsceB.js";import"./search-HidXhXwC.js";import"./spin-BrhrWSAg.js";import"./error-D5vR-pKB.js";import"./withOsdkMetrics-Yw1-PeTM.js";import"./makeExternalStore-DUngePYM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
