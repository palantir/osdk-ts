import{j as r,M as s}from"./iframe-C1SMXjUe.js";import{P as p}from"./pdf-viewer-DyNCye-m.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D-uy56jK.js";import"./preload-helper-O4cQ6S71.js";import"./PdfViewer-Bq5G7Dz-.js";import"./index-DN_SN9-G.js";import"./BasePdfViewer-CWkQNxzc.js";import"./BasePdfViewer.module.css-Ci7aqlTA.js";import"./PdfViewerAnnotationLayer-CAv-PHi6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BfBLXhYH.js";import"./PdfViewerOutlineSidebar-BlWgIFlF.js";import"./PdfViewerSidebarHeader-Cn0iGjtO.js";import"./useBaseUiId-BuIqgK5v.js";import"./useControlled-BZtQiYd3.js";import"./CompositeRoot-DI0Ox4Zb.js";import"./CompositeItem-BJrPEqdr.js";import"./ToolbarRootContext-BEFeXo6R.js";import"./composite-sNamXEmM.js";import"./svgIconContainer-BDoLcvXV.js";import"./PdfViewerSearchBar-DfikrX6G.js";import"./chevron-up-B6MAmjy7.js";import"./chevron-down-BPj-14kw.js";import"./cross-D7uSPFjO.js";import"./PdfViewerSidebar-Dc9EJEWt.js";import"./index-HIFRtJiy.js";import"./index-08DpGPSx.js";import"./index-19ONWP9f.js";import"./PdfViewerToolbar-BBd0hVMO.js";import"./Button-Bfn1HbBL.js";import"./chevron-right-lZH1wppm.js";import"./Input-57O56G_v.js";import"./search-DnJjsxnU.js";import"./spin-BZjFtkt3.js";import"./error-Ck-1b3_a.js";import"./withOsdkMetrics-CARHbXxz.js";import"./makeExternalStore-wdj16MKs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
