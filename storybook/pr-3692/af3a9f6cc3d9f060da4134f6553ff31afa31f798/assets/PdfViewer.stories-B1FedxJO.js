import{j as r,M as s}from"./iframe-BSWU-B_t.js";import{P as p}from"./pdf-viewer-BWDp4bE2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BfuAuRZ_.js";import"./preload-helper-BP69itpM.js";import"./PdfRenderer-BfDkCMLe.js";import"./index-DCPm6e7t.js";import"./PdfViewer-DaEO3skp.js";import"./PdfViewer.module.css-CQ7rmhtG.js";import"./PdfViewerAnnotationLayer-CCJdrJKE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQiRtF6U.js";import"./PdfViewerOutlineSidebar-DPijTrCf.js";import"./PdfViewerSidebarHeader-BGPpwBMO.js";import"./useBaseUiId-DgZLNkcV.js";import"./useControlled-e9A-MeLW.js";import"./CompositeRoot-DZiJMhK0.js";import"./CompositeItem-BD3XvVOF.js";import"./ToolbarRootContext-CzwBSefm.js";import"./composite-xK3OdJJN.js";import"./svgIconContainer-DYKXPmKq.js";import"./PdfViewerSearchBar-BoJiswwo.js";import"./chevron-up-Dd4izQJl.js";import"./chevron-down-DJwyIqCh.js";import"./cross-BqFGV5fX.js";import"./PdfViewerSidebar-BmVpDVI6.js";import"./index-BsLHq-Z8.js";import"./index-BxbANLHm.js";import"./index-CSS1hzAc.js";import"./PdfViewerToolbar-BBeb1zMj.js";import"./Button-C7DF1eS8.js";import"./chevron-right-CzBvWWcQ.js";import"./Input-C-SAhLrm.js";import"./search-DC42LciC.js";import"./spin-xcFVXJAb.js";import"./error-1J8Hl7Xk.js";import"./withOsdkMetrics-B-cyLij9.js";import"./makeExternalStore-ChJ3m9QU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
