import{j as r,M as s}from"./iframe-C4XKYgE5.js";import{P as p}from"./pdf-viewer-HJnmkECS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BeTjnWb8.js";import"./preload-helper-ByMIrFv4.js";import"./PdfRenderer-Df5suuQY.js";import"./index-CiCimGv7.js";import"./PdfViewer-BXC8Papz.js";import"./PdfViewer.module.css-rpiCVTj0.js";import"./PdfViewerAnnotationLayer-BpgZQ3zQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DVppQE9Q.js";import"./PdfViewerOutlineSidebar-BR1vLZ1A.js";import"./PdfViewerSidebarHeader-85rw2xHj.js";import"./useBaseUiId-1dUFch-_.js";import"./useControlled-CPx5Hc84.js";import"./CompositeRoot-CKzq5YOg.js";import"./CompositeItem-NtgMCdQI.js";import"./ToolbarRootContext-K6EaIDzn.js";import"./composite-C9QZRf1q.js";import"./svgIconContainer-DWB9uWsU.js";import"./PdfViewerSearchBar-CNVb23Mc.js";import"./chevron-up-DySS9xL8.js";import"./chevron-down-C0TNa5Vz.js";import"./cross-SskXVoXQ.js";import"./PdfViewerSidebar-CHZwEPYD.js";import"./index-DkzcJ2Zz.js";import"./index-DIw1VLAV.js";import"./index-s5F2T_aq.js";import"./PdfViewerToolbar-CLmnw_ft.js";import"./Button-C_YGALk9.js";import"./chevron-right-CmFyYDO7.js";import"./Input-BTVpid4G.js";import"./search-CBdJRNZZ.js";import"./spin-Bmwb3r6B.js";import"./error-RTaYQnfW.js";import"./withOsdkMetrics-CrDec_YM.js";import"./makeExternalStore-BDrjJ8SL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
