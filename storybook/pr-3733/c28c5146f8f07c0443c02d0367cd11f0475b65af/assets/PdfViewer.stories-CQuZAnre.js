import{j as r,M as s}from"./iframe-CgBhvtiX.js";import{P as p}from"./pdf-viewer-jx32kMIs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BPFc0cY_.js";import"./preload-helper-Ce-3X9_r.js";import"./PdfRenderer-BFsSA9lO.js";import"./index-CErsZJsL.js";import"./PdfViewer-IVvYHM0a.js";import"./PdfViewer.module.css-BrZofPst.js";import"./PdfViewerAnnotationLayer-DAOvmIzE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-UX44Buqd.js";import"./PdfViewerOutlineSidebar-DzmM6lZQ.js";import"./PdfViewerSidebarHeader-CT6b8dOA.js";import"./useBaseUiId-Cl60-lLj.js";import"./useControlled-C73eTAWd.js";import"./CompositeRoot-DoKUT7VI.js";import"./CompositeItem-w3oM7rnI.js";import"./ToolbarRootContext-C-CsPSkf.js";import"./composite-BmhUh40j.js";import"./svgIconContainer-DoRBy_eO.js";import"./PdfViewerSearchBar-BeBPtvCg.js";import"./chevron-up-BCFpSjAC.js";import"./chevron-down-jybOUjLp.js";import"./cross-J-95C9iK.js";import"./PdfViewerSidebar-CuAxyO6f.js";import"./index-DN_8H0Vb.js";import"./index-B2xVVrZs.js";import"./index-DamNHVTk.js";import"./PdfViewerToolbar-Do0L8obr.js";import"./Button-BWJv3Y7c.js";import"./chevron-right-4JQvwo-Z.js";import"./Input-mWhgRxxc.js";import"./search-ByPt1vVP.js";import"./spin-NmLE645I.js";import"./error-BhaEYYIw.js";import"./withOsdkMetrics-BAt_kpFa.js";import"./makeExternalStore-CWSz6Stw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
