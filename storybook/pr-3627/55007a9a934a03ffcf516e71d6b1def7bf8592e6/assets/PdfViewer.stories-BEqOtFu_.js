import{j as r,M as s}from"./iframe-D97YEMdq.js";import{P as p}from"./pdf-viewer-BTt52yCx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CINNf4j_.js";import"./preload-helper-BIkRDzMT.js";import"./PdfRenderer-Bb3SSUmJ.js";import"./index-Ia8LWgYv.js";import"./PdfViewer-DUX_3zxr.js";import"./PdfViewer.module.css-Dqv0L_oo.js";import"./PdfViewerAnnotationLayer-Dqysq2_W.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CsJ72eEJ.js";import"./PdfViewerOutlineSidebar-yg8PfOeO.js";import"./PdfViewerSidebarHeader-DdgQkBLd.js";import"./useBaseUiId-BEShfJ3D.js";import"./useControlled-D-V2B7Yn.js";import"./CompositeRoot-CthetlLh.js";import"./CompositeItem-C5VDajl0.js";import"./ToolbarRootContext-C7JWEDz3.js";import"./composite-WROgFX5s.js";import"./svgIconContainer-Clxg_GXp.js";import"./PdfViewerSearchBar-B8aeSWuQ.js";import"./chevron-up-DfWSNY0q.js";import"./chevron-down-DVHDvGgY.js";import"./cross-sIu8XFGu.js";import"./PdfViewerSidebar-CanjLrVk.js";import"./index-D0WFg6-l.js";import"./index-4fS1n3Az.js";import"./index-g5s6Wnce.js";import"./PdfViewerToolbar-Da6eG_jx.js";import"./Button-A_tdQ-3-.js";import"./chevron-right-EwScIIm8.js";import"./Input-CHWmRLet.js";import"./search--6cjDtTk.js";import"./spin-D3PybdRp.js";import"./error-euhq7y8E.js";import"./withOsdkMetrics-B44K7LZI.js";import"./makeExternalStore-Do6cu1tb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
