import{j as r,M as s}from"./iframe-CUvi9RCV.js";import{P as p}from"./pdf-viewer-Bsaqur6X.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-YIRtjty7.js";import"./preload-helper-GqmuGD1I.js";import"./PdfViewer-BEON916N.js";import"./index-Z2IvR_t6.js";import"./BasePdfViewer-B-ODdFho.js";import"./BasePdfViewer.module.css-1UoxQ2Qr.js";import"./PdfViewerAnnotationLayer-COn93suy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DYah1Lbs.js";import"./PdfViewerOutlineSidebar-juTAf-xH.js";import"./PdfViewerSidebarHeader-YR1VIrSv.js";import"./useBaseUiId-D-6poyG0.js";import"./useControlled-CGiicoDL.js";import"./CompositeRoot-Byy54_27.js";import"./CompositeItem-BOheTBRU.js";import"./ToolbarRootContext-B6eeQfxM.js";import"./composite-BnXsOcTt.js";import"./svgIconContainer-BiFTkGqE.js";import"./PdfViewerSearchBar-CEB0VHMC.js";import"./chevron-up-SHcKAqZD.js";import"./chevron-down-DG0ceM1k.js";import"./cross-BswioSgU.js";import"./PdfViewerSidebar-WZpF31gk.js";import"./index-fPjfyI_6.js";import"./index-COsMkiIW.js";import"./index-Cn-BGg-w.js";import"./PdfViewerToolbar-DPZYy85I.js";import"./Button-DN8sAUol.js";import"./chevron-right-o1844JXj.js";import"./Input-gjvR1UgW.js";import"./search-DljzsUQ1.js";import"./spin-CzBrfHob.js";import"./error-nPJR1KaJ.js";import"./withOsdkMetrics-B0yRqBdO.js";import"./makeExternalStore-CRTDTaWN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
