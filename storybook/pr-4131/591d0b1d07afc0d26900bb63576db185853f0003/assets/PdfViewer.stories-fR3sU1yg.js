import{j as r,M as s}from"./iframe-DHfhGWcA.js";import{P as p}from"./pdf-viewer-Bh91TvWU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DzUA2mUM.js";import"./preload-helper-D14EGrrK.js";import"./PdfViewer-Bgr6jdT9.js";import"./index-CCF9MEs2.js";import"./BasePdfViewer-00BS0OKf.js";import"./BasePdfViewer.module.css-BTYgR471.js";import"./PdfViewerAnnotationLayer-BER6K1ZY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DkzjDLRe.js";import"./PdfViewerOutlineSidebar-DgoMYM7T.js";import"./PdfViewerSidebarHeader-D_UXdYm4.js";import"./useBaseUiId-BATl1CQr.js";import"./useControlled-Bxerh3bt.js";import"./CompositeRoot-Pu_atRrg.js";import"./CompositeItem-CLlZ6Yb0.js";import"./ToolbarRootContext-erU_8-54.js";import"./composite-DbTWPUQ9.js";import"./svgIconContainer-BaEBe_Ou.js";import"./PdfViewerSearchBar-C_3eiZaJ.js";import"./chevron-up-sXC435XN.js";import"./chevron-down-DR6eEQC2.js";import"./cross-Dj-fC_ys.js";import"./PdfViewerSidebar-B9T_U6Bx.js";import"./index-DFvQFeWQ.js";import"./index-Blf5so-r.js";import"./index-C5pfUNxc.js";import"./PdfViewerToolbar-BZ9IfPsY.js";import"./Button-Dj3Gc0R8.js";import"./chevron-right-2KHytdoc.js";import"./Input-zMxDvO-I.js";import"./search-DWYoVV2s.js";import"./spin-uCwIUPUF.js";import"./error-CAZmovtj.js";import"./withOsdkMetrics-DU0hnwkS.js";import"./makeExternalStore-C1Pxa9L5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
