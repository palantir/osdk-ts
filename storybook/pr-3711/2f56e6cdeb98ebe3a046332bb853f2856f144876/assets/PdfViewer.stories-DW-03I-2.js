import{j as r,M as s}from"./iframe-Dvvw4I1q.js";import{P as p}from"./pdf-viewer-DwHQ_u5a.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BMcGAfEb.js";import"./preload-helper-DCKjsCnY.js";import"./PdfRenderer-BiId4zRe.js";import"./index-CcRKYtMA.js";import"./PdfViewer-C7tDDvi_.js";import"./PdfViewer.module.css-64Dax2P4.js";import"./PdfViewerAnnotationLayer-DTAsL4Ja.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B6pTU-qi.js";import"./PdfViewerOutlineSidebar-DhWkFLh_.js";import"./PdfViewerSidebarHeader-m2QiGrZW.js";import"./useBaseUiId-BMt9jKSu.js";import"./useControlled-B94x4lv8.js";import"./CompositeRoot-DM3mbt92.js";import"./CompositeItem-D2lVOo6X.js";import"./ToolbarRootContext-JCvgM6Mp.js";import"./composite-BgyboUCE.js";import"./svgIconContainer-gsEkol3B.js";import"./PdfViewerSearchBar-fglmp_ov.js";import"./chevron-up-BRDilbc1.js";import"./chevron-down-TYpwe3O5.js";import"./cross-DWppTOTY.js";import"./PdfViewerSidebar-BQe8CbLm.js";import"./index-BS778pXW.js";import"./index-xNuGHOPM.js";import"./index-BuX2Af_P.js";import"./PdfViewerToolbar-0E3n453h.js";import"./Button-E81dSXSm.js";import"./chevron-right-Os0kjO93.js";import"./Input-BQ69AAqr.js";import"./search-BSDyuuEt.js";import"./spin-BY1IuQ7s.js";import"./error-CJRuy9Eq.js";import"./withOsdkMetrics-UyO6uczm.js";import"./makeExternalStore-NaZQ5_sz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
