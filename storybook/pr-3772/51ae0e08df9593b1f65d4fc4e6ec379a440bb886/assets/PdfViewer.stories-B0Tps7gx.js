import{j as r,M as s}from"./iframe-DQ03zKaw.js";import{P as p}from"./pdf-viewer-CjPk8AOt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BHDCwStK.js";import"./preload-helper-DsOAMWP6.js";import"./PdfRenderer-ZVGk1Ewi.js";import"./index-stdVkj-k.js";import"./PdfViewer-Db_jEoYx.js";import"./PdfViewer.module.css-CLoeR-XW.js";import"./PdfViewerAnnotationLayer-ChJzfjRM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bv-CV_RU.js";import"./PdfViewerOutlineSidebar-CZmKuZwm.js";import"./PdfViewerSidebarHeader-B9yv1dRY.js";import"./useBaseUiId-BcwXn3JA.js";import"./useControlled-CbhFopnc.js";import"./CompositeRoot-D0Jqc4iv.js";import"./CompositeItem-B8vFY17A.js";import"./ToolbarRootContext-C2wgqXfe.js";import"./composite-DzzU_ZlD.js";import"./svgIconContainer--Sopw3_S.js";import"./PdfViewerSearchBar-CZaHlKDB.js";import"./chevron-up-bJKOKg6D.js";import"./chevron-down-DcVCbfRt.js";import"./cross-CJiMy_ZW.js";import"./PdfViewerSidebar-66WQ9giI.js";import"./index-DFJwtzJK.js";import"./index-qXGo-ysy.js";import"./index-V5lc2XuU.js";import"./PdfViewerToolbar-D9SLHbrV.js";import"./Button-BC8511vo.js";import"./chevron-right-D2Sah5Rk.js";import"./Input-whmgHMtV.js";import"./search-B-4oOix2.js";import"./spin-RSLoKNUj.js";import"./error-Len1bRu3.js";import"./withOsdkMetrics-DUJdTBYY.js";import"./makeExternalStore-Dc9gfDBF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
