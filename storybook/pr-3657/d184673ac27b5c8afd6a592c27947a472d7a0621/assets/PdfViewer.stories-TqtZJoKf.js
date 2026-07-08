import{j as r,M as s}from"./iframe-D0uRAxcV.js";import{P as p}from"./pdf-viewer-hicNwzvA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DQlYefWC.js";import"./preload-helper-FX778EEz.js";import"./PdfRenderer-D9oRv8gB.js";import"./index-BEGIPrEn.js";import"./PdfViewer-C0riFV42.js";import"./PdfViewer.module.css-Bl6JEu50.js";import"./PdfViewerAnnotationLayer-yPpByglE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CoEZ8Ui5.js";import"./PdfViewerOutlineSidebar-D5Nw1qdg.js";import"./PdfViewerSidebarHeader-BS6hJajB.js";import"./useBaseUiId-BVKw2tfT.js";import"./useControlled-BIaio_kq.js";import"./CompositeRoot-XJ8wNUsP.js";import"./CompositeItem-CRRd8ka1.js";import"./ToolbarRootContext-Otyhk070.js";import"./composite-DwbXUTzX.js";import"./svgIconContainer-B9j6EW46.js";import"./PdfViewerSearchBar-pmUY5mUq.js";import"./chevron-up-Cp0s0c8D.js";import"./chevron-down-ChJRnc9_.js";import"./cross-DHWrQq2X.js";import"./PdfViewerSidebar-De8IwazD.js";import"./index-CmySbF-6.js";import"./index-DI4wtT1d.js";import"./index-CDEa1l1X.js";import"./PdfViewerToolbar-BLfrG45Z.js";import"./Button-DFzOjN4m.js";import"./chevron-right-DcInZl5a.js";import"./Input-C3XKFpSU.js";import"./search-C2ChGgYx.js";import"./spin-DATW81aJ.js";import"./error-DXQnnYxw.js";import"./withOsdkMetrics-DeCTRr7G.js";import"./makeExternalStore-aSVXlUMA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
