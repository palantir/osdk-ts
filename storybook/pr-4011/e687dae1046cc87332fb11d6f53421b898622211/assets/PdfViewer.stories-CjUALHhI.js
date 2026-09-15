import{j as r,M as s}from"./iframe-dvXPHGEz.js";import{P as p}from"./pdf-viewer-Bi5E4gGm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bb4zUlw7.js";import"./preload-helper-BmaGIWKK.js";import"./PdfViewer-qOOyE0bP.js";import"./index-DyjG60lF.js";import"./BasePdfViewer-E5sZG3Bp.js";import"./BasePdfViewer.module.css-BCPQHMno.js";import"./PdfViewerAnnotationLayer-D-bL_x3w.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-vXrG0ZSF.js";import"./PdfViewerOutlineSidebar-I3Jf3gd7.js";import"./PdfViewerSidebarHeader-B5F084L_.js";import"./useBaseUiId-B5XDNhHC.js";import"./useControlled-C_6t7Yik.js";import"./CompositeRoot-iMymv8X-.js";import"./CompositeItem-BOkdWJ_P.js";import"./ToolbarRootContext-puVPhTN3.js";import"./composite-CadSmb_E.js";import"./svgIconContainer-Cks84kGC.js";import"./PdfViewerSearchBar-CvUfSeaP.js";import"./chevron-up-D3T5OG4U.js";import"./chevron-down-EmJ3ovaR.js";import"./cross-Z5DuI0bi.js";import"./PdfViewerSidebar-C0_Tgmo2.js";import"./index-C6zBVqUK.js";import"./index-DabbcYA7.js";import"./index-D0dNC_Uw.js";import"./PdfViewerToolbar-DiHXqjQ-.js";import"./Button-XhiN3AVX.js";import"./chevron-right-CiFIFHnW.js";import"./Input-CQg1dEqW.js";import"./search-DSXnECBw.js";import"./spin-aBV1eLXi.js";import"./error-CQ-TuYDa.js";import"./withOsdkMetrics-7z80YqAb.js";import"./makeExternalStore-CV6_Wrkf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
