import{j as r,M as s}from"./iframe-CC2ptI8P.js";import{P as p}from"./pdf-viewer-BOsmFacd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D_-XR2eT.js";import"./preload-helper-DJhSNMV6.js";import"./PdfViewer-CaIodXI7.js";import"./index-84SYJq0E.js";import"./BasePdfViewer-BBgVhuAp.js";import"./BasePdfViewer.module.css-ByVwiRi7.js";import"./PdfViewerAnnotationLayer-DI2mTcrX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CopRrIXa.js";import"./PdfViewerOutlineSidebar-CQPWKwwe.js";import"./PdfViewerSidebarHeader-B6Z_mxo7.js";import"./useBaseUiId-BCidQo4j.js";import"./useControlled-DQuDgCM-.js";import"./CompositeRoot-CedMkBE8.js";import"./CompositeItem-CDqASXyT.js";import"./ToolbarRootContext-DJFAvWHQ.js";import"./composite-BKy8zjFJ.js";import"./svgIconContainer-aq_zJjvF.js";import"./PdfViewerSearchBar-z2nQFpvi.js";import"./chevron-up-CmV_L84U.js";import"./chevron-down-CoZSOIuk.js";import"./cross-6eZZZefX.js";import"./PdfViewerSidebar-DgA7tOha.js";import"./index-DPANitfT.js";import"./index-DamSmk8t.js";import"./index-DyTGXUkB.js";import"./PdfViewerToolbar-C-ASy7zy.js";import"./Button-CefAX4Ei.js";import"./chevron-right-CSGRE0ve.js";import"./Input-_srjMwb1.js";import"./search-CUgQ5xTX.js";import"./spin-B2AIPuLX.js";import"./error-CdNmuOhr.js";import"./withOsdkMetrics-dqavG6zz.js";import"./makeExternalStore-LEyTDUuD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
