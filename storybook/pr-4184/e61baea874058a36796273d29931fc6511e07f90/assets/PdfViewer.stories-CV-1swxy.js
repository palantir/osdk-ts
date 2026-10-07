import{j as r,M as s}from"./iframe-Dc7sxM32.js";import{P as p}from"./pdf-viewer-Dg6mg01R.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-gG-XIdwT.js";import"./preload-helper-CM7tzFvC.js";import"./PdfViewer-CaDmJRir.js";import"./index-IZwYZumw.js";import"./BasePdfViewer-BtG8kqwb.js";import"./BasePdfViewer.module.css-dtLdF435.js";import"./PdfViewerAnnotationLayer-DUrOYOnr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFgV6MxO.js";import"./PdfViewerOutlineSidebar-BFGyYPt3.js";import"./PdfViewerSidebarHeader-DHDN3QPn.js";import"./useBaseUiId-CH01Yaez.js";import"./useControlled-CAz0cW4V.js";import"./CompositeRoot-CnsYnMkz.js";import"./CompositeItem-hDzKKSGM.js";import"./ToolbarRootContext-DVEPWNiK.js";import"./composite-BoHCITiY.js";import"./svgIconContainer-C-2lOjfc.js";import"./PdfViewerSearchBar-Bh7fakbz.js";import"./chevron-up-8ie03w_1.js";import"./chevron-down-BlnQ68Oi.js";import"./cross-DB407VGu.js";import"./PdfViewerSidebar-BCIT6NGU.js";import"./index-C72rir5P.js";import"./index-BWWceLi5.js";import"./index-BPTBY4qT.js";import"./PdfViewerToolbar-o4rOje_a.js";import"./Button-D0LwqFFz.js";import"./chevron-right-CVIWT2aS.js";import"./Input-C0cMc9zy.js";import"./search-CtqsOWX2.js";import"./spin-CuLRKly0.js";import"./error-ritcfIW_.js";import"./withOsdkMetrics-CI_RMXn8.js";import"./makeExternalStore-CKmXRF_o.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
