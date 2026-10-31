import{j as r,M as s}from"./iframe-B_zDWzul.js";import{P as p}from"./pdf-viewer-DomnETVB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_2_GyDy.js";import"./preload-helper-DG9VDp_n.js";import"./PdfViewer-DNdLLLbm.js";import"./index-Boe0r-ul.js";import"./BasePdfViewer-CMotg6M4.js";import"./BasePdfViewer.module.css-KMUGZSoI.js";import"./PdfViewerAnnotationLayer-DUr5G_1g.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-R6KtlU-p.js";import"./PdfViewerOutlineSidebar-CFw1VvQr.js";import"./PdfViewerSidebarHeader-7JWU-Nk5.js";import"./useBaseUiId-BPYuvIYG.js";import"./useControlled-CZdhzCyg.js";import"./CompositeRoot-C22sK8Tv.js";import"./CompositeItem-DKZBVYKb.js";import"./ToolbarRootContext-CvnVRZq1.js";import"./composite-CRWF04qz.js";import"./svgIconContainer-D8Trdk-G.js";import"./PdfViewerSearchBar-DQvukVMI.js";import"./chevron-up-cD8cJzk6.js";import"./chevron-down-uvQYx996.js";import"./cross-DKHH0lxU.js";import"./PdfViewerSidebar-B2RsdRD6.js";import"./index-qHFFPM8K.js";import"./index-Br-DhCTN.js";import"./index-aWrltaDE.js";import"./PdfViewerToolbar-DFdrTxZ1.js";import"./Button-CwOCHkU2.js";import"./chevron-right-F7nbUq9u.js";import"./Input-K8Dbc9EI.js";import"./search-CXl9LYG4.js";import"./spin-BD4VDBiY.js";import"./error-D8w3bqy-.js";import"./withOsdkMetrics-3_FMme5R.js";import"./makeExternalStore-CxUdCktA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
