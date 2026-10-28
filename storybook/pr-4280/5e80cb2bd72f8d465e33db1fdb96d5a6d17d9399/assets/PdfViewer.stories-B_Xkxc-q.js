import{j as r,M as s}from"./iframe-D9bc5sGs.js";import{P as p}from"./pdf-viewer-DSPDdWUY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-VmtPo0Xc.js";import"./preload-helper-vGOnJPAI.js";import"./PdfViewer-B1nfjYic.js";import"./index-CEam5gFO.js";import"./BasePdfViewer-DN6s7_zd.js";import"./BasePdfViewer.module.css-DCrSzHZj.js";import"./PdfViewerAnnotationLayer-fA7Wa8PL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BFW7xrtM.js";import"./PdfViewerOutlineSidebar-D-Kiq2nC.js";import"./PdfViewerSidebarHeader-BHk6OCTr.js";import"./useBaseUiId-DLMQDqLu.js";import"./useControlled-DNEcMFJZ.js";import"./CompositeRoot-DUgonIjt.js";import"./CompositeItem-DUTzLbNz.js";import"./ToolbarRootContext-Be9Mfuy4.js";import"./composite-BeRvyJhW.js";import"./svgIconContainer-Dhw0ma3V.js";import"./PdfViewerSearchBar-BUdaQzzZ.js";import"./chevron-up-BazAfeWZ.js";import"./chevron-down-Cyz2_1Cu.js";import"./cross-BPOrfQFo.js";import"./PdfViewerSidebar-CvXRFPfx.js";import"./index-DCNHXyz8.js";import"./index-ClW3grIR.js";import"./index-BdCRvfl5.js";import"./PdfViewerToolbar-CYfPGNva.js";import"./Button-FP5Viz1l.js";import"./chevron-right-BpGlGgxv.js";import"./Input-D8Pr2sKK.js";import"./search-Bf3j8VuO.js";import"./spin-CWHjFGqK.js";import"./error-Df3SJLzh.js";import"./withOsdkMetrics-B-tcpkdE.js";import"./makeExternalStore-DCoCUTl5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
