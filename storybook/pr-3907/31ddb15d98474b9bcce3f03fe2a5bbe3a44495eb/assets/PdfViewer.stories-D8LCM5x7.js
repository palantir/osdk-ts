import{j as r,M as s}from"./iframe-CcTzUt4q.js";import{P as p}from"./pdf-viewer-BBR3tE3k.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CEeIEWBZ.js";import"./preload-helper-DTHvyKL2.js";import"./PdfViewer-DSYecBJk.js";import"./index-B0L2Pz3U.js";import"./BasePdfViewer-SbxxihWD.js";import"./BasePdfViewer.module.css-BPCkF6C-.js";import"./PdfViewerAnnotationLayer-B9DcY2qx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBvH6qMq.js";import"./PdfViewerOutlineSidebar-Cfm8yMfI.js";import"./PdfViewerSidebarHeader-Df3XdMtN.js";import"./useBaseUiId-vUFCbP4O.js";import"./useControlled-CXU26uEu.js";import"./CompositeRoot-BI6gzt8d.js";import"./CompositeItem-MWEwicQS.js";import"./ToolbarRootContext-C074rZoJ.js";import"./composite-D9XK8W5R.js";import"./svgIconContainer-DT2XOI7O.js";import"./PdfViewerSearchBar-4YPUFKaN.js";import"./chevron-up-DSHweRhY.js";import"./chevron-down-C2VHnW9O.js";import"./cross-CX9TEYNs.js";import"./PdfViewerSidebar-CWhKZpaj.js";import"./index-CtpHKrCG.js";import"./index-Dn8qQBZ_.js";import"./index-Bo_ehpsT.js";import"./PdfViewerToolbar-CdtYxRIK.js";import"./Button-Bhonpuif.js";import"./chevron-right-_E5KBlSS.js";import"./Input-BbwwJ3kI.js";import"./search-BaEk66pJ.js";import"./spin-Boxb2L9X.js";import"./error-Dj7Fc47o.js";import"./withOsdkMetrics-5Ex0_go8.js";import"./makeExternalStore-BHMTu4YC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
