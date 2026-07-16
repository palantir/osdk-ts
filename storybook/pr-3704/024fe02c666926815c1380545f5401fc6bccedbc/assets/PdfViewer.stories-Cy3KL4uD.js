import{j as r,M as s}from"./iframe-B-bI26qs.js";import{P as p}from"./pdf-viewer-CtkiG44j.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-EZbELQwi.js";import"./preload-helper-CyAMPy-I.js";import"./PdfRenderer-Do1hczdb.js";import"./index-BO1Z2F8c.js";import"./PdfViewer-D0giS2Hn.js";import"./PdfViewer.module.css-tNPbfnsS.js";import"./PdfViewerAnnotationLayer-DYkNC9w_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C4G2eZfo.js";import"./PdfViewerOutlineSidebar-BNF2D337.js";import"./PdfViewerSidebarHeader-D75oQz0d.js";import"./useBaseUiId-DFxa8KHY.js";import"./useControlled-B9jXB5z3.js";import"./CompositeRoot-dTG7rA1Q.js";import"./CompositeItem-CozhSruV.js";import"./ToolbarRootContext-HXa5oleO.js";import"./composite-nT2iGLyC.js";import"./svgIconContainer-VHKYNUGL.js";import"./PdfViewerSearchBar-DYxrgJDG.js";import"./chevron-up-DP1WqjuS.js";import"./chevron-down-B6UilXJO.js";import"./cross-ZObj4Zbg.js";import"./PdfViewerSidebar-BDlQrP_8.js";import"./index-C-NVZsDo.js";import"./index-DAGzsosQ.js";import"./index-QKKc5Ld_.js";import"./PdfViewerToolbar-FN3nK199.js";import"./Button-D-VXe3Fn.js";import"./chevron-right-BsVTOlcg.js";import"./Input-15l147x7.js";import"./search-DCiLGM6V.js";import"./spin-D3nW5A1j.js";import"./error-D0Jho4K1.js";import"./withOsdkMetrics-coC_lN8X.js";import"./makeExternalStore-nnOIXDXF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
