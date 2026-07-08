import{j as r,M as s}from"./iframe-C3M0ibnK.js";import{P as p}from"./pdf-viewer-B3G0pJp3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-TjycNcJL.js";import"./preload-helper-Dq3I7SvT.js";import"./PdfRenderer-omhSHL6-.js";import"./index-ZvOL7lZf.js";import"./PdfViewer-BZkSaPIM.js";import"./PdfViewer.module.css-BgnoXnyc.js";import"./PdfViewerAnnotationLayer-CgAVzBPQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D2bw1Zk4.js";import"./PdfViewerOutlineSidebar-bbtwy9jI.js";import"./PdfViewerSidebarHeader-DenF52EZ.js";import"./useBaseUiId-CYU0Aa4C.js";import"./useControlled-CdimtrKj.js";import"./CompositeRoot-GWYw43Nm.js";import"./CompositeItem-DIOcFwHt.js";import"./ToolbarRootContext-DYEEOqxe.js";import"./composite-CfxCIp6J.js";import"./svgIconContainer-DSBQR884.js";import"./PdfViewerSearchBar-DbWASE6y.js";import"./chevron-up-jQ9_yD5N.js";import"./chevron-down-CAh4KlDn.js";import"./cross-BI4GsqjQ.js";import"./PdfViewerSidebar-B0KJC9xS.js";import"./index-BrrzTLea.js";import"./index-D_rR43YW.js";import"./index-BiR5IGcB.js";import"./PdfViewerToolbar-2PuQ8fci.js";import"./Button-RX9yNhBH.js";import"./chevron-right-CeEY6uP3.js";import"./Input-BWHvrmva.js";import"./search-Bt4Jbvws.js";import"./spin-D-GIcHth.js";import"./error-AN1MG3rt.js";import"./withOsdkMetrics-Cvm9tXEj.js";import"./makeExternalStore-DxRwCjOF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
