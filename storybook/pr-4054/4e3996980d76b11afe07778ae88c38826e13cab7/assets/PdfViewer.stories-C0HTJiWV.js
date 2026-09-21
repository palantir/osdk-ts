import{j as r,M as s}from"./iframe-Cp1ziXca.js";import{P as p}from"./pdf-viewer-DU-O1bXW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-PsTRwWlN.js";import"./preload-helper-Ca6LY0_H.js";import"./PdfViewer-DOw7qJ5X.js";import"./index-CCsyzFvm.js";import"./BasePdfViewer-BahS71cg.js";import"./BasePdfViewer.module.css-DGVAF6wZ.js";import"./PdfViewerAnnotationLayer-A0G_Jwv8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-HTIjvZ_m.js";import"./PdfViewerOutlineSidebar-DRFSKABY.js";import"./PdfViewerSidebarHeader-u5YCb1aj.js";import"./useBaseUiId-Bt37xHZm.js";import"./useControlled-DfLwj8uM.js";import"./CompositeRoot-Dl9EI4kR.js";import"./CompositeItem-B97tQNhx.js";import"./ToolbarRootContext-C7YmkdWj.js";import"./composite-B4QegilG.js";import"./svgIconContainer-DXlIscgi.js";import"./PdfViewerSearchBar-BiPJhoBi.js";import"./chevron-up-4-YUVEGg.js";import"./chevron-down-BiBmRA_9.js";import"./cross-ByCUwATg.js";import"./PdfViewerSidebar-BhZXIxjl.js";import"./index-Ccm7niur.js";import"./index-DSsYOOxm.js";import"./index-DFQVNtXJ.js";import"./PdfViewerToolbar-CQPegFTh.js";import"./Button-B9LauqrE.js";import"./chevron-right-DLFo-WTw.js";import"./Input-BUxEsfiE.js";import"./search-DKOFfaqB.js";import"./spin-BTIRclcm.js";import"./error-Cklok7wh.js";import"./withOsdkMetrics-CXAPHKM8.js";import"./makeExternalStore-UGtoi_Zp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
