import{j as r,M as s}from"./iframe-CuK7zOMI.js";import{P as p}from"./pdf-viewer-CQeyGeuD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DHRZRb7E.js";import"./preload-helper-P9V_DKNy.js";import"./PdfRenderer-P70Fra6x.js";import"./index-CnBZRbmI.js";import"./PdfViewer-oSm6extK.js";import"./PdfViewer.module.css-sizdPcAg.js";import"./PdfViewerAnnotationLayer-BfriH7Db.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cug1eT5B.js";import"./PdfViewerOutlineSidebar-BaKd6YAz.js";import"./PdfViewerSidebarHeader-BgduEPRo.js";import"./useBaseUiId-CXcuh5Mz.js";import"./useControlled-DBgWtr8v.js";import"./CompositeRoot-CIKzdW78.js";import"./CompositeItem-D0mCMpid.js";import"./ToolbarRootContext-E8zMlUui.js";import"./composite-Da-63znj.js";import"./svgIconContainer-kSKNmQCk.js";import"./PdfViewerSearchBar-CqJcppAA.js";import"./chevron-up-CwMC6ugu.js";import"./chevron-down-BQEzPkWb.js";import"./cross-OS5Mk4Tx.js";import"./PdfViewerSidebar-BVdZJCCz.js";import"./index-TU3WdDzH.js";import"./index-DkYI9Dyb.js";import"./index-6dfOaeSG.js";import"./PdfViewerToolbar-CFtsff1-.js";import"./Button-DuZQUlnH.js";import"./chevron-right-Bsn9nF5M.js";import"./Input-BaS-MecW.js";import"./search-BrfJMiza.js";import"./spin-CaCo1eh-.js";import"./error-I0gxPKgJ.js";import"./withOsdkMetrics-Dd2CKxXY.js";import"./makeExternalStore-Dz28jKub.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
