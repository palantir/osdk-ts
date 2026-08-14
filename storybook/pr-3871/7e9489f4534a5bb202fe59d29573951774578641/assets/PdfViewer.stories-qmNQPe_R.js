import{j as r,M as s}from"./iframe-CvIhuXi9.js";import{P as p}from"./pdf-viewer-DlF6ubta.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D2YyUIdd.js";import"./preload-helper-ngrsZYi_.js";import"./PdfViewer-BCzzypra.js";import"./index-BWTVCJU3.js";import"./BasePdfViewer-Dt2VHZX5.js";import"./BasePdfViewer.module.css-B0QKafzh.js";import"./PdfViewerAnnotationLayer-C1oEtJ-3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DbDT0A2y.js";import"./PdfViewerOutlineSidebar-Cjip6bIX.js";import"./PdfViewerSidebarHeader-BnQP2xvM.js";import"./useBaseUiId-DCKRG5Ce.js";import"./useControlled-ChdRNV66.js";import"./CompositeRoot-DSdtmKYT.js";import"./CompositeItem-gjyxrrR_.js";import"./ToolbarRootContext-ekWaHIpi.js";import"./composite-CHb5-0xp.js";import"./svgIconContainer-CGfWhKh9.js";import"./PdfViewerSearchBar-DDL3BuCM.js";import"./chevron-up-kaNgAkNT.js";import"./chevron-down-Dj__g3dO.js";import"./cross-B5_Z7JKl.js";import"./PdfViewerSidebar-Dx4cWArZ.js";import"./index-MB-mmNCq.js";import"./index-00-WrU0n.js";import"./index-BBNVMWE6.js";import"./PdfViewerToolbar-DVx7wVK1.js";import"./Button-C6xashMw.js";import"./chevron-right-7DI_kuzd.js";import"./Input-OiIQcnvy.js";import"./search-CQcV4AtZ.js";import"./spin-BkkNAu7A.js";import"./error-CtnHAJul.js";import"./withOsdkMetrics-BC7K3rr_.js";import"./makeExternalStore-vUi9AgyS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
