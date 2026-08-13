import{j as r,M as s}from"./iframe-NiFGfRsz.js";import{P as p}from"./pdf-viewer-CpNk5rgy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B0xApdKS.js";import"./preload-helper-DCFXQM4X.js";import"./PdfViewer-DxnljEcr.js";import"./index-Dp7XOyO-.js";import"./BasePdfViewer-DCO0tTgQ.js";import"./BasePdfViewer.module.css-BBF8-M10.js";import"./PdfViewerAnnotationLayer-BLbTye0v.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-rFXNIA_Y.js";import"./PdfViewerOutlineSidebar-BARVLWXR.js";import"./PdfViewerSidebarHeader-D7nIn7zZ.js";import"./useBaseUiId-BZ0T_Y09.js";import"./useControlled-BmoBTadd.js";import"./CompositeRoot-CXPNjN9I.js";import"./CompositeItem-bzaX9daE.js";import"./ToolbarRootContext-CC3NWZjB.js";import"./composite-DizwB12a.js";import"./svgIconContainer-B-51rSqm.js";import"./PdfViewerSearchBar-CXMnuHBm.js";import"./chevron-up-DKnKoYYF.js";import"./chevron-down-h41veWCf.js";import"./cross-CFFQ0sQ5.js";import"./PdfViewerSidebar-Dda6o-YJ.js";import"./index-kWkA5eh9.js";import"./index-vXDAK5tU.js";import"./index-BN_cMd1l.js";import"./PdfViewerToolbar-w2tdBy9J.js";import"./Button-D8xL5lB5.js";import"./chevron-right-Sx4zFEWw.js";import"./Input-gKc9tvRQ.js";import"./search-X81DnpVg.js";import"./spin-BLG01yZJ.js";import"./error-CZNtpaf8.js";import"./withOsdkMetrics-DdyqXqjN.js";import"./makeExternalStore-jd4qdjld.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
