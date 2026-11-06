import{j as r,M as s}from"./iframe-CT0ueW5J.js";import{P as p}from"./pdf-viewer-BXZYNv2U.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-YiS2oTx8.js";import"./preload-helper-CJAqHn_u.js";import"./PdfViewer-Dw0C_Psm.js";import"./index-BnCCNHc8.js";import"./BasePdfViewer-Bh9LURYI.js";import"./BasePdfViewer.module.css-BVs6LeuZ.js";import"./PdfViewerAnnotationLayer-DIvCqVj6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDc0dcov.js";import"./PdfViewerOutlineSidebar-DEJnnwAt.js";import"./PdfViewerSidebarHeader-737Pscm0.js";import"./useBaseUiId-sdgRlT1f.js";import"./useControlled-FL95Cn3G.js";import"./CompositeRoot-BotftMZY.js";import"./CompositeItem-iZ_HyQEG.js";import"./ToolbarRootContext-B-rHXnnf.js";import"./composite-DKQtJrfK.js";import"./svgIconContainer-IfNYosH4.js";import"./PdfViewerSearchBar-BypC8FnO.js";import"./chevron-up-YMHc84Sj.js";import"./chevron-down-CY0HcTjS.js";import"./cross-Cyv96KiS.js";import"./PdfViewerSidebar-B0Ui7JWG.js";import"./index-BLIQsvSb.js";import"./index-C9OqCYVT.js";import"./index-BjzTUR_u.js";import"./PdfViewerToolbar-CsHST3XF.js";import"./Button-ICT0IjE_.js";import"./chevron-right-DNxWFdYS.js";import"./Input-DATuNACb.js";import"./search-LkIpH0hE.js";import"./spin-r8Vk5o_Q.js";import"./error-D7Pe4Z66.js";import"./withOsdkMetrics-HMzwH_1Q.js";import"./makeExternalStore-DU28tiTB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
