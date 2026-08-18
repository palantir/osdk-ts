import{j as r,M as s}from"./iframe-ACqoCsP1.js";import{P as p}from"./pdf-viewer-DAecnTiS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DEGio5KL.js";import"./preload-helper-B0NytkGS.js";import"./PdfViewer-CT2yprsL.js";import"./index-CH3f4Y4v.js";import"./BasePdfViewer-eYZ_ZfZP.js";import"./BasePdfViewer.module.css-DpXHSGTg.js";import"./PdfViewerAnnotationLayer-BZo4qk6s.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CDw8mra5.js";import"./PdfViewerOutlineSidebar-DVkHaD4A.js";import"./PdfViewerSidebarHeader-7qjQm7IE.js";import"./useBaseUiId-YELf5DtT.js";import"./useControlled-Ei_xM4pt.js";import"./CompositeRoot-BSwdzX_X.js";import"./CompositeItem-CHURugJM.js";import"./ToolbarRootContext-CBorp6LJ.js";import"./composite-ClfvqsWa.js";import"./svgIconContainer-DQJmdZ4w.js";import"./PdfViewerSearchBar-BVXuc4bH.js";import"./chevron-up-BKNm7hZd.js";import"./chevron-down-DSctgGN2.js";import"./cross-CuuQ7UQ8.js";import"./PdfViewerSidebar-D1QxYffm.js";import"./index-BI6hNs5F.js";import"./index-1_maJEvl.js";import"./index-BC4L-KC_.js";import"./PdfViewerToolbar-Bd_7cSKb.js";import"./Button-D8yf6tNW.js";import"./chevron-right-X6e21GHp.js";import"./Input-BoLPhHvH.js";import"./search-CbRnBR_C.js";import"./spin-BrhIrwyn.js";import"./error-CNcF2Rns.js";import"./withOsdkMetrics-Du2c38Bn.js";import"./makeExternalStore-nQn9uS75.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
