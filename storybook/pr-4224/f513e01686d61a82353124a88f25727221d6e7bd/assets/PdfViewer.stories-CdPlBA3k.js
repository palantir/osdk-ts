import{j as r,M as s}from"./iframe-niEbczVm.js";import{P as p}from"./pdf-viewer-3z3gTzZP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Be9pXFsE.js";import"./preload-helper-CUjUb6yR.js";import"./PdfViewer-BGjwboGf.js";import"./index-BEFpPyEu.js";import"./BasePdfViewer-CkxjZ4O_.js";import"./BasePdfViewer.module.css-a0Tje13_.js";import"./PdfViewerAnnotationLayer-Bq_C8nEf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B44gsYSi.js";import"./PdfViewerOutlineSidebar-4bDDmYRu.js";import"./PdfViewerSidebarHeader-DpQ0g8Qd.js";import"./useBaseUiId-CH7YIJgS.js";import"./useControlled-CUyHc-Js.js";import"./CompositeRoot-BoOEKYl_.js";import"./CompositeItem-CsOBUX0g.js";import"./ToolbarRootContext-BRylS6Aj.js";import"./composite-DGaJRBaQ.js";import"./svgIconContainer-9VsGkNZz.js";import"./PdfViewerSearchBar-Cm0QvdNV.js";import"./chevron-up-C56QwOCl.js";import"./chevron-down-BBE32uOg.js";import"./cross-Bcr8pGuL.js";import"./PdfViewerSidebar-Xk1drBO8.js";import"./index-C_O3jDKw.js";import"./index-BbiwM5Qu.js";import"./index-elRiCFtu.js";import"./PdfViewerToolbar-CVon_phC.js";import"./Button-CFI_-pRJ.js";import"./chevron-right-BvVNNQuT.js";import"./Input-B4FHDv-3.js";import"./search-ChyEY49Q.js";import"./spin-DuLiSYYP.js";import"./error-mxcJOglh.js";import"./withOsdkMetrics-DWUucJCc.js";import"./makeExternalStore-CCkssviL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
