import{j as r,M as s}from"./iframe-CuiGp-Dt.js";import{P as p}from"./pdf-viewer-FWy6D1Zt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BqiiR6iM.js";import"./preload-helper-SMMH4kyg.js";import"./PdfRenderer-Cje17rkV.js";import"./index-CCPD4c0K.js";import"./PdfViewer-BbAY9WLw.js";import"./PdfViewer.module.css-YkrN4enG.js";import"./PdfViewerAnnotationLayer-Ds6lSpV2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bcx4LGt5.js";import"./PdfViewerOutlineSidebar-NA-hxVpa.js";import"./PdfViewerSidebarHeader-DevEzmtO.js";import"./useBaseUiId-dJ6_umyu.js";import"./useControlled-BQU4YQHh.js";import"./CompositeRoot-e4L16J61.js";import"./CompositeItem-O6Z2TQDF.js";import"./ToolbarRootContext-D7hBI_DT.js";import"./composite-FY18TxQF.js";import"./svgIconContainer-D37Tnjck.js";import"./PdfViewerSearchBar-BSYm1ya2.js";import"./chevron-up-D7Hwa1G3.js";import"./chevron-down-5QkSvcpX.js";import"./cross-CqlThrbh.js";import"./PdfViewerSidebar-L7z6bw2-.js";import"./index-D5uc652e.js";import"./index-DDW4Db7g.js";import"./index-cGGpA_xq.js";import"./PdfViewerToolbar-JbX5ozUe.js";import"./Button-CHWa0SfK.js";import"./chevron-right-Dq50It2l.js";import"./Input-CSq1qZza.js";import"./search-BVtYeN3h.js";import"./spin-Bbm3O6og.js";import"./error-DmBa7_lJ.js";import"./withOsdkMetrics-IOnx9SUw.js";import"./makeExternalStore-CNEnZVLO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
