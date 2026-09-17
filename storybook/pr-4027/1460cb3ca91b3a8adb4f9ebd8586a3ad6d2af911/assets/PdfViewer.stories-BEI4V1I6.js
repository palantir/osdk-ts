import{j as r,M as s}from"./iframe-CFQ9G3uO.js";import{P as p}from"./pdf-viewer-C8sKmzL0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DWN2pzVJ.js";import"./preload-helper-B1ZvWZ1B.js";import"./PdfViewer-Cm0vkbho.js";import"./index-BrTT1QYM.js";import"./BasePdfViewer-H51aVgYY.js";import"./BasePdfViewer.module.css-BPFhbh1I.js";import"./PdfViewerAnnotationLayer-LbHkXTNv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DWoAOXIk.js";import"./PdfViewerOutlineSidebar-Dh28LJFW.js";import"./PdfViewerSidebarHeader-DKHCZGo2.js";import"./useBaseUiId-DR9MpHDU.js";import"./useControlled-CZXT8yrt.js";import"./CompositeRoot-DYLe3Mef.js";import"./CompositeItem-Dm-ge3S4.js";import"./ToolbarRootContext-DzjMBLGA.js";import"./composite-CcP6OIrf.js";import"./svgIconContainer-UNIpHB70.js";import"./PdfViewerSearchBar-BpUxB3qk.js";import"./chevron-up-BNt754fO.js";import"./chevron-down-Cu6k6Z5N.js";import"./cross-Th924Xj2.js";import"./PdfViewerSidebar-wSlrbA_k.js";import"./index-Clq14PWf.js";import"./index-ByJ4X6uH.js";import"./index-B2hmf6ar.js";import"./PdfViewerToolbar-Lu1ORSEZ.js";import"./Button-CE7esyC3.js";import"./chevron-right-CGjFsLLa.js";import"./Input-DXZODgk0.js";import"./search-2qv0O4T5.js";import"./spin-BFG0Rvcl.js";import"./error-CP69BMiN.js";import"./withOsdkMetrics-BOULM9w0.js";import"./makeExternalStore-Dcan_kEv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
