import{j as r,M as s}from"./iframe-BAKEq5ES.js";import{P as p}from"./pdf-viewer-BZ-qcDVc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BxZR4YJK.js";import"./preload-helper-hQV8mcMW.js";import"./PdfRenderer-DDeXinKg.js";import"./index-CeH782l-.js";import"./PdfViewer-ePNyBn1z.js";import"./PdfViewer.module.css-UkF4rSXN.js";import"./PdfViewerAnnotationLayer-ClGvqqGT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7OlzsqD.js";import"./PdfViewerOutlineSidebar-DytMlVZe.js";import"./PdfViewerSidebarHeader-COFZOiS7.js";import"./useBaseUiId-Brauy9uT.js";import"./useControlled-C2UCFEFv.js";import"./CompositeRoot-BdQL0s-1.js";import"./CompositeItem-B-aPUg7M.js";import"./ToolbarRootContext-yZJwFATi.js";import"./composite-O5N4yrKG.js";import"./svgIconContainer-Dld9ETuT.js";import"./PdfViewerSearchBar-Cj9HkWfv.js";import"./chevron-up-qmt3oYpu.js";import"./chevron-down-DfHSBo5l.js";import"./cross-Dt1bkvKA.js";import"./PdfViewerSidebar-B5sYQgOW.js";import"./index-Bqra-U7q.js";import"./index-DYnXO_K1.js";import"./index-PP-_CbbK.js";import"./PdfViewerToolbar-BJO-t6nI.js";import"./Button-BLWiXJyw.js";import"./chevron-right-Ckst9MkJ.js";import"./Input-BCff3WUP.js";import"./search-DZax2fsM.js";import"./spin-D2Ekb_1r.js";import"./error-BY45CvKu.js";import"./withOsdkMetrics-DsMB6nls.js";import"./makeExternalStore-DSwBTdjj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
