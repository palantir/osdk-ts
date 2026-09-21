import{j as r,M as s}from"./iframe-BdwSD-4g.js";import{P as p}from"./pdf-viewer-WF3Xo58C.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DPrdXBtr.js";import"./preload-helper-Q7k08PSu.js";import"./PdfViewer-DfMkMGas.js";import"./index-DOSkW-9K.js";import"./BasePdfViewer-Da7XqRLM.js";import"./BasePdfViewer.module.css-BzPaHgkr.js";import"./PdfViewerAnnotationLayer-C9mD909X.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cu8LPtD1.js";import"./PdfViewerOutlineSidebar-D_aA4byI.js";import"./PdfViewerSidebarHeader-CMEekYzR.js";import"./useBaseUiId-Dw0luXrm.js";import"./useControlled-D1Q7B9_S.js";import"./CompositeRoot-0JAd7nqK.js";import"./CompositeItem-_wAlG9yG.js";import"./ToolbarRootContext-BvaeGVZU.js";import"./composite-5NyIARcH.js";import"./svgIconContainer-DA4wNVnR.js";import"./PdfViewerSearchBar-Md_NRbfh.js";import"./chevron-up-BfLynbIl.js";import"./chevron-down-Dn6L64Ru.js";import"./cross-ALmhnM-F.js";import"./PdfViewerSidebar-kiQ5y3BN.js";import"./index-gxw3sShd.js";import"./index-Af48Q6og.js";import"./index-FAuKkFnB.js";import"./PdfViewerToolbar-BOuywJKc.js";import"./Button-DT6t-JAZ.js";import"./chevron-right-CnwUtuAZ.js";import"./Input-DFvD33w1.js";import"./search-zOT-eX5y.js";import"./spin-UXdHPJfp.js";import"./error-BrVGJ7z5.js";import"./withOsdkMetrics-De7Bt3A9.js";import"./makeExternalStore-BaL0IM38.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
