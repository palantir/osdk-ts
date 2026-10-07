import{j as r,M as s}from"./iframe-CEat60Hp.js";import{P as p}from"./pdf-viewer-BNHlDQ0r.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-mzNMy0dQ.js";import"./preload-helper-LGTzr2gM.js";import"./PdfViewer-7VKRloCT.js";import"./index-DyITJqpd.js";import"./BasePdfViewer-DYtzSwWD.js";import"./BasePdfViewer.module.css-Cpg4hB68.js";import"./PdfViewerAnnotationLayer-D9dFK1_P.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9tHLEsy.js";import"./PdfViewerOutlineSidebar-D91sD-pM.js";import"./PdfViewerSidebarHeader-TTjw7zHq.js";import"./useBaseUiId-ClM_1fTm.js";import"./useControlled-CZHKBSyi.js";import"./CompositeRoot-DdN2loyx.js";import"./CompositeItem-ChZ-XSJC.js";import"./ToolbarRootContext-MdE91PHa.js";import"./composite-Ce22aUj6.js";import"./svgIconContainer-CN1a-FY8.js";import"./PdfViewerSearchBar-DiIReG0V.js";import"./chevron-up-DhX97DRD.js";import"./chevron-down-CbnQEPHn.js";import"./cross-D-uWfUMG.js";import"./PdfViewerSidebar-DbpEWRTE.js";import"./index-DO0PQOk2.js";import"./index-BKoym7aL.js";import"./index-C_WLSqh0.js";import"./PdfViewerToolbar-CStuU0_B.js";import"./Button-CCDq6dgu.js";import"./chevron-right-C1mM_teU.js";import"./Input-By_gu53Z.js";import"./search-COfQ1bXD.js";import"./spin-C25GatFv.js";import"./error-Us6LDG_u.js";import"./withOsdkMetrics-CSdFZ0uc.js";import"./makeExternalStore-DYDIpdrC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
