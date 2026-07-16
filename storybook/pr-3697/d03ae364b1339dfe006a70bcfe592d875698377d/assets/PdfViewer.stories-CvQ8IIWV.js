import{j as r,M as s}from"./iframe-DWrMy0yZ.js";import{P as p}from"./pdf-viewer-DVM4VqdT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CcLGJqCP.js";import"./preload-helper-hiCfVkrW.js";import"./PdfRenderer-BOc7HCEm.js";import"./index-DWE6OuUn.js";import"./PdfViewer-_GDhdK92.js";import"./PdfViewer.module.css-CQmlQPSp.js";import"./PdfViewerAnnotationLayer-DKyn3AIf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DAiN2j7V.js";import"./PdfViewerOutlineSidebar-B3LvuJRO.js";import"./PdfViewerSidebarHeader-DFmV7HSm.js";import"./useBaseUiId-DUxT2a9f.js";import"./useControlled-BzTSnQwz.js";import"./CompositeRoot-C25-pZjS.js";import"./CompositeItem-jesKs--B.js";import"./ToolbarRootContext-C-bzPO9B.js";import"./composite-hO8DpeuU.js";import"./svgIconContainer-BEn0zHz3.js";import"./PdfViewerSearchBar-C1jCSkTm.js";import"./chevron-up-BecHt19V.js";import"./chevron-down-N4ynOSmR.js";import"./cross-DAjRBQac.js";import"./PdfViewerSidebar-Bv1dMlcS.js";import"./index-DrB0YY75.js";import"./index-vQKyn22n.js";import"./index-WaykaH_P.js";import"./PdfViewerToolbar-jz3GEQKj.js";import"./Button-rN6BhzSe.js";import"./chevron-right-C9iG2iUH.js";import"./Input-XRgJh16U.js";import"./search-Bz7bfMv6.js";import"./spin-C6Obb4VP.js";import"./error-jp0PlQCR.js";import"./withOsdkMetrics-DH3uuG-W.js";import"./makeExternalStore-QenJWAX6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
