import{j as r,M as s}from"./iframe-C-CLTpsP.js";import{P as p}from"./pdf-viewer-DwFqohIp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-yTfiyJo1.js";import"./preload-helper-DHm86PzE.js";import"./PdfViewer-CYi_YWiV.js";import"./index-C_yrN8nJ.js";import"./BasePdfViewer-BlJmLHXm.js";import"./BasePdfViewer.module.css-CyL675-E.js";import"./PdfViewerAnnotationLayer-Psc1jZum.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dnq7guo1.js";import"./PdfViewerOutlineSidebar-28PW0dyf.js";import"./PdfViewerSidebarHeader-BgP3NtlI.js";import"./useBaseUiId-CzMe2Dnq.js";import"./useControlled-BMK5_n_x.js";import"./CompositeRoot-oyH0EfPE.js";import"./CompositeItem-DUPoB7w7.js";import"./ToolbarRootContext-BEcPVQJt.js";import"./composite-DJh0mugt.js";import"./svgIconContainer-xNOrsz7C.js";import"./PdfViewerSearchBar-CLzPR8VQ.js";import"./chevron-up-C0pmcL0Z.js";import"./chevron-down-Cj7uY9HA.js";import"./cross-Ku2F5rSb.js";import"./PdfViewerSidebar-pd7Zzwz7.js";import"./index-D7xNirGy.js";import"./index-D40VRMQn.js";import"./index-Cfu6rkCW.js";import"./PdfViewerToolbar-4L_ss73T.js";import"./Button-TBXiPdkd.js";import"./chevron-right-DBn3JIHq.js";import"./Input-D24KUx_z.js";import"./search-CpRfXCb8.js";import"./spin-BiJdR4vp.js";import"./error-B9ihfIkN.js";import"./withOsdkMetrics-ChVqngv_.js";import"./makeExternalStore-DOqfc4A2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
