import{j as r,M as s}from"./iframe-BdKsMQww.js";import{P as p}from"./pdf-viewer-k1SZMYfJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-fja4XTrV.js";import"./preload-helper-MlpURx7u.js";import"./PdfViewer-sLd-o96m.js";import"./index-DKUuG3z9.js";import"./BasePdfViewer-CgHWfMhC.js";import"./BasePdfViewer.module.css-BNh0V2rp.js";import"./PdfViewerAnnotationLayer-BqQW85bM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DmGYhTs1.js";import"./PdfViewerOutlineSidebar-DaFZ3Q1H.js";import"./PdfViewerSidebarHeader-B4ROIYlV.js";import"./useBaseUiId-DO0eFKXX.js";import"./useControlled-7KbTYIa_.js";import"./CompositeRoot-CwHpMXLT.js";import"./CompositeItem-e2FL5qAU.js";import"./ToolbarRootContext-CdO1SR-V.js";import"./composite-BNox4Mzc.js";import"./svgIconContainer-BnCWnnko.js";import"./PdfViewerSearchBar-BKlDaK1H.js";import"./chevron-up-Ce4FETTr.js";import"./chevron-down-Bw8Fchsf.js";import"./cross-DNiGESUx.js";import"./PdfViewerSidebar-3Femg3xe.js";import"./index-BbdEClvW.js";import"./index-EXOzxBPi.js";import"./index-DYRORlje.js";import"./PdfViewerToolbar-D-nJeTcn.js";import"./Button-CcSyVXzr.js";import"./chevron-right-CCvR0w-N.js";import"./Input-D7CFUCMW.js";import"./search-PSF1rGs2.js";import"./spin-DSVRqJ2Y.js";import"./error-Nv9n4Hjz.js";import"./withOsdkMetrics-C12liwOp.js";import"./makeExternalStore-BoNEUCBG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
