import{j as r,M as s}from"./iframe-BW5KWTVf.js";import{P as p}from"./pdf-viewer-BGMfVNqu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ChDIJ0m2.js";import"./preload-helper-wTJCuLa0.js";import"./PdfRenderer-Xyf4L9vn.js";import"./index-DZuHGaZR.js";import"./PdfViewer-DsP99Q5G.js";import"./PdfViewer.module.css-C5_KfIqR.js";import"./PdfViewerAnnotationLayer-sFjfHZYU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dsfy0ctN.js";import"./PdfViewerOutlineSidebar-CKYCwglS.js";import"./PdfViewerSidebarHeader-CXGRLQKc.js";import"./useBaseUiId-djKvr1Zf.js";import"./useControlled-Bd2lsHY1.js";import"./CompositeRoot-CfAYMYdD.js";import"./CompositeItem-BgohVmvL.js";import"./ToolbarRootContext-CiyKClQw.js";import"./composite-DMJpidK5.js";import"./svgIconContainer-CGH_b5cs.js";import"./PdfViewerSearchBar-CqZicP3T.js";import"./chevron-up-CIToWHUe.js";import"./chevron-down-cYHAHA60.js";import"./cross-B9jHlUmC.js";import"./PdfViewerSidebar-B2R0UChR.js";import"./index-BnK0TffT.js";import"./index-CBnuzy09.js";import"./index-C9GjXNGu.js";import"./PdfViewerToolbar-B-gVGVGp.js";import"./Button-CRYDVXLK.js";import"./chevron-right-CYebZ0dT.js";import"./Input-Cuj41dtm.js";import"./search-BxTonfjS.js";import"./spin-CY3tUXFl.js";import"./error-BnZI7SXP.js";import"./withOsdkMetrics-BeUX7xJv.js";import"./makeExternalStore-DRWx7nce.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
