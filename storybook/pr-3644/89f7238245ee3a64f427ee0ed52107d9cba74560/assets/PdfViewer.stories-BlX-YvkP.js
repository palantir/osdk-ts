import{j as r,M as s}from"./iframe-DNd3oEu1.js";import{P as p}from"./pdf-viewer-ChO0Ev7z.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-wNdxU5SE.js";import"./preload-helper-BkhphLzz.js";import"./PdfRenderer-CLC-FJ4h.js";import"./index-zhrULqdJ.js";import"./PdfViewer-lbEjxD99.js";import"./PdfViewer.module.css-BdAH-0yb.js";import"./PdfViewerAnnotationLayer-BAocdixU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DPs9_vRi.js";import"./PdfViewerOutlineSidebar-BxgFp7Jt.js";import"./PdfViewerSidebarHeader-DuNOSLpU.js";import"./useBaseUiId-xr8gD7t-.js";import"./useControlled-Py1GRmLS.js";import"./CompositeRoot-SlQp8rk4.js";import"./CompositeItem-BCVIM9zi.js";import"./ToolbarRootContext-rMH0rm1w.js";import"./composite-DlG9JhR5.js";import"./svgIconContainer-c_nn8UIB.js";import"./PdfViewerSearchBar-D8h0BUJe.js";import"./chevron-up-BtxwahXL.js";import"./chevron-down-DwpCXL8o.js";import"./cross-CBGmAvSD.js";import"./PdfViewerSidebar-g4zm6W6K.js";import"./index-CENbDSjg.js";import"./index--_OvTyQC.js";import"./index-_nbnREgG.js";import"./PdfViewerToolbar-B7xnTGWP.js";import"./Button-C4VEHwmt.js";import"./chevron-right-BxZmb1sj.js";import"./Input-BsBr2qPn.js";import"./search-_1Mz--1W.js";import"./spin-BJuUPqu_.js";import"./error-DXBidgeF.js";import"./withOsdkMetrics-DcOj9PWp.js";import"./makeExternalStore-DkiAYWiP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
