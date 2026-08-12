import{j as r,M as s}from"./iframe-BwyxbMYz.js";import{P as p}from"./pdf-viewer-XPtW0FJl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DawenRCI.js";import"./preload-helper-Ck4OFvFV.js";import"./PdfRenderer-D97PGon0.js";import"./index-eVyunh8z.js";import"./PdfViewer-Bx1m74Hy.js";import"./PdfViewer.module.css-DDysIPZs.js";import"./PdfViewerAnnotationLayer-GR4JzM3e.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D7tFWNcl.js";import"./PdfViewerOutlineSidebar-DRHkHj4f.js";import"./PdfViewerSidebarHeader-CIY96bt2.js";import"./useBaseUiId-Djb3rEs2.js";import"./useControlled-Py9LxNrl.js";import"./CompositeRoot-CbWrHoxp.js";import"./CompositeItem-CIt2Luhq.js";import"./ToolbarRootContext-aO87p-2A.js";import"./composite-DbDlXcOS.js";import"./svgIconContainer-cOEOezOx.js";import"./PdfViewerSearchBar-389WBJdI.js";import"./chevron-up-BfLPjDVk.js";import"./chevron-down-DRr_ZByO.js";import"./cross-CtafeApd.js";import"./PdfViewerSidebar-BsZPxYXL.js";import"./index-fGT3xXi5.js";import"./index-i1ZIkJqK.js";import"./index-BQkt-qop.js";import"./PdfViewerToolbar-uvmMPBEr.js";import"./Button-CpPh9842.js";import"./chevron-right-CryRolOH.js";import"./Input-DDDwFt7C.js";import"./search-396yxvmZ.js";import"./spin-Dt9xbYTM.js";import"./error-9Pqn15gd.js";import"./withOsdkMetrics-YkGaLtA7.js";import"./makeExternalStore-dts8SMdL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
