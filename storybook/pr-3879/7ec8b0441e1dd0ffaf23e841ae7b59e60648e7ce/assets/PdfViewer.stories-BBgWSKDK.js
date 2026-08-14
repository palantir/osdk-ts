import{j as r,M as s}from"./iframe-Brg8J0Ke.js";import{P as p}from"./pdf-viewer-CrjgLSSC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-_heO8sd8.js";import"./preload-helper-COdZ72nO.js";import"./PdfRenderer-CpplShfQ.js";import"./index-COQGlG7M.js";import"./PdfViewer-CIoDcKx0.js";import"./PdfViewer.module.css-V1H1FEHy.js";import"./PdfViewerAnnotationLayer-B0jr_K0P.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BPtYaXKk.js";import"./PdfViewerOutlineSidebar-CINzyVlK.js";import"./PdfViewerSidebarHeader-9bo60KkV.js";import"./useBaseUiId-CrEPTlGa.js";import"./useControlled-fDswUz3Y.js";import"./CompositeRoot-BiZ5w6nz.js";import"./CompositeItem-6pHUtZM5.js";import"./ToolbarRootContext-UDxMOJnp.js";import"./composite-DMhIOFCK.js";import"./svgIconContainer-CyLntXpn.js";import"./PdfViewerSearchBar-B0pquh2-.js";import"./chevron-up-dnFMgEw7.js";import"./chevron-down-WgnX3I4t.js";import"./cross-Dp_9NLmV.js";import"./PdfViewerSidebar-D63M7KX7.js";import"./index-2yQ9AWXN.js";import"./index-CsKHzp-V.js";import"./index-BFTo3SXS.js";import"./PdfViewerToolbar-BEjwdXUe.js";import"./Button-BOmasYpo.js";import"./chevron-right-BM3SEBW3.js";import"./Input-DQYgvQ0f.js";import"./search-DHxEqs_E.js";import"./spin-CpPg4JpH.js";import"./error-DsaiNbdM.js";import"./withOsdkMetrics-D_xYxDWs.js";import"./makeExternalStore-B_s6eB60.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
