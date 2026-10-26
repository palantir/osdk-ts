import{j as r,M as s}from"./iframe-B41lgdKN.js";import{P as p}from"./pdf-viewer-HYxpPZyl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bac639W0.js";import"./preload-helper-DI5m88JW.js";import"./PdfViewer-CRf9hJSj.js";import"./index-C2q613GL.js";import"./BasePdfViewer-csOGzfWC.js";import"./BasePdfViewer.module.css-2_b3u1dF.js";import"./PdfViewerAnnotationLayer-BVXACVuF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CSXX9a3Y.js";import"./PdfViewerOutlineSidebar-D9PNCa_1.js";import"./PdfViewerSidebarHeader-C7mDJ2DC.js";import"./useBaseUiId-BgB3Fx_y.js";import"./useControlled-COiD_eR7.js";import"./CompositeRoot-DcMohphO.js";import"./CompositeItem-DKeB6UbW.js";import"./ToolbarRootContext-DaqyENip.js";import"./composite-B54UYmeO.js";import"./svgIconContainer-D7Eue1ZZ.js";import"./PdfViewerSearchBar-ruiHV3Iu.js";import"./chevron-up-Btp4j1eu.js";import"./chevron-down-DPEakPZ3.js";import"./cross-C9BOtq1y.js";import"./PdfViewerSidebar-DvnEw7Z8.js";import"./index-B5Wpr3Nx.js";import"./index-D_IcPDjf.js";import"./index-Cujrcm2-.js";import"./PdfViewerToolbar-BixkRRY1.js";import"./Button-CLPb2Ul9.js";import"./chevron-right-DauGk3BK.js";import"./Input-C5V0yZmk.js";import"./search-D5xcli0X.js";import"./spin-DAj4Xy_r.js";import"./error-DxQUrNdP.js";import"./withOsdkMetrics-BJYPVZ1i.js";import"./makeExternalStore-BkjE2Bfi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
