import{j as r,M as s}from"./iframe-kxdUQCve.js";import{P as p}from"./pdf-viewer-BX_LPt_5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DvdbFsdz.js";import"./preload-helper-Cuq4TkHU.js";import"./PdfViewer-IRj4emDG.js";import"./index-Dj-vHPb7.js";import"./BasePdfViewer-DGNQr5zl.js";import"./BasePdfViewer.module.css-DpeINNkX.js";import"./PdfViewerAnnotationLayer-B7PJfhq_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BLSFbWFT.js";import"./PdfViewerOutlineSidebar-DPabYFFO.js";import"./PdfViewerSidebarHeader-WlZ6Obs_.js";import"./useBaseUiId-DHH2yIbk.js";import"./useControlled-BW2k3psm.js";import"./CompositeRoot-CF97c9v_.js";import"./CompositeItem-CSpMJ9Wh.js";import"./ToolbarRootContext-CW6avnm2.js";import"./composite-Bj70JY7P.js";import"./svgIconContainer-0muFsb9b.js";import"./PdfViewerSearchBar-LzlzLvcD.js";import"./chevron-up-sYdp_yxo.js";import"./chevron-down-CKJ5Wwcf.js";import"./cross-BGuVVI58.js";import"./PdfViewerSidebar-Ck1YGAEq.js";import"./index-CAihI7G4.js";import"./index-DLOXxPse.js";import"./index-Cm3W4-OV.js";import"./PdfViewerToolbar-BL2y0ykl.js";import"./Button-Ca-rtxgT.js";import"./chevron-right-BU5fqkhN.js";import"./Input-DaXzRTeY.js";import"./search-Dtrnv9od.js";import"./spin-DNcRz8Wb.js";import"./error-Dc_ezcGJ.js";import"./withOsdkMetrics-BsNzoRp3.js";import"./makeExternalStore-CNzfft50.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
