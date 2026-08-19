import{j as r,M as s}from"./iframe-BfMbsuTO.js";import{P as p}from"./pdf-viewer-CfGD37PT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C5LBnjCj.js";import"./preload-helper-CvOWIyqc.js";import"./PdfViewer-gMWqvLvx.js";import"./index-DK1QCnCo.js";import"./BasePdfViewer-pAWkXsOY.js";import"./BasePdfViewer.module.css-y-Bh_6Io.js";import"./PdfViewerAnnotationLayer-BuqA1kOu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVHX8P6Z.js";import"./PdfViewerOutlineSidebar-CGdvV3NQ.js";import"./PdfViewerSidebarHeader-CY-kiILE.js";import"./useBaseUiId-Cepz8rU_.js";import"./useControlled-B68j-m4m.js";import"./CompositeRoot-CYrQ1NUd.js";import"./CompositeItem-CQTgHCYc.js";import"./ToolbarRootContext-Dr3KNeMK.js";import"./composite-BfY9eDFq.js";import"./svgIconContainer-CLqHKPGt.js";import"./PdfViewerSearchBar-BlV8zgi2.js";import"./chevron-up-Bvxvjs3c.js";import"./chevron-down-DCzLtESR.js";import"./cross-CKp_r7sS.js";import"./PdfViewerSidebar-C586vlqX.js";import"./index-B-v6d6PY.js";import"./index-DTXKD30u.js";import"./index-xWp45YNg.js";import"./PdfViewerToolbar-EG8bKFb9.js";import"./Button-pvHRSg6_.js";import"./chevron-right-B4oktEA1.js";import"./Input-Cj0x-U8m.js";import"./search-BJeF5SRa.js";import"./spin-D6R94hrC.js";import"./error-DD1JkUFX.js";import"./withOsdkMetrics-mlNsH_gV.js";import"./makeExternalStore-C1l5Ysjg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
