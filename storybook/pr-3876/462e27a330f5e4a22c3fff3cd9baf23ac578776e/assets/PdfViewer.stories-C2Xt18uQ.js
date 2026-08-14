import{j as r,M as s}from"./iframe-C5plkjSh.js";import{P as p}from"./pdf-viewer-C_3og23t.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_oKUFO0.js";import"./preload-helper-D2IaZEKn.js";import"./PdfViewer-ISB8TJQw.js";import"./index-D9wyEakh.js";import"./BasePdfViewer-BhVLVPVO.js";import"./BasePdfViewer.module.css-1E_WBjUN.js";import"./PdfViewerAnnotationLayer-B8q9x0pN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CpbiYTBQ.js";import"./PdfViewerOutlineSidebar-MJ8fLOk_.js";import"./PdfViewerSidebarHeader-C4hOsGLI.js";import"./useBaseUiId-V6kg8ls-.js";import"./useControlled-XDmIyGCI.js";import"./CompositeRoot-De8hU1jy.js";import"./CompositeItem-C0Ixb4m4.js";import"./ToolbarRootContext-BWxTlH90.js";import"./composite-BxJrl2yy.js";import"./svgIconContainer-EWLL2EhA.js";import"./PdfViewerSearchBar-DCuVL-sI.js";import"./chevron-up-Bf08q_tY.js";import"./chevron-down-DJkRQn8M.js";import"./cross-qTcD5Byv.js";import"./PdfViewerSidebar-DInjy4Gq.js";import"./index-EcGiAU7n.js";import"./index-D5BdYI2w.js";import"./index-DGSE155D.js";import"./PdfViewerToolbar-BPDOhNbe.js";import"./Button-D-euGQeq.js";import"./chevron-right-DGkQQZ1v.js";import"./Input-B8vRDl86.js";import"./search-DBXUIzFs.js";import"./spin-CZDovIOL.js";import"./error-BgKA35zl.js";import"./withOsdkMetrics-CfCFI9Ho.js";import"./makeExternalStore-BinvBmxp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
