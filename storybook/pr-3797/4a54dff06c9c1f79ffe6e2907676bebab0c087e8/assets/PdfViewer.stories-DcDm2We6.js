import{j as r,M as s}from"./iframe-QFYCOUfb.js";import{P as p}from"./pdf-viewer-Ct-voOEC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CfnaeWem.js";import"./preload-helper-BvwAeipT.js";import"./PdfRenderer-xsf31E4l.js";import"./index-r2m1MzwO.js";import"./PdfViewer-C18cqBv3.js";import"./PdfViewer.module.css--Vbr6ri7.js";import"./PdfViewerAnnotationLayer-C1rxX8xp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-w9nFR2vk.js";import"./PdfViewerOutlineSidebar-DIw0gQg5.js";import"./PdfViewerSidebarHeader-C3cvU1v9.js";import"./useBaseUiId-CWCv1RJ1.js";import"./useControlled-DvS8LHTQ.js";import"./CompositeRoot-TgFpiDK6.js";import"./CompositeItem-BzxfLAiE.js";import"./ToolbarRootContext-DxtjrKYm.js";import"./composite-0JPHK5U6.js";import"./svgIconContainer-BTKuLZDT.js";import"./PdfViewerSearchBar-Dsu-V7dr.js";import"./chevron-up-B_t-zlYH.js";import"./chevron-down-8j45KwVK.js";import"./cross-lN9Ye2mz.js";import"./PdfViewerSidebar-k2O8yR_R.js";import"./index-nzm4ayqk.js";import"./index-CFtpFERN.js";import"./index-p1_Aw4sU.js";import"./PdfViewerToolbar-ETiuXAgV.js";import"./Button-CCCx6o1T.js";import"./chevron-right-Bzhs1m5a.js";import"./Input-XI1xCScB.js";import"./search-A6D3Nphw.js";import"./spin-TuVfxf_V.js";import"./error-DkSBwZqT.js";import"./withOsdkMetrics-BwOMOUV-.js";import"./makeExternalStore-jT5LUsaV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
