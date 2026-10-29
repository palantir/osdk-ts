import{j as r,M as s}from"./iframe-BgMdPl3C.js";import{P as p}from"./pdf-viewer-CpZCGTw4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bt2EKo1Y.js";import"./preload-helper-sBnEI_Ig.js";import"./PdfViewer-uaMzbTR_.js";import"./index-CpB1FxHm.js";import"./BasePdfViewer-BNMoO-FM.js";import"./BasePdfViewer.module.css-rAVuJFOZ.js";import"./PdfViewerAnnotationLayer-CXR8a2KH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B2Yq1hMK.js";import"./PdfViewerOutlineSidebar-BfZrKfIe.js";import"./PdfViewerSidebarHeader-DkVDq5I6.js";import"./useBaseUiId-CxT5YLyS.js";import"./useControlled-Byq8R2zI.js";import"./CompositeRoot-CxsspvJM.js";import"./CompositeItem-D5EZoP9q.js";import"./ToolbarRootContext-D7J-gn0d.js";import"./composite-sAuyKpQi.js";import"./svgIconContainer-DMmYLpy9.js";import"./PdfViewerSearchBar-vOmVOHyF.js";import"./chevron-up-DtE6yvZn.js";import"./chevron-down-CpM76MZN.js";import"./cross-D6oplnX9.js";import"./PdfViewerSidebar-C_7DyfER.js";import"./index-CIL9XgBZ.js";import"./index-BXH-jRmH.js";import"./index-0YWULKcm.js";import"./PdfViewerToolbar-COwuSXla.js";import"./Button-tnOg-ckf.js";import"./chevron-right-Dne84INL.js";import"./Input-3QA4m500.js";import"./search-CWQDb4l_.js";import"./spin-Cli9PsxO.js";import"./error-CThhHbJ9.js";import"./withOsdkMetrics-iUwzYuQQ.js";import"./makeExternalStore-CU4m9b0Z.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
