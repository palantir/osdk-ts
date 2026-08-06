import{j as r,M as s}from"./iframe-_sjFdmAq.js";import{P as p}from"./pdf-viewer-B7MTrH6n.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-h0tPndWc.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-C2rsnQnN.js";import"./index-CRSgNIa9.js";import"./PdfViewer-Utg-rom4.js";import"./PdfViewer.module.css-DKaA8v5R.js";import"./PdfViewerAnnotationLayer-COWND37t.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dz81Aq2J.js";import"./PdfViewerOutlineSidebar-DkNK5c1c.js";import"./PdfViewerSidebarHeader-B0cwOBoT.js";import"./useBaseUiId-5QpKILIQ.js";import"./useControlled-BllABFw_.js";import"./CompositeRoot-BjFCy2xG.js";import"./CompositeItem-Dabrke8K.js";import"./ToolbarRootContext-bAnsIJ5m.js";import"./composite-2nXa2kLb.js";import"./svgIconContainer-BedeSN7M.js";import"./PdfViewerSearchBar-DyxgTT2w.js";import"./chevron-up-DESqMhkw.js";import"./chevron-down-BIgDt-Eo.js";import"./cross-Dv72_hpq.js";import"./PdfViewerSidebar-DLDaEwmL.js";import"./index-EBLySk6J.js";import"./index-DDb5dG4i.js";import"./index-CDG4GXO9.js";import"./PdfViewerToolbar-CgKmwH4q.js";import"./Button-DDufaugh.js";import"./chevron-right-BOBUAKld.js";import"./Input-CRLxf9hA.js";import"./search-D7Px8uCu.js";import"./spin-6u2LUteu.js";import"./error-w7TsYwMi.js";import"./withOsdkMetrics-CKkOy2IX.js";import"./makeExternalStore-xIxEL6hr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
