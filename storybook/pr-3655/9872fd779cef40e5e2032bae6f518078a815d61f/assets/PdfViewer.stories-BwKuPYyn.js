import{j as r,M as s}from"./iframe-D0J7mvwf.js";import{P as p}from"./pdf-viewer-DvU-LPOr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BQAXi3lj.js";import"./preload-helper-Bl-ArobV.js";import"./PdfRenderer-CONXWy7v.js";import"./index-JCCSuvRf.js";import"./PdfViewer-CgGyNqst.js";import"./PdfViewer.module.css-Dadg9Api.js";import"./PdfViewerAnnotationLayer-DsmGpUrZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-vJo_Mp74.js";import"./PdfViewerOutlineSidebar-BIIOvdUs.js";import"./PdfViewerSidebarHeader-Ch0VCL33.js";import"./useBaseUiId-uSeeHaZq.js";import"./useControlled-Dha8GtVW.js";import"./CompositeRoot-DizepMXZ.js";import"./CompositeItem-BBxqubBV.js";import"./ToolbarRootContext-BEOjFBql.js";import"./composite-04wTDi4A.js";import"./svgIconContainer-EWzEFUVq.js";import"./PdfViewerSearchBar-B4_DO4M3.js";import"./chevron-up-BiFQPC3P.js";import"./chevron-down-DhY6CzD7.js";import"./cross-5za6xxk1.js";import"./PdfViewerSidebar-OYW1cGNl.js";import"./index-BVt2qsnI.js";import"./index-BUvLHK9q.js";import"./index-B_PUeEtr.js";import"./PdfViewerToolbar-BI8gwN07.js";import"./Button-6l-XGgCt.js";import"./chevron-right-eiArG4SD.js";import"./Input-TtJujKT2.js";import"./search-CW-V3zmM.js";import"./spin-N_1_dq_z.js";import"./error-TSq0w6FZ.js";import"./withOsdkMetrics-bp6FdzRh.js";import"./makeExternalStore-BWTJsXcH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
