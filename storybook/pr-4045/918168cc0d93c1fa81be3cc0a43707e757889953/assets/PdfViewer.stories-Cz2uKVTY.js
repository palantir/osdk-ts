import{j as r,M as s}from"./iframe-BAp-mBFg.js";import{P as p}from"./pdf-viewer-DHhjVGMo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DudiRkjv.js";import"./preload-helper-DMA-8k7h.js";import"./PdfViewer-DrVWlqL_.js";import"./index-BL8Ey2sj.js";import"./BasePdfViewer-CLLFx_HR.js";import"./BasePdfViewer.module.css-Cah169fO.js";import"./PdfViewerAnnotationLayer-Byr9sUBY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BAMXoU_x.js";import"./PdfViewerOutlineSidebar-BeV2CpC5.js";import"./PdfViewerSidebarHeader-BX3Vlxoo.js";import"./useBaseUiId-CLc976mR.js";import"./useControlled-DqAef5Et.js";import"./CompositeRoot-Cm7-hfoe.js";import"./CompositeItem-DuZe3uzk.js";import"./ToolbarRootContext-Ul6dl8O6.js";import"./composite-ziK8MZ0d.js";import"./svgIconContainer-CBRcPR9-.js";import"./PdfViewerSearchBar-BdvxJmg9.js";import"./chevron-up-C64on9e6.js";import"./chevron-down-DRRMSp6v.js";import"./cross-YEQVvPJ0.js";import"./PdfViewerSidebar-CX-HBIe7.js";import"./index-BPbKBD04.js";import"./index-bbZZKUgK.js";import"./index-CZnpWueQ.js";import"./PdfViewerToolbar-B71Ocrqk.js";import"./Button-jiVV_CtX.js";import"./chevron-right-otRtpLk1.js";import"./Input-CAD3JQQ8.js";import"./search-CXHMKnff.js";import"./spin-D72ZbfYp.js";import"./error-WBAOjD-R.js";import"./withOsdkMetrics-BuxsjMHL.js";import"./makeExternalStore-Ct8XmniK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
