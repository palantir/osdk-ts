import{j as r,M as s}from"./iframe-2Mr1t1V8.js";import{P as p}from"./pdf-viewer-B4oNV7LD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CeMOH9c5.js";import"./preload-helper-C_t9encF.js";import"./PdfViewer-v3vNN02q.js";import"./index-4lXnLG4B.js";import"./BasePdfViewer-Efy9pgnt.js";import"./BasePdfViewer.module.css-SfQ1yc5k.js";import"./PdfViewerAnnotationLayer-C6kPEYVu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DHlY4_4q.js";import"./PdfViewerOutlineSidebar-C-9Ljj6R.js";import"./PdfViewerSidebarHeader-PH0Ogeg7.js";import"./useBaseUiId-k8zppgsU.js";import"./useControlled-BcBqikwr.js";import"./CompositeRoot-SxKHBNrD.js";import"./CompositeItem-C0DzT1s7.js";import"./ToolbarRootContext-BbL0J01R.js";import"./composite-DgP8pe-I.js";import"./svgIconContainer-tMp-Mvzu.js";import"./PdfViewerSearchBar-mDSla9_S.js";import"./chevron-up-BOsS9HEx.js";import"./chevron-down-DjlK2aIq.js";import"./cross-BRuFKM6t.js";import"./PdfViewerSidebar-Dz1lWyx2.js";import"./index-C4bdzjhC.js";import"./index-5aB3LLsM.js";import"./index-CkMbtK8j.js";import"./PdfViewerToolbar-BhNzZgfE.js";import"./Button-C2c9HqHX.js";import"./chevron-right-DDR6wgwY.js";import"./Input-BAjujx0C.js";import"./search-ysbzXeyh.js";import"./spin-BWhhKayT.js";import"./error-ppckuRwj.js";import"./withOsdkMetrics-IIt9i7U1.js";import"./makeExternalStore-B8Qdlr-8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
