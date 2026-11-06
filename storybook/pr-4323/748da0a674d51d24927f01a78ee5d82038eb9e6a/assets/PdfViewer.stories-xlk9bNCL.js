import{j as r,M as s}from"./iframe-C3HFz_5t.js";import{P as p}from"./pdf-viewer-DCjvf0R7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D3cZlTE4.js";import"./preload-helper-Lu-1fXSQ.js";import"./PdfViewer-CEK4uXVX.js";import"./index-C294enkt.js";import"./BasePdfViewer-CZ9t7lUz.js";import"./BasePdfViewer.module.css-BRdifxXz.js";import"./PdfViewerAnnotationLayer-CVcPy3tm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bq4E_D6D.js";import"./PdfViewerOutlineSidebar-CaQpzoIu.js";import"./PdfViewerSidebarHeader-DbiZRVbi.js";import"./useBaseUiId-Bldx0Hal.js";import"./useControlled-CO4tNWxM.js";import"./CompositeRoot-Djt65RTk.js";import"./CompositeItem-Ljl_SfE6.js";import"./ToolbarRootContext-QkATP4Zh.js";import"./composite-D03Np3Q8.js";import"./svgIconContainer-Dx7Oqsa5.js";import"./PdfViewerSearchBar-HSxr9lVV.js";import"./chevron-up-BHe39bWw.js";import"./chevron-down-DKXpMnZC.js";import"./cross-VDE-QV8Y.js";import"./PdfViewerSidebar-DG1phdFg.js";import"./index-o5L_LgpC.js";import"./index-jlzeR6Al.js";import"./index-YNwbQPnW.js";import"./PdfViewerToolbar-Cp9q4yza.js";import"./Button-BCjPDU8B.js";import"./chevron-right-BxQZXxHl.js";import"./Input-C6djVFfS.js";import"./search-DicQa5iZ.js";import"./spin-BhGCp_wK.js";import"./error-NlvFbJx8.js";import"./withOsdkMetrics-CwJ1jB1x.js";import"./makeExternalStore-CTKXCo5y.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
