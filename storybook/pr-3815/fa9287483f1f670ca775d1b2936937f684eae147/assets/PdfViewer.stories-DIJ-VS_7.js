import{j as r,M as s}from"./iframe-9-Df-LIJ.js";import{P as p}from"./pdf-viewer-Dla6Dlnd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-2K7uMOs5.js";import"./preload-helper-DCEoRWVY.js";import"./PdfRenderer-DDBQnO7K.js";import"./index-CmMoO6Ab.js";import"./PdfViewer-CAifyFd1.js";import"./PdfViewer.module.css-BR3OaZaj.js";import"./PdfViewerAnnotationLayer-DJQIKk21.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-vSd31zUu.js";import"./PdfViewerOutlineSidebar-Bvz3RUQj.js";import"./PdfViewerSidebarHeader-c0uLM5iN.js";import"./useBaseUiId-CmM9rxW8.js";import"./useControlled-CvfHdbPA.js";import"./CompositeRoot-C828aj_k.js";import"./CompositeItem-C6gHKrG3.js";import"./ToolbarRootContext-BfdRsuSy.js";import"./composite-BEjSgt66.js";import"./svgIconContainer-CzbhhJSw.js";import"./PdfViewerSearchBar-DRCr7V3H.js";import"./chevron-up-DsCFnUd4.js";import"./chevron-down-DrB3Djp3.js";import"./cross-AVBxO2wq.js";import"./PdfViewerSidebar-C7dMHzwB.js";import"./index-D9m9B2qL.js";import"./index-DGNsP-w2.js";import"./index-B7Tyltek.js";import"./PdfViewerToolbar-CTodXwYc.js";import"./Button-D-l8XO1Q.js";import"./chevron-right-B0fnmIix.js";import"./Input-BYsu1Abh.js";import"./search-Dkc3mdwO.js";import"./spin-BXVxtaOr.js";import"./error-Cp81RDFu.js";import"./withOsdkMetrics-qKmdojlP.js";import"./makeExternalStore-D3sOoyLv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
