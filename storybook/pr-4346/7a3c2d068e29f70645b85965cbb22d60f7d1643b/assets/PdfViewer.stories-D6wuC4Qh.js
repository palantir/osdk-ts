import{j as r,M as s}from"./iframe-C0MgyNRE.js";import{P as p}from"./pdf-viewer-AMToHZW3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-t0VH8NYj.js";import"./preload-helper-DQoH0Nuo.js";import"./PdfViewer-CEx877UR.js";import"./index---acoC-r.js";import"./BasePdfViewer-iQcUtU7j.js";import"./BasePdfViewer.module.css-BkYLb-pD.js";import"./PdfViewerAnnotationLayer-AG8HhERu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-6-rdIGHb.js";import"./PdfViewerOutlineSidebar-ybZzWnkB.js";import"./PdfViewerSidebarHeader-CoOFu2kJ.js";import"./useBaseUiId-Q4ONINdB.js";import"./useControlled-BBrJL19c.js";import"./CompositeRoot-BMh3wcGq.js";import"./CompositeItem-4Z6N9TGd.js";import"./ToolbarRootContext-DTiKt-1r.js";import"./composite-BfZwON16.js";import"./svgIconContainer-BKLjPPf4.js";import"./PdfViewerSearchBar-BaeDsbkF.js";import"./chevron-up-DTBULrqJ.js";import"./chevron-down-3JGU9uXG.js";import"./cross-CDqB6Pmb.js";import"./PdfViewerSidebar-CpYwhirh.js";import"./index-DLQpaEnR.js";import"./index-AZR5iI7Q.js";import"./index-C-iYCFDc.js";import"./PdfViewerToolbar-DX87OrRt.js";import"./Button-DPYKSMTC.js";import"./chevron-right-gAStio9y.js";import"./Input-BAC6a1Nu.js";import"./search-CnqYke8S.js";import"./spin-BaSAQbYw.js";import"./error-DWVeEt8h.js";import"./withOsdkMetrics-DhnlLT_e.js";import"./makeExternalStore-CJPI6JTX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
