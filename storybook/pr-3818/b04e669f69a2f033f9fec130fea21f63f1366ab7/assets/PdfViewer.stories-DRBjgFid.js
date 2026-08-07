import{j as r,M as s}from"./iframe-DvSgORBk.js";import{P as p}from"./pdf-viewer-Dadf3D8N.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D4Z7nZ42.js";import"./preload-helper-Bh3X1IZL.js";import"./PdfRenderer-DdI_f_zO.js";import"./index-ChyOFpSp.js";import"./PdfViewer-P_vAPR3Z.js";import"./PdfViewer.module.css-B37lJm-V.js";import"./PdfViewerAnnotationLayer-B4EV7I8a.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C6FJO7zG.js";import"./PdfViewerOutlineSidebar-CO1OUoHi.js";import"./PdfViewerSidebarHeader-B4YxlqLx.js";import"./useBaseUiId-DpoPO5jU.js";import"./useControlled-BB6bU1kQ.js";import"./CompositeRoot-B1i3HdWL.js";import"./CompositeItem-wIWKS7_g.js";import"./ToolbarRootContext-BskIkuOz.js";import"./composite-xFGPtc_t.js";import"./svgIconContainer-QappFeg0.js";import"./PdfViewerSearchBar-CoXkX5w-.js";import"./chevron-up-BlWkYQ0k.js";import"./chevron-down-C5KpQgJ6.js";import"./cross-BUEX2IGU.js";import"./PdfViewerSidebar-DAJG0jCR.js";import"./index-De7UWdw5.js";import"./index-DbSXjThu.js";import"./index-BGZxf-A_.js";import"./PdfViewerToolbar-B5zksj9A.js";import"./Button-BvKdxg3d.js";import"./chevron-right-Dg9Q1j8K.js";import"./Input-ax18PB6G.js";import"./search-UUFCgVGZ.js";import"./spin-DqM3Im50.js";import"./error-BqxbYOqB.js";import"./withOsdkMetrics-BKZ5oc9t.js";import"./makeExternalStore-Cpevbodx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
