import{j as r,M as s}from"./iframe-pYM9Kle3.js";import{P as p}from"./pdf-viewer-DgsRUEet.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CYrZ7dtQ.js";import"./preload-helper-D5KvRmWw.js";import"./PdfRenderer-DE7xZL06.js";import"./index-aGm8-TAF.js";import"./PdfViewer-Dd6j8Oq7.js";import"./PdfViewer.module.css-MD-ssOFG.js";import"./PdfViewerAnnotationLayer-DLHH1bWX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DIHBCw5z.js";import"./PdfViewerOutlineSidebar-BauTQrJ4.js";import"./PdfViewerSidebarHeader-wMz5yp_m.js";import"./useBaseUiId-RIZ0yVnd.js";import"./useControlled-BncmKvh2.js";import"./CompositeRoot-DJrwHe7O.js";import"./CompositeItem-Cx5UxeIi.js";import"./ToolbarRootContext-B9CW3s9P.js";import"./composite-sTRtyjQk.js";import"./svgIconContainer-C_8arsQh.js";import"./PdfViewerSearchBar-DxHpF7nM.js";import"./chevron-up-BBEN5Z5c.js";import"./chevron-down-BISeLNQR.js";import"./cross-BnBrW-eg.js";import"./PdfViewerSidebar-B4rnDCa4.js";import"./index-CS1mNa9j.js";import"./index-W-KSUEkN.js";import"./index-BOW_h0zx.js";import"./PdfViewerToolbar-CTWVVkS7.js";import"./Button-CU-ddK4J.js";import"./chevron-right-DGVudSIr.js";import"./Input-CwD97Qzu.js";import"./search-DhM0Kz_K.js";import"./spin-B2XXE1TW.js";import"./error-BxZYQlfA.js";import"./withOsdkMetrics-DOlv4fq5.js";import"./makeExternalStore-BkiGOiIS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
