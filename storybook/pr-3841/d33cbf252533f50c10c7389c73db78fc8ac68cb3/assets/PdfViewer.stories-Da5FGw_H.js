import{j as r,M as s}from"./iframe-B8G1jItW.js";import{P as p}from"./pdf-viewer--gTPMdZZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C421tsTE.js";import"./preload-helper-B1IURV7o.js";import"./PdfViewer-CwYv0LTa.js";import"./index-DB13g_6W.js";import"./BasePdfViewer-uxWF2tAG.js";import"./BasePdfViewer.module.css-BNNQLh6g.js";import"./PdfViewerAnnotationLayer-CgmgGYxY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BZtCkDDS.js";import"./PdfViewerOutlineSidebar-B4gvFQoO.js";import"./PdfViewerSidebarHeader-BX9slrJR.js";import"./useBaseUiId-S4IVgEx3.js";import"./useControlled-Bxr4Vh5_.js";import"./CompositeRoot-UrUhfWM0.js";import"./CompositeItem-DppqfLhH.js";import"./ToolbarRootContext-DNpt4PCI.js";import"./composite-DlSXVEG5.js";import"./svgIconContainer-CB3cR2O2.js";import"./PdfViewerSearchBar-CeimGcxo.js";import"./chevron-up-1KsBcTZP.js";import"./chevron-down-CSSbm5fQ.js";import"./cross-CZEt4CQ9.js";import"./PdfViewerSidebar-Xj2cvTiT.js";import"./index-w8Xrn1oV.js";import"./index-ad9AYhfW.js";import"./index-COXmaWmi.js";import"./PdfViewerToolbar-BNwEwBYD.js";import"./Button-Bq6MDfzu.js";import"./chevron-right-DgP-8_ye.js";import"./Input-D7bf_syM.js";import"./search-GKgaZqTV.js";import"./spin-BJHOqnoY.js";import"./error-BcGqswAb.js";import"./withOsdkMetrics-Bg8xFEho.js";import"./makeExternalStore-ByyfvAII.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
