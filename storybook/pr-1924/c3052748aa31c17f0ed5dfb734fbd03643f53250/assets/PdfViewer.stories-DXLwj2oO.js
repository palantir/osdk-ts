import{j as r,M as s}from"./iframe-DM57FO0O.js";import{P as p}from"./pdf-viewer-qFWeMFMo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C2YIirkk.js";import"./preload-helper-CiDQt3z4.js";import"./PdfRenderer-DTOvPwp4.js";import"./index-78xpG-CN.js";import"./PdfViewer-C5P3FpES.js";import"./PdfViewer.module.css-wEnFlrDA.js";import"./PdfViewerAnnotationLayer-Bb0XRupn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-XYV_9yaa.js";import"./PdfViewerOutlineSidebar-DJik081R.js";import"./PdfViewerSidebarHeader-cs9jbCqi.js";import"./useBaseUiId-LhiCCirY.js";import"./useControlled-DmurJkbB.js";import"./CompositeRoot-CH7paCzS.js";import"./CompositeItem-COr71cMo.js";import"./ToolbarRootContext-Dme1Nr8M.js";import"./composite-szsum3r3.js";import"./svgIconContainer-M4pBKDc9.js";import"./PdfViewerSearchBar-BcJtWuLd.js";import"./chevron-up-BCemfLLp.js";import"./chevron-down-Dy3xC1Qv.js";import"./cross-C4FWi7U6.js";import"./PdfViewerSidebar-DBHtaLOr.js";import"./index-CIEwid69.js";import"./index-X1UuWlqK.js";import"./index-C9SVGTzI.js";import"./PdfViewerToolbar-CWx1N4Zi.js";import"./Button-BtR_Rgq_.js";import"./chevron-right-B4KRA3g8.js";import"./Input-jbZr5DP-.js";import"./search-Swo5uGHk.js";import"./spin-Ci-NLcA-.js";import"./error-B-7TqBpt.js";import"./withOsdkMetrics-U1ecBNOt.js";import"./makeExternalStore-IjYBHzVF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
