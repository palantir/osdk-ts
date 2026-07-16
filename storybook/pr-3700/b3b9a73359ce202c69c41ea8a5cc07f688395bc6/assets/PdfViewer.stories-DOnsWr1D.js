import{j as r,M as s}from"./iframe-Bc7fci45.js";import{P as p}from"./pdf-viewer-Mde6xCG2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dvfxvr6O.js";import"./preload-helper-CqcExPbf.js";import"./PdfRenderer-xj9JAGjw.js";import"./index-8r1H5riV.js";import"./PdfViewer-CSJ0nPZq.js";import"./PdfViewer.module.css-Cc5OFiY4.js";import"./PdfViewerAnnotationLayer-BuA2QNX4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DM600G9h.js";import"./PdfViewerOutlineSidebar-D8fZQMmr.js";import"./PdfViewerSidebarHeader-qdQRmEmy.js";import"./useBaseUiId-CAA2R02B.js";import"./useControlled-CW7hKPmo.js";import"./CompositeRoot-CO0teOj-.js";import"./CompositeItem-6dJ1pRPS.js";import"./ToolbarRootContext-Bfz1iCSH.js";import"./composite-BYmI-CM7.js";import"./svgIconContainer-C9iQHhK5.js";import"./PdfViewerSearchBar-PC7Dgug_.js";import"./chevron-up-DATA2EzV.js";import"./chevron-down-BoR-jQHF.js";import"./cross-B4chqNXv.js";import"./PdfViewerSidebar-B2IMifDI.js";import"./index-jFyp9vbd.js";import"./index-Cg8_1J89.js";import"./index-C7pEeJfy.js";import"./PdfViewerToolbar-DfySxRpK.js";import"./Button-B6PamS6L.js";import"./chevron-right-DMYDBPON.js";import"./Input-CCNPikiw.js";import"./search-D9ZdlKIV.js";import"./spin-CO3iJ3Is.js";import"./error-m7b9Nqv6.js";import"./withOsdkMetrics-CSMpf7Ll.js";import"./makeExternalStore-DPhR3Lge.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
