import{j as r,M as s}from"./iframe-ByH6cwcC.js";import{P as p}from"./pdf-viewer-Dv53Q7s_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DLJxe_GM.js";import"./preload-helper-CTHNm7Zf.js";import"./PdfViewer-BZUZc2z6.js";import"./index-BffOjmGP.js";import"./BasePdfViewer-C81QTCWU.js";import"./BasePdfViewer.module.css-ClaDlsPt.js";import"./PdfViewerAnnotationLayer-CLNZQy57.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-TxIqpPD5.js";import"./PdfViewerOutlineSidebar-Clo3mC_v.js";import"./PdfViewerSidebarHeader-CCX5Rqra.js";import"./useBaseUiId-rCCQLDzE.js";import"./useControlled-CiJux5fd.js";import"./CompositeRoot-KpzuQPN4.js";import"./CompositeItem-BAQU7622.js";import"./ToolbarRootContext-BlxbtcnM.js";import"./composite-DsmzMxzf.js";import"./svgIconContainer-C59hMuAg.js";import"./PdfViewerSearchBar-BFnphyvZ.js";import"./chevron-up-nCl3BmHw.js";import"./chevron-down-Dat11n9w.js";import"./cross-CUNO9jlI.js";import"./PdfViewerSidebar-CeYNqu1c.js";import"./index-OS6ALw7f.js";import"./index-N0N9SzuH.js";import"./index-B9rySOnb.js";import"./PdfViewerToolbar-JaHTdB__.js";import"./Button-CPqebLlQ.js";import"./chevron-right-DHrxYUnN.js";import"./Input-BQqKdvxX.js";import"./search-Do_ND450.js";import"./spin-CNX0iWFE.js";import"./error-Di2DxefB.js";import"./withOsdkMetrics-DSJJhCCa.js";import"./makeExternalStore-DxT_f6S6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
