import{j as r,M as s}from"./iframe-B8RO62N_.js";import{P as p}from"./pdf-viewer-ALGNW_b3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BSCKDIy0.js";import"./preload-helper-DsZdGcRf.js";import"./PdfRenderer-DuL0hDnT.js";import"./index-B9o8TN_g.js";import"./PdfViewer-B_Tmnb7-.js";import"./PdfViewer.module.css-BGWvdQif.js";import"./PdfViewerAnnotationLayer-CxGskKx9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BVWtlz4p.js";import"./PdfViewerOutlineSidebar-DMOrGOKP.js";import"./PdfViewerSidebarHeader-ReCC3hZ9.js";import"./useBaseUiId-B264urwS.js";import"./useControlled-Bz4rBUe9.js";import"./CompositeRoot-CaGK1keY.js";import"./CompositeItem-1sK8GXCR.js";import"./ToolbarRootContext-DHATwrwM.js";import"./composite-BD3vthMy.js";import"./svgIconContainer-IlfBd6hB.js";import"./PdfViewerSearchBar-CNyzs0BG.js";import"./chevron-up-3XX0A58g.js";import"./chevron-down-BuLKigFK.js";import"./cross-CcdrUkI0.js";import"./PdfViewerSidebar-DaPCHcPX.js";import"./index-CNxWP85l.js";import"./index-lV5AmHS7.js";import"./index-BvEMXlP9.js";import"./PdfViewerToolbar-DNIHGLDg.js";import"./Button-FowIH9YL.js";import"./chevron-right-XFLVGrgO.js";import"./Input-riFqtKQ3.js";import"./search-T5RtviOr.js";import"./spin-DM1ezc9t.js";import"./error-CHWCyOLY.js";import"./withOsdkMetrics-VStPp8O8.js";import"./makeExternalStore-ComoOgEU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
