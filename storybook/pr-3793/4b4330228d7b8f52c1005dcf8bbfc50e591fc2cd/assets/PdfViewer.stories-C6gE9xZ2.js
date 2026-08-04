import{j as r,M as s}from"./iframe-B6WQQhy8.js";import{P as p}from"./pdf-viewer-Cj7FZcX3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cy0697Kk.js";import"./preload-helper-ChsmwISn.js";import"./PdfRenderer-BoTxgp2d.js";import"./index-CZJ7wKSS.js";import"./PdfViewer-DxNoTK5T.js";import"./PdfViewer.module.css-BP0KR_9y.js";import"./PdfViewerAnnotationLayer-BZojT0LP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CQDbIR6Q.js";import"./PdfViewerOutlineSidebar-BB5P0lds.js";import"./PdfViewerSidebarHeader-23_0lAEb.js";import"./useBaseUiId-qIW79UrF.js";import"./useControlled-CPqJu1d3.js";import"./CompositeRoot-Bb_nZTt3.js";import"./CompositeItem-CYbk5fSZ.js";import"./ToolbarRootContext-BuUE0P6o.js";import"./composite-CHtKDR7j.js";import"./svgIconContainer-L79qlVtg.js";import"./PdfViewerSearchBar-Bbhn19AF.js";import"./chevron-up-ADF0xTG4.js";import"./chevron-down-Dxw3b8ee.js";import"./cross-DTGtSarw.js";import"./PdfViewerSidebar-CqPAAb0N.js";import"./index-BK5Yiwqs.js";import"./index-DovvsuXm.js";import"./index-JE_lKjA0.js";import"./PdfViewerToolbar-BkHw9ZW9.js";import"./Button-5VoPTOux.js";import"./chevron-right-Bo9MvtLJ.js";import"./Input-CBrPnRp5.js";import"./search-CFJ6Aknr.js";import"./spin-B-upG1Id.js";import"./error-yDqP26O9.js";import"./withOsdkMetrics-DQOgFRz6.js";import"./makeExternalStore-CjXhJZfv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
