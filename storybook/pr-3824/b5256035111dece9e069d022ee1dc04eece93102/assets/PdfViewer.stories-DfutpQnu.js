import{j as r,M as s}from"./iframe-BApgeGXl.js";import{P as p}from"./pdf-viewer-CBjRH1qp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BxdcnYBJ.js";import"./preload-helper-B5SDrfLX.js";import"./PdfViewer-BR_tQBTu.js";import"./index-D1DKxRCC.js";import"./BasePdfViewer-J0CJCcZk.js";import"./BasePdfViewer.module.css-DTxFOyDp.js";import"./PdfViewerAnnotationLayer-CnkwXASY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CNM7nPtH.js";import"./PdfViewerOutlineSidebar-BJuaPdXh.js";import"./PdfViewerSidebarHeader-CRoXfRfF.js";import"./useBaseUiId-HvC3sL6i.js";import"./useControlled-DwtdN-yM.js";import"./CompositeRoot-CppOakr4.js";import"./CompositeItem-Di2z5EXS.js";import"./ToolbarRootContext-BucTdyIl.js";import"./composite-CfLZxk0Y.js";import"./svgIconContainer-DsyE7o9I.js";import"./PdfViewerSearchBar-C3jZi5kA.js";import"./chevron-up-ha7qUC6X.js";import"./chevron-down-DFCusqRp.js";import"./cross-ZTt9cbvY.js";import"./PdfViewerSidebar-1IWNm1vV.js";import"./index-BZG1se71.js";import"./index-D6GjFiH-.js";import"./index-T-rcUtZ2.js";import"./PdfViewerToolbar-BcdUFziX.js";import"./Button-C7YfkSI7.js";import"./chevron-right-CwEtpwDD.js";import"./Input-JtvTue8M.js";import"./search-DA1A23L5.js";import"./spin-BnIay3a3.js";import"./error-D3Ew2_Fi.js";import"./withOsdkMetrics-RpuKM6nt.js";import"./makeExternalStore-DvSdjbOg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
