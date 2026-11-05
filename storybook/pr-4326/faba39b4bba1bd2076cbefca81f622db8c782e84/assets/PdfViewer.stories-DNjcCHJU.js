import{j as r,M as s}from"./iframe-DRt3Isqi.js";import{P as p}from"./pdf-viewer-DF0-5cM1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cz3DyEs1.js";import"./preload-helper-P_ieVj0_.js";import"./PdfViewer-BjWSJANA.js";import"./index-VZHhRlUf.js";import"./BasePdfViewer-CXiLm6ye.js";import"./BasePdfViewer.module.css-BIydGzgX.js";import"./PdfViewerAnnotationLayer-ByQg_iYH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DB803088.js";import"./PdfViewerOutlineSidebar-CM_wYouA.js";import"./PdfViewerSidebarHeader-Bc2lyVQR.js";import"./useBaseUiId-CztA3AVu.js";import"./useControlled-DZ1rHDeJ.js";import"./CompositeRoot--jW9F6YR.js";import"./CompositeItem-1obZGpSi.js";import"./ToolbarRootContext-ChcKGMcF.js";import"./composite-D3E114vb.js";import"./svgIconContainer-BmwptnE7.js";import"./PdfViewerSearchBar-w8ldQIW8.js";import"./chevron-up-BVh5TrIW.js";import"./chevron-down-BpTeELc3.js";import"./cross-DLSleMt0.js";import"./PdfViewerSidebar-CsmybDB3.js";import"./index-BfZquH4_.js";import"./index-BQPVtwuZ.js";import"./index-CrOP_FhY.js";import"./PdfViewerToolbar-j19L5v0S.js";import"./Button-K9hISpnC.js";import"./chevron-right-BI0uBeyE.js";import"./Input-_E04yI64.js";import"./search-CWVCG-ID.js";import"./spin-CJ9s14dN.js";import"./error-WyHMdGFH.js";import"./withOsdkMetrics-Drl0wAn6.js";import"./makeExternalStore-IMLrRmfN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
