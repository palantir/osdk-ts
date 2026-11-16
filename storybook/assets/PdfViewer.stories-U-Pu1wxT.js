import{j as r,M as s}from"./iframe-DGSVH7ih.js";import{P as p}from"./pdf-viewer-CEi2uGf2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C533ect3.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-DQx_sf9F.js";import"./index-CWCW2TNI.js";import"./BasePdfViewer-BZqCodeb.js";import"./BasePdfViewer.module.css-C6wipFXl.js";import"./PdfViewerAnnotationLayer-CG2z-Ktd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CaIoF7x7.js";import"./PdfViewerOutlineSidebar-BMGJpAel.js";import"./PdfViewerSidebarHeader-BTJueUIA.js";import"./useBaseUiId-CUzGGztv.js";import"./useControlled-DIh7B-EX.js";import"./CompositeRoot-BVUngj2s.js";import"./CompositeItem-ChK2cRHi.js";import"./ToolbarRootContext-Dx_n0qqS.js";import"./composite-CZStrJl6.js";import"./svgIconContainer-Cr42efgU.js";import"./PdfViewerSearchBar-DY7NG6TS.js";import"./chevron-up-LlyaGlFb.js";import"./chevron-down-Wv7CQLfg.js";import"./cross-CvX0N4CS.js";import"./PdfViewerSidebar-DzbpRx4K.js";import"./index-JXPpIgsw.js";import"./index-DcV7YM_0.js";import"./index-BQRwVVvU.js";import"./PdfViewerToolbar-DQ_A4nnA.js";import"./Button-hUhDz_nK.js";import"./chevron-right-BBJ_RnR3.js";import"./Input-BMGPA6kQ.js";import"./search-Ms57RDK0.js";import"./spin-D3K6Kcul.js";import"./error-B-lFLFVh.js";import"./withOsdkMetrics-69zOARzS.js";import"./makeExternalStore-DBH296jI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
