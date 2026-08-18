import{j as r,M as s}from"./iframe-B9hGOcVW.js";import{P as p}from"./pdf-viewer-BEp0o_1m.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ExPDnZfc.js";import"./preload-helper-CEHJKNgD.js";import"./PdfViewer-Cbe3VhGd.js";import"./index-WMs6XgHc.js";import"./BasePdfViewer-9Z2YTUBb.js";import"./BasePdfViewer.module.css-DQ1Xhdqh.js";import"./PdfViewerAnnotationLayer-DmawxLHn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DuZCEMIH.js";import"./PdfViewerOutlineSidebar-WrtLQMKb.js";import"./PdfViewerSidebarHeader-S3nQMehz.js";import"./useBaseUiId-Bv7mJDK-.js";import"./useControlled-CuLTDJ7U.js";import"./CompositeRoot-dv4w3QNj.js";import"./CompositeItem-DJ_648IQ.js";import"./ToolbarRootContext-CI0oTBSQ.js";import"./composite-BPGo720E.js";import"./svgIconContainer-DJVhztLr.js";import"./PdfViewerSearchBar-a1PG7ZWH.js";import"./chevron-up-BxiG8zRF.js";import"./chevron-down-cOiqTWha.js";import"./cross-Kg25sWVz.js";import"./PdfViewerSidebar-DFvs5Git.js";import"./index-BOZqc1dp.js";import"./index-DDiAWfcg.js";import"./index-C0zF1Hh-.js";import"./PdfViewerToolbar-BX8Mpbd2.js";import"./Button-Kv95ZBq_.js";import"./chevron-right-BQ739UYH.js";import"./Input-DL4wCDaa.js";import"./search-CIz89Kd0.js";import"./spin-CkK6P_Px.js";import"./error-D0SwKHMs.js";import"./withOsdkMetrics-CgdP6FhV.js";import"./makeExternalStore-X3bc05mq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
