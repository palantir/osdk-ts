import{j as r,M as s}from"./iframe-SIMpA4b3.js";import{P as p}from"./pdf-viewer-CIfYCPxb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BBSVbGMe.js";import"./preload-helper-u9tSabE5.js";import"./PdfViewer-GHXlUFQ3.js";import"./index-CgEuHlu2.js";import"./BasePdfViewer-BjWJRjZ9.js";import"./BasePdfViewer.module.css-B3XxkFeJ.js";import"./PdfViewerAnnotationLayer-sQ8iohIR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CIgqOKRO.js";import"./PdfViewerOutlineSidebar-C3bq30k4.js";import"./PdfViewerSidebarHeader-9DoKIqLL.js";import"./useBaseUiId-Cayh95iR.js";import"./useControlled-aXvE1NEk.js";import"./CompositeRoot-tTmX_7vT.js";import"./CompositeItem-CnRf7Dd6.js";import"./ToolbarRootContext-B55ymUvU.js";import"./composite-BiHSWJxn.js";import"./svgIconContainer-Bv-MZKBZ.js";import"./PdfViewerSearchBar-DAyhIrZ_.js";import"./chevron-up-Ctg_Kwcv.js";import"./chevron-down-D2KA7jZq.js";import"./cross-A4PXp8OO.js";import"./PdfViewerSidebar-B4lY6r1T.js";import"./index-uzBTaDFQ.js";import"./index-DIMo0kF5.js";import"./index-BOG0Gn7K.js";import"./PdfViewerToolbar-C1iAHdkb.js";import"./Button-DePizqiT.js";import"./chevron-right-BF3yEut3.js";import"./Input-DI62ffjf.js";import"./search-94czUh6x.js";import"./spin-DyMxACnn.js";import"./error-CGNw4dMZ.js";import"./withOsdkMetrics-DYZT3YgQ.js";import"./makeExternalStore-DPGOJSPa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
