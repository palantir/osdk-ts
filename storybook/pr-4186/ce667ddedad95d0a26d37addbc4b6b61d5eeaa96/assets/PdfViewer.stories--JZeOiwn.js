import{j as r,M as s}from"./iframe-wJSBANRY.js";import{P as p}from"./pdf-viewer-DFZ9wrpG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C1d8bJtp.js";import"./preload-helper-B2Ho1hLQ.js";import"./PdfViewer-5u0mIv3X.js";import"./index-BcqSzCju.js";import"./BasePdfViewer-Djc9GXH2.js";import"./BasePdfViewer.module.css-DE6vlAlR.js";import"./PdfViewerAnnotationLayer-BVaC8jz1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BLCrAg9l.js";import"./PdfViewerOutlineSidebar-BK9bxVXF.js";import"./PdfViewerSidebarHeader-BUITwH-i.js";import"./useBaseUiId-DWH3HBR0.js";import"./useControlled-BvO6L4jZ.js";import"./CompositeRoot-rXaR9oy9.js";import"./CompositeItem-CMcnLQ_L.js";import"./ToolbarRootContext-ChwiRPwn.js";import"./composite-CrDIQ1mA.js";import"./svgIconContainer-Ci6LfE3v.js";import"./PdfViewerSearchBar-Ccy8QZ9N.js";import"./chevron-up-CVRaGDQV.js";import"./chevron-down-Cwjazhdf.js";import"./cross-iKlVZHPy.js";import"./PdfViewerSidebar-BXHJkCOE.js";import"./index-pP0t4O08.js";import"./index-v1Sv6Skf.js";import"./index-BVhp-lLY.js";import"./PdfViewerToolbar-DtrxVpau.js";import"./Button-Bs-O5zId.js";import"./chevron-right-CDINXQnR.js";import"./Input-Cn5YrDjO.js";import"./search-D4rdWSgZ.js";import"./spin-nDHlaISv.js";import"./error-ByPPsGV9.js";import"./withOsdkMetrics-DYFTNSHn.js";import"./makeExternalStore-Cdabd0ud.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
