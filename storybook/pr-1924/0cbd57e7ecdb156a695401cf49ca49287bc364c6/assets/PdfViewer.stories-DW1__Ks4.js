import{j as r,M as s}from"./iframe-CXhU7t2f.js";import{P as p}from"./pdf-viewer-BER6QTAg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-M7q_-MI5.js";import"./preload-helper-BDvWwuql.js";import"./PdfRenderer-F3CGiLDV.js";import"./index-9FYVtP3Z.js";import"./PdfViewer-DJRL5Frh.js";import"./PdfViewer.module.css-BrM3-LFB.js";import"./PdfViewerAnnotationLayer-C4iYD54I.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVUtUKrV.js";import"./PdfViewerOutlineSidebar-B9ikG0sV.js";import"./PdfViewerSidebarHeader-BXxjFS-Q.js";import"./useBaseUiId-A4A1Li5V.js";import"./useControlled-PRJV_Jy7.js";import"./CompositeRoot-D3cpepO3.js";import"./CompositeItem-DkmsW7jA.js";import"./ToolbarRootContext-BZmYr3M9.js";import"./composite-CM3mes3D.js";import"./svgIconContainer-CTI46h-O.js";import"./PdfViewerSearchBar-BLRCifSs.js";import"./chevron-up-BWRWN_OM.js";import"./chevron-down-Dnhj6aRu.js";import"./cross-C5reyL6B.js";import"./PdfViewerSidebar-Dfa3hh1i.js";import"./index-HNPnY-9L.js";import"./index-4EH_6cib.js";import"./index-BCoFteCI.js";import"./PdfViewerToolbar-ChPo_WWt.js";import"./Button-B7Bo3D3H.js";import"./chevron-right-Csv8bzzN.js";import"./Input-C8ya944S.js";import"./search-D4VdaZo6.js";import"./spin-BH-EGiRs.js";import"./error-BrRzAHal.js";import"./withOsdkMetrics-DbJ9bW-D.js";import"./makeExternalStore-0ZDPf0CN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
