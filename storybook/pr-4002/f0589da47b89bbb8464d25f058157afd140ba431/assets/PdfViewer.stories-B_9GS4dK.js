import{j as r,M as s}from"./iframe-CM-gF3vE.js";import{P as p}from"./pdf-viewer-Co19Oi03.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CarOCYQ8.js";import"./preload-helper-6RfIl02U.js";import"./PdfViewer-BsmN7sFp.js";import"./index-DP8egC0k.js";import"./BasePdfViewer-CTVMjoHm.js";import"./BasePdfViewer.module.css-CO1O9Bq3.js";import"./PdfViewerAnnotationLayer-D4IX1_Wj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dxx37jGf.js";import"./PdfViewerOutlineSidebar-Bf9bmEYA.js";import"./PdfViewerSidebarHeader-Dx3kTIZU.js";import"./useBaseUiId-CaS2-N7q.js";import"./useControlled-BG8DwFhU.js";import"./CompositeRoot-Dsr36EnY.js";import"./CompositeItem-D8NXSqvh.js";import"./ToolbarRootContext-CtUDA1Sa.js";import"./composite-Cf4jE4TY.js";import"./svgIconContainer-PHQsggTT.js";import"./PdfViewerSearchBar-Bhk-tak0.js";import"./chevron-up-DEDIQR-O.js";import"./chevron-down-w3gTlyQy.js";import"./cross-YK-JeFcC.js";import"./PdfViewerSidebar-CtAIVNT7.js";import"./index-C3eh3scJ.js";import"./index-BEBDzy14.js";import"./index-C3IUZqO9.js";import"./PdfViewerToolbar-D9ChJWrN.js";import"./Button-BzK-RFmN.js";import"./chevron-right-MtlzwAYf.js";import"./Input-DqavlJne.js";import"./search-BtBkQ6yC.js";import"./spin-BUuwwSUA.js";import"./error-2hF2x4c1.js";import"./withOsdkMetrics-CARAYaYa.js";import"./makeExternalStore-BT0R62z7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
