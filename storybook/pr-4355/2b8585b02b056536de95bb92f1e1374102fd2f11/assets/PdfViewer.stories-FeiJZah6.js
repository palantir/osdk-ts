import{j as r,M as s}from"./iframe-BEK1shVf.js";import{P as p}from"./pdf-viewer-CkKnqw0Q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Mw0ZcwYC.js";import"./preload-helper-BuTZfPnC.js";import"./PdfViewer-Ce4YUL7H.js";import"./index-BqkMqHUK.js";import"./BasePdfViewer-CkyIpp3o.js";import"./BasePdfViewer.module.css-Dt0fF1C5.js";import"./PdfViewerAnnotationLayer-C91svmqj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-qb5S3oxW.js";import"./PdfViewerOutlineSidebar-C-TrKRj5.js";import"./PdfViewerSidebarHeader-BPcIH5fA.js";import"./useBaseUiId-Bbs9yJ0n.js";import"./useControlled-BrC9O3tj.js";import"./CompositeRoot-55jNCp0L.js";import"./CompositeItem-Zu9n7Vbm.js";import"./ToolbarRootContext-BqUxfNXS.js";import"./composite-_69CGg7n.js";import"./svgIconContainer-B5e6FaMs.js";import"./PdfViewerSearchBar-UVCtpSOD.js";import"./chevron-up-BqU-CfFL.js";import"./chevron-down-DvnARLJ3.js";import"./cross-eaaked_u.js";import"./PdfViewerSidebar-BjTCfqP5.js";import"./index-CzyW3VIg.js";import"./index-ZWNosLBb.js";import"./index-Bb4KPyDR.js";import"./PdfViewerToolbar-D2EbpAOz.js";import"./Button-BBBCKJre.js";import"./chevron-right-VBLWs7uj.js";import"./Input-p3RqWT-8.js";import"./search-BfhK71_u.js";import"./spin-BQa_SNkw.js";import"./error-BmGg8gRf.js";import"./withOsdkMetrics-Ckzv-T2_.js";import"./makeExternalStore-BMPgGjGI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
