import{j as r,M as s}from"./iframe-C0Xv1P5p.js";import{P as p}from"./pdf-viewer-BMJqmgVj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-_aa28UL2.js";import"./preload-helper-DK2j5cbT.js";import"./PdfViewer-jfQikYnm.js";import"./index-D6d1RC22.js";import"./BasePdfViewer-Coxhq204.js";import"./BasePdfViewer.module.css-Bte5hLR1.js";import"./PdfViewerAnnotationLayer-sA8LOohv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DU5Te_C-.js";import"./PdfViewerOutlineSidebar-DJ0XTocy.js";import"./PdfViewerSidebarHeader-C0XJM3rF.js";import"./useBaseUiId-DyrVnx3i.js";import"./useControlled-qTk4_Vdn.js";import"./CompositeRoot-EODRIzqt.js";import"./CompositeItem-BRH5qaMr.js";import"./ToolbarRootContext-B2RHT2LC.js";import"./composite-DpnK5-9R.js";import"./svgIconContainer-D6QpYyks.js";import"./PdfViewerSearchBar-ZbRWTZyO.js";import"./chevron-up-mcFyzEg9.js";import"./chevron-down-Buq4H8ml.js";import"./cross-C73iH-uw.js";import"./PdfViewerSidebar-BpsYnTgQ.js";import"./index-DuGDHKhx.js";import"./index-CDpNmz1t.js";import"./index-D0yTA5vb.js";import"./PdfViewerToolbar-C98EIQBg.js";import"./Button-CQxPIDLb.js";import"./chevron-right-DhbWrZrT.js";import"./Input-C9L75zsf.js";import"./search-BS7q0In0.js";import"./spin-Bd_r2hCN.js";import"./error-DoPz0IgF.js";import"./withOsdkMetrics-BlIQDFpZ.js";import"./makeExternalStore-qN6iSkao.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
