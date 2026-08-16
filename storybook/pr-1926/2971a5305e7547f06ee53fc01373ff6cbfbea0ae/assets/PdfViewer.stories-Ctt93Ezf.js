import{j as r,M as s}from"./iframe-C66sw3ty.js";import{P as p}from"./pdf-viewer-D8k70lAD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CaIo9TKb.js";import"./preload-helper-DZbI0FD0.js";import"./PdfViewer-Cv3EgVpw.js";import"./index-BuRhXxal.js";import"./BasePdfViewer-D22LTkc7.js";import"./BasePdfViewer.module.css-U2BRaSZO.js";import"./PdfViewerAnnotationLayer-C1TWCKnc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B59l9JFm.js";import"./PdfViewerOutlineSidebar-Dyzow9TZ.js";import"./PdfViewerSidebarHeader-CSHE2Hus.js";import"./useBaseUiId-DBc-RpeK.js";import"./useControlled-CCfgbEmE.js";import"./CompositeRoot-Cjeu7o4T.js";import"./CompositeItem-DcBovePw.js";import"./ToolbarRootContext-BbxUlGdK.js";import"./composite-DJt-rmmG.js";import"./svgIconContainer-3jplA0Kn.js";import"./PdfViewerSearchBar-BsTv7Y4f.js";import"./chevron-up-M6mY2JBm.js";import"./chevron-down-rq5FhUz6.js";import"./cross-CtqOkK2i.js";import"./PdfViewerSidebar-CaLpgeqJ.js";import"./index-Dmy2BarC.js";import"./index-DktJo0Qz.js";import"./index-RHZtAXiM.js";import"./PdfViewerToolbar-DHn6ljCz.js";import"./Button-CWXPJ_o4.js";import"./chevron-right-C-vDWyDU.js";import"./Input-BELQ9o_j.js";import"./search-wv5WYUCG.js";import"./spin-Dj-MBxsh.js";import"./error-Dxtk7pI5.js";import"./withOsdkMetrics-CGetGeS2.js";import"./makeExternalStore-CY5Weqo3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
