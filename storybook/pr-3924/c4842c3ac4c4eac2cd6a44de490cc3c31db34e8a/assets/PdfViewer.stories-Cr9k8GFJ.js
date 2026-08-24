import{j as r,M as s}from"./iframe-ZGCn2odS.js";import{P as p}from"./pdf-viewer-Dz49Tcb4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DsUCHTWx.js";import"./preload-helper-BHCQWj8s.js";import"./PdfViewer-Dz5e9GQX.js";import"./index-CJGEKRO7.js";import"./BasePdfViewer-BXfEuLUU.js";import"./BasePdfViewer.module.css-BFCjuVDs.js";import"./PdfViewerAnnotationLayer-CCTgyctF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DEi7lXuA.js";import"./PdfViewerOutlineSidebar-BgzP5Gtk.js";import"./PdfViewerSidebarHeader-BeDz6ccO.js";import"./useBaseUiId-BcKFnlc-.js";import"./useControlled-BCVu5IOV.js";import"./CompositeRoot-cHmxempI.js";import"./CompositeItem-Dfs12gOS.js";import"./ToolbarRootContext-DERGfUKY.js";import"./composite-DhwjcmOa.js";import"./svgIconContainer-DIbGb-SV.js";import"./PdfViewerSearchBar-vnA7QnOO.js";import"./chevron-up-Pv_i0e_w.js";import"./chevron-down-B6AtoUz4.js";import"./cross-YMBvsQPC.js";import"./PdfViewerSidebar-Hd3OtRXZ.js";import"./index-KYd_Sluk.js";import"./index-C1SFOp3X.js";import"./index-DI6Iv9sH.js";import"./PdfViewerToolbar-CVNmX-9r.js";import"./Button-BDPNYI21.js";import"./chevron-right-QFg1cPaG.js";import"./Input-Dz8AuOJD.js";import"./search-BSxa54sW.js";import"./spin-O0Ba5oZ1.js";import"./error-CFUEkdAJ.js";import"./withOsdkMetrics-BCmHmvai.js";import"./makeExternalStore-CfgYssbm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
