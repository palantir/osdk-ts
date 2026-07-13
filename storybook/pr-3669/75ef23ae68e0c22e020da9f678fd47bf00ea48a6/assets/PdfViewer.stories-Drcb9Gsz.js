import{j as r,M as s}from"./iframe-bDs-tfNC.js";import{P as p}from"./pdf-viewer-DgJr-eUu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-vGqXfsXv.js";import"./preload-helper-xclCqiG3.js";import"./PdfRenderer-C3JN4aoK.js";import"./index-HWGdEnjl.js";import"./PdfViewer-BtTkCmgu.js";import"./PdfViewer.module.css-CGMSWo76.js";import"./PdfViewerAnnotationLayer-DOKju1bI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-0Qy8MxFH.js";import"./PdfViewerOutlineSidebar-Bd3j_nGW.js";import"./PdfViewerSidebarHeader-BJQMb_10.js";import"./useBaseUiId-BsW6v9Vr.js";import"./useControlled-9yXOfdlI.js";import"./CompositeRoot-YxYnQUAz.js";import"./CompositeItem-DOuo9giL.js";import"./ToolbarRootContext-Cg1Bkc79.js";import"./composite-J_sH6rAK.js";import"./svgIconContainer-Ceoa031m.js";import"./PdfViewerSearchBar-BQc4ZvaV.js";import"./chevron-up-DlsMfQRQ.js";import"./chevron-down-MLZfQEBO.js";import"./cross-DhXu0fA-.js";import"./PdfViewerSidebar-B6B6uLKV.js";import"./index-BkpUBsi6.js";import"./index-DB45OZsZ.js";import"./index-DwGNv9ID.js";import"./PdfViewerToolbar-DRPgj48Y.js";import"./Button-V5Mt5VaF.js";import"./chevron-right-DQmyfXNM.js";import"./Input-D-JIo9_F.js";import"./search-tKPO-gQM.js";import"./spin-CxvM8Qoz.js";import"./error-B04Yj6SO.js";import"./withOsdkMetrics-mbQEKI8d.js";import"./makeExternalStore-DCHiXpf2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
