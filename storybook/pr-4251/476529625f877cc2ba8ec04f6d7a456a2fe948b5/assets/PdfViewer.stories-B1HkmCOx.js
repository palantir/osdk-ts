import{j as r,M as s}from"./iframe-Cr8Hjkao.js";import{P as p}from"./pdf-viewer-MbifyKSW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-_5Ru4aHA.js";import"./preload-helper-CeOoJBco.js";import"./PdfViewer-CS6aJ_rJ.js";import"./index-DRoLNVdY.js";import"./BasePdfViewer-n4IUilae.js";import"./BasePdfViewer.module.css-B5I3mQi-.js";import"./PdfViewerAnnotationLayer-B8ZYAs8c.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CuR_qyNj.js";import"./PdfViewerOutlineSidebar-y1H96BaH.js";import"./PdfViewerSidebarHeader-4cLiHRtC.js";import"./useBaseUiId-BJlElnor.js";import"./useControlled-qAgRHhDO.js";import"./CompositeRoot-Czmwub35.js";import"./CompositeItem-RD-StT-2.js";import"./ToolbarRootContext-C1DQaCtc.js";import"./composite-EK_Kp5ER.js";import"./svgIconContainer-F-4GL1p-.js";import"./PdfViewerSearchBar-CrDL27M6.js";import"./chevron-up-DMVw7GjQ.js";import"./chevron-down-DyxXbZDq.js";import"./cross-95TP_pkM.js";import"./PdfViewerSidebar-JWF0xGHe.js";import"./index-DMNMq9tJ.js";import"./index-ALPgotdH.js";import"./index-ByH-ncsi.js";import"./PdfViewerToolbar-B-Dh0JOc.js";import"./Button-C24gAlnE.js";import"./chevron-right-BYSyPZ5s.js";import"./Input-DELuQIly.js";import"./search-COCkrCII.js";import"./spin-Sd4-qt7S.js";import"./error-DaMdq9UW.js";import"./withOsdkMetrics-ChwR2mE5.js";import"./makeExternalStore-CCNrGOqq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
