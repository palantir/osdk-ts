import{j as r,M as s}from"./iframe-C4MIlXUU.js";import{P as p}from"./pdf-viewer-CZhgQtRS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-sNM6UeX3.js";import"./preload-helper-DCfOkHUu.js";import"./PdfViewer-BI1TeoCS.js";import"./index-QdXGOJ9B.js";import"./BasePdfViewer-QjA7f0ta.js";import"./BasePdfViewer.module.css-exYfIl18.js";import"./PdfViewerAnnotationLayer-DHUpBcKO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BC38Sj8L.js";import"./PdfViewerOutlineSidebar-ESMnYjko.js";import"./PdfViewerSidebarHeader-CSwaCHGv.js";import"./useBaseUiId-BLYxIIxg.js";import"./useControlled-DaM2GsbY.js";import"./CompositeRoot-cqE1mAP-.js";import"./CompositeItem-C-l5BZdt.js";import"./ToolbarRootContext-DtcwdZup.js";import"./composite-7GWV62aV.js";import"./svgIconContainer-DoAfVxUT.js";import"./PdfViewerSearchBar-C1WjABS6.js";import"./chevron-up-BLDpobnJ.js";import"./chevron-down-DQjtaLz5.js";import"./cross-D03lplef.js";import"./PdfViewerSidebar-BhC8pNee.js";import"./index-BpG7TDWh.js";import"./index-fTGPOK7q.js";import"./index-DDMEfKUV.js";import"./PdfViewerToolbar-w8J0DR85.js";import"./Button-BxGZ6LLp.js";import"./chevron-right-D2NlEzbS.js";import"./Input-u7GRO9F9.js";import"./search-Bbx7uHY2.js";import"./spin-BwWmMZmY.js";import"./error-m5JvGXlH.js";import"./withOsdkMetrics-P9SsSnz2.js";import"./makeExternalStore-D8FJMeEh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
