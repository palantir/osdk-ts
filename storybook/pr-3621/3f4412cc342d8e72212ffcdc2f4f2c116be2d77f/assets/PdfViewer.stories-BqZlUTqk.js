import{j as r,M as s}from"./iframe-BRQa0yJh.js";import{P as p}from"./pdf-viewer-BGX59PkC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D8e6NdIH.js";import"./preload-helper-DkcWFbSF.js";import"./PdfRenderer-BvgOkrGN.js";import"./index-CJjzCJcD.js";import"./PdfViewer-z9pUn8bN.js";import"./PdfViewer.module.css-1UHfLCzL.js";import"./PdfViewerAnnotationLayer-BVBZxyi_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DSpm-o8g.js";import"./PdfViewerOutlineSidebar-BIwuyfpe.js";import"./PdfViewerSidebarHeader-pnQVeh8T.js";import"./useBaseUiId-Dv6-UfJB.js";import"./useControlled-BE2AqAWm.js";import"./CompositeRoot-DMTeVwvN.js";import"./CompositeItem-fOfgY2KX.js";import"./ToolbarRootContext-DysqcYFh.js";import"./composite-DUzaCl7x.js";import"./svgIconContainer-C_PMf2ER.js";import"./PdfViewerSearchBar-B34FGm5C.js";import"./chevron-up-CwyRViAg.js";import"./chevron-down-Deo6cULd.js";import"./cross-v--ZjJum.js";import"./PdfViewerSidebar-Dc36FWgP.js";import"./index-CMd-9mvt.js";import"./index-B5ikEC_r.js";import"./index-DHwRVCnM.js";import"./PdfViewerToolbar-CliP2_2N.js";import"./Button-BdYV5pk2.js";import"./chevron-right-esLW6tmb.js";import"./Input-wmletC5x.js";import"./search-pGAVZxYY.js";import"./spin-NpU1GlC0.js";import"./error-CgTW8QR3.js";import"./withOsdkMetrics-Cq7sTkiI.js";import"./makeExternalStore-DOnubkZt.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
