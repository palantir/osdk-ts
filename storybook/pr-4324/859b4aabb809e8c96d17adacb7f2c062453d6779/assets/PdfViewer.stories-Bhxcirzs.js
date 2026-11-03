import{j as r,M as s}from"./iframe-C_eR_-FB.js";import{P as p}from"./pdf-viewer-B5AuTzXa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DJ5-cpXF.js";import"./preload-helper-D-iMj1JN.js";import"./PdfViewer-BgXEpZW-.js";import"./index-B5oDC2JQ.js";import"./BasePdfViewer-mB3CtScK.js";import"./BasePdfViewer.module.css-BtbbVSOp.js";import"./PdfViewerAnnotationLayer-DX537u7P.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Boo_vHaz.js";import"./PdfViewerOutlineSidebar-Br52y6tS.js";import"./PdfViewerSidebarHeader-CXktOLyT.js";import"./useBaseUiId-DHfbjF6K.js";import"./useControlled-BEI1fcJ3.js";import"./CompositeRoot-Du8ZldYT.js";import"./CompositeItem-DORzwzYw.js";import"./ToolbarRootContext-MiWSvMtv.js";import"./composite-CRpQuKDa.js";import"./svgIconContainer-CBJV4Tnn.js";import"./PdfViewerSearchBar-DyUytZGG.js";import"./chevron-up-CGdcB0AV.js";import"./chevron-down-CYhIscH3.js";import"./cross-6THvcyRY.js";import"./PdfViewerSidebar-BWH8eXth.js";import"./index-DsvrxdPz.js";import"./index-JDCvzA9U.js";import"./index-C5Q3HutH.js";import"./PdfViewerToolbar-DTtRFJad.js";import"./Button-D3eF3jJ4.js";import"./chevron-right-DyLbJn9E.js";import"./Input-DTI33c7U.js";import"./search-BSm0Tn1z.js";import"./spin-C1E3WydG.js";import"./error-BIKnaXwT.js";import"./withOsdkMetrics-D4cys7NY.js";import"./makeExternalStore-DsUjsZj2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
