import{j as r,M as s}from"./iframe-B7gQcrb_.js";import{P as p}from"./pdf-viewer-8MZsBZgw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BWunc3f7.js";import"./preload-helper-B22ifJX7.js";import"./PdfRenderer-3FIOnZBr.js";import"./index-DW0zwyvf.js";import"./PdfViewer-_L8RnSOL.js";import"./PdfViewer.module.css-B1Ky48Mc.js";import"./PdfViewerAnnotationLayer-aTk7EwZe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DZwROLbv.js";import"./PdfViewerOutlineSidebar-VOJ7zzUn.js";import"./PdfViewerSidebarHeader-DUbFXECG.js";import"./useBaseUiId-DCWAq4Sx.js";import"./useControlled-CVbWaO1F.js";import"./CompositeRoot-BLx7Anto.js";import"./CompositeItem-CAlT67zS.js";import"./ToolbarRootContext-ub1eLBc8.js";import"./composite-DEgIh3jn.js";import"./svgIconContainer-D6sfD20p.js";import"./PdfViewerSearchBar-D4za1hV_.js";import"./chevron-up-S7_vRg_s.js";import"./chevron-down-CWecwFos.js";import"./cross-CYsb_yLj.js";import"./PdfViewerSidebar-DGQQO_sT.js";import"./index-CISsqx9W.js";import"./index-KNoJXyD0.js";import"./index-D1_nxY16.js";import"./PdfViewerToolbar-DNurIwXu.js";import"./Button-CC2MtQJZ.js";import"./chevron-right-DfEM4YPy.js";import"./Input-vMCMJnkw.js";import"./search-BULPq-dP.js";import"./spin-Dhqx0j6J.js";import"./error-E_X0j4XH.js";import"./withOsdkMetrics-PuQmpE13.js";import"./makeExternalStore-BUojSKmM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
