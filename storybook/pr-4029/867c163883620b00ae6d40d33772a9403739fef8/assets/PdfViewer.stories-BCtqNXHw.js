import{j as r,M as s}from"./iframe-Elh15CPO.js";import{P as p}from"./pdf-viewer-BKqcHC9j.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-N7xzsLOW.js";import"./preload-helper-Df_Un8ev.js";import"./PdfViewer-CjJM8Pe_.js";import"./index-DTYWX8Gd.js";import"./BasePdfViewer-pXiXXZCC.js";import"./BasePdfViewer.module.css-BQK8RxCV.js";import"./PdfViewerAnnotationLayer-DgY3P1sx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BxOF8HPz.js";import"./PdfViewerOutlineSidebar-NsJ3xrx6.js";import"./PdfViewerSidebarHeader-BqnqBTfY.js";import"./useBaseUiId-DnwRjc07.js";import"./useControlled-enifNsDV.js";import"./CompositeRoot-DLmeUXo9.js";import"./CompositeItem-CzwKTDvK.js";import"./ToolbarRootContext--FtOM0jf.js";import"./composite-BSEtTnKL.js";import"./svgIconContainer-BzS94m4s.js";import"./PdfViewerSearchBar-CE3j0WNt.js";import"./chevron-up-CSkdsCL2.js";import"./chevron-down-vAkfWkS9.js";import"./cross-W2wOrtb4.js";import"./PdfViewerSidebar-BLrL_MCV.js";import"./index-B3O3SB4a.js";import"./index-Doj8EHeU.js";import"./index-DPHcjEKY.js";import"./PdfViewerToolbar-Bb9TJjXC.js";import"./Button-D4CjXtEU.js";import"./chevron-right-CDUX7ybP.js";import"./Input-C_Udp-5V.js";import"./search-O3qV3BZP.js";import"./spin-Bel4k5N4.js";import"./error-B_1KE3-h.js";import"./withOsdkMetrics-SkuWgDWO.js";import"./makeExternalStore-DrH3viZo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
