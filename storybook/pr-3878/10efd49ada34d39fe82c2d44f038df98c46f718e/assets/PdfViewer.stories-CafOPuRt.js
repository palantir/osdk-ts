import{j as r,M as s}from"./iframe-BIBiDLzG.js";import{P as p}from"./pdf-viewer-Dgi51_SL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-3nGTNrdz.js";import"./preload-helper-M-hMOyfR.js";import"./PdfViewer-CO4Ylcpa.js";import"./index-DVl0wepy.js";import"./BasePdfViewer-9J_TCABO.js";import"./BasePdfViewer.module.css-CHKpTNft.js";import"./PdfViewerAnnotationLayer-85r_Uweu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-zEMo3BTD.js";import"./PdfViewerOutlineSidebar-CQNYYZ09.js";import"./PdfViewerSidebarHeader-CpsbQSki.js";import"./useBaseUiId-uizV67he.js";import"./useControlled-C1UaCMGh.js";import"./CompositeRoot-C4rUmmx9.js";import"./CompositeItem-DcFVDvs6.js";import"./ToolbarRootContext-DSpWAJaB.js";import"./composite-WJpwW_h1.js";import"./svgIconContainer-CoQwsTQZ.js";import"./PdfViewerSearchBar-BNSnzyFB.js";import"./chevron-up-Y3fm2hQ5.js";import"./chevron-down-D9WTAz47.js";import"./cross-Bct1nQA0.js";import"./PdfViewerSidebar-DioxwVrA.js";import"./index-CgV98ypJ.js";import"./index-ChCEVhY0.js";import"./index-oK6fUSTy.js";import"./PdfViewerToolbar-DKlAAJ2f.js";import"./Button-C3sxjNx0.js";import"./chevron-right-CaREJ0yJ.js";import"./Input-DjyK0ZMe.js";import"./search-Dp0L04CB.js";import"./spin-B_v9YsuI.js";import"./error-VYeOdSiM.js";import"./withOsdkMetrics-BODaHo4W.js";import"./makeExternalStore-CpzPkJRH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
