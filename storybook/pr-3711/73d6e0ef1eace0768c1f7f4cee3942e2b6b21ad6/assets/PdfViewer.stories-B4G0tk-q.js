import{j as r,M as s}from"./iframe-p3IeMUNx.js";import{P as p}from"./pdf-viewer-CbD7sBOg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CeDXPEDZ.js";import"./preload-helper-Dxl9yj2t.js";import"./PdfRenderer-frPBdgS0.js";import"./index-BULPiBpC.js";import"./PdfViewer-B27yNx_t.js";import"./PdfViewer.module.css-BMvDPKBg.js";import"./PdfViewerAnnotationLayer-DuBZPB7O.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXwsMpTc.js";import"./PdfViewerOutlineSidebar-BK5bFWaJ.js";import"./PdfViewerSidebarHeader-DTtV2NWp.js";import"./useBaseUiId-9ZghOPbk.js";import"./useControlled-DVFFVC-J.js";import"./CompositeRoot-Da6oprqO.js";import"./CompositeItem-Dv5btcOe.js";import"./ToolbarRootContext-aK8i6zpw.js";import"./composite-B_sqO-Ol.js";import"./svgIconContainer-C074LzqQ.js";import"./PdfViewerSearchBar-rtOeXKQp.js";import"./chevron-up-vYb13TMn.js";import"./chevron-down-CxgEXWSt.js";import"./cross-DE1acqN6.js";import"./PdfViewerSidebar-cYESnpcW.js";import"./index-D-b1dQdL.js";import"./index-0gcP8RHj.js";import"./index-4loaUpxI.js";import"./PdfViewerToolbar-DLa-i6I9.js";import"./Button-BoSagEuJ.js";import"./chevron-right-yrYjAi4i.js";import"./Input-DHCbfZ9-.js";import"./search-CIORHShm.js";import"./spin-KodnthoE.js";import"./error-CvL-VOeT.js";import"./withOsdkMetrics-Djb3i1l3.js";import"./makeExternalStore-BM2PidB1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
