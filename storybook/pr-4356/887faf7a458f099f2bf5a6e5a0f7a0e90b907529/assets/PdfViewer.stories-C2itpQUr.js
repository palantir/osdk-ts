import{j as r,M as s}from"./iframe-CO_TqB81.js";import{P as p}from"./pdf-viewer-WKSIpVGn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BQMsBW03.js";import"./preload-helper-Cb9TEUNK.js";import"./PdfViewer-DkANVZ13.js";import"./index-BG1T9Qar.js";import"./BasePdfViewer-zFtsVP19.js";import"./BasePdfViewer.module.css-DhfArX-C.js";import"./PdfViewerAnnotationLayer-Wy93ebdI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CTiLSeop.js";import"./PdfViewerOutlineSidebar-BSNT_sHS.js";import"./PdfViewerSidebarHeader-BzJ2qxx-.js";import"./useBaseUiId-CQDh8HZx.js";import"./useControlled-BzsK2z1m.js";import"./CompositeRoot-bAavk3zN.js";import"./CompositeItem-DiNcRYV6.js";import"./ToolbarRootContext-C89jM3yj.js";import"./composite-ksiLQPWX.js";import"./svgIconContainer-9GB5-wwK.js";import"./PdfViewerSearchBar-BHplcw5I.js";import"./chevron-up-Cc9rzh_V.js";import"./chevron-down-Cz7E_Xzc.js";import"./cross-BWp6Y9Mg.js";import"./PdfViewerSidebar-CE2f4WkZ.js";import"./index-CZb0rJv3.js";import"./index-Vp2_lvOX.js";import"./index-BpkhN8QR.js";import"./PdfViewerToolbar-B-MkAkuu.js";import"./Button-DcLBkUW1.js";import"./chevron-right-ByRYRMQp.js";import"./Input-C4_accH4.js";import"./search-CL2g-V2W.js";import"./spin-CzGUiCPE.js";import"./error-CQK0rvpI.js";import"./withOsdkMetrics-DUnq64Xh.js";import"./makeExternalStore-BrsByTNH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
