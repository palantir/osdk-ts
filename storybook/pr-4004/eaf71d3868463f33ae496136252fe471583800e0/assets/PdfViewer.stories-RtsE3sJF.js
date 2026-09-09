import{j as r,M as s}from"./iframe-CSNnL1Y0.js";import{P as p}from"./pdf-viewer-CZIqNr8e.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D6n_--MW.js";import"./preload-helper-PMc3ZHFF.js";import"./PdfViewer-CwpIdbWt.js";import"./index-DNTkQvxm.js";import"./BasePdfViewer-C4Gtm4mt.js";import"./BasePdfViewer.module.css-BUCqtz5Y.js";import"./PdfViewerAnnotationLayer-DJhZnGBw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C-Y2OFku.js";import"./PdfViewerOutlineSidebar-Bzfe_Nyu.js";import"./PdfViewerSidebarHeader-B9x17W8e.js";import"./useBaseUiId-pX-EM4Dz.js";import"./useControlled-CLpZ-2U1.js";import"./CompositeRoot-DxihqWUU.js";import"./CompositeItem-DxYljjwU.js";import"./ToolbarRootContext-DVTpeAWc.js";import"./composite-BlH-_uKm.js";import"./svgIconContainer-CM8I1f8r.js";import"./PdfViewerSearchBar-CEguw3uM.js";import"./chevron-up-CiJx7nH2.js";import"./chevron-down-BBAfQF9b.js";import"./cross-Bg_IlbQu.js";import"./PdfViewerSidebar-CyWEQFFI.js";import"./index-CP8GV_wH.js";import"./index-BzmaCTEY.js";import"./index-CIw5v7jp.js";import"./PdfViewerToolbar-CxJh1j9p.js";import"./Button-B6Txaqgo.js";import"./chevron-right-CWtvZ3Da.js";import"./Input-bh0XwuT_.js";import"./search-BPPJCzpv.js";import"./spin-FoB2eABw.js";import"./error-BFicHv-u.js";import"./withOsdkMetrics-DmF4idxC.js";import"./makeExternalStore-19MZWFoq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
