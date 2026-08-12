import{j as r,M as s}from"./iframe-BzgeOfJo.js";import{P as p}from"./pdf-viewer-Dh86boGB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CTF4RcZI.js";import"./preload-helper-Bkrr1btE.js";import"./PdfRenderer-yz0Gs480.js";import"./index-0sS4DK38.js";import"./PdfViewer-dxOiZqbb.js";import"./PdfViewer.module.css-B3Xo7bOh.js";import"./PdfViewerAnnotationLayer-BW3nOVhJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CoKogq8F.js";import"./PdfViewerOutlineSidebar-DyckLw-h.js";import"./PdfViewerSidebarHeader-j793hmtX.js";import"./useBaseUiId-CXJNSrJM.js";import"./useControlled-CCMODMjy.js";import"./CompositeRoot-BU9pFS9K.js";import"./CompositeItem-hxBAdSix.js";import"./ToolbarRootContext-BPdZZUMs.js";import"./composite-B4xmkZhl.js";import"./svgIconContainer-DfG8sdKE.js";import"./PdfViewerSearchBar-DIKhIwCb.js";import"./chevron-up-Dccv2pYd.js";import"./chevron-down-DWn-RMzw.js";import"./cross-CDPJxVBK.js";import"./PdfViewerSidebar-BXmTEyv5.js";import"./index-C4lWqJjv.js";import"./index-CGtuAssr.js";import"./index-BF9eciPM.js";import"./PdfViewerToolbar-BdNZ3YeD.js";import"./Button-CMlQCxNr.js";import"./chevron-right-BwoS9Z_A.js";import"./Input-uW-V73Ym.js";import"./search-D0znHoB0.js";import"./spin-DU2rJ7ld.js";import"./error-B2aj7L5W.js";import"./withOsdkMetrics-C1N_Pny7.js";import"./makeExternalStore-Bo_8jKeh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
