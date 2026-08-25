import{j as r,M as s}from"./iframe-rlv3mUdt.js";import{P as p}from"./pdf-viewer-cIXU0LiG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bf2lYDZP.js";import"./preload-helper-C8E9pHov.js";import"./PdfViewer-D_QeNUdw.js";import"./index-BwKgkhoJ.js";import"./BasePdfViewer-C_L2l10q.js";import"./BasePdfViewer.module.css-D8Ct-KgB.js";import"./PdfViewerAnnotationLayer-CznahAWx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C2rrxehe.js";import"./PdfViewerOutlineSidebar-B4zFYn8B.js";import"./PdfViewerSidebarHeader-DrI7peJ1.js";import"./useBaseUiId-Dp7FKVfu.js";import"./useControlled-CsmgIjgz.js";import"./CompositeRoot-GD5ltds4.js";import"./CompositeItem-BwBfuGb4.js";import"./ToolbarRootContext-Dj6pA1B5.js";import"./composite-cntM3euM.js";import"./svgIconContainer-BR20IK9W.js";import"./PdfViewerSearchBar-JJx5Y5th.js";import"./chevron-up-bCFlje3r.js";import"./chevron-down-ByAn-ifv.js";import"./cross-cAPyHYLw.js";import"./PdfViewerSidebar-907Xwvhm.js";import"./index-Bj0ChkFd.js";import"./index-DJ9-JExy.js";import"./index-BUfObnx_.js";import"./PdfViewerToolbar-DFicaejK.js";import"./Button-DOX6KGuK.js";import"./chevron-right-D0J_GZp4.js";import"./Input-DPtkjq4w.js";import"./search-B6WH-E2J.js";import"./spin-D1ogo7C7.js";import"./error-D3VLZxq_.js";import"./withOsdkMetrics-Bay5Qfh_.js";import"./makeExternalStore-B2qXKEyL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
