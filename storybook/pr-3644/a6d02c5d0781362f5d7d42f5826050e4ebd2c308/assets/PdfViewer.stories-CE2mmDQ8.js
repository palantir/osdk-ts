import{j as r,M as s}from"./iframe-d2ViTWmA.js";import{P as p}from"./pdf-viewer-DPYlCSJm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CDYc1vq5.js";import"./preload-helper-1PWcWiMd.js";import"./PdfRenderer-B1Xq-rA4.js";import"./index-BsvVWl42.js";import"./PdfViewer-B9gS7xVS.js";import"./PdfViewer.module.css-D667rdd_.js";import"./PdfViewerAnnotationLayer-BRp8YePN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CtDOer2F.js";import"./PdfViewerOutlineSidebar-BZVtLkq5.js";import"./PdfViewerSidebarHeader-Cu3sCkS3.js";import"./useBaseUiId-s9GkMrfx.js";import"./useControlled-DP-_xKMv.js";import"./CompositeRoot-D06RKDgd.js";import"./CompositeItem-LXwnIylm.js";import"./ToolbarRootContext-jdhYQx8W.js";import"./composite-DwUHzh1U.js";import"./svgIconContainer-Ca_axEBY.js";import"./PdfViewerSearchBar-C0X8TX54.js";import"./chevron-up-BI3oMN-v.js";import"./chevron-down-Byfe-kDK.js";import"./cross-CqB-COsD.js";import"./PdfViewerSidebar-CIW98-pY.js";import"./index-B5VTl4Up.js";import"./index-DCClUVMF.js";import"./index-CblGNSh8.js";import"./PdfViewerToolbar-CyyQwu0F.js";import"./Button-3wSnBm2K.js";import"./chevron-right-CTBNCB-M.js";import"./Input-WAgGL-in.js";import"./search-BPaGFRW6.js";import"./spin-hs5YNck9.js";import"./error-BLkrxYqH.js";import"./withOsdkMetrics-gYMfRBGI.js";import"./makeExternalStore-B9z0_w0q.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
