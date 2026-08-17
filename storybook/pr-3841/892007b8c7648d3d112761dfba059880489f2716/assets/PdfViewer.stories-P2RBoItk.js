import{j as r,M as s}from"./iframe-pN3HhfHp.js";import{P as p}from"./pdf-viewer-_Xv4_dRs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-3kCAhKd8.js";import"./preload-helper-vaGveZOW.js";import"./PdfViewer-7xNLfkGm.js";import"./index-DbLToRXl.js";import"./BasePdfViewer-CG_eCDO2.js";import"./BasePdfViewer.module.css-7f7NLygw.js";import"./PdfViewerAnnotationLayer-DePDcxEk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B9xqXqaI.js";import"./PdfViewerOutlineSidebar-C_YGs1pm.js";import"./PdfViewerSidebarHeader-cKmhoimb.js";import"./useBaseUiId-Dk4L8uHt.js";import"./useControlled-DsCbQ_G9.js";import"./CompositeRoot-GHiU2gld.js";import"./CompositeItem-aJ_0QEux.js";import"./ToolbarRootContext-TcRvxzQ1.js";import"./composite-BAN-Mgn7.js";import"./svgIconContainer-BGAfUvl9.js";import"./PdfViewerSearchBar-YT4chk8G.js";import"./chevron-up-f0WGYkFE.js";import"./chevron-down-CNN1sYpV.js";import"./cross--IVjn_-r.js";import"./PdfViewerSidebar-B32Hsfhu.js";import"./index-ngzZObxc.js";import"./index-Dk2VIyAU.js";import"./index-eDB9grVg.js";import"./PdfViewerToolbar-V8AeMRBW.js";import"./Button-DxLN_Dfx.js";import"./chevron-right-CpU3sY-5.js";import"./Input-Dc026DBB.js";import"./search-DOtDYiw4.js";import"./spin-DltPvMeK.js";import"./error-BB5T5PdG.js";import"./withOsdkMetrics-W_WGwbDq.js";import"./makeExternalStore-CIgwPDSw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
