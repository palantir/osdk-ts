import{j as r,M as s}from"./iframe-BcWEdWfB.js";import{P as p}from"./pdf-viewer-DdVAwVVn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C05vQulP.js";import"./preload-helper-CVa1rIJ3.js";import"./PdfViewer-gbIs7VSK.js";import"./index-CwkFMZjv.js";import"./BasePdfViewer-CRqvtbqN.js";import"./BasePdfViewer.module.css-DzqRM5sI.js";import"./PdfViewerAnnotationLayer-bXhGcuP_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJ88xIS5.js";import"./PdfViewerOutlineSidebar-BtxJJFd9.js";import"./PdfViewerSidebarHeader-DrU0FJIm.js";import"./useBaseUiId-DAACsJ_e.js";import"./useControlled-BOuSIVI5.js";import"./CompositeRoot-B09OoZAG.js";import"./CompositeItem-3OABFBu2.js";import"./ToolbarRootContext-C3UpIzPe.js";import"./composite-C2TbRxj5.js";import"./svgIconContainer-D3wylWJt.js";import"./PdfViewerSearchBar-Cq_EOgta.js";import"./chevron-up-CWgKr7rQ.js";import"./chevron-down-BTTnF4Fu.js";import"./cross-BZ3hgBtX.js";import"./PdfViewerSidebar-B6a0pnIU.js";import"./index-CGjIfcSI.js";import"./index-oIyMgkgm.js";import"./index-cVAitoMW.js";import"./PdfViewerToolbar-CmcEzZgQ.js";import"./Button-BuWDqgqc.js";import"./chevron-right-brd_pXes.js";import"./Input-BARy-z-s.js";import"./search-BS0hsyoc.js";import"./spin-BoCPKOCq.js";import"./error-Dx8WDHU2.js";import"./withOsdkMetrics-YvSA4_Vm.js";import"./makeExternalStore-DAxtPfWd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
