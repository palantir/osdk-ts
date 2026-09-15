import{j as r,M as s}from"./iframe-nH92Qb6I.js";import{P as p}from"./pdf-viewer-CcmGPsMt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B3qrfond.js";import"./preload-helper-DVpIcuXN.js";import"./PdfViewer-DLCSp4zR.js";import"./index-wUFT2bRw.js";import"./BasePdfViewer-uJ_Q6rCG.js";import"./BasePdfViewer.module.css-DcYhXMB-.js";import"./PdfViewerAnnotationLayer-DjkEfjUi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BV-AXVM8.js";import"./PdfViewerOutlineSidebar-WO20fs16.js";import"./PdfViewerSidebarHeader-CFdatxWp.js";import"./useBaseUiId-Dbvfrb6U.js";import"./useControlled-B8icxwdl.js";import"./CompositeRoot-C5RkKO9N.js";import"./CompositeItem-BF333Zgu.js";import"./ToolbarRootContext-DlwWE9QZ.js";import"./composite-B2ptXcYf.js";import"./svgIconContainer-CCtPkDCx.js";import"./PdfViewerSearchBar-DmNpO4UM.js";import"./chevron-up-CjBACsrO.js";import"./chevron-down-CBmuqb-m.js";import"./cross-HApDVAUs.js";import"./PdfViewerSidebar-C2JOFR5Q.js";import"./index-DgFSfdtE.js";import"./index-CYsOJOxV.js";import"./index-CcpfuVHT.js";import"./PdfViewerToolbar-DzQa4bw0.js";import"./Button-w7xoCEq9.js";import"./chevron-right-WRJUOi42.js";import"./Input-DzMyb8hK.js";import"./search-D5Opa-iA.js";import"./spin-CHh1mY6m.js";import"./error-BXUm0BgQ.js";import"./withOsdkMetrics-Cz8MJ3YO.js";import"./makeExternalStore-CLbnsWAa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
