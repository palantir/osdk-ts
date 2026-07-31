import{j as r,M as s}from"./iframe-nm7eIgX9.js";import{P as p}from"./pdf-viewer-BHiQ9_cM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CYFP4NrW.js";import"./preload-helper-xnNK-q7j.js";import"./PdfRenderer-D3oetCYT.js";import"./index-CL6V_FJD.js";import"./PdfViewer-C1kIuqYb.js";import"./PdfViewer.module.css-sNcLYHr2.js";import"./PdfViewerAnnotationLayer-DM_LAQBE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DviAeACI.js";import"./PdfViewerOutlineSidebar-CG9pY7_n.js";import"./PdfViewerSidebarHeader-CerUdGU2.js";import"./useBaseUiId-DBJaT0Wa.js";import"./useControlled-BGjTzEiM.js";import"./CompositeRoot-tx1PBSvt.js";import"./CompositeItem-yDyDoF89.js";import"./ToolbarRootContext-7ilHDKSN.js";import"./composite-ClirUg7p.js";import"./svgIconContainer-C62k5sq7.js";import"./PdfViewerSearchBar-D-8hGCxC.js";import"./chevron-up-GLCmH2Z2.js";import"./chevron-down-CWzDP1O4.js";import"./cross-CH8L4sxq.js";import"./PdfViewerSidebar-BiqBnvO_.js";import"./index-CHK_BJAR.js";import"./index-ClI1wKdU.js";import"./index-C9RhWig-.js";import"./PdfViewerToolbar-CPMGZAkr.js";import"./Button-BEdWrE0m.js";import"./chevron-right-BqV7QqV8.js";import"./Input-cZWR-4H8.js";import"./search-CLOlj8c_.js";import"./spin-q6zfc9rT.js";import"./error-BXtnxwmG.js";import"./withOsdkMetrics-NfqQgt5n.js";import"./makeExternalStore-Cl341ALS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
