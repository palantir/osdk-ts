import{j as r,M as s}from"./iframe-2MyeaUzD.js";import{P as p}from"./pdf-viewer-Bql_35h-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CLSIlPKm.js";import"./preload-helper-DUn0LkVX.js";import"./PdfViewer-jYSWUAUa.js";import"./index-NZSVMLpP.js";import"./BasePdfViewer-BG6fiXCC.js";import"./BasePdfViewer.module.css-DW14mgpR.js";import"./PdfViewerAnnotationLayer-yeai_bDB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CqUu3AA9.js";import"./PdfViewerOutlineSidebar-D_AEt4UU.js";import"./PdfViewerSidebarHeader-BpRY4tQ9.js";import"./useBaseUiId-C0j-SKXM.js";import"./useControlled-DCne3Llm.js";import"./CompositeRoot-CTmjwQ-c.js";import"./CompositeItem-D8KecaIg.js";import"./ToolbarRootContext-zLrFE9v8.js";import"./composite-BVz7tfSY.js";import"./svgIconContainer-4EX1EfK4.js";import"./PdfViewerSearchBar-D6xDwBea.js";import"./chevron-up-T-aqkpq6.js";import"./chevron-down-4RG-YjeV.js";import"./cross-CXnhgyvc.js";import"./PdfViewerSidebar-2fsGHtcX.js";import"./index-jXeA9SgF.js";import"./index-Bm-PBo3A.js";import"./index-Ce4PKvPC.js";import"./PdfViewerToolbar-Bze3N2yA.js";import"./Button-3arTFTpt.js";import"./chevron-right-sDldV2t2.js";import"./Input-DXMdlMds.js";import"./search-CpIfmgVn.js";import"./spin-CtJSO44K.js";import"./error-CSdXVQDA.js";import"./withOsdkMetrics-CFGA0PEe.js";import"./makeExternalStore-VoU3rgtf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
