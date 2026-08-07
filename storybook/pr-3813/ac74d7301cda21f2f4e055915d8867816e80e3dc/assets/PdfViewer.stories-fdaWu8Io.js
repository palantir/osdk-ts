import{j as r,M as s}from"./iframe-BN9OJAgN.js";import{P as p}from"./pdf-viewer-DeFIQb5i.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CN1xEmwH.js";import"./preload-helper-DTgW9lTk.js";import"./PdfRenderer-DFQszgiO.js";import"./index-L-2VxvDT.js";import"./PdfViewer-gSv6JjF6.js";import"./PdfViewer.module.css-DO76gNoR.js";import"./PdfViewerAnnotationLayer-CNoxwE6m.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DbGPl4ve.js";import"./PdfViewerOutlineSidebar-CHSOHN4a.js";import"./PdfViewerSidebarHeader-DKSJ4D69.js";import"./useBaseUiId-CFnH6spW.js";import"./useControlled-CD4tqtci.js";import"./CompositeRoot-DkGUBfH2.js";import"./CompositeItem-3je88er8.js";import"./ToolbarRootContext-D9x68E4s.js";import"./composite-B_FYTcr6.js";import"./svgIconContainer-hHjG4XJm.js";import"./PdfViewerSearchBar-Bqq5kesN.js";import"./chevron-up-DSYJxK9d.js";import"./chevron-down-DEEy7cZJ.js";import"./cross-ByA-dAnm.js";import"./PdfViewerSidebar-CoPoP1CO.js";import"./index-BIb_aCOQ.js";import"./index-XU0FUMPK.js";import"./index-BVudBLeJ.js";import"./PdfViewerToolbar-DI7N5UQI.js";import"./Button-DF2G5VEF.js";import"./chevron-right-CX47_SlL.js";import"./Input-BRu8vzsZ.js";import"./search-BpHAJh9z.js";import"./spin-BTtrQNHJ.js";import"./error-ViRMI7b4.js";import"./withOsdkMetrics-D2gdZo_l.js";import"./makeExternalStore-DH_VyjIn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
