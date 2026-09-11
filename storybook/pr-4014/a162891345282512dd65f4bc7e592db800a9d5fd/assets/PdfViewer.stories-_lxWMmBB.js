import{j as r,M as s}from"./iframe-CuKia_EN.js";import{P as p}from"./pdf-viewer-CtcEaGf4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dw0MA_uz.js";import"./preload-helper-DZuarx_D.js";import"./PdfViewer-CE4_GYg4.js";import"./index-CVRiO_BO.js";import"./BasePdfViewer-D9qw3V9N.js";import"./BasePdfViewer.module.css-CQfrwRm0.js";import"./PdfViewerAnnotationLayer-f8dNIzKp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LK0ZHTRJ.js";import"./PdfViewerOutlineSidebar-Bl-_MAXQ.js";import"./PdfViewerSidebarHeader-D-3XDznV.js";import"./useBaseUiId-C8uIC3Bm.js";import"./useControlled-UwQVkGem.js";import"./CompositeRoot-LXs6UxVj.js";import"./CompositeItem-CJjI731A.js";import"./ToolbarRootContext-Bn8zU9xQ.js";import"./composite-Cpd5KJD8.js";import"./svgIconContainer-6Becg_K2.js";import"./PdfViewerSearchBar-DdZQI3ZP.js";import"./chevron-up-3T6V1inz.js";import"./chevron-down-DJVJwxKZ.js";import"./cross-X509BjS9.js";import"./PdfViewerSidebar-BIbe-mEz.js";import"./index-BcyKe8qn.js";import"./index-q4KNVnv_.js";import"./index-Dx9fpQkg.js";import"./PdfViewerToolbar-3EX5vcQ5.js";import"./Button-CVMu9YDi.js";import"./chevron-right-SeOAzUfA.js";import"./Input-BIdaiZoI.js";import"./search-Bab6PZbG.js";import"./spin-BxfFWaug.js";import"./error-C19RYWaj.js";import"./withOsdkMetrics-5runl_VG.js";import"./makeExternalStore-DzI0MTA7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
