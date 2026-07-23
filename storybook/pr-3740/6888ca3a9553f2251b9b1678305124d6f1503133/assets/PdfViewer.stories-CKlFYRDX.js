import{j as r,M as s}from"./iframe-D2rEXeQx.js";import{P as p}from"./pdf-viewer-DlQAS2uz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DXNcdwc1.js";import"./preload-helper-BoJbTe1v.js";import"./PdfRenderer-Bwj2hWRt.js";import"./index-CfC4mUMZ.js";import"./PdfViewer-kZcSbQO7.js";import"./PdfViewer.module.css-C2SgMpbZ.js";import"./PdfViewerAnnotationLayer-Cu0Q3pzM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Fnc_uKDI.js";import"./PdfViewerOutlineSidebar-EybGP9cN.js";import"./PdfViewerSidebarHeader-BFTVR8E_.js";import"./useBaseUiId-De-RVgDd.js";import"./useControlled-DXA-QYA9.js";import"./CompositeRoot-DS8MB-3H.js";import"./CompositeItem-DdzZw4wn.js";import"./ToolbarRootContext-MHlvb9At.js";import"./composite-ChDY5SZr.js";import"./svgIconContainer-Bn9oRKuF.js";import"./PdfViewerSearchBar-KXZVxu4F.js";import"./chevron-up-CB15CtVk.js";import"./chevron-down-PuRYmfNg.js";import"./cross-C8ubmI2m.js";import"./PdfViewerSidebar-sVT2omyr.js";import"./index-BWSIaSOv.js";import"./index-CDRkpD8P.js";import"./index-Djkwo92d.js";import"./PdfViewerToolbar-DiCLahJY.js";import"./Button-SlZlYUH9.js";import"./chevron-right-F3D3XZsU.js";import"./Input-C1IdFQeF.js";import"./search-CV4hoflg.js";import"./spin-D8Abhs2f.js";import"./error-DHkjPhqr.js";import"./withOsdkMetrics-Cf9qkm69.js";import"./makeExternalStore-Ta4dVqJI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
