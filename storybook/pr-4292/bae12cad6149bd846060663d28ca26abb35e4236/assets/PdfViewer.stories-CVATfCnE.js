import{j as r,M as s}from"./iframe-DUqIITxH.js";import{P as p}from"./pdf-viewer-rGQ0Wpvf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DWL3RpTe.js";import"./preload-helper-DRNNkrJi.js";import"./PdfViewer-BNe74SIw.js";import"./index-CfKxCZr0.js";import"./BasePdfViewer-gIAh5FqB.js";import"./BasePdfViewer.module.css-n5Cnl6cJ.js";import"./PdfViewerAnnotationLayer-D4XGeHAk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B9GpTbwc.js";import"./PdfViewerOutlineSidebar-2h33ddJ1.js";import"./PdfViewerSidebarHeader-SbywsTiT.js";import"./useBaseUiId-kMUnh5gd.js";import"./useControlled-DnwEhQGz.js";import"./CompositeRoot-D8brjfqv.js";import"./CompositeItem-DA_aeyOT.js";import"./ToolbarRootContext-B4KY25qe.js";import"./composite-DJRtaiwf.js";import"./svgIconContainer-6SFRCpjB.js";import"./PdfViewerSearchBar-Dcxqa47Q.js";import"./chevron-up-D34ATitk.js";import"./chevron-down-5LJm5ghw.js";import"./cross-CNr5tSf5.js";import"./PdfViewerSidebar-DpwA9Y1z.js";import"./index-CSve1EYF.js";import"./index-Dsym8n4N.js";import"./index-GkXmmaX0.js";import"./PdfViewerToolbar-C49ptSCy.js";import"./Button-DxPOU_Mc.js";import"./chevron-right-ZVvoedug.js";import"./Input-Ck3038DH.js";import"./search-BZkb1jfI.js";import"./spin-BWdHFI0N.js";import"./error-BA5REKvs.js";import"./withOsdkMetrics-NmiraHl_.js";import"./makeExternalStore-C3reCNG-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
