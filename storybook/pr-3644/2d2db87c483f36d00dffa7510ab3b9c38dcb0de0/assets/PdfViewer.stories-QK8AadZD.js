import{j as r,M as s}from"./iframe-D1qwZgrw.js";import{P as p}from"./pdf-viewer-BmNKTF5P.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CQRbCUr2.js";import"./preload-helper-y71pt7P7.js";import"./PdfRenderer-8gEiFMf_.js";import"./index-B6BwVqaI.js";import"./PdfViewer-Cla1BX1g.js";import"./PdfViewer.module.css-ByP-g08W.js";import"./PdfViewerAnnotationLayer-BamuNq-F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DtBhw6TW.js";import"./PdfViewerOutlineSidebar-KRbUH5Rt.js";import"./PdfViewerSidebarHeader-D7lsLlkp.js";import"./useBaseUiId-Dh6u135s.js";import"./useControlled-BpII9gYo.js";import"./CompositeRoot-zT1xVrjJ.js";import"./CompositeItem-C3OZXOGS.js";import"./ToolbarRootContext-CHgd-qRk.js";import"./composite-BUDXSI_3.js";import"./svgIconContainer-CXKKVeo3.js";import"./PdfViewerSearchBar-C7BHFjyn.js";import"./chevron-up-DEEM5k04.js";import"./chevron-down-ZKWIVMTe.js";import"./cross-Cz-1Spna.js";import"./PdfViewerSidebar-DhcpdrFo.js";import"./index-RkfjgeCt.js";import"./index-Bbh0zUEq.js";import"./index-DMJ0QAck.js";import"./PdfViewerToolbar-lEeRLXK9.js";import"./Button-CAzs_x2n.js";import"./chevron-right-DHOdcnWF.js";import"./Input-C2dAsZUY.js";import"./search-CbairpPD.js";import"./spin-CdoBfyYY.js";import"./error-DdZD0Hny.js";import"./withOsdkMetrics-DXqXSfKv.js";import"./makeExternalStore-BtFhiYDK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
