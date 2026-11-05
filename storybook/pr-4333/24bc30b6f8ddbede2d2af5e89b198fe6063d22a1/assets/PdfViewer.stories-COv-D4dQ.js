import{j as r,M as s}from"./iframe-BRIJTziU.js";import{P as p}from"./pdf-viewer-aA806pZg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BsrF5-ap.js";import"./preload-helper-C7wNDItT.js";import"./PdfViewer-DC_qYLtk.js";import"./index-A6JnTqM7.js";import"./BasePdfViewer-Dmf68ygG.js";import"./BasePdfViewer.module.css-uVmOg1uX.js";import"./PdfViewerAnnotationLayer-CpcNd1Oh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DNxam5ik.js";import"./PdfViewerOutlineSidebar-C--GpIh7.js";import"./PdfViewerSidebarHeader-DfUxNy3L.js";import"./useBaseUiId-BsprSJc0.js";import"./useControlled-C4JFDSuR.js";import"./CompositeRoot-c2XCuNRz.js";import"./CompositeItem-CJpL3T-F.js";import"./ToolbarRootContext-BQGWwMmx.js";import"./composite-C9avNQ9h.js";import"./svgIconContainer-CIdhA9rp.js";import"./PdfViewerSearchBar-BBkU6IT5.js";import"./chevron-up-BEWxaHRE.js";import"./chevron-down-DQOobcC7.js";import"./cross-DvI1_HyP.js";import"./PdfViewerSidebar-D4-1B-30.js";import"./index-D3hbdvY7.js";import"./index-D9UptnGB.js";import"./index-B8iBQzP0.js";import"./PdfViewerToolbar-C23reBYx.js";import"./Button-Dh4qqTQa.js";import"./chevron-right-kkXrbyCb.js";import"./Input-Boj06qte.js";import"./search-BB6i5fl7.js";import"./spin-B1kcVIIQ.js";import"./error-D4dPzE3W.js";import"./withOsdkMetrics-CS23iZYx.js";import"./makeExternalStore-TKjWQKGl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
