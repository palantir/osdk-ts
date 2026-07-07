import{j as r,M as s}from"./iframe-C6wqoJ-R.js";import{P as p}from"./pdf-viewer-5jM82vN5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DsV2iEVb.js";import"./preload-helper-OsnfvNW6.js";import"./PdfRenderer-C-E2s-Im.js";import"./index-DaWDiAIK.js";import"./PdfViewer-BHrnOzcp.js";import"./PdfViewer.module.css-UKAwTj_f.js";import"./PdfViewerAnnotationLayer-siFNKACP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-bS8f60il.js";import"./PdfViewerOutlineSidebar-xNNeAvUC.js";import"./PdfViewerSidebarHeader-CwRxT8k2.js";import"./useBaseUiId-BzTh4cTk.js";import"./useControlled-DntN-GCd.js";import"./CompositeRoot-7fqHKR2q.js";import"./CompositeItem-DX6qVJ29.js";import"./ToolbarRootContext-DvgnNDKX.js";import"./composite-geLf6Q2O.js";import"./svgIconContainer-CD_NxClA.js";import"./PdfViewerSearchBar-D1jJR8aO.js";import"./chevron-up-GKAWLn0c.js";import"./chevron-down-sncvdbsk.js";import"./cross-Cm_KLJ78.js";import"./PdfViewerSidebar-BEeZ5_6n.js";import"./index-BClVvYb0.js";import"./index-CTJU1FE2.js";import"./index-_lMY4yps.js";import"./PdfViewerToolbar-C3GL4FNY.js";import"./Button-CjvYY6NT.js";import"./chevron-right-CDDVLVvg.js";import"./Input-DC3FlLe_.js";import"./search-yCRzKz8S.js";import"./spin-BClBu8H9.js";import"./error-DgGcq_Yr.js";import"./withOsdkMetrics-CEMSMWLA.js";import"./makeExternalStore-qlMqAvyH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
