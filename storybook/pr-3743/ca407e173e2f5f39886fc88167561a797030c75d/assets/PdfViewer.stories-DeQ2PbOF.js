import{j as r,M as s}from"./iframe-YKgGYsAZ.js";import{P as p}from"./pdf-viewer-DapRsYSx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-pk0Z1CWu.js";import"./preload-helper-DOUBWnCG.js";import"./PdfRenderer-C8-rWkCF.js";import"./index-BSQIesNv.js";import"./PdfViewer-CK7LTV1b.js";import"./PdfViewer.module.css-ugXqugiM.js";import"./PdfViewerAnnotationLayer-E0vlGK6A.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BQepMZt7.js";import"./PdfViewerOutlineSidebar-CCn2oFK7.js";import"./PdfViewerSidebarHeader-TZH1FwIo.js";import"./useBaseUiId-C9tw97PK.js";import"./useControlled-CMH4CusX.js";import"./CompositeRoot-CFwqTfa5.js";import"./CompositeItem-D_aoMV-r.js";import"./ToolbarRootContext-C4AwY0JT.js";import"./composite-9jEqfl-8.js";import"./svgIconContainer-DjwSFEoB.js";import"./PdfViewerSearchBar-BnS13w8y.js";import"./chevron-up-CADr-b36.js";import"./chevron-down-e9aVtt1A.js";import"./cross-Cy7yMOlh.js";import"./PdfViewerSidebar-CXCFQHCY.js";import"./index-DF281wZ_.js";import"./index-Ckuqz5sJ.js";import"./index-Emhhftp8.js";import"./PdfViewerToolbar-BgOB8BNi.js";import"./Button-BYswp3H9.js";import"./chevron-right-xQmnxFHZ.js";import"./Input-B20zbLtE.js";import"./search-COrqTZFe.js";import"./spin-TiDORuJL.js";import"./error-BF8Ij9Ca.js";import"./withOsdkMetrics-4LWIzNT1.js";import"./makeExternalStore-B3R7PPWc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
