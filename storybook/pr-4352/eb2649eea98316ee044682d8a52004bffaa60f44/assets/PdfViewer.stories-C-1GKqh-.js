import{j as r,M as s}from"./iframe-cQ3f48MB.js";import{P as p}from"./pdf-viewer-DviB2BXK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_DI2zZt.js";import"./preload-helper-D6QOSXh4.js";import"./PdfViewer-BsrLzEnE.js";import"./index-D1RuRedd.js";import"./BasePdfViewer-Dv9zCSHH.js";import"./BasePdfViewer.module.css-D6SfGJ1e.js";import"./PdfViewerAnnotationLayer-Bte8rH3K.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CgfTSmxx.js";import"./PdfViewerOutlineSidebar-DFkCcbQx.js";import"./PdfViewerSidebarHeader-G1GvEQbZ.js";import"./useBaseUiId-CMNXwzlb.js";import"./useControlled-ByZlI-u7.js";import"./CompositeRoot-BxXBRLdZ.js";import"./CompositeItem-684cCOtj.js";import"./ToolbarRootContext-DNEaNwHU.js";import"./composite-B6VOm6ZQ.js";import"./svgIconContainer-CgizML4Q.js";import"./PdfViewerSearchBar-Ds4Ih9kW.js";import"./chevron-up-Datrgx7x.js";import"./chevron-down-CIrisS0y.js";import"./cross-DauAavmu.js";import"./PdfViewerSidebar-C27WHKql.js";import"./index-C-MPwgvx.js";import"./index-MlmEIZWp.js";import"./index-C8RTiPbx.js";import"./PdfViewerToolbar-DsZRLBti.js";import"./Button-DZgLeZFj.js";import"./chevron-right-wYVqDtjE.js";import"./Input-BuFeTP1U.js";import"./search-iHipGmJb.js";import"./spin-B7WNIKMp.js";import"./error-CsayxGJU.js";import"./withOsdkMetrics-D1uLGy1n.js";import"./makeExternalStore-DtAasX45.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
