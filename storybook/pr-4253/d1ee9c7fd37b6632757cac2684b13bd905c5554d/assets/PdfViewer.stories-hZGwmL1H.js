import{j as r,M as s}from"./iframe-C7u8teZW.js";import{P as p}from"./pdf-viewer-Dphz9_u8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DegPccrL.js";import"./preload-helper-BksW-fLa.js";import"./PdfViewer-Tca-GB0f.js";import"./index-BhN64Vkr.js";import"./BasePdfViewer-2b9Y6bvr.js";import"./BasePdfViewer.module.css-DkZXnc8z.js";import"./PdfViewerAnnotationLayer-DeQ3Y4uH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-E-zuQPVz.js";import"./PdfViewerOutlineSidebar-FGkoFk-1.js";import"./PdfViewerSidebarHeader-BvPpIaLH.js";import"./useBaseUiId-DhUQmONl.js";import"./useControlled-wz_zz6UQ.js";import"./CompositeRoot-ZD0MP6fn.js";import"./CompositeItem-DBCCEsi2.js";import"./ToolbarRootContext-CtUE7M4a.js";import"./composite-zfEBFY2E.js";import"./svgIconContainer-BCJkHoyI.js";import"./PdfViewerSearchBar-CGU3pgw1.js";import"./chevron-up-DyfwyxfJ.js";import"./chevron-down-CkA7RfLP.js";import"./cross-DxUgqzoH.js";import"./PdfViewerSidebar-DwkayNds.js";import"./index-CWtS_zs6.js";import"./index-ClHt_xjm.js";import"./index-B0vLTinM.js";import"./PdfViewerToolbar-DNZR2MgQ.js";import"./Button-ItUG0RJE.js";import"./chevron-right-WhiiwNq6.js";import"./Input-CkX7hrVd.js";import"./search-D1b21RXS.js";import"./spin-DxgUC3KV.js";import"./error-CEH3koMg.js";import"./withOsdkMetrics-GebS3Gu5.js";import"./makeExternalStore-MBK88X8R.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
