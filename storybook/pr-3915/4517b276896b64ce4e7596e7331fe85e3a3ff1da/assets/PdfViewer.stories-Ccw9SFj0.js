import{j as r,M as s}from"./iframe-_XWcEwHk.js";import{P as p}from"./pdf-viewer-Du5Kx4Mc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-NFBoxceh.js";import"./preload-helper-CNNwgNsL.js";import"./PdfViewer-CcfbOJR6.js";import"./index-DEyLol8C.js";import"./BasePdfViewer-BoWlNLjV.js";import"./BasePdfViewer.module.css-8nyv0n2y.js";import"./PdfViewerAnnotationLayer-Bm-R3mWa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CGwlsPLJ.js";import"./PdfViewerOutlineSidebar-DR-Z0xi7.js";import"./PdfViewerSidebarHeader-0Ng_pXIR.js";import"./useBaseUiId-Cp55Lgic.js";import"./useControlled-DwjvLtqF.js";import"./CompositeRoot-C91-PMuF.js";import"./CompositeItem-B8eozN0-.js";import"./ToolbarRootContext-MmipuJm0.js";import"./composite-BYE5Dlef.js";import"./svgIconContainer-s76caIVw.js";import"./PdfViewerSearchBar-BHlVgXEs.js";import"./chevron-up-ClaldvKT.js";import"./chevron-down-aMIB5bAJ.js";import"./cross-Cvllyul3.js";import"./PdfViewerSidebar-3bSYMUN2.js";import"./index-DQrLQlQ5.js";import"./index-BDsQj8Rb.js";import"./index-B_nZUuF2.js";import"./PdfViewerToolbar-BlfeGovB.js";import"./Button-Bc6gggWi.js";import"./chevron-right-CiueywkU.js";import"./Input-B7mKteg-.js";import"./search-Dcf_xsL6.js";import"./spin-Bm2yv1gg.js";import"./error-CGLwBB-Q.js";import"./withOsdkMetrics-DqQ9hGu9.js";import"./makeExternalStore-CYii8DZX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
