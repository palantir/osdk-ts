import{j as r,M as s}from"./iframe-DvIBq-Qp.js";import{P as p}from"./pdf-viewer-CiqbVliO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Br6gE4EL.js";import"./preload-helper-qPbwgJt1.js";import"./PdfRenderer-CLhlBM6C.js";import"./index-DYcITOMN.js";import"./PdfViewer-CS5QGcVQ.js";import"./PdfViewer.module.css-BRZJ7YTP.js";import"./PdfViewerAnnotationLayer-CmM1NqCF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LM-QRPkH.js";import"./PdfViewerOutlineSidebar-Mb65P7EB.js";import"./PdfViewerSidebarHeader-CPxadUFY.js";import"./useBaseUiId-D1k0Zh_m.js";import"./useControlled-B_b2PFHw.js";import"./CompositeRoot-aUngX6qw.js";import"./CompositeItem-CfqO8uiP.js";import"./ToolbarRootContext-ShMZM9dE.js";import"./composite-DSjEszzC.js";import"./svgIconContainer-HMSVamun.js";import"./PdfViewerSearchBar-DGED9zE8.js";import"./chevron-up-CsuOIG_f.js";import"./chevron-down-CASBDsiq.js";import"./cross-CeQJcL_u.js";import"./PdfViewerSidebar-B0mlB0Lx.js";import"./index-DzZ9O4W9.js";import"./index-c6NsK4gQ.js";import"./index-BizHiwW0.js";import"./PdfViewerToolbar-Docdv_0b.js";import"./Button-GRi8JG_E.js";import"./chevron-right-DFjcqZdT.js";import"./Input-Cj7HcRQC.js";import"./search-1YOdV9G7.js";import"./spin-CnGi8IwB.js";import"./error-B4g75CH1.js";import"./withOsdkMetrics-BOHB0rT-.js";import"./makeExternalStore-Cq13hLrw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
