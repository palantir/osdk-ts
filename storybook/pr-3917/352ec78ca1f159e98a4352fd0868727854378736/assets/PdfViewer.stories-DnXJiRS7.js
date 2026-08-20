import{j as r,M as s}from"./iframe-lVIo6mCc.js";import{P as p}from"./pdf-viewer-C_rKDlPN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CFG8jS3z.js";import"./preload-helper-BPCknu7S.js";import"./PdfViewer-e0CmI6ua.js";import"./index-sQKHJ0R4.js";import"./BasePdfViewer-DEVAg5OY.js";import"./BasePdfViewer.module.css-NBiwjBJi.js";import"./PdfViewerAnnotationLayer-WRQKK_gz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BxBmcDqa.js";import"./PdfViewerOutlineSidebar-B_Wny9DF.js";import"./PdfViewerSidebarHeader-QkHp7iHP.js";import"./useBaseUiId-Bb_Owoni.js";import"./useControlled-D2ATBKpk.js";import"./CompositeRoot-CGGKSqUq.js";import"./CompositeItem-KgTOqVUP.js";import"./ToolbarRootContext-BEDTSOO-.js";import"./composite-Dyu8jPHN.js";import"./svgIconContainer-KAJria2X.js";import"./PdfViewerSearchBar-DffpGQKI.js";import"./chevron-up-hMQxhNhY.js";import"./chevron-down-DQF1xsk8.js";import"./cross-DDW7y3Rx.js";import"./PdfViewerSidebar-BN2ecfCj.js";import"./index-amUPlgmX.js";import"./index-BPLBY7PN.js";import"./index-KnI2DQbj.js";import"./PdfViewerToolbar-B86UvIbt.js";import"./Button-HHhZVC20.js";import"./chevron-right-D0l5_p-X.js";import"./Input-BC_GUukM.js";import"./search-5GVEDD9j.js";import"./spin-CftwWLvy.js";import"./error-CvWvuZvg.js";import"./withOsdkMetrics-DSn6dU66.js";import"./makeExternalStore-D7Usbb1F.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
