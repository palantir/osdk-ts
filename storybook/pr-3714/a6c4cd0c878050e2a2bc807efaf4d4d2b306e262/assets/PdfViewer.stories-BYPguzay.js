import{j as r,M as s}from"./iframe-CAHBdCq1.js";import{P as p}from"./pdf-viewer-C3J12nR_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D8Q4d_jM.js";import"./preload-helper-C93BjOpu.js";import"./PdfRenderer-BD5-d_DV.js";import"./index-Dqhelv5t.js";import"./PdfViewer-mNrUwOcS.js";import"./PdfViewer.module.css-CT2Sg-jx.js";import"./PdfViewerAnnotationLayer-orHRl5Hn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DVXsYeAR.js";import"./PdfViewerOutlineSidebar-CmWJ5Ac7.js";import"./PdfViewerSidebarHeader-C0CDy8yC.js";import"./useBaseUiId-C9UEEuYY.js";import"./useControlled-DCrjw_eX.js";import"./CompositeRoot-GzJHz9in.js";import"./CompositeItem-DP-2Pynq.js";import"./ToolbarRootContext-CDnt2Uxp.js";import"./composite-Cw8iKrah.js";import"./svgIconContainer-DOYhvU8O.js";import"./PdfViewerSearchBar-BR_jGLof.js";import"./chevron-up-HUBtivGs.js";import"./chevron-down-BZWaRd4L.js";import"./cross-BQ_JGAQt.js";import"./PdfViewerSidebar-Bk94oPOm.js";import"./index-BsrN4B4I.js";import"./index-B6rpGcbO.js";import"./index-CBm27cPC.js";import"./PdfViewerToolbar-Zvw67C3G.js";import"./Button-CtYeFmPN.js";import"./chevron-right-DzxCKkeB.js";import"./Input-BRiED6IK.js";import"./search-qXyA5VAY.js";import"./spin-DI3_14cK.js";import"./error-DWFWgzPi.js";import"./withOsdkMetrics-CaiqjNUf.js";import"./makeExternalStore-D-PIieom.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
