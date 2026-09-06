import{j as r,M as s}from"./iframe-CPzX1uSk.js";import{P as p}from"./pdf-viewer-HBfg3Zhp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-aA2HO72u.js";import"./preload-helper-BV_2dDRe.js";import"./PdfViewer-Dld7uZhB.js";import"./index-COJJFOT5.js";import"./BasePdfViewer-C0K9UPP9.js";import"./BasePdfViewer.module.css-DCw21rSf.js";import"./PdfViewerAnnotationLayer-cS31vF03.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-W8NrVfV2.js";import"./PdfViewerOutlineSidebar-CoQYmMKH.js";import"./PdfViewerSidebarHeader-B32oRswh.js";import"./useBaseUiId-Dlz6RJMI.js";import"./useControlled-C6jvEykx.js";import"./CompositeRoot-B3wdSVIR.js";import"./CompositeItem-BddFvRMc.js";import"./ToolbarRootContext-ddrpupWn.js";import"./composite-BpWI7eGy.js";import"./svgIconContainer-BUGQNNP_.js";import"./PdfViewerSearchBar-Czn-fnxN.js";import"./chevron-up-D9jkfLmz.js";import"./chevron-down-C8Owk0H7.js";import"./cross-CrQPe3Ah.js";import"./PdfViewerSidebar-BiehZDmA.js";import"./index-Cz0_03bE.js";import"./index-bgG3RNaT.js";import"./index-Ce1oZCaV.js";import"./PdfViewerToolbar-Cvr5Qe_n.js";import"./Button-Bp9aDI8N.js";import"./chevron-right-y3oxejj1.js";import"./Input-BcH8rlzt.js";import"./search-DbyDvw8l.js";import"./spin-C5ysTixq.js";import"./error-DwSWgrLn.js";import"./withOsdkMetrics-XJdj0BYd.js";import"./makeExternalStore-DLgjxXB4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
