import{j as r,M as s}from"./iframe-BNXnxiJa.js";import{P as p}from"./pdf-viewer-DllMjaGO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-4UIqI6EJ.js";import"./preload-helper-CT8T0PJp.js";import"./PdfViewer-BRUT_L1J.js";import"./index-Ch-h42fp.js";import"./BasePdfViewer-DDaxWI0K.js";import"./BasePdfViewer.module.css-Cz1fhe4b.js";import"./PdfViewerAnnotationLayer-BaP0U3iQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-f3QBOrtz.js";import"./PdfViewerOutlineSidebar-Dm3syNw2.js";import"./PdfViewerSidebarHeader-NFv11Kg2.js";import"./useBaseUiId-BjmHkgmf.js";import"./useControlled-DBRd_jSA.js";import"./CompositeRoot-ZSwej2GF.js";import"./CompositeItem-Ch_wyKgR.js";import"./ToolbarRootContext-B1FX1tpV.js";import"./composite-Cinouu0K.js";import"./svgIconContainer-T3xea5l3.js";import"./PdfViewerSearchBar-C_StPCaR.js";import"./chevron-up-dgHxhiX5.js";import"./chevron-down-CLu6_2JJ.js";import"./cross-DNfPdLmM.js";import"./PdfViewerSidebar-B0F2JOI1.js";import"./index-Be-Y0iQr.js";import"./index-rjvuha_2.js";import"./index-CUNAUHwV.js";import"./PdfViewerToolbar-21SGVHoX.js";import"./Button-CDesYXNY.js";import"./chevron-right-CIN9Ver4.js";import"./Input-BQdVPwVd.js";import"./search-DQwSGm2k.js";import"./spin-BLfqMRrL.js";import"./error-BMUe0AWc.js";import"./withOsdkMetrics-CGp4DYy1.js";import"./makeExternalStore-C77jTvWN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
