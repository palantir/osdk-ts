import{j as r,M as s}from"./iframe-CRvr4m23.js";import{P as p}from"./pdf-viewer-3cmtGVkD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D9fUgDHW.js";import"./preload-helper-DdCCWYOA.js";import"./PdfViewer-AZDBybJk.js";import"./index-D9ceHjwW.js";import"./BasePdfViewer--qusCFGP.js";import"./BasePdfViewer.module.css-BTO6dmn4.js";import"./PdfViewerAnnotationLayer-Dsn_68vx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CC3-6_XD.js";import"./PdfViewerOutlineSidebar-ByPweq9y.js";import"./PdfViewerSidebarHeader-DXNLUu3v.js";import"./useBaseUiId-B6Sq2DDd.js";import"./useControlled-CzRMF11H.js";import"./CompositeRoot-DQs23Z0I.js";import"./CompositeItem-AIxAUMBi.js";import"./ToolbarRootContext-CSQhZUTB.js";import"./composite-BaJaFCUV.js";import"./svgIconContainer-DGdcF-OS.js";import"./PdfViewerSearchBar-KmA1l5zB.js";import"./chevron-up-BuGMyoYo.js";import"./chevron-down-D0i9lEgO.js";import"./cross-C9z9h8JK.js";import"./PdfViewerSidebar-1XvL8Cmw.js";import"./index-B0l7E8Kk.js";import"./index-C-IWKanX.js";import"./index-DjDCowvu.js";import"./PdfViewerToolbar-9uVHDok_.js";import"./Button-CICDzuCH.js";import"./chevron-right-4a9dCatM.js";import"./Input-Bb951IY0.js";import"./search-S4tClITX.js";import"./spin-CNJg14lT.js";import"./error-ClpIR9By.js";import"./withOsdkMetrics-Dd7zkJUD.js";import"./makeExternalStore-B5l5c53p.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
