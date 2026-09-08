import{j as r,M as s}from"./iframe-CtO4Vlsv.js";import{P as p}from"./pdf-viewer-CYvltgR9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-De-kcKiH.js";import"./preload-helper-YqejZBGo.js";import"./PdfViewer-6ueazPx2.js";import"./index-D6VuR_bO.js";import"./BasePdfViewer-DOhucrGG.js";import"./BasePdfViewer.module.css-tquRgccy.js";import"./PdfViewerAnnotationLayer-BNVlX_lR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CDkPq0Oi.js";import"./PdfViewerOutlineSidebar-BDfpvffL.js";import"./PdfViewerSidebarHeader-4j_5bszU.js";import"./useBaseUiId-B7sMgTKT.js";import"./useControlled-Dnk1LplJ.js";import"./CompositeRoot-4xffGSd3.js";import"./CompositeItem-CyExzK58.js";import"./ToolbarRootContext-BV8nTPdY.js";import"./composite-1A59BLWV.js";import"./svgIconContainer-dYvBsUdw.js";import"./PdfViewerSearchBar-CcYHkOJ0.js";import"./chevron-up-C8zXz5bF.js";import"./chevron-down-BoBfGWo-.js";import"./cross-DIyr606b.js";import"./PdfViewerSidebar-DfRpBoin.js";import"./index-SvYPogYk.js";import"./index-BcgXYDjH.js";import"./index-Ct5AqRLg.js";import"./PdfViewerToolbar-BhEJpdBd.js";import"./Button-n85r1nQ7.js";import"./chevron-right-BOmST6M-.js";import"./Input-D94oZ1yC.js";import"./search-BP5Cq0-y.js";import"./spin-Cg4NOx30.js";import"./error-xCVe8qee.js";import"./withOsdkMetrics-DviXph28.js";import"./makeExternalStore-C1nOJgZ5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
