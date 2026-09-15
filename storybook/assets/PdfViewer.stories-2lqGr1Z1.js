import{j as r,M as s}from"./iframe-BqmsmROC.js";import{P as p}from"./pdf-viewer-wWiOf3qo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BPFWYnru.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-CyUnoUDh.js";import"./index-DE_4plrx.js";import"./BasePdfViewer-BLAdMaNt.js";import"./BasePdfViewer.module.css-CBTEXeH7.js";import"./PdfViewerAnnotationLayer-DdxhSaRT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_1B_zMl.js";import"./PdfViewerOutlineSidebar-DFUF7niE.js";import"./PdfViewerSidebarHeader-CXtZhPHs.js";import"./useBaseUiId-C8C4OFgB.js";import"./useControlled-DXWlWATE.js";import"./CompositeRoot-B1QanstE.js";import"./CompositeItem-C1DMYRuJ.js";import"./ToolbarRootContext--CuPwDjZ.js";import"./composite-CiV_UR9j.js";import"./svgIconContainer-DwHFgry-.js";import"./PdfViewerSearchBar-DbkK_069.js";import"./chevron-up-CNRhOTMZ.js";import"./chevron-down-s5zpD1xF.js";import"./cross-DfmyAU8B.js";import"./PdfViewerSidebar-C_RLldpz.js";import"./index-B0TE2znt.js";import"./index-DFyqPKTO.js";import"./index-CWE85mCR.js";import"./PdfViewerToolbar-BZAT5yxM.js";import"./Button-zbZf0J9i.js";import"./chevron-right-CxXJMTfN.js";import"./Input-C3AYJYVI.js";import"./search-BBGycv-1.js";import"./spin-iJJipJAo.js";import"./error-DKXNqTp4.js";import"./withOsdkMetrics-DVk1cW14.js";import"./makeExternalStore-jkqHHCtl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
