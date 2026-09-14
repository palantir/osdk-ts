import{j as r,M as s}from"./iframe-CSN8hPBK.js";import{P as p}from"./pdf-viewer-Wlor-BFB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C31jglWE.js";import"./preload-helper-CgkWS9T4.js";import"./PdfViewer-g0mBYU4K.js";import"./index-LA6eGdrx.js";import"./BasePdfViewer-DITRFM1Q.js";import"./BasePdfViewer.module.css-BhPqNnrf.js";import"./PdfViewerAnnotationLayer-CtNGVNxl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ca-Pcw72.js";import"./PdfViewerOutlineSidebar-CeIaU7oU.js";import"./PdfViewerSidebarHeader-HJNmcMnu.js";import"./useBaseUiId-CST19_eI.js";import"./useControlled-BD5V0Ccm.js";import"./CompositeRoot-DQECtM5a.js";import"./CompositeItem-BScttQtR.js";import"./ToolbarRootContext-CDg3nyHK.js";import"./composite-DSnE_YQk.js";import"./svgIconContainer-COOyKoHH.js";import"./PdfViewerSearchBar-B4VPskV4.js";import"./chevron-up-CVgCWLNr.js";import"./chevron-down-BhdvQ1g6.js";import"./cross-CLh64p0F.js";import"./PdfViewerSidebar-CLceXMHV.js";import"./index-BuNpqgsl.js";import"./index-P9xxddcK.js";import"./index-DeMBNUsz.js";import"./PdfViewerToolbar-In2FFv6X.js";import"./Button-CTdUnl-9.js";import"./chevron-right-8VGLMTx1.js";import"./Input-BG0-cI5h.js";import"./search-By7vWzyC.js";import"./spin-n2ejB_K6.js";import"./error-BtGej3op.js";import"./withOsdkMetrics-jlPvbe-f.js";import"./makeExternalStore-DS_EZCHg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
