import{j as r,M as s}from"./iframe-CrZ39q4W.js";import{P as p}from"./pdf-viewer-D72djyrG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cs3Jvm4Q.js";import"./preload-helper-CBYzcUhb.js";import"./PdfViewer-Cjqnt9I1.js";import"./index-BD7m3jFK.js";import"./BasePdfViewer-7XZO2-Qn.js";import"./BasePdfViewer.module.css-DsTgNJBW.js";import"./PdfViewerAnnotationLayer-8uQu_4nt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CNcj_3UZ.js";import"./PdfViewerOutlineSidebar-B7TVIlOD.js";import"./PdfViewerSidebarHeader-CqUzPkzO.js";import"./useBaseUiId-sTwbXHgE.js";import"./useControlled-BBNkc-4m.js";import"./CompositeRoot-Dwe7qPFT.js";import"./CompositeItem-DwChmrQE.js";import"./ToolbarRootContext-Bd0nHJjt.js";import"./composite-DRGdlpPN.js";import"./svgIconContainer-JiAQFJfX.js";import"./PdfViewerSearchBar-xJ2jwuk5.js";import"./chevron-up-DwgqwUol.js";import"./chevron-down-Do1ARTyC.js";import"./cross-CgqXpQyr.js";import"./PdfViewerSidebar-vj6gQ-Pi.js";import"./index-DyFGpZZr.js";import"./index-C_XnOq4s.js";import"./index--ClJ2plo.js";import"./PdfViewerToolbar-BjxyH9b2.js";import"./Button-C2GAq-XZ.js";import"./chevron-right-BP7Q2358.js";import"./Input-DIQd25cc.js";import"./search-BqRMZJ3s.js";import"./spin-CzmYDhZW.js";import"./error-mXLWjtku.js";import"./withOsdkMetrics-CEEcnA0Y.js";import"./makeExternalStore-Bbx2CBha.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
