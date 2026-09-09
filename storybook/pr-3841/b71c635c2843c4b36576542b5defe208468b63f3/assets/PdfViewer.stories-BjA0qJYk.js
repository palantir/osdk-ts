import{j as r,M as s}from"./iframe-B-YGlnkZ.js";import{P as p}from"./pdf-viewer-CXDgBxhl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ds3_oM7Y.js";import"./preload-helper-CtVpadX7.js";import"./PdfViewer-BOMzHu1i.js";import"./index-BwbxpG9V.js";import"./BasePdfViewer-CbDoWAm8.js";import"./BasePdfViewer.module.css-kE0eGwY4.js";import"./PdfViewerAnnotationLayer-eGqAmZ7B.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Df2hyTLU.js";import"./PdfViewerOutlineSidebar-binXN1Q0.js";import"./PdfViewerSidebarHeader-Cy1uJIm-.js";import"./useBaseUiId-H-3YJ5Rw.js";import"./useControlled-DdFFxVnf.js";import"./CompositeRoot-a-MzYvnw.js";import"./CompositeItem-BE3XYcA2.js";import"./ToolbarRootContext-CnbQ5y9z.js";import"./composite-Dqyj-RK-.js";import"./svgIconContainer-ur9r5SLx.js";import"./PdfViewerSearchBar-DZrNEAuk.js";import"./chevron-up-C9R30Plo.js";import"./chevron-down-G62k-E5h.js";import"./cross-Cxuf4ocZ.js";import"./PdfViewerSidebar-Cti5FAeT.js";import"./index-CQIVASoN.js";import"./index-B6aw-_Dz.js";import"./index-BOs-qFJy.js";import"./PdfViewerToolbar-CCkf_Vqx.js";import"./Button-BxSaRA57.js";import"./chevron-right-Cg8PpQrY.js";import"./Input-DaqHwlu0.js";import"./search-DXsdMEbr.js";import"./spin-3_Q0RMaU.js";import"./error-CFJFAjZO.js";import"./withOsdkMetrics-Bw9hmnsv.js";import"./makeExternalStore-DLMtLoe9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
