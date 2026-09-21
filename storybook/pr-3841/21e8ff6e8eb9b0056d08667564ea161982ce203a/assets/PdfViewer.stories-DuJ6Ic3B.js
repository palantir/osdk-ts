import{j as r,M as s}from"./iframe-CPDW-PQM.js";import{P as p}from"./pdf-viewer-B2Fy-puD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bhn0VGef.js";import"./preload-helper-DLPPZvQy.js";import"./PdfViewer-CtvjanQM.js";import"./index-BD9zYiqo.js";import"./BasePdfViewer-CDINiDYj.js";import"./BasePdfViewer.module.css-BaOP0vft.js";import"./PdfViewerAnnotationLayer-Djwy8Wfw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D1jvWeff.js";import"./PdfViewerOutlineSidebar-DzaVKVn5.js";import"./PdfViewerSidebarHeader-DH6T2WsF.js";import"./useBaseUiId-B5I3_RDX.js";import"./useControlled-i4DTbWgc.js";import"./CompositeRoot-CMpp6cZL.js";import"./CompositeItem-BKuiG4wu.js";import"./ToolbarRootContext-OaLx1XI9.js";import"./composite-p-h0KAPd.js";import"./svgIconContainer-C7wqaI1B.js";import"./PdfViewerSearchBar-ZAuRCOjd.js";import"./chevron-up-Bq9Sdb4M.js";import"./chevron-down-BhbuOWem.js";import"./cross-DR7gxXwq.js";import"./PdfViewerSidebar-DAAj3En0.js";import"./index-DF93-j-r.js";import"./index-fIzLT5CY.js";import"./index-BTWFHyEC.js";import"./PdfViewerToolbar-2pIS3FMQ.js";import"./Button-CRJqCk8i.js";import"./chevron-right-aS_ADXbm.js";import"./Input-CD_gqaHO.js";import"./search-BZvDdvYt.js";import"./spin-CTwz9vZ2.js";import"./error-BojBsd96.js";import"./withOsdkMetrics-BSyWaS_D.js";import"./makeExternalStore-EbQWCuwR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
