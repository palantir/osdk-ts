import{j as r,M as s}from"./iframe-BmlnQTDS.js";import{P as p}from"./pdf-viewer-Bkl6Kd79.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CggzXDII.js";import"./preload-helper-DfLDZ4kf.js";import"./PdfViewer-CNY6aglZ.js";import"./index-CLn6IkRR.js";import"./BasePdfViewer-sd6DvXKb.js";import"./BasePdfViewer.module.css-D0-wb8NQ.js";import"./PdfViewerAnnotationLayer-B1L8IstK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LHRV7NB2.js";import"./PdfViewerOutlineSidebar-DSm5JzTC.js";import"./PdfViewerSidebarHeader-CYV7ckEi.js";import"./useBaseUiId-CZoncXMq.js";import"./useControlled-YYP5n0_h.js";import"./CompositeRoot-QP0fYFZg.js";import"./CompositeItem-DqcihoEf.js";import"./ToolbarRootContext-BMCSjw-P.js";import"./composite-JyXlDwio.js";import"./svgIconContainer-D7BtKSB4.js";import"./PdfViewerSearchBar-3MVphuq7.js";import"./chevron-up-1GfOY4Zb.js";import"./chevron-down-CKSiKvYw.js";import"./cross-D2DCGJW3.js";import"./PdfViewerSidebar-D5_ljm5t.js";import"./index-PbmBNDrH.js";import"./index-DwxQTWS6.js";import"./index-bRRYzA0v.js";import"./PdfViewerToolbar-BbruGTBv.js";import"./Button-BG-8NdMv.js";import"./chevron-right-mytPIpsg.js";import"./Input-DqKEEagj.js";import"./search-C6RrLSu8.js";import"./spin-CcjrWdFQ.js";import"./error-C-2VL_3O.js";import"./withOsdkMetrics-CfdTmR9K.js";import"./makeExternalStore-qm8KAWql.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
