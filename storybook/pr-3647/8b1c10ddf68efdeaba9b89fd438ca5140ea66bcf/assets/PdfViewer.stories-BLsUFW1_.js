import{j as r,M as s}from"./iframe-BMHCHGCV.js";import{P as p}from"./pdf-viewer-p6OKWBBm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CYrkA4k-.js";import"./preload-helper-BToqMbIM.js";import"./PdfRenderer-DVnRarQP.js";import"./index-BWvdte7B.js";import"./PdfViewer-fzb_ILUx.js";import"./PdfViewer.module.css-Bp2_Mkrq.js";import"./PdfViewerAnnotationLayer-BCcLcj36.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CnNtGnoY.js";import"./PdfViewerOutlineSidebar-CXgWVXIn.js";import"./PdfViewerSidebarHeader-xZnBoete.js";import"./useBaseUiId-Dw6KSEH5.js";import"./useControlled-BRtv8zXv.js";import"./CompositeRoot-bKbnUteq.js";import"./CompositeItem-DNAmy2TP.js";import"./ToolbarRootContext-7nCaEpX8.js";import"./composite-DVGhito1.js";import"./svgIconContainer-C9IhYIlY.js";import"./PdfViewerSearchBar-CACrLbMy.js";import"./chevron-up-BUFNv3eT.js";import"./chevron-down-BdOF-_Ji.js";import"./cross-DOL0bGpk.js";import"./PdfViewerSidebar-CCjL3jv-.js";import"./index-DEoekmkM.js";import"./index-NotlhKzd.js";import"./index-sYtRHJSk.js";import"./PdfViewerToolbar-DnTPsQgS.js";import"./Button-C5QMWSrh.js";import"./chevron-right-CmDfvnlc.js";import"./Input-meCDYtHF.js";import"./search-BfFyr5yu.js";import"./spin-Hqpj6BAz.js";import"./error-m-zoj5Z7.js";import"./withOsdkMetrics-DS7wiXkt.js";import"./makeExternalStore-DrivM0p_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
