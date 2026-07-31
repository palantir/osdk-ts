import{j as r,M as s}from"./iframe-CF2n_SwP.js";import{P as p}from"./pdf-viewer-BpkhG26U.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CTWHWywE.js";import"./preload-helper-DpkaM50o.js";import"./PdfRenderer-Ba_gYaLJ.js";import"./index-D2CBKEtq.js";import"./PdfViewer-Dm39wTT2.js";import"./PdfViewer.module.css-k2Vb6P7H.js";import"./PdfViewerAnnotationLayer-DDnpLt-k.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bw96sAhJ.js";import"./PdfViewerOutlineSidebar-B9I-5EOe.js";import"./PdfViewerSidebarHeader-f_CSsSkj.js";import"./useBaseUiId-JH9EwjdR.js";import"./useControlled-DmmVigSV.js";import"./CompositeRoot-D4s7j6r1.js";import"./CompositeItem-WiSS-79O.js";import"./ToolbarRootContext-BMZZpRhf.js";import"./composite-DZIjbJPA.js";import"./svgIconContainer-U4yJEvCA.js";import"./PdfViewerSearchBar-FeZsP9Wf.js";import"./chevron-up-D4m8JPvL.js";import"./chevron-down-DX2JC5eM.js";import"./cross-BHNzOWs1.js";import"./PdfViewerSidebar-CwUCP_nt.js";import"./index-ExDoAjE3.js";import"./index-BidtJzDD.js";import"./index-CgTL-8g-.js";import"./PdfViewerToolbar-P4D1UsAI.js";import"./Button-C3HVqe_G.js";import"./chevron-right-Cf6LrtC0.js";import"./Input-CGJrCa5R.js";import"./search-Bdvx3ZDa.js";import"./spin-BkfrVYDp.js";import"./error-Dbf0LG0M.js";import"./withOsdkMetrics-nsN9tDQx.js";import"./makeExternalStore-CKv8i6Rr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
