import{j as r,M as s}from"./iframe-CpSXGIMP.js";import{P as p}from"./pdf-viewer-DzVdE9S2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B5V8ekwX.js";import"./preload-helper-BAIK3F_r.js";import"./PdfViewer-DTeCs7pk.js";import"./index-CKAzeimB.js";import"./BasePdfViewer-C_GGTjxU.js";import"./BasePdfViewer.module.css-Bvd3uZg4.js";import"./PdfViewerAnnotationLayer-D3jkQSCN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Danju8ph.js";import"./PdfViewerOutlineSidebar-BwbTGd7v.js";import"./PdfViewerSidebarHeader---rb8lzN.js";import"./useBaseUiId-D-3zNuFz.js";import"./useControlled-BmzJBEAD.js";import"./CompositeRoot-NKdvsu0q.js";import"./CompositeItem-DSORcIfD.js";import"./ToolbarRootContext-DEzzSQ1U.js";import"./composite-B3b5WAJp.js";import"./svgIconContainer-DUtflVNj.js";import"./PdfViewerSearchBar-BnskCYw0.js";import"./chevron-up-QzvNIFB1.js";import"./chevron-down-Btszu4M0.js";import"./cross-CzQoIi7Z.js";import"./PdfViewerSidebar-IrtSJbwX.js";import"./index-B-U1HPP1.js";import"./index-Cik8okmC.js";import"./index-B7KWUsJB.js";import"./PdfViewerToolbar-BYp0R0fF.js";import"./Button-68wBS86H.js";import"./chevron-right-Y6a6_wO0.js";import"./Input-UzrhFg4t.js";import"./search-CuxqOQhv.js";import"./spin-D-WT8jQs.js";import"./error-Cwk6m0y9.js";import"./withOsdkMetrics-DDed3ono.js";import"./makeExternalStore-DmkWZ8pD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
