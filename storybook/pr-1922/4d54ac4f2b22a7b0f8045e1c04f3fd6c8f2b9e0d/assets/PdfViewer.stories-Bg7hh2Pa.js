import{j as r,M as s}from"./iframe-ByxoF4UB.js";import{P as p}from"./pdf-viewer-B-qWHGVQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DFIt4QIc.js";import"./preload-helper-CXMZSjtp.js";import"./PdfViewer-Fr12Ucxf.js";import"./index-87CISW6C.js";import"./BasePdfViewer-Cgz9kuXg.js";import"./BasePdfViewer.module.css-BUKFsdXb.js";import"./PdfViewerAnnotationLayer-CfQFIR20.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-bFBGN6Ih.js";import"./PdfViewerOutlineSidebar-DJREs6A_.js";import"./PdfViewerSidebarHeader-C8D9swq2.js";import"./useBaseUiId-uat7AM1o.js";import"./useControlled-Dzpgg9G4.js";import"./CompositeRoot-DZPHHEso.js";import"./CompositeItem-CwRzyQgC.js";import"./ToolbarRootContext-Dnh-d6oH.js";import"./composite-wjt4XLHj.js";import"./svgIconContainer-C7yUgkWe.js";import"./PdfViewerSearchBar-BoovtCF4.js";import"./chevron-up-BtyWGkC2.js";import"./chevron-down-j_R9vXIX.js";import"./cross-wBV-Qz69.js";import"./PdfViewerSidebar-L4wsBcMo.js";import"./index-CQ29xKcD.js";import"./index-BjYlodOL.js";import"./index-DbpuMeeP.js";import"./PdfViewerToolbar-lenlKn6B.js";import"./Button-GV0a0tCT.js";import"./chevron-right-BCq18kzH.js";import"./Input-DgqlI36T.js";import"./search-Cs7dO1R3.js";import"./spin-DlxCBkEv.js";import"./error-BsU_wzAp.js";import"./withOsdkMetrics-A7PvRLF9.js";import"./makeExternalStore-CDdf-Cz-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
