import{j as r,M as s}from"./iframe-BOWU70X1.js";import{P as p}from"./pdf-viewer-BNu8mvC2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_c88G_u.js";import"./preload-helper-DsrGzdLY.js";import"./PdfViewer-CTh0m1bC.js";import"./index-Dqy6Gfe7.js";import"./BasePdfViewer-D2d8PUix.js";import"./BasePdfViewer.module.css-CiVImMa5.js";import"./PdfViewerAnnotationLayer-B1KaghwA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BSdBLseA.js";import"./PdfViewerOutlineSidebar-DT86qBh2.js";import"./PdfViewerSidebarHeader-BZxJO5IB.js";import"./useBaseUiId-8tGgV_0l.js";import"./useControlled-BdeVhzxt.js";import"./CompositeRoot-CnRbnYqx.js";import"./CompositeItem-CIAYfkGT.js";import"./ToolbarRootContext-CaVCFQJS.js";import"./composite-CSfG6ZaY.js";import"./svgIconContainer-B9QIza-c.js";import"./PdfViewerSearchBar-BMbKcAl7.js";import"./chevron-up-QziipCuR.js";import"./chevron-down-B1Z7ByUI.js";import"./cross-CVkoRI6N.js";import"./PdfViewerSidebar-Clrgwh8s.js";import"./index-utUHJIrZ.js";import"./index-BfjmLFxg.js";import"./index-DAEdDj8Q.js";import"./PdfViewerToolbar-DFXfPrs7.js";import"./Button-BvbX1UI9.js";import"./chevron-right-DsfhFCzC.js";import"./Input-Ba0NW75w.js";import"./search-Bm_8-FpL.js";import"./spin-eCHjnsrg.js";import"./error-BjTP1vhZ.js";import"./withOsdkMetrics-Bjyc-H5X.js";import"./makeExternalStore-BS5Bz3Hp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
