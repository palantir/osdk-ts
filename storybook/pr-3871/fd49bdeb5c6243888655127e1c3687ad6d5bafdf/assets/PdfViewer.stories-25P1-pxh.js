import{j as r,M as s}from"./iframe-BNfKFTwQ.js";import{P as p}from"./pdf-viewer-DiuPR9OF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BwfDwCyQ.js";import"./preload-helper-DcxZ55lb.js";import"./PdfViewer-D_iE6ti8.js";import"./index-DAFvvsPq.js";import"./BasePdfViewer-ClJXZtyc.js";import"./BasePdfViewer.module.css-Db1jztf8.js";import"./PdfViewerAnnotationLayer-C2Ts6cNR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LczZPzuE.js";import"./PdfViewerOutlineSidebar-b_UkBv6W.js";import"./PdfViewerSidebarHeader-BBQ49zhT.js";import"./useBaseUiId-CaxbLd3J.js";import"./useControlled-Bu0wvWhJ.js";import"./CompositeRoot-Bd-7yv65.js";import"./CompositeItem-DTeaCrKp.js";import"./ToolbarRootContext-Bs5lRq7j.js";import"./composite-BC8qF70z.js";import"./svgIconContainer-74CT1nDx.js";import"./PdfViewerSearchBar-CwjMdcW6.js";import"./chevron-up-Dk98s14h.js";import"./chevron-down-BMgxqa-T.js";import"./cross-HH4wJUZw.js";import"./PdfViewerSidebar-hKIN30gX.js";import"./index-BYcE_cgH.js";import"./index-bdV_r4dW.js";import"./index-DXeJyDDl.js";import"./PdfViewerToolbar-llG9v77y.js";import"./Button-BnlzCXtA.js";import"./chevron-right-Yfoz7EvI.js";import"./Input-E0NWe4pC.js";import"./search-CwOYclZa.js";import"./spin-CTjYpprM.js";import"./error-B-mlb-Oh.js";import"./withOsdkMetrics-aegz5loh.js";import"./makeExternalStore-CJ7wcEHs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
