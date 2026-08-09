import{j as r,M as s}from"./iframe-DhlbjbeZ.js";import{P as p}from"./pdf-viewer-DJ5pJ96c.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cv1Mky2R.js";import"./preload-helper-B3ZbJ-bP.js";import"./PdfRenderer-O1RMLk-f.js";import"./index-kWv8s-4z.js";import"./PdfViewer-CuJZW626.js";import"./PdfViewer.module.css-TQz27pYC.js";import"./PdfViewerAnnotationLayer-Cz7ie0Bz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CbbsIOt6.js";import"./PdfViewerOutlineSidebar-Bda-GrHC.js";import"./PdfViewerSidebarHeader-BmEfXppm.js";import"./useBaseUiId-B9Y_8LY0.js";import"./useControlled-K9ko4WNA.js";import"./CompositeRoot-D0OLSPiV.js";import"./CompositeItem-Bv4DEkpZ.js";import"./ToolbarRootContext-BvbVuNMG.js";import"./composite-C9hedtre.js";import"./svgIconContainer-BJqj6PDa.js";import"./PdfViewerSearchBar-Cu4RfznR.js";import"./chevron-up-BBWCff1p.js";import"./chevron-down-CVGBo-H-.js";import"./cross-B1OAvnP_.js";import"./PdfViewerSidebar-BMGSbvPi.js";import"./index-CSOX7XNN.js";import"./index-t6f6IwGx.js";import"./index-BjXaHPcG.js";import"./PdfViewerToolbar-BlnQvHlI.js";import"./Button-xxtzF2yJ.js";import"./chevron-right-Ctrot8Hr.js";import"./Input-D0rK2bUF.js";import"./search-BIxqLZiv.js";import"./spin-CMwzXUxj.js";import"./error-DwtADrTi.js";import"./withOsdkMetrics-DMzIZKlf.js";import"./makeExternalStore-CAKRXzbv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
