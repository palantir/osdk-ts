import{j as r,M as s}from"./iframe-DAMQ0kJi.js";import{P as p}from"./pdf-viewer-B-qfBCVV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-LH2ph0Em.js";import"./preload-helper-B_MKI7VB.js";import"./PdfViewer-SCylde9F.js";import"./index-Bp0gXdhg.js";import"./BasePdfViewer-g3wtz7aS.js";import"./BasePdfViewer.module.css-BZWn8-Ts.js";import"./PdfViewerAnnotationLayer-Bojwu6lF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-tutmVsqV.js";import"./PdfViewerOutlineSidebar-S3DtpuFB.js";import"./PdfViewerSidebarHeader-DaIiH3Ke.js";import"./useBaseUiId-CZjCaxZv.js";import"./useControlled-DC6nW2lc.js";import"./CompositeRoot-BRnpOY_R.js";import"./CompositeItem-BDbWSvwq.js";import"./ToolbarRootContext-DNW6tFJb.js";import"./composite-BYBlPAgy.js";import"./svgIconContainer-CVBLUyxF.js";import"./PdfViewerSearchBar-CYP4mjsS.js";import"./chevron-up-BziSE6gz.js";import"./chevron-down-CXmtiTux.js";import"./cross-DxIbIlzH.js";import"./PdfViewerSidebar-Nr34RGwj.js";import"./index-DPV2fpq5.js";import"./index-8-mAEuet.js";import"./index-D8IRtIy_.js";import"./PdfViewerToolbar-0mh0wdp7.js";import"./Button-5SDZ05K4.js";import"./chevron-right-HNKdP6At.js";import"./Input-CyyvCwcw.js";import"./search-AYrmuoce.js";import"./spin-LxCg-G3L.js";import"./error-COQAffC4.js";import"./withOsdkMetrics-D6W1KI3Y.js";import"./makeExternalStore-BpUsTfEq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
