import{j as r,M as s}from"./iframe-d67fO8Hy.js";import{P as p}from"./pdf-viewer-CmDe7MUu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-LPSML68E.js";import"./preload-helper-Bkr4_qkS.js";import"./PdfViewer-DF80PY9W.js";import"./index-B3ATbghx.js";import"./BasePdfViewer-Dgtqm1Wu.js";import"./BasePdfViewer.module.css-xZN4jpfl.js";import"./PdfViewerAnnotationLayer-HYxhambS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-fEN7TlNF.js";import"./PdfViewerOutlineSidebar-DdyGePYQ.js";import"./PdfViewerSidebarHeader-CRPZjIZ3.js";import"./useBaseUiId-DAPMmE-k.js";import"./useControlled-DVSkDfdi.js";import"./CompositeRoot-BOcHjUKl.js";import"./CompositeItem-BlzOTS1w.js";import"./ToolbarRootContext-BIYj41-H.js";import"./composite-DgQW3RrN.js";import"./svgIconContainer-0_l9M1TV.js";import"./PdfViewerSearchBar-CSI4ukwe.js";import"./chevron-up-DCX3LZlo.js";import"./chevron-down-CUnzJf2x.js";import"./cross-Dhsy2lb8.js";import"./PdfViewerSidebar-Ga_oOaXk.js";import"./index-CVtzuMh1.js";import"./index-Bfq5tsOh.js";import"./index-BQ0UWAWF.js";import"./PdfViewerToolbar-BffiBfei.js";import"./Button-Ba0LvAgG.js";import"./chevron-right-CXgSBfSa.js";import"./Input-BDVfl7Fm.js";import"./search-BJPSjSS2.js";import"./spin-0_bJVfZA.js";import"./error-hkUFZDRv.js";import"./withOsdkMetrics-CmzDVisr.js";import"./makeExternalStore-CYpUKzCL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
