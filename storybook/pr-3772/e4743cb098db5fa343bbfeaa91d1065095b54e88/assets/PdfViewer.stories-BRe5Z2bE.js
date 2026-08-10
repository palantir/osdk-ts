import{j as r,M as s}from"./iframe-Dtwn1vaw.js";import{P as p}from"./pdf-viewer-4O9k-0kd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CaT6E8Dw.js";import"./preload-helper-EpvM9Ejn.js";import"./PdfRenderer-CYiN9iEr.js";import"./index-CunnqZpb.js";import"./PdfViewer-BLKEFk0Y.js";import"./PdfViewer.module.css-o8LELSHa.js";import"./PdfViewerAnnotationLayer-D9Mtksm5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-OBDgBFMu.js";import"./PdfViewerOutlineSidebar-CJWaaiae.js";import"./PdfViewerSidebarHeader-C9PPnHQh.js";import"./useBaseUiId-Baeg5MQx.js";import"./useControlled-Dazae9yM.js";import"./CompositeRoot-D61Kpdgi.js";import"./CompositeItem-HRSe5nIw.js";import"./ToolbarRootContext-CQKzf5TQ.js";import"./composite-C7Srcoag.js";import"./svgIconContainer-izBi4AJd.js";import"./PdfViewerSearchBar-5JaKcIHk.js";import"./chevron-up-Cy_xFg9S.js";import"./chevron-down-C6NPTEnO.js";import"./cross-BHQxszC7.js";import"./PdfViewerSidebar-CLsmz5Q5.js";import"./index-B0n_Y7CH.js";import"./index-ChzJykBZ.js";import"./index-aqrfc_zQ.js";import"./PdfViewerToolbar-CIRvvLfT.js";import"./Button-D7-EaGpa.js";import"./chevron-right-BtxrIiZS.js";import"./Input-Cew0RWyc.js";import"./search-CRFQi4jP.js";import"./spin-B_xnKAtR.js";import"./error-BogrZtpi.js";import"./withOsdkMetrics-BJmUIy28.js";import"./makeExternalStore-B_XP8khw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
