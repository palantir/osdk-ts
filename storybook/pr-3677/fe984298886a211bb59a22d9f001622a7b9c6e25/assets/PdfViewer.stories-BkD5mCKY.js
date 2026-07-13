import{j as r,M as s}from"./iframe-D1FLdJFX.js";import{P as p}from"./pdf-viewer-W6Z55eLm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cxvqne5w.js";import"./preload-helper-D8UXNF6a.js";import"./PdfRenderer-E7Aex0Ot.js";import"./index-t-W09BCn.js";import"./PdfViewer-vFrrGQ-r.js";import"./PdfViewer.module.css-CsALglLC.js";import"./PdfViewerAnnotationLayer-DAzRaOgq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DfbTCf9q.js";import"./PdfViewerOutlineSidebar-D7ZNTGjC.js";import"./PdfViewerSidebarHeader-Lw6yBGGO.js";import"./useBaseUiId-WRlxQ5RD.js";import"./useControlled-C4fzz8t5.js";import"./CompositeRoot-DdlFtb0F.js";import"./CompositeItem-suCocTvA.js";import"./ToolbarRootContext-DkkCxU9d.js";import"./composite-DEyfO-kV.js";import"./svgIconContainer-C84izAoh.js";import"./PdfViewerSearchBar-Cv0EWqBp.js";import"./chevron-up-CGGjMGN3.js";import"./chevron-down-INdNM1cB.js";import"./cross-DZ07usEw.js";import"./PdfViewerSidebar-CzGuL3Vg.js";import"./index-CB-QCOPk.js";import"./index-De2ew-R0.js";import"./index-BwOaDxKo.js";import"./PdfViewerToolbar-dnfaWGsE.js";import"./Button-DRVzF9x_.js";import"./chevron-right-DmTJDlmI.js";import"./Input-CYnkefsr.js";import"./search-iN6UBSCr.js";import"./spin-B8RG7zhI.js";import"./error-CKevXRTg.js";import"./withOsdkMetrics-BH7KI_Qj.js";import"./makeExternalStore-D4U5VuHp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
