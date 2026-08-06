import{j as r,M as s}from"./iframe-Bm5jzr8T.js";import{P as p}from"./pdf-viewer-CGIJeUgr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-LYHLoQbJ.js";import"./preload-helper-CSZnNglA.js";import"./PdfRenderer-C_TOoWiG.js";import"./index-ClQUzYG2.js";import"./PdfViewer-ygVUi02F.js";import"./PdfViewer.module.css-DKjQ144l.js";import"./PdfViewerAnnotationLayer-Cp4u29h7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CGLr_76H.js";import"./PdfViewerOutlineSidebar-DngIGOpb.js";import"./PdfViewerSidebarHeader-Boe15uXt.js";import"./useBaseUiId-C3nowbxu.js";import"./useControlled-BLatlVO6.js";import"./CompositeRoot-BxAXvtT2.js";import"./CompositeItem-3MKWjM1o.js";import"./ToolbarRootContext-cG30qRz2.js";import"./composite-CWDFfLuK.js";import"./svgIconContainer-R--xU0hg.js";import"./PdfViewerSearchBar-CGscLN8-.js";import"./chevron-up-BaQ7SjU2.js";import"./chevron-down-C6hvYjb1.js";import"./cross-DVFMZvVA.js";import"./PdfViewerSidebar-DfZQQRtx.js";import"./index-DHhyRUWy.js";import"./index-DLRkWHMK.js";import"./index-BcWTji-b.js";import"./PdfViewerToolbar-W5c0D7pa.js";import"./Button-Cety1YHR.js";import"./chevron-right-BpF3fx7p.js";import"./Input-CDKdLXlP.js";import"./search-CqGLs9ZZ.js";import"./spin-BLuqauLD.js";import"./error-Bhi3wxY-.js";import"./withOsdkMetrics-CwVNpXHj.js";import"./makeExternalStore-BMDNa_EK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
