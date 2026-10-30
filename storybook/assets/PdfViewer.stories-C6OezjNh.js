import{j as r,M as s}from"./iframe-BNLo1qEo.js";import{P as p}from"./pdf-viewer-BGGlQHV9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-cVUgNHfM.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-VR8wBzn7.js";import"./index-BWXZWlZP.js";import"./BasePdfViewer-BFadaguZ.js";import"./BasePdfViewer.module.css-D_L3xNP4.js";import"./PdfViewerAnnotationLayer-CmZakSVZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B_uoUZi1.js";import"./PdfViewerOutlineSidebar-D6XvK22-.js";import"./PdfViewerSidebarHeader-CAByxned.js";import"./useBaseUiId-LvnHplFk.js";import"./useControlled-CcPprz05.js";import"./CompositeRoot-BOCEGA7U.js";import"./CompositeItem-CQcPqlHd.js";import"./ToolbarRootContext-_EVP-k89.js";import"./composite-c-IzcIQu.js";import"./svgIconContainer-DNenegb-.js";import"./PdfViewerSearchBar-B9qQvYHd.js";import"./chevron-up-D42n8nyx.js";import"./chevron-down-Cc8GiNOO.js";import"./cross-BB9vD9ud.js";import"./PdfViewerSidebar-IBq6ak6T.js";import"./index-2-OS7oEL.js";import"./index-Df3Yy7kp.js";import"./index-BSoYvY0P.js";import"./PdfViewerToolbar-DTeHgFGW.js";import"./Button-LEGGZV5y.js";import"./chevron-right-DmSwYsq1.js";import"./Input-CQiU0obq.js";import"./search-qRqfYCrN.js";import"./spin-BlWuqI2B.js";import"./error-D0RMWaYW.js";import"./withOsdkMetrics-BI6Ebbvf.js";import"./makeExternalStore-Bi3yZCYu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
