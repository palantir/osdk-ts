import{j as r,M as s}from"./iframe-DacBaETh.js";import{P as p}from"./pdf-viewer-b54Ipao6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BpN5K4lG.js";import"./preload-helper-0LZOEI6c.js";import"./PdfRenderer-CJD8qy1N.js";import"./index-BLI3b5Ls.js";import"./PdfViewer-DYfZPKHx.js";import"./PdfViewer.module.css-BV6-3zm4.js";import"./PdfViewerAnnotationLayer-DZgSmHMp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DBNr606w.js";import"./PdfViewerOutlineSidebar-D-lZmkLO.js";import"./PdfViewerSidebarHeader-BkWSYROe.js";import"./useBaseUiId-DJdCXPOy.js";import"./useControlled-C21yq5Uu.js";import"./CompositeRoot-DlTBypwX.js";import"./CompositeItem-DSjuMmIy.js";import"./ToolbarRootContext-BB7Ifw49.js";import"./composite-B7s-sf7Y.js";import"./svgIconContainer-D-FnRMc4.js";import"./PdfViewerSearchBar-BO-YcyIp.js";import"./chevron-up-BR8eNIwO.js";import"./chevron-down-TVGeU_9X.js";import"./cross-Cd9V6GlP.js";import"./PdfViewerSidebar-CcnQdCXj.js";import"./index-MSmZ_9Sr.js";import"./index-CeSgy9Z5.js";import"./index-BZzzpwcb.js";import"./PdfViewerToolbar-BOvB0B9p.js";import"./Button-EGX1Ztue.js";import"./chevron-right-BivdpODH.js";import"./Input-DcSiOxgm.js";import"./search-B7TSHRZ6.js";import"./spin-DcPlMEHc.js";import"./error-Dwxf8wvh.js";import"./withOsdkMetrics-BXXzNPYT.js";import"./makeExternalStore-CtZ0c0QD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
