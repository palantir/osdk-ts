import{j as r,M as s}from"./iframe-Cjq1ziW_.js";import{P as p}from"./pdf-viewer-DTHV3Hy0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C0UB_1_d.js";import"./preload-helper-Bu64T0VB.js";import"./PdfViewer-DOeNIQyA.js";import"./index-DYLMtBRZ.js";import"./BasePdfViewer-ZpakPA18.js";import"./BasePdfViewer.module.css-BwKYvU4I.js";import"./PdfViewerAnnotationLayer-DHf2VcPa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-By3pRMru.js";import"./PdfViewerOutlineSidebar-g7bk8u0a.js";import"./PdfViewerSidebarHeader-B2eDzvM8.js";import"./useBaseUiId-BOmEy4R4.js";import"./useControlled-B86_FVha.js";import"./CompositeRoot-j31OUz-s.js";import"./CompositeItem-BkoI9BcF.js";import"./ToolbarRootContext-D9vPb_4g.js";import"./composite-DKerRgJC.js";import"./svgIconContainer-eE0nci6v.js";import"./PdfViewerSearchBar-DOF25Tzr.js";import"./chevron-up-ClXPyH22.js";import"./chevron-down-BLZAfqaw.js";import"./cross-5C9tDAb9.js";import"./PdfViewerSidebar-DdO9F7TT.js";import"./index-BlBIR37s.js";import"./index-jdj57Z6r.js";import"./index-BNrT0csI.js";import"./PdfViewerToolbar-DJPvvz2O.js";import"./Button-Sk9sqn-x.js";import"./chevron-right-BUUA-ko1.js";import"./Input-CltcJXck.js";import"./search-CW8m2x0D.js";import"./spin-D_DzStj7.js";import"./error-BTbs61-N.js";import"./withOsdkMetrics-DX_450NL.js";import"./makeExternalStore-MDXzkZI-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
