import{j as r,M as s}from"./iframe-Bp6ykM_Q.js";import{P as p}from"./pdf-viewer-Dr1L-55p.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BcFeUWnO.js";import"./preload-helper-hhg-UuLO.js";import"./PdfViewer-DRbAxx9D.js";import"./index-CkmqH5v_.js";import"./BasePdfViewer-Ch2e0SOR.js";import"./BasePdfViewer.module.css-Zu55uZwu.js";import"./PdfViewerAnnotationLayer-DPEGQdx0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-O1qjy1i-.js";import"./PdfViewerOutlineSidebar-DMLr_JDS.js";import"./PdfViewerSidebarHeader-BNvnIZgx.js";import"./useBaseUiId-B9JaL3lL.js";import"./useControlled-DfSSocWG.js";import"./CompositeRoot-Dqk5RuUP.js";import"./CompositeItem-DEa3hl5L.js";import"./ToolbarRootContext-DvDyj9lB.js";import"./composite-CELT5bVY.js";import"./svgIconContainer-Bbfw_TbJ.js";import"./PdfViewerSearchBar-DNcQVyCH.js";import"./chevron-up-DZIBKwFV.js";import"./chevron-down-DzC25JPe.js";import"./cross-C2XcpcwW.js";import"./PdfViewerSidebar-sGkmKgem.js";import"./index-KVwHojvU.js";import"./index-D7B9vPdC.js";import"./index-DPOB5ZLL.js";import"./PdfViewerToolbar-Dl9ZYEr3.js";import"./Button-CqF-mJTx.js";import"./chevron-right-C5Gv1BF3.js";import"./Input-8kWtUrGW.js";import"./search-oCnrD3HI.js";import"./spin-Cjb3DqZV.js";import"./error-pcj4mGvq.js";import"./withOsdkMetrics-BuzXmon2.js";import"./makeExternalStore-D6cQ2Vrj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
