import{j as r,M as s}from"./iframe-Cs0vjh1D.js";import{P as p}from"./pdf-viewer-DW2m_Ppi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DRktfPUq.js";import"./preload-helper-BW6fmHbo.js";import"./PdfRenderer-CqP7juQs.js";import"./index-BRpQkU0f.js";import"./PdfViewer-D2k7_OQv.js";import"./PdfViewer.module.css-CS4manF5.js";import"./PdfViewerAnnotationLayer-BW3nyBqo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CqZe7EeE.js";import"./PdfViewerOutlineSidebar-DDjSycGb.js";import"./PdfViewerSidebarHeader-D9g5D407.js";import"./useBaseUiId-CBGw6rf9.js";import"./useControlled-D0eBDm4j.js";import"./CompositeRoot-CxemJZkz.js";import"./CompositeItem-B2PoMDzg.js";import"./ToolbarRootContext-C8XwSccZ.js";import"./composite-BA2SFYHq.js";import"./svgIconContainer-UGeX2bOE.js";import"./PdfViewerSearchBar-DCqRyvJZ.js";import"./chevron-up-Bov_0UWU.js";import"./chevron-down-C4fu_1o3.js";import"./cross-BbGBkiuK.js";import"./PdfViewerSidebar-Cj7je_PB.js";import"./index-43dZyclU.js";import"./index-Bsi3aTLo.js";import"./index-DszKNb2L.js";import"./PdfViewerToolbar-C9rBCjzI.js";import"./Button-qASnNh7s.js";import"./chevron-right-Cz1hVhDr.js";import"./Input-DS8FrlZU.js";import"./search-gUhAvHQd.js";import"./spin-D6bG4YyS.js";import"./error-DNXbMYR2.js";import"./withOsdkMetrics-CN8GOW3l.js";import"./makeExternalStore-vOF9t-Ek.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
