import{j as r,M as s}from"./iframe-C3xC__LU.js";import{P as p}from"./pdf-viewer-CfaBqcUZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Zxgmw6Of.js";import"./preload-helper-DxYa6wnu.js";import"./PdfViewer-CIiHhzKd.js";import"./index-Bdy1H0uO.js";import"./BasePdfViewer-NChNN_Zc.js";import"./BasePdfViewer.module.css-CM7cn-B6.js";import"./PdfViewerAnnotationLayer-BSZVEkvV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DgbwrksQ.js";import"./PdfViewerOutlineSidebar-DWSMTaXd.js";import"./PdfViewerSidebarHeader-X8d03ZLv.js";import"./useBaseUiId-DfXUpmNo.js";import"./useControlled-D8jbflQz.js";import"./CompositeRoot-C8YvZ1Sa.js";import"./CompositeItem-BTSmeuTL.js";import"./ToolbarRootContext-Ciubtyo1.js";import"./composite-DEhtrm_a.js";import"./svgIconContainer-Bfm1ZKMl.js";import"./PdfViewerSearchBar-BTQ8MzNq.js";import"./chevron-up-BFz6Lk-e.js";import"./chevron-down-Cpgn36Ir.js";import"./cross-DTsmRRZf.js";import"./PdfViewerSidebar-BvShy4kx.js";import"./index-DEH1lz3e.js";import"./index-BC4cspOB.js";import"./index-5F-Zydov.js";import"./PdfViewerToolbar-B2bf9WvK.js";import"./Button-CIfwAqPR.js";import"./chevron-right-B3ObuuM3.js";import"./Input-CprSxKZD.js";import"./search-C7Klq3lR.js";import"./spin-BGIEu7U9.js";import"./error-CQKPevIq.js";import"./withOsdkMetrics-DD7JD0C1.js";import"./makeExternalStore-DlKuehqN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
