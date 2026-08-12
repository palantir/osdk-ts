import{j as r,M as s}from"./iframe-CMhSXf7u.js";import{P as p}from"./pdf-viewer-B03wtB7E.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CIsp2lON.js";import"./preload-helper-Brrs_dmH.js";import"./PdfRenderer-C9fEECLW.js";import"./index-D-EqtuMO.js";import"./PdfViewer-BZbQ6QLu.js";import"./PdfViewer.module.css-BWeNOGwv.js";import"./PdfViewerAnnotationLayer-BG7jXjNY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DnIWnR83.js";import"./PdfViewerOutlineSidebar-CzV3_-cv.js";import"./PdfViewerSidebarHeader-DHkO46y4.js";import"./useBaseUiId-DJLmBw3m.js";import"./useControlled-Yx4KOLdx.js";import"./CompositeRoot-O7xaNbnv.js";import"./CompositeItem-B3dhh8ia.js";import"./ToolbarRootContext-Dt3o3mOm.js";import"./composite-CZ_sbuO7.js";import"./svgIconContainer-BI44O8kK.js";import"./PdfViewerSearchBar-_kVpI5hR.js";import"./chevron-up-DicFWmJf.js";import"./chevron-down-UD5qoask.js";import"./cross-CDflrrvD.js";import"./PdfViewerSidebar-C-HivAvH.js";import"./index-DRucm0b5.js";import"./index-e3-NUaQu.js";import"./index-7out07OT.js";import"./PdfViewerToolbar-wBZSWerp.js";import"./Button-CYNxWIo5.js";import"./chevron-right-Pa0vhXTV.js";import"./Input-BdM-mg3J.js";import"./search-D9SDfmhX.js";import"./spin-CUVxu7q7.js";import"./error-Cia9mwql.js";import"./withOsdkMetrics-C5gJ204R.js";import"./makeExternalStore-CmWedr43.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
