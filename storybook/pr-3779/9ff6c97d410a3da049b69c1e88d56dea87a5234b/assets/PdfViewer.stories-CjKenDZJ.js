import{j as r,M as s}from"./iframe-BefR0BAx.js";import{P as p}from"./pdf-viewer-Dw5N67Vw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-A7ewoXpZ.js";import"./preload-helper-D_muUgZZ.js";import"./PdfRenderer-DMHTom-o.js";import"./index-DI2v9xVU.js";import"./PdfViewer-CgHIcT3p.js";import"./PdfViewer.module.css-DCGWlUkd.js";import"./PdfViewerAnnotationLayer-BmZnkZnu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dwbi-1In.js";import"./PdfViewerOutlineSidebar-BojvHOZ8.js";import"./PdfViewerSidebarHeader-gC78mmAN.js";import"./useBaseUiId-BnEhW10T.js";import"./useControlled-B0OAP1sO.js";import"./CompositeRoot-C6Xgn8Oc.js";import"./CompositeItem-Bslbfoq2.js";import"./ToolbarRootContext-Bfg2cH-3.js";import"./composite-3yd-dfOO.js";import"./svgIconContainer-CcaI0s95.js";import"./PdfViewerSearchBar-DaRJxZ_m.js";import"./chevron-up-DiRnPPDl.js";import"./chevron-down-BfV0Otca.js";import"./cross-BihP7IYO.js";import"./PdfViewerSidebar-CygxwqyI.js";import"./index-CmoAwC0-.js";import"./index-B0uyT0kH.js";import"./index-DHh2SPX3.js";import"./PdfViewerToolbar-DRRvsLHO.js";import"./Button-DI1B5wsL.js";import"./chevron-right-B5QNyUQV.js";import"./Input-BgIQD_Ke.js";import"./search-BY8LPeq_.js";import"./spin-BQalj6qR.js";import"./error-DE1G-33b.js";import"./withOsdkMetrics-BGhvxxIj.js";import"./makeExternalStore-BWxrZDxx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
