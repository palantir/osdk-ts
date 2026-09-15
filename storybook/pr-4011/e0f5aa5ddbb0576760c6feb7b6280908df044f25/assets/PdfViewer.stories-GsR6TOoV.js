import{j as r,M as s}from"./iframe-CfT8oSzl.js";import{P as p}from"./pdf-viewer-BM7pZaGV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DHx5mvBo.js";import"./preload-helper-Ck2G3lhL.js";import"./PdfViewer-COtNX9hk.js";import"./index-BpawNvzq.js";import"./BasePdfViewer-DpPh3U_9.js";import"./BasePdfViewer.module.css-8dWUYdkn.js";import"./PdfViewerAnnotationLayer-C7s02r4F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BtaNxc9f.js";import"./PdfViewerOutlineSidebar-D4n4R6yq.js";import"./PdfViewerSidebarHeader-DNdorBKC.js";import"./useBaseUiId-D4xhi0G6.js";import"./useControlled-C4oVQ_PT.js";import"./CompositeRoot-DywOp6_S.js";import"./CompositeItem-B7Z5vov3.js";import"./ToolbarRootContext-CiSOROzl.js";import"./composite-CCZTgGc-.js";import"./svgIconContainer-ya4CV7y2.js";import"./PdfViewerSearchBar-BWwZsLrV.js";import"./chevron-up-CZ51cXHG.js";import"./chevron-down-hfFWURIG.js";import"./cross-BDq3cq5E.js";import"./PdfViewerSidebar-CsrW7NNe.js";import"./index-Ajqy3tvo.js";import"./index-DvoLa0A4.js";import"./index-UxUlnqFt.js";import"./PdfViewerToolbar-Dzs0Xqpd.js";import"./Button-RnGlAnHy.js";import"./chevron-right-lSPXB6iW.js";import"./Input-frvZccMj.js";import"./search-CeTlWaJs.js";import"./spin-BJdO7DXQ.js";import"./error-CTOxDA6S.js";import"./withOsdkMetrics-BzsRVIUg.js";import"./makeExternalStore-Bq85hlSU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
