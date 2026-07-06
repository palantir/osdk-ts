import{j as r,M as s}from"./iframe-DheMeIUs.js";import{P as p}from"./pdf-viewer-D8KwdXAg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C81gkGuN.js";import"./preload-helper-DejDMXS6.js";import"./PdfRenderer-B8YvYuVv.js";import"./index-OHHQoean.js";import"./PdfViewer-BkKIPNf_.js";import"./PdfViewer.module.css-BSynh073.js";import"./PdfViewerAnnotationLayer-DnEL6SXd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B2x1aT94.js";import"./PdfViewerOutlineSidebar-BxznHhlp.js";import"./PdfViewerSidebarHeader-CWrlG2x-.js";import"./useBaseUiId-BMVLaYwE.js";import"./useControlled-CoSVLB1k.js";import"./CompositeRoot-CkDOZI-H.js";import"./CompositeItem-Wv9Mv1O5.js";import"./ToolbarRootContext-DlN8pce4.js";import"./composite-CRzCQjwQ.js";import"./svgIconContainer-BfpvBKiY.js";import"./PdfViewerSearchBar-8f5I2GfT.js";import"./chevron-up-77X0M0fT.js";import"./chevron-down-DZsxM3aG.js";import"./cross-YW3eipDg.js";import"./PdfViewerSidebar-BT62RIvd.js";import"./index-E7MP2WA9.js";import"./index-DGk7mLcT.js";import"./index-DzmaRJf-.js";import"./PdfViewerToolbar-C8pFGRbg.js";import"./Button-Cef4KTgn.js";import"./chevron-right-CZ7Y3Fku.js";import"./Input-CmhuZYKN.js";import"./search-zQu6az4w.js";import"./spin-CHfIKIiC.js";import"./error-DaolRgcp.js";import"./withOsdkMetrics-WdIR64Ii.js";import"./makeExternalStore-CFMmgv0A.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
