import{j as r,M as s}from"./iframe-CtuQhrts.js";import{P as p}from"./pdf-viewer-BqZReVae.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-GpYprss7.js";import"./preload-helper-E0wvFVRZ.js";import"./PdfViewer-4L6Y7JAL.js";import"./index-DG_eNmx1.js";import"./BasePdfViewer-Bvf1s7nV.js";import"./BasePdfViewer.module.css-x-twP7WS.js";import"./PdfViewerAnnotationLayer-CrYi7MsN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CWbKbAig.js";import"./PdfViewerOutlineSidebar-otJ3sRWp.js";import"./PdfViewerSidebarHeader-CXEkFeVX.js";import"./useBaseUiId-CpQCHWr3.js";import"./useControlled-rQPfFHM_.js";import"./CompositeRoot-itbOzaJI.js";import"./CompositeItem-BIxb8BdJ.js";import"./ToolbarRootContext-BcX0gFdV.js";import"./composite-rVwQZIBy.js";import"./svgIconContainer-Bnw8yYHV.js";import"./PdfViewerSearchBar-BXsrS7CD.js";import"./chevron-up-BTak-BYF.js";import"./chevron-down-COFpbhrT.js";import"./cross-Bdk_6Gl1.js";import"./PdfViewerSidebar-GsFymN27.js";import"./index-Bn7MWlIG.js";import"./index-BqjCm1NV.js";import"./index-U7XLybOO.js";import"./PdfViewerToolbar-kIwb6Kmu.js";import"./Button-D7MvWHhh.js";import"./chevron-right-yj4bOxyR.js";import"./Input-CN20E0rX.js";import"./search-DiP8_a-2.js";import"./spin-BGxkec9C.js";import"./error-DEuUm4lv.js";import"./withOsdkMetrics-mpxIImLJ.js";import"./makeExternalStore-hGhxk8h7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
