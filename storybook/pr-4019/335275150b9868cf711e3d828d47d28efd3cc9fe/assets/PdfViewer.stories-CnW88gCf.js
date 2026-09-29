import{j as r,M as s}from"./iframe-ALAQwSfV.js";import{P as p}from"./pdf-viewer-DKziEFrC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DffLzFp5.js";import"./preload-helper-fLSKrq12.js";import"./PdfViewer-DLuitNGB.js";import"./index-nJZFwjBY.js";import"./BasePdfViewer-DAeIhxct.js";import"./BasePdfViewer.module.css-BeEM_ZtK.js";import"./PdfViewerAnnotationLayer-7g2djYrN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-RSagTtid.js";import"./PdfViewerOutlineSidebar-DL9fIsnR.js";import"./PdfViewerSidebarHeader-CSQadFoZ.js";import"./useBaseUiId-BtuLk_tP.js";import"./useControlled-f6wr2N38.js";import"./CompositeRoot-DR9VUNAY.js";import"./CompositeItem-DbwrFgnX.js";import"./ToolbarRootContext-B_pgtouG.js";import"./composite-TYYt2fCx.js";import"./svgIconContainer-CsyrjEXm.js";import"./PdfViewerSearchBar-BfxyvNqo.js";import"./chevron-up-B02-dzWz.js";import"./chevron-down-nwzUELg0.js";import"./cross-CTj2uYDt.js";import"./PdfViewerSidebar-CMeoFaAk.js";import"./index-DipU2kkl.js";import"./index-BYTfgmte.js";import"./index-DvjPzKHT.js";import"./PdfViewerToolbar-BJRCvxeg.js";import"./Button-Be4ab6Ld.js";import"./chevron-right-iCjDMnA8.js";import"./Input-CFWd2gLa.js";import"./search-6F7M3AuK.js";import"./spin-C2Iykc8s.js";import"./error-fdu9cH2p.js";import"./withOsdkMetrics-Bz9MfpUK.js";import"./makeExternalStore-BU7UI9Bv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
