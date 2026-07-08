import{j as r,M as s}from"./iframe-Cf98Ygjx.js";import{P as p}from"./pdf-viewer-C9QdMNE9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Blz6hFT_.js";import"./preload-helper-DGRkhuZN.js";import"./PdfRenderer-DS34YE7g.js";import"./index-C57_PxWD.js";import"./PdfViewer-CB3haJYw.js";import"./PdfViewer.module.css-CRT3ZoHx.js";import"./PdfViewerAnnotationLayer-BQlTRFjb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BI8mkJKg.js";import"./PdfViewerOutlineSidebar-DFbHQiDB.js";import"./PdfViewerSidebarHeader-Co1n-70I.js";import"./useBaseUiId-D80nceuW.js";import"./useControlled-DM-C6ML_.js";import"./CompositeRoot-Dj4oQfrK.js";import"./CompositeItem-D3T_1VOe.js";import"./ToolbarRootContext-BRbv9aQv.js";import"./composite-DvQhtj_T.js";import"./svgIconContainer-BrKn5b2n.js";import"./PdfViewerSearchBar-BR_J_3NE.js";import"./chevron-up-JWjoJPUs.js";import"./chevron-down-I1Fk3xaX.js";import"./cross-mzQtB7o4.js";import"./PdfViewerSidebar-gSbf1t5s.js";import"./index-CqbQTdqb.js";import"./index-BX5iKx4l.js";import"./index-MubPeqKE.js";import"./PdfViewerToolbar-dx75g14u.js";import"./Button-CYF7X31R.js";import"./chevron-right-kWAr3My4.js";import"./Input-CrmRjvgu.js";import"./search-Dsux-3Yf.js";import"./spin-DpwWp7fD.js";import"./error-C4hBYiMW.js";import"./withOsdkMetrics-DPosZT8S.js";import"./makeExternalStore-BZ1D_0-9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
