import{j as r,M as s}from"./iframe-C5NFvgiE.js";import{P as p}from"./pdf-viewer-DUx3y7vb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dut0PIvp.js";import"./preload-helper-BC8VBrum.js";import"./PdfRenderer-BzgW1ZB7.js";import"./index-EtmTyaay.js";import"./PdfViewer-B6d6Hdss.js";import"./PdfViewer.module.css-CmMatrnR.js";import"./PdfViewerAnnotationLayer-Dhinc-Ev.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BN6u_Ufh.js";import"./PdfViewerOutlineSidebar-DcQn3W_e.js";import"./PdfViewerSidebarHeader-CUaSuAg5.js";import"./useBaseUiId-CJ9Huyf7.js";import"./useControlled-Duv0di0B.js";import"./CompositeRoot-CZYNLVgg.js";import"./CompositeItem-Cf7M82EQ.js";import"./ToolbarRootContext-By2zkM1j.js";import"./composite-DmGpycId.js";import"./svgIconContainer-B_PFiYn8.js";import"./PdfViewerSearchBar-BPECrT1f.js";import"./chevron-up-DlSaH_IQ.js";import"./chevron-down-9I0-3TkX.js";import"./cross-DLjyYdWF.js";import"./PdfViewerSidebar-BYGtqcx8.js";import"./index-2E7TPCj-.js";import"./index-sVGPqYhb.js";import"./index-882meA1k.js";import"./PdfViewerToolbar-DCMUPljq.js";import"./Button-CQssBVED.js";import"./chevron-right-DcwUQp8B.js";import"./Input-DaHV-cOW.js";import"./search-7RMpjv9g.js";import"./spin-4W-9R1b_.js";import"./error-DAH-eKl0.js";import"./withOsdkMetrics-V3Vr0ZXu.js";import"./makeExternalStore-CqR_y6G8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
