import{j as r,M as s}from"./iframe-DOCCiOHb.js";import{P as p}from"./pdf-viewer-JT_kJIXN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-z-xedYmJ.js";import"./preload-helper-DEzHRj9g.js";import"./PdfViewer-BHt-I6Cg.js";import"./index-DFEU0Jwo.js";import"./BasePdfViewer-DMWFNbfA.js";import"./BasePdfViewer.module.css-C6XRBmsM.js";import"./PdfViewerAnnotationLayer-CAb7fSb8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CZsZft42.js";import"./PdfViewerOutlineSidebar-z7RpvbXw.js";import"./PdfViewerSidebarHeader-B0YB2-at.js";import"./useBaseUiId-CmMkAyyf.js";import"./useControlled-BoZB2Z05.js";import"./CompositeRoot-XZQtTgNF.js";import"./CompositeItem-CJrNoZr7.js";import"./ToolbarRootContext-P0D27WeH.js";import"./composite-BMmhh7vl.js";import"./svgIconContainer-YIAf9TsP.js";import"./PdfViewerSearchBar-C52YkUV8.js";import"./chevron-up-CvA6vjlA.js";import"./chevron-down-mVjqXGxr.js";import"./cross-CovJ-Ed5.js";import"./PdfViewerSidebar-CbGv8pJj.js";import"./index-B_3m-f6U.js";import"./index-N99qDbDS.js";import"./index-Bzy6XCyL.js";import"./PdfViewerToolbar-D5IK8uzc.js";import"./Button-hwj6n_zT.js";import"./chevron-right-CpXAhr0S.js";import"./Input-DWi-pbfP.js";import"./search-jcgG9auT.js";import"./spin-bJn1RLVD.js";import"./error-i9ATQSBy.js";import"./withOsdkMetrics-DDYX4AYy.js";import"./makeExternalStore-BqzO6RPd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
