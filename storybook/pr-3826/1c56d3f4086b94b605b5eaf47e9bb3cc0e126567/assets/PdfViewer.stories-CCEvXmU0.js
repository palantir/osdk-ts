import{j as r,M as s}from"./iframe-DcmfU77k.js";import{P as p}from"./pdf-viewer-CfjX3xxL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Alvx0x1q.js";import"./preload-helper-iUgfFPGb.js";import"./PdfRenderer-BZ_m0Y7v.js";import"./index-D2kWKPAJ.js";import"./PdfViewer-DkSsUI8s.js";import"./PdfViewer.module.css-NZYVMFjs.js";import"./PdfViewerAnnotationLayer-Bit-nOGN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BTLyRJEo.js";import"./PdfViewerOutlineSidebar-C1KcbHEh.js";import"./PdfViewerSidebarHeader-DOb9BiLy.js";import"./useBaseUiId-BoHkQsKU.js";import"./useControlled-eRGHzZHW.js";import"./CompositeRoot-cvktibo-.js";import"./CompositeItem-C3SNLcxf.js";import"./ToolbarRootContext-Dpg9_Vj3.js";import"./composite-Bd0PbqGb.js";import"./svgIconContainer-DT6N8Ki8.js";import"./PdfViewerSearchBar-gpjHYnVs.js";import"./chevron-up-C71wa_fg.js";import"./chevron-down-DAzj8uTp.js";import"./cross-ECmaaCGW.js";import"./PdfViewerSidebar-DPb6P2rj.js";import"./index-D5ug52rE.js";import"./index-BS3Mo4g_.js";import"./index-DWk8uxuI.js";import"./PdfViewerToolbar-sASEwt8e.js";import"./Button-BglaF_Tj.js";import"./chevron-right--XWNjCib.js";import"./Input-BADaHFeb.js";import"./search-Ai29WxXU.js";import"./spin-CLTgqHxh.js";import"./error-BE5jQAua.js";import"./withOsdkMetrics-3Fje_1hu.js";import"./makeExternalStore-B7HcnYk0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
