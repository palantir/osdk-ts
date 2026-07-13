import{j as r,M as s}from"./iframe-BI2BvdSn.js";import{P as p}from"./pdf-viewer-D2-JQcqm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C8-BocYB.js";import"./preload-helper-Dp7OlpU-.js";import"./PdfRenderer-86YKD69u.js";import"./index-BIWK-oDl.js";import"./PdfViewer-D82d4Hou.js";import"./PdfViewer.module.css-TdmeQDUm.js";import"./PdfViewerAnnotationLayer-BYMOfNGP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-n4R1733E.js";import"./PdfViewerOutlineSidebar-B522qC6F.js";import"./PdfViewerSidebarHeader-DUIIwB6L.js";import"./useBaseUiId-cKcVT06J.js";import"./useControlled-FtZVcRbK.js";import"./CompositeRoot-DLIF1di-.js";import"./CompositeItem-B8IS25xa.js";import"./ToolbarRootContext-B7EklFh7.js";import"./composite-CEeOlS1-.js";import"./svgIconContainer-Dv0B_rwA.js";import"./PdfViewerSearchBar-hg33YBAw.js";import"./chevron-up-hqu7Lw2H.js";import"./chevron-down-CgnTIL0S.js";import"./cross-C6K3Vij4.js";import"./PdfViewerSidebar-Dj9la7rx.js";import"./index-CMvDzfLR.js";import"./index-B8RX0TAT.js";import"./index-BTjFp-Bp.js";import"./PdfViewerToolbar-zoPJQNdQ.js";import"./Button-BeEEXMwF.js";import"./chevron-right-DGuhZ8wM.js";import"./Input-DoP09scN.js";import"./search-DLNQ0f47.js";import"./spin-DR3MXfYY.js";import"./error-CmZ7CLV6.js";import"./withOsdkMetrics-D9EoHykR.js";import"./makeExternalStore-DLVI6Pro.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
