import{j as r,M as s}from"./iframe-CUYHvNfN.js";import{P as p}from"./pdf-viewer-DSEyA2zY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CIsPp-49.js";import"./preload-helper-tFZfyB41.js";import"./PdfViewer-BxWf4W5N.js";import"./index-CZ6Ua3PK.js";import"./BasePdfViewer-CQXMdTDd.js";import"./BasePdfViewer.module.css-Cl30uP1p.js";import"./PdfViewerAnnotationLayer-Bu49IiWv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CjB3Gjm9.js";import"./PdfViewerOutlineSidebar-BE_9OdVi.js";import"./PdfViewerSidebarHeader-C8rQG4kF.js";import"./useBaseUiId-eg1Lg5JC.js";import"./useControlled-CPWUvLNJ.js";import"./CompositeRoot-CFdBlM-l.js";import"./CompositeItem-C1TWAJDR.js";import"./ToolbarRootContext-D9L-Ml2A.js";import"./composite-DN1Fq3ZM.js";import"./svgIconContainer-IAPv6aZQ.js";import"./PdfViewerSearchBar-CU88B2aM.js";import"./chevron-up-DUwG992o.js";import"./chevron-down-CUbAZ-_p.js";import"./cross-s4aUx31-.js";import"./PdfViewerSidebar-BOR3w62x.js";import"./index-DID_2L9u.js";import"./index-BYkORrIW.js";import"./index-Y2zZPE2J.js";import"./PdfViewerToolbar-BPXA17Ea.js";import"./Button-BjUF2wxD.js";import"./chevron-right-E2HsJUk5.js";import"./Input-DGyagt2e.js";import"./search-DPxb-PyW.js";import"./spin-lDNa5oB9.js";import"./error-CVq7I-wU.js";import"./withOsdkMetrics-D-VDYdk6.js";import"./makeExternalStore-D3VLDVl3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
