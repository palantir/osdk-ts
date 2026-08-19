import{j as r,M as s}from"./iframe-m2fxxn3a.js";import{P as p}from"./pdf-viewer-Bpu6vGq8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DvE1IHip.js";import"./preload-helper-wkPSwmAr.js";import"./PdfViewer-DLETUuQ8.js";import"./index-ByBw6x6u.js";import"./BasePdfViewer-DQebleeP.js";import"./BasePdfViewer.module.css-D8_zShgQ.js";import"./PdfViewerAnnotationLayer-lY0mxNzh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-UR616d_Q.js";import"./PdfViewerOutlineSidebar-fifvoeuk.js";import"./PdfViewerSidebarHeader-DGnOJvoE.js";import"./useBaseUiId-DUlaUAbC.js";import"./useControlled-B65cfgNR.js";import"./CompositeRoot-BNEkeoNK.js";import"./CompositeItem-CV8z8cEs.js";import"./ToolbarRootContext-CrhCu0KJ.js";import"./composite-BrA88D7Q.js";import"./svgIconContainer-DSI33hOY.js";import"./PdfViewerSearchBar-BWUUolBc.js";import"./chevron-up-DUg6whYO.js";import"./chevron-down-CsrzPGt_.js";import"./cross-BjXIqjCw.js";import"./PdfViewerSidebar-CwdR_7dt.js";import"./index-CyxliH8w.js";import"./index-DSw-eeDJ.js";import"./index-D_9lQBmv.js";import"./PdfViewerToolbar-CdQIQ1Tx.js";import"./Button-DeKiGiVH.js";import"./chevron-right-BUjd97KP.js";import"./Input-D0L01xSu.js";import"./search-CdVtB6NL.js";import"./spin-3JBAZ9oM.js";import"./error-E41DUfY_.js";import"./withOsdkMetrics-6b_qk_af.js";import"./makeExternalStore-CtrMLH82.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
