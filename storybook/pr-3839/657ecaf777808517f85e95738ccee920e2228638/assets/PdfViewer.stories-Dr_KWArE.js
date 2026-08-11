import{j as r,M as s}from"./iframe-DbOzOGDn.js";import{P as p}from"./pdf-viewer-0Mb5L7ui.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B7lrxH2c.js";import"./preload-helper-CEOnTWAP.js";import"./PdfRenderer-BxVV1mYy.js";import"./index-Dg0aL1Ya.js";import"./PdfViewer-Cr4MCBYn.js";import"./PdfViewer.module.css-CKFZZovz.js";import"./PdfViewerAnnotationLayer-CNn_U0Nj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BfmWTHdK.js";import"./PdfViewerOutlineSidebar-5xhspmfc.js";import"./PdfViewerSidebarHeader-B9F-6Rt4.js";import"./useBaseUiId-BHeQMfEi.js";import"./useControlled-1SoxEbMs.js";import"./CompositeRoot-BEut6MEF.js";import"./CompositeItem-BHfyFTGc.js";import"./ToolbarRootContext-BcsxKm3i.js";import"./composite-BwS7DM51.js";import"./svgIconContainer-BkMavql5.js";import"./PdfViewerSearchBar-COj5vDKB.js";import"./chevron-up-BBNvOU0W.js";import"./chevron-down-DWiP-M1R.js";import"./cross-p3kX_C4C.js";import"./PdfViewerSidebar-D7A0KH5R.js";import"./index-CNFuF0v3.js";import"./index-DXhnYg4n.js";import"./index-CR6MxkSt.js";import"./PdfViewerToolbar-nkvrxriI.js";import"./Button-F6Bjz8AF.js";import"./chevron-right-ZLS7ki3L.js";import"./Input-DhGctLIw.js";import"./search-B4i-bCdH.js";import"./spin-Nh_uXADm.js";import"./error-AkXLsrSc.js";import"./withOsdkMetrics-C0unEn4u.js";import"./makeExternalStore-BRXhYe85.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
