import{j as r,M as s}from"./iframe-BpwQaCWI.js";import{P as p}from"./pdf-viewer-CJLVymbs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-p-Ul8Amd.js";import"./preload-helper-Ce4Df6DJ.js";import"./PdfRenderer-ErXu252g.js";import"./index-NFv3j1Kg.js";import"./PdfViewer-Bof8X-Ee.js";import"./PdfViewer.module.css-DGsZXAl-.js";import"./PdfViewerAnnotationLayer-B2yOlLtB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-6wAe9QKp.js";import"./PdfViewerOutlineSidebar-BcMfvUK5.js";import"./PdfViewerSidebarHeader-UD5pgrYM.js";import"./useBaseUiId-C5AYGB4P.js";import"./useControlled-B5EHNqku.js";import"./CompositeRoot-3wdvqray.js";import"./CompositeItem-DYXeZzjt.js";import"./ToolbarRootContext-3wDAKiuQ.js";import"./composite-CEBA9fRk.js";import"./svgIconContainer-CuioFaav.js";import"./PdfViewerSearchBar-CkKpNqVd.js";import"./chevron-up-CtKoZsGt.js";import"./chevron-down-Bq6hXrIQ.js";import"./cross-rhRWeE7s.js";import"./PdfViewerSidebar-MeW_4_n7.js";import"./index-DPdcJJ72.js";import"./index-DITs30Pt.js";import"./index-C7wtgwzA.js";import"./PdfViewerToolbar-D1fvLHP4.js";import"./Button-CF2CCiZI.js";import"./chevron-right-D7yA8iJB.js";import"./Input-cDQ-g7j4.js";import"./search-BFV-1IQp.js";import"./spin-BLtsVS5u.js";import"./error-DStggkKI.js";import"./withOsdkMetrics-KUUyNHJj.js";import"./makeExternalStore-BuiA034c.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
