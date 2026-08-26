import{j as r,M as s}from"./iframe-IE85mU0C.js";import{P as p}from"./pdf-viewer-Boucg1Hp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dze6qQ6s.js";import"./preload-helper-BOAVNMzj.js";import"./PdfViewer-DQkgwFAl.js";import"./index-Cb-uWra3.js";import"./BasePdfViewer-FYmKVFX7.js";import"./BasePdfViewer.module.css-OfICgG1u.js";import"./PdfViewerAnnotationLayer-D9eoAt6Q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DZgSPkzK.js";import"./PdfViewerOutlineSidebar-tNtuocaB.js";import"./PdfViewerSidebarHeader-CaM5hkfT.js";import"./useBaseUiId-ChrCSMbI.js";import"./useControlled-BXrD1fp6.js";import"./CompositeRoot-WotbERq0.js";import"./CompositeItem-DZQ4wuX3.js";import"./ToolbarRootContext-Bkab47o6.js";import"./composite-mlo2KNAb.js";import"./svgIconContainer-DstMKe-n.js";import"./PdfViewerSearchBar-BrJ9tx0L.js";import"./chevron-up-CqJ1wIRt.js";import"./chevron-down-DF5Twgp3.js";import"./cross-B7J67M4-.js";import"./PdfViewerSidebar-4RxzS1Rw.js";import"./index-BNUcpvM4.js";import"./index-CBYXm5R5.js";import"./index-6Itdkxzy.js";import"./PdfViewerToolbar-Cj01bP0w.js";import"./Button-B-X3VNkp.js";import"./chevron-right-BgQfeT_J.js";import"./Input-BPNEbKHH.js";import"./search-OX4J1wJ3.js";import"./spin-BSCf0AFZ.js";import"./error-C3z-yM5U.js";import"./withOsdkMetrics-BRxVuFD2.js";import"./makeExternalStore-B2AoPMSj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
