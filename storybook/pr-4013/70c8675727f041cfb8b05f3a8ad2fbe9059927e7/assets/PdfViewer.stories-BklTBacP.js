import{j as r,M as s}from"./iframe-CZqFYSvz.js";import{P as p}from"./pdf-viewer-Cg-5_58v.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cd0_Okvg.js";import"./preload-helper-W-9dgf5b.js";import"./PdfViewer-BMPBeTyQ.js";import"./index-4I_FO6X-.js";import"./BasePdfViewer-Di-rh3k-.js";import"./BasePdfViewer.module.css-gG38YbEW.js";import"./PdfViewerAnnotationLayer-Cb1891p4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dg4qrYd-.js";import"./PdfViewerOutlineSidebar-r7rZ_HMm.js";import"./PdfViewerSidebarHeader-DAwv1TX5.js";import"./useBaseUiId-D1DgvgDy.js";import"./useControlled-BEhUjoKU.js";import"./CompositeRoot-DDGOL2lB.js";import"./CompositeItem-BX8AU06n.js";import"./ToolbarRootContext-FrGRfv5z.js";import"./composite-DshpnDaY.js";import"./svgIconContainer-B4GgTWLP.js";import"./PdfViewerSearchBar-CO0Akf3s.js";import"./chevron-up-tL_9_Z7X.js";import"./chevron-down-DW5k5Yie.js";import"./cross-DwkOXENp.js";import"./PdfViewerSidebar-vKiDfz4K.js";import"./index-CkQb-QUw.js";import"./index-CwvgB0UQ.js";import"./index-TcvRDgBd.js";import"./PdfViewerToolbar-Cl9TVcOr.js";import"./Button-DPWKZHun.js";import"./chevron-right-YMnV4-tb.js";import"./Input-DFczC5qB.js";import"./search-DQIrKTJC.js";import"./spin-Dyx7TNGP.js";import"./error-B_2Afo6g.js";import"./withOsdkMetrics-BHAZhm5k.js";import"./makeExternalStore-BLCxm6Ol.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
