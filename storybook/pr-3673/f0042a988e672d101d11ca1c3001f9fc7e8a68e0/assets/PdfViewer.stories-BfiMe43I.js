import{j as r,M as s}from"./iframe-BXHWXLEF.js";import{P as p}from"./pdf-viewer-Y1tJRdVF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C0xMEgz_.js";import"./preload-helper-C5KxonLm.js";import"./PdfRenderer-DqF6ImJa.js";import"./index-1Njgrlla.js";import"./PdfViewer-YFS8tTm_.js";import"./PdfViewer.module.css-CqAju3e6.js";import"./PdfViewerAnnotationLayer-DxOuGZb1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BGNAOdxk.js";import"./PdfViewerOutlineSidebar-C-cYz82t.js";import"./PdfViewerSidebarHeader-CmCsRYhj.js";import"./useBaseUiId-BA85S74j.js";import"./useControlled-zuGGnib8.js";import"./CompositeRoot-DWRXtLt4.js";import"./CompositeItem-xEz2Dkd0.js";import"./ToolbarRootContext-CCmNWFIx.js";import"./composite-C0dkp7Bv.js";import"./svgIconContainer-DdbxJ_6v.js";import"./PdfViewerSearchBar-ESvM3qeO.js";import"./chevron-up-CRqlHNWh.js";import"./chevron-down-DWlA7VyD.js";import"./cross-DiZjPuK5.js";import"./PdfViewerSidebar-BIthDr6T.js";import"./index-CciezQub.js";import"./index-DgVWkujh.js";import"./index-B1VIg0wc.js";import"./PdfViewerToolbar-DDlUohNn.js";import"./Button-BdzvhYpU.js";import"./chevron-right-DN5MikDg.js";import"./Input-BlnpxosN.js";import"./search-DZ9sQeP3.js";import"./spin-DYmb9nSN.js";import"./error-DpoSEAzj.js";import"./withOsdkMetrics-BZDDUBEu.js";import"./makeExternalStore-CEIovkt3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
