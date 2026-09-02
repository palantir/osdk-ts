import{j as r,M as s}from"./iframe-D4qPAS-g.js";import{P as p}from"./pdf-viewer-Bk0S9L9M.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DA3STeC3.js";import"./preload-helper-Cg_a2s3G.js";import"./PdfViewer-6kar1aRF.js";import"./index-CLuwBfL-.js";import"./BasePdfViewer-Cv0oHKXs.js";import"./BasePdfViewer.module.css-Ckg30tyJ.js";import"./PdfViewerAnnotationLayer-Cdjs0oJE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DzFxhDSj.js";import"./PdfViewerOutlineSidebar-poX21-ZG.js";import"./PdfViewerSidebarHeader-C2OJnEHd.js";import"./useBaseUiId-DFpk5L0M.js";import"./useControlled-Ci6llHGb.js";import"./CompositeRoot-fuzygg8a.js";import"./CompositeItem-BJpP_05A.js";import"./ToolbarRootContext-BsbBQIdg.js";import"./composite-Bzf0kbFg.js";import"./svgIconContainer-DyP05NDR.js";import"./PdfViewerSearchBar-UodIaYRX.js";import"./chevron-up-C_sYDLrP.js";import"./chevron-down-CLf1ZLUx.js";import"./cross-BeSpWB-4.js";import"./PdfViewerSidebar-Bkn2iCjk.js";import"./index-B7qcuAjK.js";import"./index-jBWRZpUn.js";import"./index-B9EWrBZS.js";import"./PdfViewerToolbar-Dyd810Zc.js";import"./Button-lgQljYGT.js";import"./chevron-right-B8-GyXxi.js";import"./Input-D6VetiDp.js";import"./search-CcRZw135.js";import"./spin-D9WhvSjP.js";import"./error-CPIE49XR.js";import"./withOsdkMetrics-DgCfGEzl.js";import"./makeExternalStore-CgE_KKYk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
