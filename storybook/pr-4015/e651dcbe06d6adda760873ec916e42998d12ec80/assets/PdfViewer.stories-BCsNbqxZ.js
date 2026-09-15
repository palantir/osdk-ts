import{j as r,M as s}from"./iframe-QP8DFwwe.js";import{P as p}from"./pdf-viewer-Nqvjkn6S.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-JWNRgcmC.js";import"./preload-helper-DZ_jViir.js";import"./PdfViewer-RpOCHGDO.js";import"./index-BNJVHiwE.js";import"./BasePdfViewer-BQU7Epz2.js";import"./BasePdfViewer.module.css-tskUpYCE.js";import"./PdfViewerAnnotationLayer-kd89EoBv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-U-RAsfE1.js";import"./PdfViewerOutlineSidebar-Bo7fbB67.js";import"./PdfViewerSidebarHeader-D0iDDT2-.js";import"./useBaseUiId-D1NpMsZt.js";import"./useControlled-206lJMjs.js";import"./CompositeRoot-CV9hNkEo.js";import"./CompositeItem-BUsTT35Y.js";import"./ToolbarRootContext-CahY9HEa.js";import"./composite-Ikyj3NkG.js";import"./svgIconContainer-CfQEGbE2.js";import"./PdfViewerSearchBar-BEoZo-Gz.js";import"./chevron-up-CChhUu3_.js";import"./chevron-down-_zkKmv-U.js";import"./cross-CwXi3gtQ.js";import"./PdfViewerSidebar-CtEPC5q1.js";import"./index-CVANDjkc.js";import"./index-CaTuEA2R.js";import"./index-BtfIDQW-.js";import"./PdfViewerToolbar-BN-Uzl2H.js";import"./Button-B0j0zDqq.js";import"./chevron-right-C8wSggob.js";import"./Input-CHlmHTWZ.js";import"./search-BhbGsmDO.js";import"./spin-CC95mSpK.js";import"./error-CwAuvkpD.js";import"./withOsdkMetrics-B4sVoh8c.js";import"./makeExternalStore-8VCBcpFX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
