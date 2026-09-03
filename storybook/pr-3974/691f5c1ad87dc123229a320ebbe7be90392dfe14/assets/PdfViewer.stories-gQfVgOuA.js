import{j as r,M as s}from"./iframe-DfNFuvd8.js";import{P as p}from"./pdf-viewer-C3ggoT4T.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BP7loe46.js";import"./preload-helper-B2A7KixS.js";import"./PdfViewer-BSHi1v9Z.js";import"./index-hJ034l85.js";import"./BasePdfViewer-DZbNXZlb.js";import"./BasePdfViewer.module.css-D_in-y_o.js";import"./PdfViewerAnnotationLayer-C0FKZoRX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ds1EgoTz.js";import"./PdfViewerOutlineSidebar-MHRjq6I6.js";import"./PdfViewerSidebarHeader-DLaWMWBO.js";import"./useBaseUiId-Bo6GSES5.js";import"./useControlled-P4f8RlVJ.js";import"./CompositeRoot-SfYs0Up-.js";import"./CompositeItem-C2W2AWaC.js";import"./ToolbarRootContext-BppEIMJO.js";import"./composite-D6AWaxnU.js";import"./svgIconContainer-B6TYwpfX.js";import"./PdfViewerSearchBar-ClyD9BK4.js";import"./chevron-up-DPk2RPjn.js";import"./chevron-down-C8YJ1kBl.js";import"./cross-CBZgOvDJ.js";import"./PdfViewerSidebar-lHof0iF-.js";import"./index-D4IU9xHw.js";import"./index-DO9KDqDU.js";import"./index-Co9EvdKx.js";import"./PdfViewerToolbar-D61toMJZ.js";import"./Button-BqZDxH8m.js";import"./chevron-right-CypUrES5.js";import"./Input-DQxNJVQ9.js";import"./search-C0uD-Uv6.js";import"./spin-BCyI-_Fe.js";import"./error-ThwmBgve.js";import"./withOsdkMetrics-CJRcI3lK.js";import"./makeExternalStore-DLzSgHee.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
