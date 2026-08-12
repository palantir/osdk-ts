import{j as r,M as s}from"./iframe-CaOZVcM8.js";import{P as p}from"./pdf-viewer-DWfZJS2G.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DGECC_RA.js";import"./preload-helper-D0asL9_c.js";import"./PdfRenderer-DIemqxEw.js";import"./index-Cq1u-AUb.js";import"./PdfViewer-Dv6X9j_g.js";import"./PdfViewer.module.css-PoNugAmU.js";import"./PdfViewerAnnotationLayer-dgUxwWXu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dtp0Jhoc.js";import"./PdfViewerOutlineSidebar-DvDXqQdh.js";import"./PdfViewerSidebarHeader-DZWIYGk0.js";import"./useBaseUiId-C3rnqgEW.js";import"./useControlled-D0eeOXz6.js";import"./CompositeRoot-C8GTbMpR.js";import"./CompositeItem-wSB1_NEO.js";import"./ToolbarRootContext-DPhLluaF.js";import"./composite-UvHTpcfI.js";import"./svgIconContainer-LtpSeem8.js";import"./PdfViewerSearchBar-DxfRtAFr.js";import"./chevron-up-BRKsr6Ln.js";import"./chevron-down-Dg4eiZWX.js";import"./cross-Del0U5pN.js";import"./PdfViewerSidebar-DZYGhjg6.js";import"./index-C8V7bNNg.js";import"./index-CcwMdyCi.js";import"./index-B6bqOoQj.js";import"./PdfViewerToolbar-Z6InC_tv.js";import"./Button-DfAjosPZ.js";import"./chevron-right-BxpO6OoQ.js";import"./Input-C37Wm2cQ.js";import"./search-Dh7gn4ku.js";import"./spin-DCaMIsZJ.js";import"./error-bQoKO1DQ.js";import"./withOsdkMetrics-D3Xg8FtT.js";import"./makeExternalStore-B3ffe9bA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
