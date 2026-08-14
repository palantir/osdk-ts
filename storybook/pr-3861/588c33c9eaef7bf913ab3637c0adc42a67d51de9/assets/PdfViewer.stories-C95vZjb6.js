import{j as r,M as s}from"./iframe-CBwUUQtW.js";import{P as p}from"./pdf-viewer-B79frS7m.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-nuYk7Sc3.js";import"./preload-helper-CFw_NFcA.js";import"./PdfViewer-DRT-pVLV.js";import"./index-cQY6v_um.js";import"./BasePdfViewer-CohUOAUs.js";import"./BasePdfViewer.module.css-DRpokJns.js";import"./PdfViewerAnnotationLayer-AHhhIcjv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DBVI6DCM.js";import"./PdfViewerOutlineSidebar-BhbiIiMd.js";import"./PdfViewerSidebarHeader-4SiQnks8.js";import"./useBaseUiId-C9meW85R.js";import"./useControlled-BpJFCpdY.js";import"./CompositeRoot-EJnHCK5o.js";import"./CompositeItem-BY3ILgBs.js";import"./ToolbarRootContext-B7OOeP9B.js";import"./composite-Dosig-Z_.js";import"./svgIconContainer-Cf3n3CxU.js";import"./PdfViewerSearchBar-Bqyb6GVX.js";import"./chevron-up-CQWrF6dc.js";import"./chevron-down-CnjRqozX.js";import"./cross-4fv-Jmha.js";import"./PdfViewerSidebar-C-Z0C8lh.js";import"./index-cR5viBYS.js";import"./index-CpJqyn27.js";import"./index-BfNyjIxY.js";import"./PdfViewerToolbar-DGHqOsnY.js";import"./Button-Q3-mVk17.js";import"./chevron-right-B20Spbrq.js";import"./Input-DGlls_dE.js";import"./search-D4D4eQBI.js";import"./spin-CDu4qpab.js";import"./error-BOVvrWvG.js";import"./withOsdkMetrics-BnrNdVzl.js";import"./makeExternalStore-Cmk4ZnMJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
