import{j as r,M as s}from"./iframe-CnhU1nHR.js";import{P as p}from"./pdf-viewer-zJxSXGFy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BKv52kvf.js";import"./preload-helper-GzDtQ0-b.js";import"./PdfRenderer-EfbV9bmF.js";import"./index-LSdFXBcx.js";import"./PdfViewer-DJJ3Asjz.js";import"./PdfViewer.module.css-C2-OdZ0y.js";import"./PdfViewerAnnotationLayer-0vuNAAPX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BI59bWQw.js";import"./PdfViewerOutlineSidebar-DhI25Sh9.js";import"./PdfViewerSidebarHeader--Lb3Eml5.js";import"./useBaseUiId-DISFbcLc.js";import"./useControlled-BKkNpVJ6.js";import"./CompositeRoot-Dp0wwjf1.js";import"./CompositeItem-6_jT91VN.js";import"./ToolbarRootContext-CdyOlu6q.js";import"./composite-CRP8Bgs-.js";import"./svgIconContainer-CnzdGOux.js";import"./PdfViewerSearchBar-Oh9z8dde.js";import"./chevron-up-C6oVLqho.js";import"./chevron-down-C1niUM8q.js";import"./cross-AF74lAsG.js";import"./PdfViewerSidebar-BFOgTouG.js";import"./index-Ctb2owto.js";import"./index-CZScCUho.js";import"./index-BFq7VPlT.js";import"./PdfViewerToolbar-bCa3A_Gv.js";import"./Button-BS0XXroh.js";import"./chevron-right-n0Xu3u3g.js";import"./Input-Cln5VL6O.js";import"./search-DaoNK__e.js";import"./spin-53fe9m-g.js";import"./error-D9PoFvRx.js";import"./withOsdkMetrics-C_OY6Uv4.js";import"./makeExternalStore-B2OP_pNO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
