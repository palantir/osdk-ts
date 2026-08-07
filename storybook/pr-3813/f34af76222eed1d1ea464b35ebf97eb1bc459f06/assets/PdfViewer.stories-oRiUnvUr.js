import{j as r,M as s}from"./iframe-C4-lP8MT.js";import{P as p}from"./pdf-viewer-4PEgbMgc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DTcWhK4R.js";import"./preload-helper-CLU8VynA.js";import"./PdfRenderer-50s8gChv.js";import"./index-BPrqSg8L.js";import"./PdfViewer-CjfNIWiv.js";import"./PdfViewer.module.css-B0zK7Sv7.js";import"./PdfViewerAnnotationLayer-BuluiFk2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C9YbVhHs.js";import"./PdfViewerOutlineSidebar-CG6yL4of.js";import"./PdfViewerSidebarHeader-C0RVmHjI.js";import"./useBaseUiId-BA37nhWP.js";import"./useControlled-BXZQNRVM.js";import"./CompositeRoot-pqSVBljj.js";import"./CompositeItem-jotECSdG.js";import"./ToolbarRootContext-D7LXR6yD.js";import"./composite-C3w6zzv8.js";import"./svgIconContainer-C35V9iJM.js";import"./PdfViewerSearchBar-BmFhJwad.js";import"./chevron-up-kYXckeeZ.js";import"./chevron-down-DN58DXsa.js";import"./cross-C5IhJG8w.js";import"./PdfViewerSidebar-KE2xhX13.js";import"./index-C2Jw7BZY.js";import"./index-Durq-W9B.js";import"./index-0ek5BBKP.js";import"./PdfViewerToolbar-JIhJ-XUr.js";import"./Button-HQnEKdTM.js";import"./chevron-right-BQzE34K3.js";import"./Input-Cq_NK47B.js";import"./search-DXJOhDBp.js";import"./spin-DryFrrEF.js";import"./error-sldn-yGv.js";import"./withOsdkMetrics-DpO8t0Tu.js";import"./makeExternalStore-MEf7s0X9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
