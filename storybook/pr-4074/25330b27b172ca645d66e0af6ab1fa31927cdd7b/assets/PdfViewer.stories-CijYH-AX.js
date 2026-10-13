import{j as r,M as s}from"./iframe-C1tZXogj.js";import{P as p}from"./pdf-viewer-BcgtHcfC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D2bkJ2-R.js";import"./preload-helper-CPtBFz2Y.js";import"./PdfViewer-B85GnhXF.js";import"./index-DxPI7-w_.js";import"./BasePdfViewer-C_mocpFY.js";import"./BasePdfViewer.module.css-t5X9bKIK.js";import"./PdfViewerAnnotationLayer-rLORp8o4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DjEDzUZG.js";import"./PdfViewerOutlineSidebar-C515JHZI.js";import"./PdfViewerSidebarHeader-CQ8eBwrs.js";import"./useBaseUiId-BME5ZjIK.js";import"./useControlled-mPEThvmW.js";import"./CompositeRoot-CsvAnYnK.js";import"./CompositeItem-BBNw29UQ.js";import"./ToolbarRootContext-DgDYgZp9.js";import"./composite-cuBDJi1p.js";import"./svgIconContainer-CIq0Uduk.js";import"./PdfViewerSearchBar-BRrxkDcB.js";import"./chevron-up-Be-NaPtY.js";import"./chevron-down-CRmIr1SJ.js";import"./cross-D5lRpI2u.js";import"./PdfViewerSidebar-x_RJeAIH.js";import"./index-D4pImD7i.js";import"./index-BYD_xDue.js";import"./index-iBT1_a_C.js";import"./PdfViewerToolbar-mjoRljY7.js";import"./Button-IJ98NdC3.js";import"./chevron-right-CIL1I28K.js";import"./Input-BFJGoRS_.js";import"./search-mQyGpkqY.js";import"./spin-CYYXQDUM.js";import"./error-Ccxy7sxh.js";import"./withOsdkMetrics-DODMu06P.js";import"./makeExternalStore-y_SH3e4c.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
