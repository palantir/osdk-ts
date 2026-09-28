import{j as r,M as s}from"./iframe-BoQuj6Ft.js";import{P as p}from"./pdf-viewer-BUg7O4It.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-oxuVEgJN.js";import"./preload-helper-DFHoCRfY.js";import"./PdfViewer-DR0M-wxt.js";import"./index-B3vkyGje.js";import"./BasePdfViewer-CBJmEQDM.js";import"./BasePdfViewer.module.css-CI4Jqd75.js";import"./PdfViewerAnnotationLayer-DiC4D6Bx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DWLmS2p1.js";import"./PdfViewerOutlineSidebar-Cgu--GUU.js";import"./PdfViewerSidebarHeader-DJI24stA.js";import"./useBaseUiId-DKKiKBjO.js";import"./useControlled-DfpvXrbD.js";import"./CompositeRoot-DjmA6m7I.js";import"./CompositeItem-DPojjMsZ.js";import"./ToolbarRootContext-Civm9m7-.js";import"./composite-CvoBvof0.js";import"./svgIconContainer-D1Y91RJ2.js";import"./PdfViewerSearchBar-CpckwXip.js";import"./chevron-up-KRx7WT9j.js";import"./chevron-down-DuDBYDyj.js";import"./cross-DIlflA87.js";import"./PdfViewerSidebar-CJuW7typ.js";import"./index-Cye0oCf9.js";import"./index-BQDMsvBO.js";import"./index-BUrjWVUX.js";import"./PdfViewerToolbar-DYp9WMAe.js";import"./Button-CVGCG-PX.js";import"./chevron-right-cqr6ubxI.js";import"./Input-BrV6l60a.js";import"./search-DxfJTzvK.js";import"./spin-CQBEYvDU.js";import"./error-ovbXz9QM.js";import"./withOsdkMetrics-Bww6KylD.js";import"./makeExternalStore-ILzBw2IP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
