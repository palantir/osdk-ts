import{j as r,M as s}from"./iframe-5u9ZtrJt.js";import{P as p}from"./pdf-viewer-WYKT-8c_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BX_xXSZI.js";import"./preload-helper-CuQanuSU.js";import"./PdfViewer-Bn2VZTNl.js";import"./index-DavgBEP1.js";import"./BasePdfViewer-DQf2eZzc.js";import"./BasePdfViewer.module.css-0Txr0oQd.js";import"./PdfViewerAnnotationLayer-C7mFo301.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-F_svd_s1.js";import"./PdfViewerOutlineSidebar-DV2FgxN2.js";import"./PdfViewerSidebarHeader-C02C5RF3.js";import"./useBaseUiId-CQYNNsxK.js";import"./useControlled-B5brBFEZ.js";import"./CompositeRoot-CktCCUBO.js";import"./CompositeItem-DF5M0Q62.js";import"./ToolbarRootContext-BdaDw2wr.js";import"./composite-CGw-Ihls.js";import"./svgIconContainer-jQAOa3hY.js";import"./PdfViewerSearchBar-BhANi3bQ.js";import"./chevron-up-erQLLJga.js";import"./chevron-down-B3Fv0w50.js";import"./cross-BpzwhQi5.js";import"./PdfViewerSidebar-DPzS-IYS.js";import"./index-vMKc9Vfa.js";import"./index-DMFEApmF.js";import"./index-C7XPHJ8o.js";import"./PdfViewerToolbar-DqAD9oZH.js";import"./Button-ChR8k8XV.js";import"./chevron-right-BJRRHHgZ.js";import"./Input-D8eW-et_.js";import"./search-JNpB3WRd.js";import"./spin-BSMBirL8.js";import"./error-CQ8cV0Cv.js";import"./withOsdkMetrics-evZV6vNo.js";import"./makeExternalStore-DT_DHHwN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
