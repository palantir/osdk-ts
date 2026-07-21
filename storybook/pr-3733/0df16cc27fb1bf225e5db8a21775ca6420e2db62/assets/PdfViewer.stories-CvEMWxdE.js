import{j as r,M as s}from"./iframe-DnNKUWcg.js";import{P as p}from"./pdf-viewer-5GJhzUZy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-1oD5X7u3.js";import"./preload-helper-DQWKcrj2.js";import"./PdfRenderer-itkxzN3F.js";import"./index-GGLs1M5x.js";import"./PdfViewer-CzexowON.js";import"./PdfViewer.module.css-BAL8WNI9.js";import"./PdfViewerAnnotationLayer-DanBK_a5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-rzM1SaWe.js";import"./PdfViewerOutlineSidebar-BV4cVQMQ.js";import"./PdfViewerSidebarHeader-ChVTiH4e.js";import"./useBaseUiId-CKvMB-OE.js";import"./useControlled-DhCfBTTh.js";import"./CompositeRoot-L1oW1D_D.js";import"./CompositeItem-BaQsrHVB.js";import"./ToolbarRootContext-B0YLwdfY.js";import"./composite-DTBZTdo5.js";import"./svgIconContainer-B2CJaZ6n.js";import"./PdfViewerSearchBar-BXIRkC2s.js";import"./chevron-up-Co9NPRMi.js";import"./chevron-down-CZAj-qSf.js";import"./cross-DpxJh_Rf.js";import"./PdfViewerSidebar-C9GCZdtO.js";import"./index-BiJvZYLB.js";import"./index-DoSif8t7.js";import"./index-CNrPxP1k.js";import"./PdfViewerToolbar-DtFv5zid.js";import"./Button-DHDhp2xt.js";import"./chevron-right-DHEyRgvt.js";import"./Input-DtUtcfYN.js";import"./search-DLe85fa9.js";import"./spin-Bl6gXpRk.js";import"./error-D2asl-Ti.js";import"./withOsdkMetrics-BWmd9N4i.js";import"./makeExternalStore-BXOD0Kmg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
