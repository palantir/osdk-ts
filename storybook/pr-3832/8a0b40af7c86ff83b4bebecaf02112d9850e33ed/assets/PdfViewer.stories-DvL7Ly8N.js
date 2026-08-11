import{j as r,M as s}from"./iframe-CCe3oj1_.js";import{P as p}from"./pdf-viewer-DGDTILzF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bp6WR4dU.js";import"./preload-helper-DFkWM7QD.js";import"./PdfRenderer-DGYsz1-k.js";import"./index-BPyzy7qu.js";import"./PdfViewer-CCd3EyVp.js";import"./PdfViewer.module.css-COYeSIbF.js";import"./PdfViewerAnnotationLayer-BpSrFmAP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ClCaus9T.js";import"./PdfViewerOutlineSidebar-BXOrD4yS.js";import"./PdfViewerSidebarHeader-S4DAw0pF.js";import"./useBaseUiId-DWTWML2t.js";import"./useControlled-AVWP1zK_.js";import"./CompositeRoot-Aj9iX7Cf.js";import"./CompositeItem-DcCJzpjE.js";import"./ToolbarRootContext-D_9Dq2Dw.js";import"./composite-DqbFj3tO.js";import"./svgIconContainer-BcG3A1s1.js";import"./PdfViewerSearchBar-pbMq31sR.js";import"./chevron-up-B8vHUQYR.js";import"./chevron-down-5Odr2hDD.js";import"./cross-BDTGYN03.js";import"./PdfViewerSidebar-BD9nHJbp.js";import"./index-DpZ-Ikd6.js";import"./index-DTGTU5kW.js";import"./index-CkYleNx0.js";import"./PdfViewerToolbar-6SJmfOYA.js";import"./Button-DYv7LQZU.js";import"./chevron-right-vowmU2BT.js";import"./Input-B1ejoj9_.js";import"./search-CNcIQLsn.js";import"./spin-BFxeimQd.js";import"./error-gLdyLM8b.js";import"./withOsdkMetrics-BE4radvo.js";import"./makeExternalStore-ee2D0j5X.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
