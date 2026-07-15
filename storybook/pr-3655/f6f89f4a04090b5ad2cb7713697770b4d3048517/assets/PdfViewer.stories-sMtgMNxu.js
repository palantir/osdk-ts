import{j as r,M as s}from"./iframe-BReQfzQE.js";import{P as p}from"./pdf-viewer-a_g5Rw9W.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B5Mg8OsC.js";import"./preload-helper-DwO3UDy6.js";import"./PdfRenderer-DJyZBsVP.js";import"./index-B3RyB3sX.js";import"./PdfViewer-qzn8x-An.js";import"./PdfViewer.module.css-BxlGuuKJ.js";import"./PdfViewerAnnotationLayer-CNO-HjX0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-dN2aKDO6.js";import"./PdfViewerOutlineSidebar-DxKWfM9P.js";import"./PdfViewerSidebarHeader-y5FmyQkh.js";import"./useBaseUiId-D_yAhBoN.js";import"./useControlled-BVoaGLTD.js";import"./CompositeRoot-qLRNxzqb.js";import"./CompositeItem-B36SUBTb.js";import"./ToolbarRootContext-DsTt3FLa.js";import"./composite-Dn9idZig.js";import"./svgIconContainer-DgKPfbC9.js";import"./PdfViewerSearchBar-Bzbwd42H.js";import"./chevron-up-DdYOQXde.js";import"./chevron-down-t6mVIC1n.js";import"./cross-DDbnTE35.js";import"./PdfViewerSidebar-DfvwPiCx.js";import"./index-DyCd-4H3.js";import"./index-BrppgLJh.js";import"./index-DTGT-YJS.js";import"./PdfViewerToolbar-mtJvGdNr.js";import"./Button-RYYrZpZz.js";import"./chevron-right-DSjCf2_m.js";import"./Input-dIZevx3g.js";import"./search-BEdvkX_p.js";import"./spin-U3N-s_fE.js";import"./error-DVK7hCu-.js";import"./withOsdkMetrics-C6O0UZBB.js";import"./makeExternalStore-Dc95XsCd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
