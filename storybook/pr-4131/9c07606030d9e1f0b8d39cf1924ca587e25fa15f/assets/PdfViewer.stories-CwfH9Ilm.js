import{j as r,M as s}from"./iframe-DxxbQvQS.js";import{P as p}from"./pdf-viewer-DAwQIYNy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DqaXM58B.js";import"./preload-helper-BmW5a970.js";import"./PdfViewer-C7FBJ-tl.js";import"./index-Cu-WR_G5.js";import"./BasePdfViewer-CiLyOcU1.js";import"./BasePdfViewer.module.css-Dqf6j2eW.js";import"./PdfViewerAnnotationLayer-ioyWAD8s.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-3CA26--X.js";import"./PdfViewerOutlineSidebar-eX4fCuuw.js";import"./PdfViewerSidebarHeader-B4sGiXUG.js";import"./useBaseUiId-Brl8T8Kf.js";import"./useControlled-CL6vvYza.js";import"./CompositeRoot-CPPn3RyR.js";import"./CompositeItem-beHVPrKw.js";import"./ToolbarRootContext-9fMJDea1.js";import"./composite-C5YJt7dM.js";import"./svgIconContainer-PZP2rkyO.js";import"./PdfViewerSearchBar-CUZHJ1R5.js";import"./chevron-up-DBbJ6kbF.js";import"./chevron-down-CCZd9VTh.js";import"./cross-D--1C_uR.js";import"./PdfViewerSidebar-WeQF1qj-.js";import"./index-CI5AqopY.js";import"./index-mzAwx4l9.js";import"./index-CkYBlAD9.js";import"./PdfViewerToolbar-ZK-dBbBv.js";import"./Button-BnqDmIMF.js";import"./chevron-right-_LLGe-WE.js";import"./Input-CVhM1jds.js";import"./search-rJtEr32Y.js";import"./spin-CUhqdHw3.js";import"./error-ClKWsTpb.js";import"./withOsdkMetrics-DJHuuWR4.js";import"./makeExternalStore-SAYXMC44.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
