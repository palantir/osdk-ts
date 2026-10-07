import{j as r,M as s}from"./iframe-TTTmSYHm.js";import{P as p}from"./pdf-viewer-CuItt49N.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-VCkgrtOR.js";import"./preload-helper-ClYOkReB.js";import"./PdfViewer-DCvDNlJR.js";import"./index-MsEGuD0o.js";import"./BasePdfViewer-D_4idmIu.js";import"./BasePdfViewer.module.css-CrbsqP3B.js";import"./PdfViewerAnnotationLayer-Du_-2v3P.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DYnVV8J6.js";import"./PdfViewerOutlineSidebar-DMtAaGpd.js";import"./PdfViewerSidebarHeader-BUFTN90g.js";import"./useBaseUiId-DzbI9-Sb.js";import"./useControlled-bG7LsTar.js";import"./CompositeRoot-_Zl1bY7P.js";import"./CompositeItem-DOKaGOjC.js";import"./ToolbarRootContext-Da-vX-iu.js";import"./composite-BPJ0g_Cp.js";import"./svgIconContainer-DU6hcGdL.js";import"./PdfViewerSearchBar-B5l9my7b.js";import"./chevron-up-DKUANvKI.js";import"./chevron-down-BWZ8_fkX.js";import"./cross-DqugLD6r.js";import"./PdfViewerSidebar-DByw9bkM.js";import"./index-DKumu57d.js";import"./index-CF7SEcu1.js";import"./index-Cqp_2UpH.js";import"./PdfViewerToolbar-PyzXV69U.js";import"./Button-D_Pqa9bY.js";import"./chevron-right-xAMkAOLA.js";import"./Input-B2lkln1U.js";import"./search-CpIo6FKV.js";import"./spin-Cq4R5Kn6.js";import"./error-BU0mbQfC.js";import"./withOsdkMetrics-C1xKtNKq.js";import"./makeExternalStore-BiPnQfDm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
