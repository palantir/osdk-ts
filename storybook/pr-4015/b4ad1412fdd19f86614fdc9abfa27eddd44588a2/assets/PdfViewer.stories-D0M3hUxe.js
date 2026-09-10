import{j as r,M as s}from"./iframe-vupRmrl1.js";import{P as p}from"./pdf-viewer-BU1RVTRl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D2dG9iSc.js";import"./preload-helper-gDtGaGRc.js";import"./PdfViewer-d--RsLU2.js";import"./index-DyT3w31I.js";import"./BasePdfViewer-Da5fquhW.js";import"./BasePdfViewer.module.css-DQMSa-MY.js";import"./PdfViewerAnnotationLayer-K3HBr6d7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXpUzeUK.js";import"./PdfViewerOutlineSidebar-C0W3yiED.js";import"./PdfViewerSidebarHeader-CrMSvXM6.js";import"./useBaseUiId-BHpjHq0v.js";import"./useControlled-DsYwW81O.js";import"./CompositeRoot-BV5VxBiq.js";import"./CompositeItem-D7w73J8v.js";import"./ToolbarRootContext-C266FSVf.js";import"./composite-D7MQDgRI.js";import"./svgIconContainer-BMvPRZYr.js";import"./PdfViewerSearchBar-DBIRlZK_.js";import"./chevron-up-CnIKyTLX.js";import"./chevron-down-LKL_MfU5.js";import"./cross-DtkFdwBY.js";import"./PdfViewerSidebar-Dh7vNuYI.js";import"./index-Ko_HwzJV.js";import"./index-ByLKmROF.js";import"./index-CNpYqLTE.js";import"./PdfViewerToolbar--dntytFT.js";import"./Button-DJ6M6HmU.js";import"./chevron-right-DsJXtIS9.js";import"./Input-3k8TfuM7.js";import"./search-DJT3mMGf.js";import"./spin-Diao0w3J.js";import"./error-Ccrq6RR-.js";import"./withOsdkMetrics-CfzTocUk.js";import"./makeExternalStore-D9V5Ayqr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
