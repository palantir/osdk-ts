import{j as r,M as s}from"./iframe-B5ZzFpGV.js";import{P as p}from"./pdf-viewer-eSvfOpBr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BHna_O2b.js";import"./preload-helper-BJvIoz8B.js";import"./PdfRenderer-CWuJ-Huf.js";import"./index-z4xETEDy.js";import"./PdfViewer-B8SOsMg0.js";import"./PdfViewer.module.css-Bb2SZcz6.js";import"./PdfViewerAnnotationLayer-oig1J8Jg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BC40Anp5.js";import"./PdfViewerOutlineSidebar-BKL2yjNP.js";import"./PdfViewerSidebarHeader-B-b2UJW2.js";import"./useBaseUiId-DJnMsM3b.js";import"./useControlled-DiSq_f2x.js";import"./CompositeRoot-C9sdK0oi.js";import"./CompositeItem-C8C3gNK6.js";import"./ToolbarRootContext-ChmL4KtX.js";import"./composite-ilR61S-U.js";import"./svgIconContainer-CW1kT3WQ.js";import"./PdfViewerSearchBar-C6IABEST.js";import"./chevron-up-CdL1uTtT.js";import"./chevron-down-D8Xw2XSL.js";import"./cross-BGaKNqwh.js";import"./PdfViewerSidebar-Blk5qpg6.js";import"./index-DTZ3ogMT.js";import"./index-BXOUosox.js";import"./index-CRM3J1t9.js";import"./PdfViewerToolbar-LF5MlxWD.js";import"./Button-CYH1D7qG.js";import"./chevron-right-BALu9e9k.js";import"./Input-CwAbMfOY.js";import"./search-C_g1Mr7n.js";import"./spin-Rw0dBwVl.js";import"./error-CweQ51t5.js";import"./withOsdkMetrics-B_Ikpxmc.js";import"./makeExternalStore-WLdqxZL2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
