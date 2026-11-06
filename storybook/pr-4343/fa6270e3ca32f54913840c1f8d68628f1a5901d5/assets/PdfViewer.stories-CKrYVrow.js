import{j as r,M as s}from"./iframe-CDFbPseP.js";import{P as p}from"./pdf-viewer-C4oo-22O.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DFmQISoF.js";import"./preload-helper-BKjsnnFk.js";import"./PdfViewer-B5KDpJuf.js";import"./index-CzYE_gFj.js";import"./BasePdfViewer-CcWfpHB8.js";import"./BasePdfViewer.module.css-CrdJe9Ol.js";import"./PdfViewerAnnotationLayer-DjSjto05.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-bkzlAG0j.js";import"./PdfViewerOutlineSidebar-Gfjr0ON0.js";import"./PdfViewerSidebarHeader-BxrMX8OG.js";import"./useBaseUiId-BT9BKuc8.js";import"./useControlled-DSth82Ot.js";import"./CompositeRoot-Pdj2YrDd.js";import"./CompositeItem-CBWcSsRg.js";import"./ToolbarRootContext-B4N7QEkj.js";import"./composite-DoGjJBYp.js";import"./svgIconContainer-BNgOwI7J.js";import"./PdfViewerSearchBar-Cu3Cvjqp.js";import"./chevron-up-B9sXUp00.js";import"./chevron-down-LTvAL7jy.js";import"./cross-D1CsBnZQ.js";import"./PdfViewerSidebar-BlPLApKq.js";import"./index-sMIecie8.js";import"./index-zCdxyZBm.js";import"./index-B9ZyEEfj.js";import"./PdfViewerToolbar-C0mH-aDW.js";import"./Button-adqe8TBe.js";import"./chevron-right-CVK9SWZV.js";import"./Input-RJbqaFIV.js";import"./search-B_GZiPBG.js";import"./spin--t641HpU.js";import"./error-B-c6YY8H.js";import"./withOsdkMetrics-C_TM08QX.js";import"./makeExternalStore-CffN4Zs6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
