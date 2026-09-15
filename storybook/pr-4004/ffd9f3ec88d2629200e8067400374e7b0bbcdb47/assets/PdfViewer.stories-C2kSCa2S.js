import{j as r,M as s}from"./iframe-Ds1oJ6aB.js";import{P as p}from"./pdf-viewer-BnmlGM0t.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BJ3XBWmH.js";import"./preload-helper-BuU6EXxB.js";import"./PdfViewer-BhbA9VNp.js";import"./index-DV-RsCBD.js";import"./BasePdfViewer-CqFY4tSH.js";import"./BasePdfViewer.module.css-Bk7A22E6.js";import"./PdfViewerAnnotationLayer-B7F1eBAz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVDxsaiU.js";import"./PdfViewerOutlineSidebar-D1LKyBN5.js";import"./PdfViewerSidebarHeader-oP0drdjI.js";import"./useBaseUiId-SveB9MiJ.js";import"./useControlled-Bb3j5PDR.js";import"./CompositeRoot-D-aRvgIt.js";import"./CompositeItem-DRYBX4C7.js";import"./ToolbarRootContext-D5DhHef8.js";import"./composite-B685C7pj.js";import"./svgIconContainer-DhoJ1wKf.js";import"./PdfViewerSearchBar-D70aiVqX.js";import"./chevron-up-BFdcJJnz.js";import"./chevron-down-BTaheqba.js";import"./cross-GX9DzQOW.js";import"./PdfViewerSidebar-CjH8BIui.js";import"./index-DBvZrrqp.js";import"./index-Z-0SkI97.js";import"./index-Dg7JsOD2.js";import"./PdfViewerToolbar-DXpw0LtE.js";import"./Button-DEZznyRx.js";import"./chevron-right-CQ40gcNj.js";import"./Input-DCigff7H.js";import"./search-C9RUzGD8.js";import"./spin-D4dm0sXo.js";import"./error-Cpa8ixp-.js";import"./withOsdkMetrics-BWv1tGJm.js";import"./makeExternalStore-Bpmh1YoV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
