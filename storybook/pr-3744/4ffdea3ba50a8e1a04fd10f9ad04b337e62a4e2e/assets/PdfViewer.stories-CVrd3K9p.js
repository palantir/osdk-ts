import{j as r,M as s}from"./iframe-BAeLbAl6.js";import{P as p}from"./pdf-viewer-DXSNYA9z.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BHzDOWv6.js";import"./preload-helper-m_84o41e.js";import"./PdfRenderer-DIIeAFRo.js";import"./index-PFCRcBB8.js";import"./PdfViewer-W4MXH_jy.js";import"./PdfViewer.module.css-DQYTZIW7.js";import"./PdfViewerAnnotationLayer-B-u4KqQW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cle980us.js";import"./PdfViewerOutlineSidebar-BBeN4yCQ.js";import"./PdfViewerSidebarHeader-C0oBvmSa.js";import"./useBaseUiId-Bqj7O5fV.js";import"./useControlled-ESFaGK0R.js";import"./CompositeRoot-DOFpD5nn.js";import"./CompositeItem-CWT-t3Tx.js";import"./ToolbarRootContext-Cd959Anj.js";import"./composite-CB1zzFRj.js";import"./svgIconContainer-BwzsxKuu.js";import"./PdfViewerSearchBar-Dn0Ifim6.js";import"./chevron-up-e51V_wZr.js";import"./chevron-down-Xy6No0Yn.js";import"./cross-LaD09s4o.js";import"./PdfViewerSidebar-CZV32-GC.js";import"./index-CZsDhWOE.js";import"./index-C94QZByk.js";import"./index-Cewd33Zv.js";import"./PdfViewerToolbar-Bg_5oQ9B.js";import"./Button-DlDEnFnv.js";import"./chevron-right-BK4vf6u_.js";import"./Input-v-g3V96U.js";import"./search-DSQXKmVC.js";import"./spin-CUQLslcs.js";import"./error-BE-E_O08.js";import"./withOsdkMetrics-CMXM2A9g.js";import"./makeExternalStore-DgNy_XDA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
