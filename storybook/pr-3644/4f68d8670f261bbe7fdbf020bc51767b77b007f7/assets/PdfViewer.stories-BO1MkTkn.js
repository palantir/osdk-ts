import{j as r,M as s}from"./iframe-DT8yWfXc.js";import{P as p}from"./pdf-viewer-CQyXkoiW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-nz1eStv9.js";import"./preload-helper-DUeAGb5J.js";import"./PdfRenderer-CPgHjTMo.js";import"./index-ChpbBA2X.js";import"./PdfViewer-DptCESmt.js";import"./PdfViewer.module.css-T7LeNFAH.js";import"./PdfViewerAnnotationLayer-OQs4iAL5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BiyfPZGA.js";import"./PdfViewerOutlineSidebar-YRHFAY_8.js";import"./PdfViewerSidebarHeader-9O2268no.js";import"./useBaseUiId-BdsHdBoH.js";import"./useControlled-DjxdMOL9.js";import"./CompositeRoot-C87Eaoxq.js";import"./CompositeItem-DjLRu0nS.js";import"./ToolbarRootContext-vNNp34aR.js";import"./composite-DgLXPZgj.js";import"./svgIconContainer-WkyZ9zSZ.js";import"./PdfViewerSearchBar-Co0l1wzT.js";import"./chevron-up-BGz0AkCc.js";import"./chevron-down-CzpMEHmJ.js";import"./cross-CBZINCL7.js";import"./PdfViewerSidebar-D71hR04v.js";import"./index-rcqTQkJk.js";import"./index-D9T0sRRr.js";import"./index-BaUfu4_D.js";import"./PdfViewerToolbar-Dav_-zuR.js";import"./Button-COFyQ3LX.js";import"./chevron-right-Dp3TyIuX.js";import"./Input-BzHkswi2.js";import"./search-RJIADZv2.js";import"./spin-PFsmPWwo.js";import"./error-BZm3dnxy.js";import"./withOsdkMetrics-DBvhOA2g.js";import"./makeExternalStore-B8VBuO1S.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
