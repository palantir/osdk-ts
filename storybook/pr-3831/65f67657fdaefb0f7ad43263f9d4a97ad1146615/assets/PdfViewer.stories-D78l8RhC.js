import{j as r,M as s}from"./iframe-ohJVZKOW.js";import{P as p}from"./pdf-viewer-CBRXBsLQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BCGcXyVm.js";import"./preload-helper-C1R0P_VY.js";import"./PdfRenderer-C-dHqMsl.js";import"./index-C4DoG2f-.js";import"./PdfViewer-M3gxYD0d.js";import"./PdfViewer.module.css-BJXyeBfU.js";import"./PdfViewerAnnotationLayer-QzdECgAG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7B7gchO.js";import"./PdfViewerOutlineSidebar-DOryjWTi.js";import"./PdfViewerSidebarHeader-BczXr_AD.js";import"./useBaseUiId-LmdhvU1h.js";import"./useControlled-ClfC2jv8.js";import"./CompositeRoot-oZDAetr8.js";import"./CompositeItem-DRccTLFK.js";import"./ToolbarRootContext-BclOg9vJ.js";import"./composite-DQx9kvkN.js";import"./svgIconContainer-DzjVEjGe.js";import"./PdfViewerSearchBar-DQOPTivZ.js";import"./chevron-up-CC5FsEAb.js";import"./chevron-down-B-OZmB_2.js";import"./cross-Bfip_FoZ.js";import"./PdfViewerSidebar-uZ8gQAWe.js";import"./index-Bdc5AnYd.js";import"./index-BnE2PvA_.js";import"./index-DW2zHBPJ.js";import"./PdfViewerToolbar-LNR7WQtE.js";import"./Button-CsxMEHMa.js";import"./chevron-right-DgNaX-0_.js";import"./Input-Drh9HzXR.js";import"./search-BG9SxdnF.js";import"./spin-BwbmqGAx.js";import"./error-BoH5SAwj.js";import"./withOsdkMetrics-CxazBpkT.js";import"./makeExternalStore-C5RAotff.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
