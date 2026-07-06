import{j as r,M as s}from"./iframe-DLj-u7sS.js";import{P as p}from"./pdf-viewer-CwtMwgXr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DBXZF5Ae.js";import"./preload-helper-bRsnZhqF.js";import"./PdfRenderer-DX7CpHgF.js";import"./index-h5XaJsyy.js";import"./PdfViewer-CDrHocR3.js";import"./PdfViewer.module.css-ClLLOnlp.js";import"./PdfViewerAnnotationLayer-B2Bsi37C.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CRDd2gcM.js";import"./PdfViewerOutlineSidebar-CBgyg1A4.js";import"./PdfViewerSidebarHeader-f7itY43W.js";import"./useBaseUiId-DJZ_QMRI.js";import"./useControlled-Czn7Kpxn.js";import"./CompositeRoot-CkoWZn_p.js";import"./CompositeItem-DyWvApu6.js";import"./ToolbarRootContext-C9gB3nbw.js";import"./composite-8LaW7Fnq.js";import"./svgIconContainer-CkWeyV4d.js";import"./PdfViewerSearchBar-CO83AxSd.js";import"./chevron-up-CnIW6mbz.js";import"./chevron-down-B5fRmw-q.js";import"./cross-DW3w3_M4.js";import"./PdfViewerSidebar-tieRq2H9.js";import"./index-BdAV1eXI.js";import"./index-B6RSVgXo.js";import"./index-D_X9WQ-2.js";import"./PdfViewerToolbar-jyzwoXqT.js";import"./Button-CNjMzJ-P.js";import"./chevron-right-Bt1B0yIA.js";import"./Input-pFDM4UYb.js";import"./search-CiN923r4.js";import"./spin-ChlaB_Wk.js";import"./error-DnltI_RQ.js";import"./withOsdkMetrics-BJfe6jhM.js";import"./makeExternalStore-DPSBsFoK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
