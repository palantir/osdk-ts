import{j as r,M as s}from"./iframe-B7BuLFiB.js";import{P as p}from"./pdf-viewer-DrMEfWlo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DpXFwIXW.js";import"./preload-helper-QLvxqcYm.js";import"./PdfRenderer-BiBtBMr4.js";import"./index-DX9kLxYV.js";import"./PdfViewer-C2rOSjlw.js";import"./PdfViewer.module.css-CwK5Ir1U.js";import"./PdfViewerAnnotationLayer-E4GKQgVv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BuWY0_I5.js";import"./PdfViewerOutlineSidebar-CZO25jZH.js";import"./PdfViewerSidebarHeader-CGRfaFuG.js";import"./useBaseUiId-DGtSh3tx.js";import"./useControlled-o41jjuGU.js";import"./CompositeRoot-EofUD2mg.js";import"./CompositeItem-Dbzwk1gQ.js";import"./ToolbarRootContext-B_UViE6P.js";import"./composite-BgM6qzfH.js";import"./svgIconContainer-CeTYDBJc.js";import"./PdfViewerSearchBar-DGtwyiwe.js";import"./chevron-up-nrr_qxDw.js";import"./chevron-down--mwsi3L9.js";import"./cross-MuA-PJqQ.js";import"./PdfViewerSidebar-B8-1JFdf.js";import"./index-6UAs54zO.js";import"./index-C-D0HXuy.js";import"./index-yPQ50wIw.js";import"./PdfViewerToolbar-CLh00ZJX.js";import"./Button-Bi6KGg8Q.js";import"./chevron-right-Z5Py0SVF.js";import"./Input-BWeaR93e.js";import"./search-DkIDRVCE.js";import"./spin-DuUQmS_m.js";import"./error-PJbSWXrD.js";import"./withOsdkMetrics-Clj4ukky.js";import"./makeExternalStore-Cn4EfxAL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
