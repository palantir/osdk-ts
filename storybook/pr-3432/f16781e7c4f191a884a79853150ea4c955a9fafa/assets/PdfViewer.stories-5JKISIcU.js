import{j as r,M as s}from"./iframe-D7J8vumD.js";import{P as p}from"./pdf-viewer-DWBirfYe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CLUiabjg.js";import"./preload-helper-CoI2b-NY.js";import"./PdfRenderer-BgaIenuk.js";import"./index-QBifOzzz.js";import"./PdfViewer-oJxw1EMJ.js";import"./PdfViewer.module.css-B9V_rGk0.js";import"./PdfViewerAnnotationLayer-CBtIvQMD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DoKH801z.js";import"./PdfViewerOutlineSidebar-D3dGaT2M.js";import"./PdfViewerSidebarHeader-qomqdA8z.js";import"./useBaseUiId-C50RoOZc.js";import"./useControlled-BHmaFYpg.js";import"./CompositeRoot-DaHXEPEz.js";import"./CompositeItem-B4MmY3We.js";import"./ToolbarRootContext-Cwh4PfWk.js";import"./composite-BGDn0_gf.js";import"./svgIconContainer-DP4Tdjl6.js";import"./PdfViewerSearchBar-ywGG4QZg.js";import"./chevron-up-CuVS7Ia8.js";import"./chevron-down-DXW5sn_g.js";import"./cross-B2gz64XV.js";import"./PdfViewerSidebar-TQE9RVuI.js";import"./index-CI_n1iiV.js";import"./index-Cknec7q6.js";import"./index-BeuKTTLq.js";import"./PdfViewerToolbar-BrVoo2AD.js";import"./Button-DSmwpg33.js";import"./chevron-right-DpSm_pHg.js";import"./Input-BjK5t-V3.js";import"./search-B7AI5VYb.js";import"./spin-Q4NvzF3K.js";import"./error-BIJvNoxf.js";import"./withOsdkMetrics-C9qNS83F.js";import"./makeExternalStore-WCk7IxaN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
