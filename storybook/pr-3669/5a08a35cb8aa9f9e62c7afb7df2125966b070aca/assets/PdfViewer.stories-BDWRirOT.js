import{j as r,M as s}from"./iframe-GU5huNjj.js";import{P as p}from"./pdf-viewer-CRrMNUj4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ttztnbZK.js";import"./preload-helper-D6IeEgQ3.js";import"./PdfRenderer-DP93Ls-p.js";import"./index-CYANVHig.js";import"./PdfViewer-Co15OxaT.js";import"./PdfViewer.module.css-DJwerYVI.js";import"./PdfViewerAnnotationLayer-DmrXgHid.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BM3wmylu.js";import"./PdfViewerOutlineSidebar-eCn9TiC_.js";import"./PdfViewerSidebarHeader-Cz_ETLAM.js";import"./useBaseUiId-Dwu8RDil.js";import"./useControlled-Dwh0wJWj.js";import"./CompositeRoot-DL2RMB_3.js";import"./CompositeItem-CLkBNBip.js";import"./ToolbarRootContext-C9yy8qxn.js";import"./composite-CMwYviem.js";import"./svgIconContainer-D6-dD1e3.js";import"./PdfViewerSearchBar-DCLciWVY.js";import"./chevron-up-B52UE0Jv.js";import"./chevron-down-DZv0-fr0.js";import"./cross-0T0GobBU.js";import"./PdfViewerSidebar-eAsqg11S.js";import"./index-vwBXq9DG.js";import"./index-B1cF_57h.js";import"./index-DUK177OS.js";import"./PdfViewerToolbar-DTPLpBJR.js";import"./Button-BCwk1sjY.js";import"./chevron-right-BZafKXkL.js";import"./Input-B3p4pAfD.js";import"./search-C9C0hb80.js";import"./spin-BDLWt10i.js";import"./error-CVXM8CYg.js";import"./withOsdkMetrics-D9Re_7zX.js";import"./makeExternalStore-OmdI1n8K.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
