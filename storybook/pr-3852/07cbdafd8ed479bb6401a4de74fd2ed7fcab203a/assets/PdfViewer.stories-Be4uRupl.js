import{j as r,M as s}from"./iframe-Ct3jhQ3b.js";import{P as p}from"./pdf-viewer-BVbBWAe3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CH3fymjR.js";import"./preload-helper-COHmdbwf.js";import"./PdfRenderer-D0_a4Wc_.js";import"./index-CgPM3gA5.js";import"./PdfViewer-Ux4c_4T1.js";import"./PdfViewer.module.css-CA4lIl7a.js";import"./PdfViewerAnnotationLayer-DP-s1WFn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BkXlj_l4.js";import"./PdfViewerOutlineSidebar-XaJd6Q0_.js";import"./PdfViewerSidebarHeader-CusC5DHD.js";import"./useBaseUiId-CJ7H8A6B.js";import"./useControlled-CrEjWPz9.js";import"./CompositeRoot-CLg2cppI.js";import"./CompositeItem-B3RwG7sH.js";import"./ToolbarRootContext-CAsR0ulO.js";import"./composite-vVcQOeOT.js";import"./svgIconContainer-DvsmJFgi.js";import"./PdfViewerSearchBar-BrApAk5M.js";import"./chevron-up-CpnKyafb.js";import"./chevron-down-Cr-g2sf1.js";import"./cross-He-PHYhY.js";import"./PdfViewerSidebar-NLGxUCDj.js";import"./index-DyYuYiTt.js";import"./index-CCZpef3e.js";import"./index-C89TlbH2.js";import"./PdfViewerToolbar-D8wNJNrS.js";import"./Button-BDlShN-U.js";import"./chevron-right-BgZv_o8o.js";import"./Input-hJWV4A37.js";import"./search-DmHt-KVR.js";import"./spin-CO58iCR-.js";import"./error-DbtsfcJt.js";import"./withOsdkMetrics-fRAXYRw-.js";import"./makeExternalStore-B7M8VDNS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
