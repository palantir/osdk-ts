import{j as r,M as s}from"./iframe-rtx-0Vyx.js";import{P as p}from"./pdf-viewer-CSWZgI7E.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D6IeR7pq.js";import"./preload-helper-Bj3BOALb.js";import"./PdfViewer-CIY9KUbz.js";import"./index-DKIcRxjy.js";import"./BasePdfViewer-JZy62yvX.js";import"./BasePdfViewer.module.css-CMpvDAbz.js";import"./PdfViewerAnnotationLayer-ROAvgA6v.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Csg50eoW.js";import"./PdfViewerOutlineSidebar-DQNECOAV.js";import"./PdfViewerSidebarHeader-Cji2ad7P.js";import"./useBaseUiId-CuRyK44H.js";import"./useControlled-D6W72m7H.js";import"./CompositeRoot-DW3ylhZy.js";import"./CompositeItem-BYIrnHf7.js";import"./ToolbarRootContext-CZQywvtv.js";import"./composite-Nf4msj3r.js";import"./svgIconContainer-B40rfxVj.js";import"./PdfViewerSearchBar-DDhyTiPh.js";import"./chevron-up-DU78SJ3m.js";import"./chevron-down-uhEr0Z3V.js";import"./cross-6kSQG1-7.js";import"./PdfViewerSidebar-CwFV2nSO.js";import"./index-CxSdDGJa.js";import"./index-DOmjJjSc.js";import"./index-ITtGThnU.js";import"./PdfViewerToolbar-DBxSnm6A.js";import"./Button-poD_kS0t.js";import"./chevron-right-BqSq-4hc.js";import"./Input-B-96zHSB.js";import"./search-Dwc9HsWE.js";import"./spin-UDHQRcKB.js";import"./error-ClD13ltF.js";import"./withOsdkMetrics-B-DLHJlS.js";import"./makeExternalStore-ColxyoCn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
