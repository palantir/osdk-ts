import{j as r,M as s}from"./iframe-DOoViGQC.js";import{P as p}from"./pdf-viewer-D8idl7jH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BlznUzGx.js";import"./preload-helper-D6M-lWMp.js";import"./PdfViewer-Vbb3DfAt.js";import"./index-x4gpFwBp.js";import"./BasePdfViewer-CZp5hKke.js";import"./BasePdfViewer.module.css-C-ccsbx7.js";import"./PdfViewerAnnotationLayer-B5I2Y18x.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DB77CaFi.js";import"./PdfViewerOutlineSidebar-DsMK42OU.js";import"./PdfViewerSidebarHeader-CtONGoOC.js";import"./useBaseUiId-CEA0ov3F.js";import"./useControlled-DyFvS3eo.js";import"./CompositeRoot-5fWrehja.js";import"./CompositeItem-C-YvkCMY.js";import"./ToolbarRootContext-BICNcApQ.js";import"./composite-DG_OLYDF.js";import"./svgIconContainer-DDehFQ37.js";import"./PdfViewerSearchBar-Ci-H9gkB.js";import"./chevron-up-PxyOElDq.js";import"./chevron-down-BssNm1rB.js";import"./cross-BAqH0G--.js";import"./PdfViewerSidebar-6uYKEAK4.js";import"./index-v0gYgaE5.js";import"./index-uZqGKRzq.js";import"./index-C5WAn5Dx.js";import"./PdfViewerToolbar-Baia-8e-.js";import"./Button-DnpTR9kP.js";import"./chevron-right-BjQGRoCq.js";import"./Input-Bq0XAGaR.js";import"./search-BtSuJQ9M.js";import"./spin-ByMgO8tS.js";import"./error-CMiAPzhy.js";import"./withOsdkMetrics-DkYGNx1N.js";import"./makeExternalStore-_9NPeB4S.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
