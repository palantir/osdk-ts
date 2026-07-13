import{j as r,M as s}from"./iframe-DD_zVPyH.js";import{P as p}from"./pdf-viewer-Du20TRJx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D6dxfswB.js";import"./preload-helper-C3tVYw5k.js";import"./PdfRenderer-BmlLYP0K.js";import"./index-CV8rnQll.js";import"./PdfViewer-B6JWG_oq.js";import"./PdfViewer.module.css-AP5addyv.js";import"./PdfViewerAnnotationLayer-D0WrVMZi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DZAC3H2a.js";import"./PdfViewerOutlineSidebar-JDcnlidm.js";import"./PdfViewerSidebarHeader-BBGvxU6v.js";import"./useBaseUiId-BCgB4FUp.js";import"./useControlled-S61qNiWf.js";import"./CompositeRoot-BWXK1zBa.js";import"./CompositeItem-aMP4Zzfd.js";import"./ToolbarRootContext-q9XcflU-.js";import"./composite-Dfzn9W6B.js";import"./svgIconContainer-Dy9DsSKT.js";import"./PdfViewerSearchBar-ColxMQK0.js";import"./chevron-up-Cm0eAPmc.js";import"./chevron-down-Caji2Yuh.js";import"./cross-DMz3hSHv.js";import"./PdfViewerSidebar-Dt1UuIOJ.js";import"./index-CCbJn7f3.js";import"./index-CZvpBUlr.js";import"./index-D4iQYxTA.js";import"./PdfViewerToolbar-DHlqkEYu.js";import"./Button-CYr4vSHb.js";import"./chevron-right-xz4lcEd7.js";import"./Input-CT0A1psx.js";import"./search-DsagKYBy.js";import"./spin-0yGryyhz.js";import"./error-DzSBvb9G.js";import"./withOsdkMetrics-B4fnFgyi.js";import"./makeExternalStore-BGwMDnSW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
