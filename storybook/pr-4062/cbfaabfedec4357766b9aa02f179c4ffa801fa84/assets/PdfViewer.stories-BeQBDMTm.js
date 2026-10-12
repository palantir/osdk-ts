import{j as r,M as s}from"./iframe-3uOeStlO.js";import{P as p}from"./pdf-viewer-BhfwMHqZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-vELjvZPk.js";import"./preload-helper-B_uYGV8k.js";import"./PdfViewer-wTq7Y6Hw.js";import"./index-B_qY6xMA.js";import"./BasePdfViewer-ClKJS6Zq.js";import"./BasePdfViewer.module.css-95BELV01.js";import"./PdfViewerAnnotationLayer-B7bq9K-S.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D46FMrE_.js";import"./PdfViewerOutlineSidebar-CSQAPIIH.js";import"./PdfViewerSidebarHeader-Dr3Y30Id.js";import"./useBaseUiId-DFf4k_ND.js";import"./useControlled-Iq2zkhRy.js";import"./CompositeRoot-C9-5DIug.js";import"./CompositeItem-B84OCPkr.js";import"./ToolbarRootContext-Dbkjbr9t.js";import"./composite-DbFqwck4.js";import"./svgIconContainer-BXcgfdNM.js";import"./PdfViewerSearchBar-DcSH3uTq.js";import"./chevron-up-CNa9vMzR.js";import"./chevron-down-Bzj-jMLe.js";import"./cross-waxScdAW.js";import"./PdfViewerSidebar-CDRoeKlV.js";import"./index-BiPZja9p.js";import"./index-CkR9lTv2.js";import"./index-CV8wC36m.js";import"./PdfViewerToolbar-Cm0pM550.js";import"./Button-B1JQinsR.js";import"./chevron-right-DjaCiRVp.js";import"./Input-CYQFeP5H.js";import"./search-DB4T2psl.js";import"./spin-5ZMaehWW.js";import"./error-BXiGRUyR.js";import"./withOsdkMetrics-DtWegvZ6.js";import"./makeExternalStore-B5qagnOI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
