import{j as r,M as s}from"./iframe-Bu7Ix1IE.js";import{P as p}from"./pdf-viewer-CvHoJWHy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BG0BeKHe.js";import"./preload-helper-C_vXKrgq.js";import"./PdfRenderer-DCHbwL-D.js";import"./index-CmoSOYw8.js";import"./PdfViewer-DY1sl41A.js";import"./PdfViewer.module.css-DsyvGLPd.js";import"./PdfViewerAnnotationLayer-IHE5oQL8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-fvzKSRhl.js";import"./PdfViewerOutlineSidebar-2wgeRWRJ.js";import"./PdfViewerSidebarHeader-D0I7oZd1.js";import"./useBaseUiId-tZcBrbc_.js";import"./useControlled-CGmTThd6.js";import"./CompositeRoot-CKqIx8L_.js";import"./CompositeItem-DcF65dQq.js";import"./ToolbarRootContext-DN0znCaz.js";import"./composite-BYJH93ZN.js";import"./svgIconContainer-DDLtCJpL.js";import"./PdfViewerSearchBar-DSBB5WqY.js";import"./chevron-up-x89tY1XR.js";import"./chevron-down-RSnAhjTK.js";import"./cross-DiEWLOow.js";import"./PdfViewerSidebar-cdfZxjRa.js";import"./index-Bw1Omk53.js";import"./index-BsZCU_gd.js";import"./index-CnmTy_hK.js";import"./PdfViewerToolbar-BNlCCd2C.js";import"./Button-B5h8R3TJ.js";import"./chevron-right-BKXQeyTM.js";import"./Input-DLkChbeP.js";import"./search-DhFNg-wi.js";import"./spin-DV8upWlS.js";import"./error-Di4qsqoF.js";import"./withOsdkMetrics-BhBd8sSO.js";import"./makeExternalStore-sh41R9y9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
