import{j as r,M as s}from"./iframe-D5mq6hoo.js";import{P as p}from"./pdf-viewer-CClVMIZO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bp_FF2hh.js";import"./preload-helper-DLWajGUW.js";import"./PdfRenderer-CkzHacR3.js";import"./index-TQYcFi_V.js";import"./PdfViewer-pklc20-Z.js";import"./PdfViewer.module.css-B8nelXN-.js";import"./PdfViewerAnnotationLayer-CS8w4t85.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C4gZm-65.js";import"./PdfViewerOutlineSidebar-CaMRaLFE.js";import"./PdfViewerSidebarHeader-DvJ0YNoN.js";import"./useBaseUiId-C1b0TVFW.js";import"./useControlled-CMM8zoo1.js";import"./CompositeRoot-CIVmm8wf.js";import"./CompositeItem-oEKQLuWW.js";import"./ToolbarRootContext-DvJHR6kG.js";import"./composite-D9LgULkf.js";import"./svgIconContainer-zobeiVr1.js";import"./PdfViewerSearchBar-CDFNLeEO.js";import"./chevron-up-Bj1d7IHg.js";import"./chevron-down-C0SjICXe.js";import"./cross-D1j6czOE.js";import"./PdfViewerSidebar-DrS4tQwL.js";import"./index-q5evmxfe.js";import"./index-BWp-MrHb.js";import"./index-B32LjCvS.js";import"./PdfViewerToolbar-DSkEqjBO.js";import"./Button-Bt_SsAOl.js";import"./chevron-right-CneSFuKN.js";import"./Input-hVP4Pe5o.js";import"./search-gb8Hgy2x.js";import"./spin-CMKbFrit.js";import"./error-2NNZ1YQy.js";import"./withOsdkMetrics-evsmOUuT.js";import"./makeExternalStore-CMtiVF6j.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
