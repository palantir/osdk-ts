import{j as r,M as s}from"./iframe-DE0qpqxN.js";import{P as p}from"./pdf-viewer-t6oACINj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-aEwDYj58.js";import"./preload-helper-CpAaridb.js";import"./PdfViewer-BwgvH434.js";import"./index-BKwUwpqE.js";import"./BasePdfViewer-CEPru1j-.js";import"./BasePdfViewer.module.css-BpI59OpU.js";import"./PdfViewerAnnotationLayer-DGZ4pO5e.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D3GsRClq.js";import"./PdfViewerOutlineSidebar-DLd4x3-2.js";import"./PdfViewerSidebarHeader-CVlbamHF.js";import"./useBaseUiId-CudlGyea.js";import"./useControlled-DrRmZYfs.js";import"./CompositeRoot-DRBX6auw.js";import"./CompositeItem-B_IgawVY.js";import"./ToolbarRootContext-BFw03ENT.js";import"./composite-DRL_KXF5.js";import"./svgIconContainer-Ba0TV_kf.js";import"./PdfViewerSearchBar-Di8DnCIt.js";import"./chevron-up-uKyllvGF.js";import"./chevron-down-mPM57H-_.js";import"./cross-DXFMmm20.js";import"./PdfViewerSidebar-B1IH8rsX.js";import"./index-DDu7TN_e.js";import"./index-DfV4aiex.js";import"./index-Cck4Ig_M.js";import"./PdfViewerToolbar-DHqFa8Gq.js";import"./Button-DuyCMj3l.js";import"./chevron-right-IvAivUSz.js";import"./Input-Cn0Hq5K2.js";import"./search-DXlkRNHA.js";import"./spin-Cf8R1ZVj.js";import"./error-Bj6pw2ZK.js";import"./withOsdkMetrics-CjTPft6c.js";import"./makeExternalStore-DvJ09sLw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
