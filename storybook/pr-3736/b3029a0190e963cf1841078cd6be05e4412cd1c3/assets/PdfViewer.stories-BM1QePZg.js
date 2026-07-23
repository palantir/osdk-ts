import{j as r,M as s}from"./iframe-DLVNMlqD.js";import{P as p}from"./pdf-viewer-DAOXY9Er.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DtZ66g6R.js";import"./preload-helper-Dpu4tGQ7.js";import"./PdfRenderer-LcL4yWHN.js";import"./index-VZIxZIF4.js";import"./PdfViewer-CjU_YeS_.js";import"./PdfViewer.module.css-BmvLbr1c.js";import"./PdfViewerAnnotationLayer-CYNVpaDk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dmlgo_Ei.js";import"./PdfViewerOutlineSidebar-DlWFNz8I.js";import"./PdfViewerSidebarHeader-d7DRG8Xh.js";import"./useBaseUiId-D4E9zkR8.js";import"./useControlled-DoRwBFfs.js";import"./CompositeRoot-CWe-Ln59.js";import"./CompositeItem-BrPdeWN4.js";import"./ToolbarRootContext-vV9AatFj.js";import"./composite-BtSnV65G.js";import"./svgIconContainer-BQaiUdVM.js";import"./PdfViewerSearchBar-DLalgVI-.js";import"./chevron-up-mk184aj9.js";import"./chevron-down-BD05PCKj.js";import"./cross-DEoL_1fn.js";import"./PdfViewerSidebar-D8c2TQY-.js";import"./index-CjoRvmvv.js";import"./index-CBkAsu_e.js";import"./index-D03cC0b_.js";import"./PdfViewerToolbar-CCwGSkkq.js";import"./Button-BjyA60hN.js";import"./chevron-right-rN7BNAKE.js";import"./Input-DbTBrNHr.js";import"./search-BXKZxdce.js";import"./spin-BIaR3Rin.js";import"./error-e1L3uW56.js";import"./withOsdkMetrics-44cOR7GP.js";import"./makeExternalStore-Zo0GiL4s.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
