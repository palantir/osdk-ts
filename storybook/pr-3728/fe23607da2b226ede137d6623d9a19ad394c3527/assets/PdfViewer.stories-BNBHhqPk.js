import{j as r,M as s}from"./iframe-CG2OFJ7I.js";import{P as p}from"./pdf-viewer-CU6Je4cX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dlfm_Z_h.js";import"./preload-helper-DaORRuYu.js";import"./PdfRenderer-BT-esUeN.js";import"./index-Dby7DClp.js";import"./PdfViewer-40pRdZk9.js";import"./PdfViewer.module.css-DLI4FTn7.js";import"./PdfViewerAnnotationLayer-DWZ7SXJI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJKKUEpU.js";import"./PdfViewerOutlineSidebar-Cexk2gRK.js";import"./PdfViewerSidebarHeader-BvYiSC2f.js";import"./useBaseUiId-DLohyEQW.js";import"./useControlled-DemSZ3bp.js";import"./CompositeRoot-DbQt0icP.js";import"./CompositeItem-B4vKrZ_I.js";import"./ToolbarRootContext-eFJIvnUU.js";import"./composite-Blgk7ack.js";import"./svgIconContainer-CODCypXK.js";import"./PdfViewerSearchBar-DXxPvw-3.js";import"./chevron-up-DrXOTyQZ.js";import"./chevron-down-BIj16iZg.js";import"./cross-DefaB_M5.js";import"./PdfViewerSidebar-DQeIdaxX.js";import"./index-DeBLm_yC.js";import"./index-DJbFUgNQ.js";import"./index-Ddd2yW-8.js";import"./PdfViewerToolbar-CtwooaBQ.js";import"./Button-DvJGIvnq.js";import"./chevron-right-BR3aoFXv.js";import"./Input-CDAk9ihG.js";import"./search-D1bpzPZZ.js";import"./spin-CpMl42Qm.js";import"./error-mpWotWR3.js";import"./withOsdkMetrics-CUzNioJX.js";import"./makeExternalStore-2EXNFTlz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
