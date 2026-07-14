import{j as r,M as s}from"./iframe-BncAYKvK.js";import{P as p}from"./pdf-viewer-BDdw8xuu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DXbKPjJF.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-DNQEX7hH.js";import"./index-7LyXPGbp.js";import"./PdfViewer-DH4aKMUS.js";import"./PdfViewer.module.css-BJGFOEgE.js";import"./PdfViewerAnnotationLayer-DACfA_ix.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-lghs6ylU.js";import"./PdfViewerOutlineSidebar-L6O4AHZ-.js";import"./PdfViewerSidebarHeader-LA1usE3L.js";import"./useBaseUiId-Du33E_DH.js";import"./useControlled-FXWKuML8.js";import"./CompositeRoot-CAJRwox1.js";import"./CompositeItem-BFQVMeRx.js";import"./ToolbarRootContext-Dg-i_yql.js";import"./composite-C-bLnivD.js";import"./svgIconContainer-DBpeHANf.js";import"./PdfViewerSearchBar-BCoDY0is.js";import"./chevron-up-Fo0PLJ7y.js";import"./chevron-down-DasYJXja.js";import"./cross-BI768WoZ.js";import"./PdfViewerSidebar-BIq6j-kF.js";import"./index-DAv_sCsL.js";import"./index-BAe5NMOG.js";import"./index-CrmXeU5p.js";import"./PdfViewerToolbar-BCJ_OBKz.js";import"./Button-BvME9L7I.js";import"./chevron-right-Bs0NsrOf.js";import"./Input-DTgi_HGu.js";import"./search-Cyb0DYxi.js";import"./spin-IDWVUgLD.js";import"./error-C6DkJKLG.js";import"./withOsdkMetrics--BZUpgUR.js";import"./makeExternalStore-ZIouT9sm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
