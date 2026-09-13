import{j as r,M as s}from"./iframe-CQyGqSJ2.js";import{P as p}from"./pdf-viewer-DDkQJnF0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B5H46rFe.js";import"./preload-helper-ClClUiX7.js";import"./PdfViewer-BGD2mCco.js";import"./index-CTpVcWtj.js";import"./BasePdfViewer-FTSaE45Q.js";import"./BasePdfViewer.module.css-BIbF4b8C.js";import"./PdfViewerAnnotationLayer-BV9ugyo8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-aR1WcqER.js";import"./PdfViewerOutlineSidebar-Dty8Pa5U.js";import"./PdfViewerSidebarHeader-DfgKcgSX.js";import"./useBaseUiId-B26AdHtG.js";import"./useControlled-B7OjwH49.js";import"./CompositeRoot-CGnpIWpZ.js";import"./CompositeItem-BYWBWUfU.js";import"./ToolbarRootContext-C3_9j6Sh.js";import"./composite-C5TUu6hJ.js";import"./svgIconContainer-Bbpye-X7.js";import"./PdfViewerSearchBar-C4_C3fYb.js";import"./chevron-up-BXa8gD5H.js";import"./chevron-down-C10qSii-.js";import"./cross-BWGdF31s.js";import"./PdfViewerSidebar-DjHWHR70.js";import"./index-BgtiYt9F.js";import"./index-BW6-nEus.js";import"./index-D1lXuc4_.js";import"./PdfViewerToolbar-a7xXyKOw.js";import"./Button-BVydS5Yy.js";import"./chevron-right-DxTseIwL.js";import"./Input-CCQVhRPw.js";import"./search-x6pHaO-A.js";import"./spin-mA8IId6g.js";import"./error-DJLHZkng.js";import"./withOsdkMetrics-LQabL3nD.js";import"./makeExternalStore-D5YfmHD0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
