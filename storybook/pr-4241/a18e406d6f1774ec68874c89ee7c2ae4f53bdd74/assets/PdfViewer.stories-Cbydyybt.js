import{j as r,M as s}from"./iframe-BZfq9wpL.js";import{P as p}from"./pdf-viewer-D7MVGlqN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-dAz11ZdJ.js";import"./preload-helper-AwKDT_jv.js";import"./PdfViewer-BMXxnsrE.js";import"./index-D9gasGy7.js";import"./BasePdfViewer-DNYss_mA.js";import"./BasePdfViewer.module.css-Bi4U7g9u.js";import"./PdfViewerAnnotationLayer-sh-dQbnv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CUymwbm-.js";import"./PdfViewerOutlineSidebar-DW18aqEA.js";import"./PdfViewerSidebarHeader-DmlGfKJ-.js";import"./useBaseUiId-CAA3ipMR.js";import"./useControlled-mhuNXue2.js";import"./CompositeRoot-DPNYxXz_.js";import"./CompositeItem-DdBNHL7r.js";import"./ToolbarRootContext-BAhtauIS.js";import"./composite-bZwVCSrk.js";import"./svgIconContainer-DnXANREi.js";import"./PdfViewerSearchBar-Bl981wjG.js";import"./chevron-up-q2NRA_TV.js";import"./chevron-down-BnbfleEH.js";import"./cross-D_01sNtm.js";import"./PdfViewerSidebar-72tee5QB.js";import"./index-CYqzX_VE.js";import"./index-DsxnygA5.js";import"./index-Bh2MExip.js";import"./PdfViewerToolbar-DlQXJnez.js";import"./Button-RoczPdix.js";import"./chevron-right-BYX7IWHj.js";import"./Input-CYqif1zS.js";import"./search-CGtWdQTA.js";import"./spin-CnDeeOON.js";import"./error-Dm15EuC9.js";import"./withOsdkMetrics-BHMRNcoi.js";import"./makeExternalStore-BV40BoeT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
