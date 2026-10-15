import{j as r,M as s}from"./iframe-zGF2yItg.js";import{P as p}from"./pdf-viewer-8xIV7qHt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_D0tBOD.js";import"./preload-helper-DKR91DwN.js";import"./PdfViewer-C-H7L1bE.js";import"./index-CI0AAd7R.js";import"./BasePdfViewer-DiKuQbdu.js";import"./BasePdfViewer.module.css-DOqjJU4f.js";import"./PdfViewerAnnotationLayer-CaEO-aTE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BwzjiGes.js";import"./PdfViewerOutlineSidebar-DLstzMze.js";import"./PdfViewerSidebarHeader-C0c_ox-7.js";import"./useBaseUiId-D8XkRAoN.js";import"./useControlled-Bcq_19a7.js";import"./CompositeRoot-kP-4U7q_.js";import"./CompositeItem-BGuYZ8t8.js";import"./ToolbarRootContext-zfiNhCTv.js";import"./composite-BhRiZx70.js";import"./svgIconContainer-CfbP11Km.js";import"./PdfViewerSearchBar-By_7jH2n.js";import"./chevron-up-ssHwhLFd.js";import"./chevron-down-BYonktV5.js";import"./cross-BclfVS0V.js";import"./PdfViewerSidebar-C8eVcxq0.js";import"./index-Ce2iCB2D.js";import"./index-CpyS4ByO.js";import"./index-C9gBj_QQ.js";import"./PdfViewerToolbar-jH3AVBFQ.js";import"./Button-CUzrpo83.js";import"./chevron-right-B6a-xUBl.js";import"./Input-gx0WGAlP.js";import"./search-Dr3ly3kj.js";import"./spin-BhMd1AV1.js";import"./error-rXo5lK8q.js";import"./withOsdkMetrics-CQPruHu_.js";import"./makeExternalStore-BDBIRBp5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
