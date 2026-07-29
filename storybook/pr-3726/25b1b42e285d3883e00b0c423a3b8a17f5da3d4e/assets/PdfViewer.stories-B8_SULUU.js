import{j as r,M as s}from"./iframe-f-LLf2Ya.js";import{P as p}from"./pdf-viewer-BzQNTCql.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-KM0T8PNg.js";import"./preload-helper-BoUrXPpj.js";import"./PdfRenderer-BVx-JbN0.js";import"./index-B9B3s7bF.js";import"./PdfViewer-BifvRfcQ.js";import"./PdfViewer.module.css-9kW3PVCb.js";import"./PdfViewerAnnotationLayer-CdI8DoGM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-uy_t6zW1.js";import"./PdfViewerOutlineSidebar-BscnNPbi.js";import"./PdfViewerSidebarHeader-C6rzsVe3.js";import"./useBaseUiId-CTPNjBcP.js";import"./useControlled-cD9LnU0e.js";import"./CompositeRoot-CLUjA6DG.js";import"./CompositeItem-Bl4lI12j.js";import"./ToolbarRootContext-CeWNTyyw.js";import"./composite-DfPjCfHJ.js";import"./svgIconContainer-Chc81CN8.js";import"./PdfViewerSearchBar-C_9hEEXC.js";import"./chevron-up-38yf0-0q.js";import"./chevron-down-B4M_wavl.js";import"./cross-BoVk4V5c.js";import"./PdfViewerSidebar-ylnqlGoO.js";import"./index-J2idT5w8.js";import"./index-BUX5q-Oa.js";import"./index-iUTVCIAd.js";import"./PdfViewerToolbar-elZ9TkiI.js";import"./Button-hDBFxLU5.js";import"./chevron-right-D_loUf05.js";import"./Input-D7SgfRqC.js";import"./search-Bj93OaU5.js";import"./spin-BozLMGfA.js";import"./error-CEbz4Hh3.js";import"./withOsdkMetrics-vMgHUsgr.js";import"./makeExternalStore-DjTlMKLb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
