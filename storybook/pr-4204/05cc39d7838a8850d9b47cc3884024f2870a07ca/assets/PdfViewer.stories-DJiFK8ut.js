import{j as r,M as s}from"./iframe-7DO_hgMQ.js";import{P as p}from"./pdf-viewer-C1BDydHW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CoJsVzG8.js";import"./preload-helper-B5hnoC7R.js";import"./PdfViewer-BrrV9SCV.js";import"./index-C29pOm1T.js";import"./BasePdfViewer-D8KHhJDe.js";import"./BasePdfViewer.module.css-7xaCyGa5.js";import"./PdfViewerAnnotationLayer-CkRL23qN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DhB2sXmc.js";import"./PdfViewerOutlineSidebar-DZdYkIfh.js";import"./PdfViewerSidebarHeader-CUYUGwCr.js";import"./useBaseUiId-Oq1MgnVD.js";import"./useControlled-C5lH_kP3.js";import"./CompositeRoot-C_Fyw_jj.js";import"./CompositeItem-CRzuvZSB.js";import"./ToolbarRootContext-D-ECRYtl.js";import"./composite-BIyzFJw4.js";import"./svgIconContainer-DzpdNPkA.js";import"./PdfViewerSearchBar-CfzIzmFt.js";import"./chevron-up-C8FDwmBW.js";import"./chevron-down-Cv_rBr5Q.js";import"./cross-D_9OLgop.js";import"./PdfViewerSidebar-DYeGgn92.js";import"./index-DAoZpWAc.js";import"./index-CpBs9sRH.js";import"./index-kxscKf13.js";import"./PdfViewerToolbar-BVOx-ffG.js";import"./Button-CG_O6ptK.js";import"./chevron-right-Dw4MDsc9.js";import"./Input-BSSTxlm0.js";import"./search-BiYpAlM6.js";import"./spin-DtxbzTU8.js";import"./error-CYThlbbP.js";import"./withOsdkMetrics-BBFkx9l4.js";import"./makeExternalStore-C0_o8WAL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
