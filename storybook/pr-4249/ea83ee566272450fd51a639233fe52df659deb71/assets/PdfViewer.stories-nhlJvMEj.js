import{j as r,M as s}from"./iframe-BbjXXJe8.js";import{P as p}from"./pdf-viewer-BX1SA3Iw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D-x39pAl.js";import"./preload-helper-Dey0rnvM.js";import"./PdfViewer-D3FIJFJu.js";import"./index-T8M7MoCf.js";import"./BasePdfViewer-CgVIN8qu.js";import"./BasePdfViewer.module.css-C6WYquiM.js";import"./PdfViewerAnnotationLayer-D1YwiDpu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-2jSTWTCm.js";import"./PdfViewerOutlineSidebar-Dunitiff.js";import"./PdfViewerSidebarHeader-Dc3DX3Vn.js";import"./useBaseUiId-mbBdJtd6.js";import"./useControlled-bFhbJ_tP.js";import"./CompositeRoot-BQ9tkny0.js";import"./CompositeItem-BvxDZQma.js";import"./ToolbarRootContext-DvWxWMIg.js";import"./composite-CkO02i_E.js";import"./svgIconContainer-CXj_KM32.js";import"./PdfViewerSearchBar-j_z4aep2.js";import"./chevron-up-Q0aiLlko.js";import"./chevron-down-5PwEHI-v.js";import"./cross-Dp3ZYAZC.js";import"./PdfViewerSidebar-CeurdUuX.js";import"./index-D95i56Mo.js";import"./index-GEyymHQJ.js";import"./index-CUAZugwU.js";import"./PdfViewerToolbar-FEFhJje8.js";import"./Button-BYNpk4v8.js";import"./chevron-right-HhB3OG40.js";import"./Input-DcHjunbi.js";import"./search-DjptGMSz.js";import"./spin-BJjZX5vW.js";import"./error-B5EEo1NC.js";import"./withOsdkMetrics-Cy91uTto.js";import"./makeExternalStore-BCfu_aRm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
