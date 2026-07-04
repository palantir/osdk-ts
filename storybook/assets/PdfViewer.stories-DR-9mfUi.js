import{j as r,M as s}from"./iframe-C0mJUu02.js";import{P as p}from"./pdf-viewer-u3Z0H4B-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BkqUtW9b.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-D-zJ6T_j.js";import"./index-BgwdINoS.js";import"./PdfViewer-FO4TG--E.js";import"./PdfViewer.module.css-Dh1qTAVp.js";import"./PdfViewerAnnotationLayer-CxdqI9MA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dd0xnPT3.js";import"./PdfViewerOutlineSidebar-DtbdsUk7.js";import"./PdfViewerSidebarHeader-CDke8emN.js";import"./useBaseUiId-BXPJ6r5s.js";import"./useControlled-Duq1LKsB.js";import"./CompositeRoot-BTg-Uu21.js";import"./CompositeItem-C1iJEhPv.js";import"./ToolbarRootContext-B3CoPmT-.js";import"./composite-CB0JAGdL.js";import"./svgIconContainer-yhd967y-.js";import"./PdfViewerSearchBar-Zw-40fw8.js";import"./chevron-up-QRouTW_0.js";import"./chevron-down-C8QI49Qk.js";import"./cross-DPybMDd2.js";import"./PdfViewerSidebar-DRNgjN0s.js";import"./index-Bn8nuryg.js";import"./index-B2I4cR14.js";import"./index-DL4f1cc2.js";import"./PdfViewerToolbar-Dai5_rSg.js";import"./Button-HM7yt_S2.js";import"./chevron-right-BfG3Snwk.js";import"./Input-BJLSSZ1M.js";import"./search-ChZtyXnw.js";import"./spin-C-4KbAw1.js";import"./error-Bl2kJhtX.js";import"./withOsdkMetrics-CpF1vmZL.js";import"./makeExternalStore-D0DchU2u.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
