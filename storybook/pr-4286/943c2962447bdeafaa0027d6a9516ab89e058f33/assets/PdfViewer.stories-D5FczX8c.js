import{j as r,M as s}from"./iframe-BryHz5Df.js";import{P as p}from"./pdf-viewer-YI0BZMPt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-sa0ii2H1.js";import"./preload-helper-ZuG0aKTk.js";import"./PdfViewer-y5gqKvmq.js";import"./index-iPKk9s3t.js";import"./BasePdfViewer-BGkn_QzJ.js";import"./BasePdfViewer.module.css-B5Dh37lj.js";import"./PdfViewerAnnotationLayer-0jzIrjRt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQ0Yv6BS.js";import"./PdfViewerOutlineSidebar-Cu91YgDa.js";import"./PdfViewerSidebarHeader-CnHQGy-Y.js";import"./useBaseUiId-lqu4HseA.js";import"./useControlled-CylTdVLs.js";import"./CompositeRoot-BvYm5qj3.js";import"./CompositeItem-CUgXhRoj.js";import"./ToolbarRootContext-BjHx285v.js";import"./composite-BowJ7EVh.js";import"./svgIconContainer-Bz8FzOTG.js";import"./PdfViewerSearchBar-B7EiwU7D.js";import"./chevron-up-CWdDDD0T.js";import"./chevron-down-DjbeKg79.js";import"./cross-ailj0yO2.js";import"./PdfViewerSidebar-CDOwb4cj.js";import"./index-BK-BH_Yo.js";import"./index-DLszwrmC.js";import"./index-B23Jlpe-.js";import"./PdfViewerToolbar-BTKd_7Cj.js";import"./Button-C6Ze9Rf1.js";import"./chevron-right-B8FrljbQ.js";import"./Input-BJM0PLwp.js";import"./search-BMoYocFy.js";import"./spin-AXOGtmcP.js";import"./error-CL2fTgGo.js";import"./withOsdkMetrics-Dmyjllfi.js";import"./makeExternalStore-CxnQMREG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
