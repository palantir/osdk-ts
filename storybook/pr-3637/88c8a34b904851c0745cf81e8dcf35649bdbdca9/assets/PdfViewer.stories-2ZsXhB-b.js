import{j as r,M as s}from"./iframe-DgFlFSqw.js";import{P as p}from"./pdf-viewer-CYu8s65O.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dn3UBPpZ.js";import"./preload-helper-CPoJgLbD.js";import"./PdfRenderer-C-UWVuiE.js";import"./index-Sjlr9OZ9.js";import"./PdfViewer-mNjxTQQW.js";import"./PdfViewer.module.css-BkSuqTDL.js";import"./PdfViewerAnnotationLayer-CoaIOMTN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CiJfUKDG.js";import"./PdfViewerOutlineSidebar-DUnBaKJX.js";import"./PdfViewerSidebarHeader-UMVdGu-L.js";import"./useBaseUiId-CzClm8lS.js";import"./useControlled-DSXoNmS_.js";import"./CompositeRoot-aO0wpAXs.js";import"./CompositeItem-DXDg3-3M.js";import"./ToolbarRootContext-CNkFj6wl.js";import"./composite-Bx4vJwHl.js";import"./svgIconContainer-Ck7R7GNS.js";import"./PdfViewerSearchBar-DKWx_xOY.js";import"./chevron-up-CL8cB5D3.js";import"./chevron-down-hXDZjWMC.js";import"./cross-e7LLecP3.js";import"./PdfViewerSidebar-D54_00b1.js";import"./index-BmyBsxbp.js";import"./index-DcRi5XsN.js";import"./index-y9Siuh-t.js";import"./PdfViewerToolbar-BGpGl82i.js";import"./Button-1vOL_hWG.js";import"./chevron-right-Wr_Pz_14.js";import"./Input-D8O5iNKf.js";import"./search-aooxb7DJ.js";import"./spin-BaVJyXJn.js";import"./error-C5R6qt22.js";import"./withOsdkMetrics-CvKuYVbO.js";import"./makeExternalStore-DsAyUeWV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
