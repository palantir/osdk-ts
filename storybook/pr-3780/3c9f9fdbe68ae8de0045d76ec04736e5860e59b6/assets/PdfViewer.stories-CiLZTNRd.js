import{j as r,M as s}from"./iframe-8l4VgzvN.js";import{P as p}from"./pdf-viewer-DXXdB60E.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DBPHfWni.js";import"./preload-helper-BWMgMhg-.js";import"./PdfRenderer-DsmwU13E.js";import"./index-CENhKLHr.js";import"./PdfViewer-B_n6ak6_.js";import"./PdfViewer.module.css-BL1cAj49.js";import"./PdfViewerAnnotationLayer-CofM2Fem.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-cMTC9mKw.js";import"./PdfViewerOutlineSidebar-BuEW6k8k.js";import"./PdfViewerSidebarHeader-DNW3NePX.js";import"./useBaseUiId-DUa6Gl7o.js";import"./useControlled-D-2KZgoS.js";import"./CompositeRoot-CjW8Os-K.js";import"./CompositeItem-Db4Osd20.js";import"./ToolbarRootContext-DpqGT7Lo.js";import"./composite-a8JqXKoE.js";import"./svgIconContainer-BQL_tfkb.js";import"./PdfViewerSearchBar-B5yXXA5-.js";import"./chevron-up-BgBFlLJD.js";import"./chevron-down-DTdeumy4.js";import"./cross-B2bEUPP4.js";import"./PdfViewerSidebar-CoU-Ronj.js";import"./index-CqpjD42R.js";import"./index-e67zZ8CW.js";import"./index-ue3NKf6y.js";import"./PdfViewerToolbar-Btzck18z.js";import"./Button-aIlHQ8yg.js";import"./chevron-right-DaCx6Y8o.js";import"./Input-CdaK_hcH.js";import"./search-Bd8us1xK.js";import"./spin-DYLIOM3J.js";import"./error-B0b_D1P0.js";import"./withOsdkMetrics-BlRozGsn.js";import"./makeExternalStore-vb2YzOlo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
