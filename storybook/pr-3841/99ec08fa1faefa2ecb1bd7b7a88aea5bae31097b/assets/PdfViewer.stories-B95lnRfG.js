import{j as r,M as s}from"./iframe-B9azDZlz.js";import{P as p}from"./pdf-viewer-BwfBBf41.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D1F2fxij.js";import"./preload-helper-Bm0hX83b.js";import"./PdfViewer-CoyT-sKg.js";import"./index-Gnn4IAPK.js";import"./BasePdfViewer-BMsXilh3.js";import"./BasePdfViewer.module.css-CxTp-q3K.js";import"./PdfViewerAnnotationLayer-DH_REnmy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CcfuyUuU.js";import"./PdfViewerOutlineSidebar-ClrPZhwy.js";import"./PdfViewerSidebarHeader-CuHEHYOk.js";import"./useBaseUiId-B5AQ3HFN.js";import"./useControlled-CIIQ6AdN.js";import"./CompositeRoot-1CAO4-C5.js";import"./CompositeItem-23Xg-PrO.js";import"./ToolbarRootContext-H0Ylxwtf.js";import"./composite-DG0rNHFY.js";import"./svgIconContainer-BSqh8zzQ.js";import"./PdfViewerSearchBar-C3rGQ5JX.js";import"./chevron-up-9By6ydbO.js";import"./chevron-down-CDhI7Cg9.js";import"./cross-DH7Phj5l.js";import"./PdfViewerSidebar-DN43qOgw.js";import"./index-BqVQ5c0B.js";import"./index-DG7p6B41.js";import"./index-D0fYYncd.js";import"./PdfViewerToolbar-CbjunRw5.js";import"./Button-ByY1VR_F.js";import"./chevron-right-Dvs1_jJg.js";import"./Input-6Xi2oRl5.js";import"./search-D-Pd3u3n.js";import"./spin-TjeNtVAk.js";import"./error-B89KPxvz.js";import"./withOsdkMetrics-BCygmhUI.js";import"./makeExternalStore-Sb074CVY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
