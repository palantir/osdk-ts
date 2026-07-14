import{j as r,M as s}from"./iframe-CgaSJGms.js";import{P as p}from"./pdf-viewer-DaHHzQrP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-KAjCIK2P.js";import"./preload-helper-DlGsqh-w.js";import"./PdfRenderer-BdWvCryG.js";import"./index-p12yqEBA.js";import"./PdfViewer-ClQmX2Gp.js";import"./PdfViewer.module.css-Bqb6gt6-.js";import"./PdfViewerAnnotationLayer-CX1pJ0E_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CiYmJB6a.js";import"./PdfViewerOutlineSidebar-CmtoPVNj.js";import"./PdfViewerSidebarHeader-BATO0Khf.js";import"./useBaseUiId-D39DBVIB.js";import"./useControlled-B0Odcszh.js";import"./CompositeRoot-BCwsK1QP.js";import"./CompositeItem-BD5vHMJe.js";import"./ToolbarRootContext-ByCsV2PG.js";import"./composite-CHM_Xrlu.js";import"./svgIconContainer-C3Ibj-cG.js";import"./PdfViewerSearchBar-BuM51hYO.js";import"./chevron-up-CDRFS2Ow.js";import"./chevron-down-C_cLuLFO.js";import"./cross-DRCEb7OP.js";import"./PdfViewerSidebar-BLPKbKFs.js";import"./index-DOHBMT4I.js";import"./index-C8zT0CUI.js";import"./index-D9n3c3GT.js";import"./PdfViewerToolbar-D9z0oOZ9.js";import"./Button-BrX3zqVY.js";import"./chevron-right-B8nrAix0.js";import"./Input-cn_9g4lx.js";import"./search-egRdoocF.js";import"./spin-CAJH_Vxt.js";import"./error-Dn_buZBL.js";import"./withOsdkMetrics-ztqZgSAs.js";import"./makeExternalStore-DR9huws8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
