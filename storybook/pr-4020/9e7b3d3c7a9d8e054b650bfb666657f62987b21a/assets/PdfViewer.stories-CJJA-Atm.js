import{j as r,M as s}from"./iframe-FtcUBUVc.js";import{P as p}from"./pdf-viewer-Bm9xEQXC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C6bgz7ve.js";import"./preload-helper-C1DqyS6M.js";import"./PdfViewer-BMU5OaFg.js";import"./index-BrOlmJ2Z.js";import"./BasePdfViewer-DNydcn74.js";import"./BasePdfViewer.module.css-CXZ3BRQi.js";import"./PdfViewerAnnotationLayer-jeDIpSyW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CdnyDDvr.js";import"./PdfViewerOutlineSidebar-CU73LzO7.js";import"./PdfViewerSidebarHeader-DZ5JKqgd.js";import"./useBaseUiId-CE5itc9W.js";import"./useControlled-DyZru4zO.js";import"./CompositeRoot-Bfmv7Zuz.js";import"./CompositeItem-CnrRuFeY.js";import"./ToolbarRootContext-C1QQQlr9.js";import"./composite-7rmuBxl6.js";import"./svgIconContainer-N_OtDM-z.js";import"./PdfViewerSearchBar-i8ybP2CV.js";import"./chevron-up-Bng7o-Ha.js";import"./chevron-down-gXp7YXqe.js";import"./cross-CzxFF0QG.js";import"./PdfViewerSidebar-AFl72jH5.js";import"./index-0OE-AeSh.js";import"./index-D40iZtqR.js";import"./index-DEH9dzt7.js";import"./PdfViewerToolbar-JYRtHdni.js";import"./Button-GQVi1do4.js";import"./chevron-right-C-p-Q8JX.js";import"./Input-ByVchIyr.js";import"./search-dRD30Vx4.js";import"./spin-UVpNEyDa.js";import"./error-DVkQT4u5.js";import"./withOsdkMetrics-C6QmSgDy.js";import"./makeExternalStore-_r-qOFy4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
