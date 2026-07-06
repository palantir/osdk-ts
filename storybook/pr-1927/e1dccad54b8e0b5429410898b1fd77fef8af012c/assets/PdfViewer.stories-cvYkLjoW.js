import{j as r,M as s}from"./iframe-BBBCzyKr.js";import{P as p}from"./pdf-viewer-BGrynSzf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DW9K7pQ2.js";import"./preload-helper-PBkUGRDh.js";import"./PdfRenderer-DR1mtOTW.js";import"./index-Cf_U35RW.js";import"./PdfViewer-B2d0HN-8.js";import"./PdfViewer.module.css-7UA5zNBQ.js";import"./PdfViewerAnnotationLayer-BSoWijqr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DgTg4TIW.js";import"./PdfViewerOutlineSidebar-C6QBA4sD.js";import"./PdfViewerSidebarHeader-B4O9QTrh.js";import"./useBaseUiId-BjQTmyke.js";import"./useControlled-lzjiPErA.js";import"./CompositeRoot-BHIDBGhN.js";import"./CompositeItem-DPAKkgbw.js";import"./ToolbarRootContext-BFRaCZFF.js";import"./composite-Cm-fpeXk.js";import"./svgIconContainer-Fi69oV8u.js";import"./PdfViewerSearchBar-Ce5Ygojo.js";import"./chevron-up-C9dNTgup.js";import"./chevron-down-umuhLM4H.js";import"./cross-B7WcIwGk.js";import"./PdfViewerSidebar-BDlWRLpv.js";import"./index-BtTMuNtg.js";import"./index-DjlV6oip.js";import"./index-BCkNIaBq.js";import"./PdfViewerToolbar-CnIhypPD.js";import"./Button-Cn3U8m6Z.js";import"./chevron-right-CE42Vgp3.js";import"./Input-DYutMpSn.js";import"./search-Dc-RSriz.js";import"./spin-BBKRVyKH.js";import"./error-DZRukdZI.js";import"./withOsdkMetrics-C0DyKEA7.js";import"./makeExternalStore-C5rNYMe7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
