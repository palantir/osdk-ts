import{j as r,M as s}from"./iframe-C2B_OACy.js";import{P as p}from"./pdf-viewer-C2w900LX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C0NWc-qo.js";import"./preload-helper-BbofT8Vz.js";import"./PdfRenderer-DW5I4hcF.js";import"./index-CLomzAqh.js";import"./PdfViewer-sCq78Pg0.js";import"./PdfViewer.module.css-RxF2KYa3.js";import"./PdfViewerAnnotationLayer-DZKzwxCh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BZkkGlg5.js";import"./PdfViewerOutlineSidebar-CsOeStHS.js";import"./PdfViewerSidebarHeader-JQJdbAqy.js";import"./useBaseUiId-CHtGEiBM.js";import"./useControlled-BJr6d3f7.js";import"./CompositeRoot-DX-bQQI_.js";import"./CompositeItem-BjmA2MYN.js";import"./ToolbarRootContext-C7c9wNRj.js";import"./composite-B1orMTud.js";import"./svgIconContainer-pxYY3QYz.js";import"./PdfViewerSearchBar-C3Sc3-E7.js";import"./chevron-up-C0khpHou.js";import"./chevron-down-CyJWZjaN.js";import"./cross-C7U7JI-5.js";import"./PdfViewerSidebar-BwjKC1w_.js";import"./index-Bfat0Jii.js";import"./index-0Knf2Yug.js";import"./index-DzixO7LR.js";import"./PdfViewerToolbar-BvbGxD2C.js";import"./Button-CM1PoOtK.js";import"./chevron-right-BOVJZR2a.js";import"./Input-LbVXtfjK.js";import"./search-CnoXYBH4.js";import"./spin-CwYiCrxa.js";import"./error-CgruEGl7.js";import"./withOsdkMetrics-Bn3M9t1R.js";import"./makeExternalStore-BoC_jvI8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
