import{j as r,M as s}from"./iframe-Ds_0fUNG.js";import{P as p}from"./pdf-viewer-b_o6VaZu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CA1Cv-Xm.js";import"./preload-helper-rl_3IysT.js";import"./PdfViewer-BwPTfZMM.js";import"./index-CfHbFnsm.js";import"./BasePdfViewer-B4HcQER_.js";import"./BasePdfViewer.module.css-MFp_r4pU.js";import"./PdfViewerAnnotationLayer-D3PWH1D2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-NFJyhIkG.js";import"./PdfViewerOutlineSidebar-BFLoFiEm.js";import"./PdfViewerSidebarHeader-DYnkMqk0.js";import"./useBaseUiId-BTcKJi-m.js";import"./useControlled-BJ5XCIhk.js";import"./CompositeRoot-BhbhTpin.js";import"./CompositeItem-Cd9-IsCw.js";import"./ToolbarRootContext-WaLBUvtM.js";import"./composite-BQp92XLf.js";import"./svgIconContainer-Bnjtz_zA.js";import"./PdfViewerSearchBar-BR1X2SsJ.js";import"./chevron-up-C-wtdL_e.js";import"./chevron-down-QYpALvW6.js";import"./cross-CPIn0YCt.js";import"./PdfViewerSidebar-B2QkzSVV.js";import"./index-Xp60VzFy.js";import"./index-B3M6RB_Y.js";import"./index-BcshOSPh.js";import"./PdfViewerToolbar-DD3qERN0.js";import"./Button-BIMxSH7M.js";import"./chevron-right-C8qK5siy.js";import"./Input-DML-f9Nt.js";import"./search-D8R0XkDu.js";import"./spin-DzzmO4RX.js";import"./error-BqmstoPM.js";import"./withOsdkMetrics-Bofw38ai.js";import"./makeExternalStore-pijIp4DO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
