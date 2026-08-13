import{j as r,M as s}from"./iframe-CQFnHxTO.js";import{P as p}from"./pdf-viewer-Bja69EqN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-7KTww7om.js";import"./preload-helper-rK1dY1Ui.js";import"./PdfRenderer-CN3m4iV-.js";import"./index-D-SWpkps.js";import"./PdfViewer-wl4SYtWZ.js";import"./PdfViewer.module.css-DP3vxGgU.js";import"./PdfViewerAnnotationLayer-C64LlaS6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-zhSBI46R.js";import"./PdfViewerOutlineSidebar-BRdeE3rv.js";import"./PdfViewerSidebarHeader-VwDTRGh5.js";import"./useBaseUiId-DhEYJ7Lv.js";import"./useControlled-DQq657mZ.js";import"./CompositeRoot-CEFgIT1q.js";import"./CompositeItem-B9-jPotu.js";import"./ToolbarRootContext-DJ0l6Br3.js";import"./composite-DDTIjh9a.js";import"./svgIconContainer-DGlcHToS.js";import"./PdfViewerSearchBar-Ban_pniD.js";import"./chevron-up-Dt0Og856.js";import"./chevron-down-CXwEWINw.js";import"./cross-BwcQfy8o.js";import"./PdfViewerSidebar-DNLZ1cWA.js";import"./index-BTqp2ZX9.js";import"./index-BwQs_oNu.js";import"./index-B7EcVcO3.js";import"./PdfViewerToolbar-C9R13vVX.js";import"./Button-Vd6i0l0Q.js";import"./chevron-right-CjQseNaT.js";import"./Input-DVjUYO6G.js";import"./search-DLWP4Sau.js";import"./spin-r0UeDOkM.js";import"./error-qjyqUuKF.js";import"./withOsdkMetrics-BzKJ-zlS.js";import"./makeExternalStore-DkFvLNvv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
