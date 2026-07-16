import{j as r,M as s}from"./iframe-Byan9OCz.js";import{P as p}from"./pdf-viewer-C2h_6Kef.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DyxJkGH1.js";import"./preload-helper-Blt6KWnb.js";import"./PdfRenderer-rl8j_fIa.js";import"./index-DansedCt.js";import"./PdfViewer-CwoC-a5h.js";import"./PdfViewer.module.css-Bby-be2x.js";import"./PdfViewerAnnotationLayer-D0ErMGfC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C9ztQZQk.js";import"./PdfViewerOutlineSidebar-qISerXsH.js";import"./PdfViewerSidebarHeader-BMJVMygj.js";import"./useBaseUiId-D-UFJa1l.js";import"./useControlled-CwWA7GGu.js";import"./CompositeRoot-BpE8I_wR.js";import"./CompositeItem-9SBEe_t9.js";import"./ToolbarRootContext-DeIqE3or.js";import"./composite-BibZA6Dj.js";import"./svgIconContainer-DzLGR14K.js";import"./PdfViewerSearchBar-zIlZaHEf.js";import"./chevron-up-ar1wr4Y7.js";import"./chevron-down-m2cDlEUU.js";import"./cross-BYkiE-wJ.js";import"./PdfViewerSidebar-BcygXDWZ.js";import"./index-DUJjuYqu.js";import"./index-C58GA46D.js";import"./index-BYqJx_lU.js";import"./PdfViewerToolbar-McS3QwFM.js";import"./Button-B638KosM.js";import"./chevron-right-Ci6mQmuL.js";import"./Input-CI_0PN8e.js";import"./search-C0JOVvqu.js";import"./spin-_8P_Y1Uk.js";import"./error-Ck_NR84Y.js";import"./withOsdkMetrics-VyL31iRu.js";import"./makeExternalStore-BO613PYK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
