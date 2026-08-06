import{j as r,M as s}from"./iframe-B4TxBOgD.js";import{P as p}from"./pdf-viewer-CYoPC6cs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CnswzgtH.js";import"./preload-helper-BImTr8XW.js";import"./PdfRenderer-DijcnVl5.js";import"./index-CewbiS0-.js";import"./PdfViewer-CQqxq5Sj.js";import"./PdfViewer.module.css-IMEr78ZW.js";import"./PdfViewerAnnotationLayer-DO5etXYa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-5Li7Po1H.js";import"./PdfViewerOutlineSidebar-Dt3aNKe6.js";import"./PdfViewerSidebarHeader-CAfAgTJ9.js";import"./useBaseUiId-DGDWvpff.js";import"./useControlled-C5WozG_u.js";import"./CompositeRoot-DQa7m8__.js";import"./CompositeItem-D_uU8YUN.js";import"./ToolbarRootContext-SUr-GoJT.js";import"./composite-CdnlLAO5.js";import"./svgIconContainer-BdVqbaHA.js";import"./PdfViewerSearchBar-BW5-oCDO.js";import"./chevron-up-BTdkTOj3.js";import"./chevron-down-9K24iL1H.js";import"./cross-hsr1UFQF.js";import"./PdfViewerSidebar-DWj8680Y.js";import"./index-DL0nRe0P.js";import"./index-Da0oW1Pt.js";import"./index-BQOT9bMM.js";import"./PdfViewerToolbar-BA4eUTjZ.js";import"./Button-C3hoplQB.js";import"./chevron-right-BoIHMRLF.js";import"./Input-BegfCSSS.js";import"./search-B3z6PcWR.js";import"./spin-B7-1eSwr.js";import"./error-BpJdqfq0.js";import"./withOsdkMetrics-D8u8gP3a.js";import"./makeExternalStore-7PAAW5FV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
