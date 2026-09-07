import{j as r,M as s}from"./iframe-E5iWaRrU.js";import{P as p}from"./pdf-viewer-CQgElnZg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-6e-tqFmD.js";import"./preload-helper-Dqk_s4rt.js";import"./PdfViewer-CLie_5wa.js";import"./index-C3_SZq7Z.js";import"./BasePdfViewer-VhRQzlII.js";import"./BasePdfViewer.module.css-BjJvfDQU.js";import"./PdfViewerAnnotationLayer-7CT-GYmV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-k-QpFyLv.js";import"./PdfViewerOutlineSidebar-DLUE82Vy.js";import"./PdfViewerSidebarHeader-CN5ptzf7.js";import"./useBaseUiId-D4npvdT-.js";import"./useControlled-Df4M33J1.js";import"./CompositeRoot-MwrLvCAJ.js";import"./CompositeItem-DMa2K3iN.js";import"./ToolbarRootContext-CBnKcEyp.js";import"./composite-Bz9wP40Z.js";import"./svgIconContainer-DEuUBUqq.js";import"./PdfViewerSearchBar-X712SG5O.js";import"./chevron-up-R6w8nLhJ.js";import"./chevron-down-BkyonfV4.js";import"./cross-JL-akl7t.js";import"./PdfViewerSidebar-XfmGJnFY.js";import"./index-DSBMRtFR.js";import"./index-DceoitFi.js";import"./index-BbXCDRNC.js";import"./PdfViewerToolbar-ZANRxqSQ.js";import"./Button-Cat6_J_5.js";import"./chevron-right-DfLlRT1j.js";import"./Input-C3CP2H26.js";import"./search-ChBTd86p.js";import"./spin-DdJxnvX2.js";import"./error-DXOYczi7.js";import"./withOsdkMetrics-h-AdLa11.js";import"./makeExternalStore-HEA345T9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
