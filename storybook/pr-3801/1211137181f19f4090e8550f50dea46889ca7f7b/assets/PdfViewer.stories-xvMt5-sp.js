import{j as r,M as s}from"./iframe-eW0Hkx5D.js";import{P as p}from"./pdf-viewer-D6oRHaPL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C-2ayTx8.js";import"./preload-helper-BrSVUlNp.js";import"./PdfRenderer-Dvl-OfsB.js";import"./index-D2RKhBA_.js";import"./PdfViewer-Cpz4Au1q.js";import"./PdfViewer.module.css-BQWqVvfb.js";import"./PdfViewerAnnotationLayer-BNbkBo8S.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CnaF3d5Q.js";import"./PdfViewerOutlineSidebar-CWSLJuxB.js";import"./PdfViewerSidebarHeader-58aJfmn2.js";import"./useBaseUiId-DF1sZBey.js";import"./useControlled-DyHt7C5v.js";import"./CompositeRoot-DfJPdwBz.js";import"./CompositeItem-6Fe6wWN7.js";import"./ToolbarRootContext-BjqmUCcn.js";import"./composite-usGAMPIR.js";import"./svgIconContainer-DncqIZzb.js";import"./PdfViewerSearchBar-CY8zlQaf.js";import"./chevron-up-vi_bwCKy.js";import"./chevron-down-D8531Sp8.js";import"./cross-BDzkJdpr.js";import"./PdfViewerSidebar-BQtgn_XB.js";import"./index-Cw13LNzi.js";import"./index-el9I9AU6.js";import"./index-DxrGtqe2.js";import"./PdfViewerToolbar-zdG2tPm_.js";import"./Button-COXaioI0.js";import"./chevron-right-Bq1lKiZz.js";import"./Input-D6VOqKfH.js";import"./search-Uy7nbnTV.js";import"./spin-BUVvCuu4.js";import"./error-EIPWSpKZ.js";import"./withOsdkMetrics-U1NMWhqT.js";import"./makeExternalStore-BTGS1fMn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
