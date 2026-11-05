import{j as r,M as s}from"./iframe-D7hanWlH.js";import{P as p}from"./pdf-viewer-Co_tAiHK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cbaz1ZMi.js";import"./preload-helper-CO6dxj1b.js";import"./PdfViewer-7dcv6Ng3.js";import"./index-D-fAM26k.js";import"./BasePdfViewer-BzYjXfrb.js";import"./BasePdfViewer.module.css-LgjIMo4s.js";import"./PdfViewerAnnotationLayer-CVN31EHG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cc7bXJde.js";import"./PdfViewerOutlineSidebar-CxU6p_BO.js";import"./PdfViewerSidebarHeader-BFEnsCNk.js";import"./useBaseUiId-Bu7z_xTH.js";import"./useControlled-i2ARdjw-.js";import"./CompositeRoot-QObKR3Zx.js";import"./CompositeItem-tDOcOAJb.js";import"./ToolbarRootContext-Dx6PUY5o.js";import"./composite-D9lkXcst.js";import"./svgIconContainer-DvWstcAL.js";import"./PdfViewerSearchBar-DVw3GXR_.js";import"./chevron-up-D-MXJorO.js";import"./chevron-down-Cjgkim-K.js";import"./cross-Y5gvP3Fl.js";import"./PdfViewerSidebar-BMjYsluD.js";import"./index-Dt79Win6.js";import"./index-D_yrCdEG.js";import"./index-vVHHs4bi.js";import"./PdfViewerToolbar-BC8FQcLO.js";import"./Button-BnMNzQq6.js";import"./chevron-right-DimgGn9C.js";import"./Input-Cdf8UtKg.js";import"./search-DSRtq581.js";import"./spin-D868vd-a.js";import"./error-CzhlMkp_.js";import"./withOsdkMetrics-BemcFffG.js";import"./makeExternalStore-UI8ZJEmg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
