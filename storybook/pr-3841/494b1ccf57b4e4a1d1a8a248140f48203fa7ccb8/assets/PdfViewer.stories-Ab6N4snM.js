import{j as r,M as s}from"./iframe-hmluRZS5.js";import{P as p}from"./pdf-viewer-DC889Yrv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cd4u5jGG.js";import"./preload-helper-DlYZq8_X.js";import"./PdfViewer-BDGmLcv-.js";import"./index-DlmwBpMI.js";import"./BasePdfViewer-BQAi-EgD.js";import"./BasePdfViewer.module.css-ChlyazcE.js";import"./PdfViewerAnnotationLayer-DUquSFVO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-TnULO_ib.js";import"./PdfViewerOutlineSidebar-C8QxqMe3.js";import"./PdfViewerSidebarHeader-DDJzPHJC.js";import"./useBaseUiId-Ce6hVQyf.js";import"./useControlled-CWtQ2etk.js";import"./CompositeRoot-BlbBabfC.js";import"./CompositeItem-Bger7i4K.js";import"./ToolbarRootContext-BviESwyl.js";import"./composite-Cz3P8fmc.js";import"./svgIconContainer-Cr9UBTnz.js";import"./PdfViewerSearchBar-Do5SyL7_.js";import"./chevron-up-DmSp0BEp.js";import"./chevron-down-BV1ESAvw.js";import"./cross-CF7Ek918.js";import"./PdfViewerSidebar-D1ppXFFK.js";import"./index-CYwmlkYY.js";import"./index-eMB_Bo_f.js";import"./index-Bc2sNs6_.js";import"./PdfViewerToolbar-C8M_k8tP.js";import"./Button-UcoIXCLv.js";import"./chevron-right-DJSAdI4h.js";import"./Input-uUNDzlAG.js";import"./search-CyNzQTjU.js";import"./spin-8DP7kJoh.js";import"./error-B495uG_z.js";import"./withOsdkMetrics-BsviGqu5.js";import"./makeExternalStore-DOooQeVW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
