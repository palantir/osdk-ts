import{j as r,M as s}from"./iframe-B2WEvdAW.js";import{P as p}from"./pdf-viewer-DRdHYV2K.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Djp5n70F.js";import"./preload-helper-DhU0XYWM.js";import"./PdfRenderer-BnWgWKRY.js";import"./index-CPTV9ACa.js";import"./PdfViewer-DV2K3X-R.js";import"./PdfViewer.module.css-CF1279hy.js";import"./PdfViewerAnnotationLayer-C47b1074.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BdQeRxMY.js";import"./PdfViewerOutlineSidebar-BqDtFOUR.js";import"./PdfViewerSidebarHeader-BLbi_88p.js";import"./useBaseUiId-DCdD9_76.js";import"./useControlled-C-Bb8qdR.js";import"./CompositeRoot-XhzfOC2N.js";import"./CompositeItem-DV2f_o_-.js";import"./ToolbarRootContext-Cl65jw6L.js";import"./composite-BREofBqz.js";import"./svgIconContainer-2zRkClSo.js";import"./PdfViewerSearchBar-BBNFZmrA.js";import"./chevron-up-CdROl0yX.js";import"./chevron-down-CDva5__V.js";import"./cross-Dp_5_chm.js";import"./PdfViewerSidebar-DRmUDONw.js";import"./index-Bt45A8jP.js";import"./index-BdLXJsG_.js";import"./index-CbAjSkqf.js";import"./PdfViewerToolbar-B4mR2H9m.js";import"./Button-CfOMVE39.js";import"./chevron-right-sjEfRZzC.js";import"./Input-Df2u9clw.js";import"./search--8DzG11U.js";import"./spin-DvQz1VQg.js";import"./error-DA0fUKLV.js";import"./withOsdkMetrics-BQALV_bt.js";import"./makeExternalStore-PS0hgXnz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
