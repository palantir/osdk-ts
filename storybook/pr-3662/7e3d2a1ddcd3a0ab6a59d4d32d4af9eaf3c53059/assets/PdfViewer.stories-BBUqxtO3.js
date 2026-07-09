import{j as r,M as s}from"./iframe-CeWnsIVU.js";import{P as p}from"./pdf-viewer-CURL3X3V.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-COskoyR6.js";import"./preload-helper-CAYenRhz.js";import"./PdfRenderer-CsILJgyJ.js";import"./index-C_PBaTq4.js";import"./PdfViewer-cKUfbjTw.js";import"./PdfViewer.module.css-DrP0jZTp.js";import"./PdfViewerAnnotationLayer-rOoGxw0C.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BjjcFbmm.js";import"./PdfViewerOutlineSidebar-CcN1655j.js";import"./PdfViewerSidebarHeader-BkXr1A0t.js";import"./useBaseUiId-DVX42A46.js";import"./useControlled-Lzs3Xe3I.js";import"./CompositeRoot-CWNMcrVG.js";import"./CompositeItem-B3fNvpZt.js";import"./ToolbarRootContext-VC6o6PlY.js";import"./composite-B8sMdsar.js";import"./svgIconContainer-DJeVMly8.js";import"./PdfViewerSearchBar-c1HCmp2W.js";import"./chevron-up-BNtJv29h.js";import"./chevron-down-C0ffFM-j.js";import"./cross-zVaou9ZX.js";import"./PdfViewerSidebar-Deb-iMZg.js";import"./index-DTly_hdc.js";import"./index-BYQz6UTe.js";import"./index-DcUymPp1.js";import"./PdfViewerToolbar-DsUh0CtI.js";import"./Button-DmiYrxec.js";import"./chevron-right-BmZHKD_6.js";import"./Input-BuOhp1aA.js";import"./search-B1QWSoPr.js";import"./spin-BtZ13BWb.js";import"./error-D4XFpaXQ.js";import"./withOsdkMetrics-BgL9JuO_.js";import"./makeExternalStore-MnW_cPUk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
