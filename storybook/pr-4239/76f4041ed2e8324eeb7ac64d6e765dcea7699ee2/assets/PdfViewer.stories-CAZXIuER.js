import{j as r,M as s}from"./iframe-Cjxg6iNn.js";import{P as p}from"./pdf-viewer-C2Nj53ma.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DByzFjfU.js";import"./preload-helper-Cxg0i_EX.js";import"./PdfViewer-_VMU9ro7.js";import"./index-C7K0gZWV.js";import"./BasePdfViewer-62c9NmIh.js";import"./BasePdfViewer.module.css-CFUwYmdI.js";import"./PdfViewerAnnotationLayer-B9ELarF_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DKkZw7-8.js";import"./PdfViewerOutlineSidebar-enrgdLIM.js";import"./PdfViewerSidebarHeader-2Fz1OVvx.js";import"./useBaseUiId-CnlnTXqN.js";import"./useControlled-DvCyj3QQ.js";import"./CompositeRoot-CF6O8bI1.js";import"./CompositeItem-CNr4k86k.js";import"./ToolbarRootContext-DZlA8QGQ.js";import"./composite-BjxBGEhF.js";import"./svgIconContainer-CZvHNGTg.js";import"./PdfViewerSearchBar-Be3HO_Ax.js";import"./chevron-up-BrBa_e1-.js";import"./chevron-down-bhCi1ARW.js";import"./cross-B4PrOhV3.js";import"./PdfViewerSidebar-CJGoq_OM.js";import"./index-D5MyUYDa.js";import"./index-CSSvwtgv.js";import"./index-CHnUBrda.js";import"./PdfViewerToolbar-BEYWSAFX.js";import"./Button-DgwxYDBH.js";import"./chevron-right-KOG_5wOs.js";import"./Input-BQ8CO2Zx.js";import"./search-DdTpXEBG.js";import"./spin-ClOpI9KP.js";import"./error-BXzFpfZ4.js";import"./withOsdkMetrics-BpvOsnqH.js";import"./makeExternalStore-CNSVvc9t.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
