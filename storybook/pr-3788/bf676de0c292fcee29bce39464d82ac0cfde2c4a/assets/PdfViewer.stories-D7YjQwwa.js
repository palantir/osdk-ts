import{j as r,M as s}from"./iframe-CIS7R8S0.js";import{P as p}from"./pdf-viewer-CfXsLFb0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-_NPVaMyT.js";import"./preload-helper-CC0KEkYJ.js";import"./PdfRenderer-DPbDUPB3.js";import"./index-BB05R3oj.js";import"./PdfViewer-ue566lyJ.js";import"./PdfViewer.module.css-DlS5utyb.js";import"./PdfViewerAnnotationLayer-bIgPySOi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-XeddpM76.js";import"./PdfViewerOutlineSidebar-B8hUbhLI.js";import"./PdfViewerSidebarHeader-BdfR_9A_.js";import"./useBaseUiId-Dx4TGSeb.js";import"./useControlled-LRidnfkr.js";import"./CompositeRoot-Bq0HC65M.js";import"./CompositeItem-DDPMwQ0l.js";import"./ToolbarRootContext-DAJLxMfM.js";import"./composite-CQ8jq4un.js";import"./svgIconContainer-DOCbxMNh.js";import"./PdfViewerSearchBar-B6LLsFnW.js";import"./chevron-up-bEPZ0oUn.js";import"./chevron-down-BSAXsWfp.js";import"./cross-CypSL_mg.js";import"./PdfViewerSidebar-CO_wkk_m.js";import"./index-DWJWtSQK.js";import"./index-DM_wVMTu.js";import"./index-BKg_5Wuy.js";import"./PdfViewerToolbar-BeVY7Bt2.js";import"./Button-TVnROWVX.js";import"./chevron-right-DmFnA533.js";import"./Input-BbMczDPo.js";import"./search-CrRqmjmd.js";import"./spin-DlAFqiYi.js";import"./error-dhKwelIe.js";import"./withOsdkMetrics-BwKjYpjZ.js";import"./makeExternalStore-RXScgX-m.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
