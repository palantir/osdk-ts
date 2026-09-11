import{j as r,M as s}from"./iframe-DrGL59fh.js";import{P as p}from"./pdf-viewer-BezzJSzs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BBcUu_R5.js";import"./preload-helper-D-pltsU0.js";import"./PdfViewer-CDMH4e_L.js";import"./index-BPJV00wo.js";import"./BasePdfViewer-BMcx4N0B.js";import"./BasePdfViewer.module.css-DVtRATGJ.js";import"./PdfViewerAnnotationLayer-wwzfw9ps.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ck6K8h-D.js";import"./PdfViewerOutlineSidebar-C4U2xv1I.js";import"./PdfViewerSidebarHeader-DChQ96aj.js";import"./useBaseUiId-2W_ytHMV.js";import"./useControlled-D76B4nnK.js";import"./CompositeRoot-W6WIkq0A.js";import"./CompositeItem-BckOB5Eo.js";import"./ToolbarRootContext-C91J_2EK.js";import"./composite-VGQUbzTm.js";import"./svgIconContainer-CHeYR8wC.js";import"./PdfViewerSearchBar-CN7sibF-.js";import"./chevron-up-BX80xQ_d.js";import"./chevron-down-DCzbMy7Q.js";import"./cross-B3fC_apP.js";import"./PdfViewerSidebar-B3n6Su6A.js";import"./index-Bzlu61KO.js";import"./index-CAwEJolB.js";import"./index-cKTu6glV.js";import"./PdfViewerToolbar-B6HjqPlb.js";import"./Button-Dz98rt32.js";import"./chevron-right-CZAqLWtc.js";import"./Input-GRmoIvE6.js";import"./search-D_KAjQsE.js";import"./spin-DxHZ0qnZ.js";import"./error-B4r2g8yv.js";import"./withOsdkMetrics-tWMBpvoz.js";import"./makeExternalStore-Dar-D9jL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
