import{j as r,M as s}from"./iframe-DTW0zbJg.js";import{P as p}from"./pdf-viewer-gP4wWqOz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D7R_1bh_.js";import"./preload-helper-CHqtrcoH.js";import"./PdfViewer-DLh6zURG.js";import"./index-C19Cbd9w.js";import"./BasePdfViewer-B_kmwmhf.js";import"./BasePdfViewer.module.css-CUS_molj.js";import"./PdfViewerAnnotationLayer-BNh4UoKD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_-UrzO_.js";import"./PdfViewerOutlineSidebar-DMIC52dx.js";import"./PdfViewerSidebarHeader-BhxjrBYm.js";import"./useBaseUiId-pXEfVnMq.js";import"./useControlled-B9BNpkGu.js";import"./CompositeRoot-CdTRmNxi.js";import"./CompositeItem-B8f4EvZj.js";import"./ToolbarRootContext-D1Ryhi91.js";import"./composite-Ch_TQxW6.js";import"./svgIconContainer-C_NUwc74.js";import"./PdfViewerSearchBar-Bsl0j20k.js";import"./chevron-up-By6wdVuW.js";import"./chevron-down-B_r9FktR.js";import"./cross-DUPbOXnx.js";import"./PdfViewerSidebar-DBPRSR52.js";import"./index-DwQpT-YG.js";import"./index-Dd12A0b5.js";import"./index-BNxdJsoF.js";import"./PdfViewerToolbar-DTh3e5Lr.js";import"./Button-Bl_fb9NZ.js";import"./chevron-right-B9kMVEGI.js";import"./Input-9Y-Iasoe.js";import"./search-DeSIHMGj.js";import"./spin-BwVBiSKR.js";import"./error-DehDfWea.js";import"./withOsdkMetrics-BhopaHNu.js";import"./makeExternalStore-Cd_b6BPY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
