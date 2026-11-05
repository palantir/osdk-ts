import{j as r,M as s}from"./iframe-x4Y4VSHV.js";import{P as p}from"./pdf-viewer-p792fsl0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DcJ3wzE8.js";import"./preload-helper-wFwf1Z_7.js";import"./PdfViewer-C-AzwX36.js";import"./index-BTkF7OpO.js";import"./BasePdfViewer-BQMYbEsa.js";import"./BasePdfViewer.module.css-DxiwzFL4.js";import"./PdfViewerAnnotationLayer-BgECdyYH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BNJLnFAJ.js";import"./PdfViewerOutlineSidebar-BaNa1BpL.js";import"./PdfViewerSidebarHeader-BttOmLcX.js";import"./useBaseUiId-O7ZsVKwo.js";import"./useControlled-B1vBMtLm.js";import"./CompositeRoot-DiSTgR-J.js";import"./CompositeItem-gQ_2jip-.js";import"./ToolbarRootContext-BTpSmFWY.js";import"./composite-HDXk98Mo.js";import"./svgIconContainer-BRq3fj7v.js";import"./PdfViewerSearchBar-BdUbboAC.js";import"./chevron-up-GROq8lE_.js";import"./chevron-down-DIIH-694.js";import"./cross-34rpmbRR.js";import"./PdfViewerSidebar-B0KI_lHV.js";import"./index-B9Z4kBgT.js";import"./index-BcBc9KVj.js";import"./index-B3Hd8yqN.js";import"./PdfViewerToolbar-CVusryac.js";import"./Button-D6WWCBJV.js";import"./chevron-right-BhWo1d7p.js";import"./Input-RqZQ3gi6.js";import"./search-t_lGFyp_.js";import"./spin-CrotzoR_.js";import"./error-1h6EWorL.js";import"./withOsdkMetrics-LnVAi8HB.js";import"./makeExternalStore-CRHmXcik.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
