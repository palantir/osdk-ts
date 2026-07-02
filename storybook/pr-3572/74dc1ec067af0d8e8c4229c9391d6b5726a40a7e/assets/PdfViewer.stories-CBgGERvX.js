import{j as r,M as s}from"./iframe-kUcMDyOZ.js";import{P as p}from"./pdf-viewer-CqsyZoYc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B4MURkTo.js";import"./preload-helper-CS9s2vCa.js";import"./PdfRenderer-b29GgEoK.js";import"./index-FJ2youpc.js";import"./PdfViewer-C8UMXFDg.js";import"./PdfViewer.module.css-8kZ92Wxk.js";import"./PdfViewerAnnotationLayer-BRewUPbD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BjABqOwe.js";import"./PdfViewerOutlineSidebar-DtPvX55W.js";import"./PdfViewerSidebarHeader-9zvZHVMf.js";import"./useBaseUiId-DbVM3FPi.js";import"./useControlled-NxEk_Brs.js";import"./CompositeRoot-C4x2_gj9.js";import"./CompositeItem-Cj7qBh42.js";import"./ToolbarRootContext-RfLbxc0B.js";import"./composite-D-QjwseR.js";import"./svgIconContainer-DzW5WdoJ.js";import"./PdfViewerSearchBar-BxRU5glO.js";import"./chevron-up-BQVswN0x.js";import"./chevron-down-DzpiwSS8.js";import"./cross-c4mj_P3J.js";import"./PdfViewerSidebar-B8s2SRMI.js";import"./index-Nv01jUcM.js";import"./index-gAu7uQu6.js";import"./index-CIYAzXV_.js";import"./PdfViewerToolbar-BltxV8q_.js";import"./Button-OM-mrDhp.js";import"./chevron-right-B_1TzAHg.js";import"./Input-wK11acrz.js";import"./minus-CyGnRTFD.js";import"./search-CBpLo0-0.js";import"./spin-BRLvLou9.js";import"./error-DO_gsA18.js";import"./withOsdkMetrics-DNRIXYGs.js";import"./makeExternalStore-B0Wxt013.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
