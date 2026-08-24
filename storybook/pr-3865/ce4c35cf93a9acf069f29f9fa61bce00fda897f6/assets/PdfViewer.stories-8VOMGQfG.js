import{j as r,M as s}from"./iframe-K2lL5yZa.js";import{P as p}from"./pdf-viewer-nEDGiepa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BBCq1V97.js";import"./preload-helper-zTJR2VVu.js";import"./PdfViewer-CyUc_U4y.js";import"./index-DG2QGQKO.js";import"./BasePdfViewer-Ce5P_kdk.js";import"./BasePdfViewer.module.css-C2VM8sFJ.js";import"./PdfViewerAnnotationLayer-O_0lwnf8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B5KF1mA-.js";import"./PdfViewerOutlineSidebar-C54ShGJy.js";import"./PdfViewerSidebarHeader-BNtvWsLn.js";import"./useBaseUiId-6Oj8SlmF.js";import"./useControlled-BRKOM8iX.js";import"./CompositeRoot-D7r5QQ7P.js";import"./CompositeItem-QpacyHa1.js";import"./ToolbarRootContext-BNVauRMC.js";import"./composite-D2OvudN1.js";import"./svgIconContainer-LFdnXjkf.js";import"./PdfViewerSearchBar-CqDpOXxN.js";import"./chevron-up-2-a8Y8bl.js";import"./chevron-down-Ci68Jmqo.js";import"./cross-BBzA-0FD.js";import"./PdfViewerSidebar-DaV3y8U3.js";import"./index-CA4RuaSb.js";import"./index-DGaoMYYr.js";import"./index-DKnEAJke.js";import"./PdfViewerToolbar-CY9WSfHa.js";import"./Button-CMzjLHfg.js";import"./chevron-right-DQW9OD0v.js";import"./Input-BCT2mqmz.js";import"./search-uSNLpV_J.js";import"./spin-sjovnJ8Q.js";import"./error-CKG1y6S7.js";import"./withOsdkMetrics-BBCl75ZX.js";import"./makeExternalStore-CHsvXMvU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
