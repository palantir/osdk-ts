import{j as r,M as s}from"./iframe-Cudgp9Yf.js";import{P as p}from"./pdf-viewer-BXPT2dt3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-3brRC6uO.js";import"./preload-helper-4hrz9kvN.js";import"./PdfViewer-CGDDkqq4.js";import"./index-81BYSLtR.js";import"./BasePdfViewer-7R6ttHkl.js";import"./BasePdfViewer.module.css-Dj2_3KPQ.js";import"./PdfViewerAnnotationLayer-COSazfaG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFEWEfyA.js";import"./PdfViewerOutlineSidebar-DRIxv470.js";import"./PdfViewerSidebarHeader-CajNTED7.js";import"./useBaseUiId-XTaLWo4v.js";import"./useControlled-CwtIgUOg.js";import"./CompositeRoot-BnnvNKjS.js";import"./CompositeItem-DmRElDN_.js";import"./ToolbarRootContext-B8H-v8xY.js";import"./composite-Cva0Dc4a.js";import"./svgIconContainer-DHLyM821.js";import"./PdfViewerSearchBar-Cc_4sUol.js";import"./chevron-up-ZjwIfeAv.js";import"./chevron-down-DyPkH6YY.js";import"./cross-revkGSiW.js";import"./PdfViewerSidebar-DO7I41PG.js";import"./index-Tl8UCzrU.js";import"./index-CbHdBm0Y.js";import"./index-CSHUtoE8.js";import"./PdfViewerToolbar-Crs-hLrB.js";import"./Button-tVyqWp8F.js";import"./chevron-right-Bq1fuwrV.js";import"./Input-Bh8eu1mD.js";import"./search-D0hS-0xo.js";import"./spin--PsyZmhx.js";import"./error-I8BNM1L0.js";import"./withOsdkMetrics-BT2RZEDY.js";import"./makeExternalStore-DJw3BgKy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
