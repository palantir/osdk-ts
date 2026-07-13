import{j as r,M as s}from"./iframe-CPlkVzRX.js";import{P as p}from"./pdf-viewer-Nrly-GdH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-9BLCA6eZ.js";import"./preload-helper-BPLtUsTR.js";import"./PdfRenderer-BYMaGYoP.js";import"./index-C7DVDnEH.js";import"./PdfViewer-BNkIkLTH.js";import"./PdfViewer.module.css-DmpxL_ca.js";import"./PdfViewerAnnotationLayer-D2Ya0su-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CWiTGs_u.js";import"./PdfViewerOutlineSidebar-DyinjWCA.js";import"./PdfViewerSidebarHeader-DiRtJyaU.js";import"./useBaseUiId-ASzug_9H.js";import"./useControlled-PnLqC2jZ.js";import"./CompositeRoot-wfJoaiXP.js";import"./CompositeItem-Z2rlf7F_.js";import"./ToolbarRootContext-Z1LNpQ45.js";import"./composite-IfShg2e2.js";import"./svgIconContainer-CbDzXV6d.js";import"./PdfViewerSearchBar-B8YYntx6.js";import"./chevron-up-y0m1b0Dq.js";import"./chevron-down-DWRjbthW.js";import"./cross-NNY-hlVM.js";import"./PdfViewerSidebar-DF5wUYcW.js";import"./index-yGDpJvAl.js";import"./index-BWF4oSDC.js";import"./index-88sVlVMo.js";import"./PdfViewerToolbar-C-PiNXNc.js";import"./Button-BL7WGeR7.js";import"./chevron-right-CNax2xq0.js";import"./Input-OI8vv9vI.js";import"./search-NwC2yRDx.js";import"./spin-ROnmgs9D.js";import"./error-B2_RfTBt.js";import"./withOsdkMetrics-gwijxqmw.js";import"./makeExternalStore-CIn1M1hc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
