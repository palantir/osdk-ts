import{j as r,M as s}from"./iframe-dUh8zyts.js";import{P as p}from"./pdf-viewer-CDCwXKg3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-yQHcgWlD.js";import"./preload-helper-BXymFDmG.js";import"./PdfRenderer-eT8cGBqw.js";import"./index-CJwC7SLj.js";import"./PdfViewer-CUGuOtbc.js";import"./PdfViewer.module.css-d7nrPKOK.js";import"./PdfViewerAnnotationLayer-DD4M8ZIm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C3Cb2U0k.js";import"./PdfViewerOutlineSidebar-DPK83vay.js";import"./PdfViewerSidebarHeader-DEbKqb3q.js";import"./useBaseUiId-DxJUnLpO.js";import"./useControlled-Buwyj981.js";import"./CompositeRoot-Dnnsl4LB.js";import"./CompositeItem-BT68WWE1.js";import"./ToolbarRootContext-DkfpkdTH.js";import"./composite-DxnDX5iy.js";import"./svgIconContainer-DPzpipae.js";import"./PdfViewerSearchBar-DsFCVwCX.js";import"./chevron-up-ByTJN9zQ.js";import"./chevron-down-B7jyoN5P.js";import"./cross-v5mQEa5y.js";import"./PdfViewerSidebar-QRZBQovB.js";import"./index-JxUIMAws.js";import"./index-KzBmUVTE.js";import"./index-JHVUTeks.js";import"./PdfViewerToolbar-CdWUC3WS.js";import"./Button-1AIBoBve.js";import"./chevron-right-CychDjPm.js";import"./Input-DaNsYN7f.js";import"./search-CWKr1ylo.js";import"./spin-B07_Pett.js";import"./error-CfTpnqLQ.js";import"./withOsdkMetrics-B-vQVve6.js";import"./makeExternalStore-D8wmXuZm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
