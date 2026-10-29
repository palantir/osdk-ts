import{j as r,M as s}from"./iframe-DuPGHU0l.js";import{P as p}from"./pdf-viewer-DziXW8Or.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bfz0R5QY.js";import"./preload-helper-C0i017mv.js";import"./PdfViewer-BIEdNOfQ.js";import"./index-trCVkGnT.js";import"./BasePdfViewer-BR20d00a.js";import"./BasePdfViewer.module.css-DgVl-7Mk.js";import"./PdfViewerAnnotationLayer-fbTOQ2S5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CAOaqUZw.js";import"./PdfViewerOutlineSidebar-DJKa44x8.js";import"./PdfViewerSidebarHeader-DOmp48wD.js";import"./useBaseUiId-CXOx85Ji.js";import"./useControlled-uIFuGzm4.js";import"./CompositeRoot-dnjjkLNo.js";import"./CompositeItem-D0CjBMiI.js";import"./ToolbarRootContext-wxST6T8W.js";import"./composite-bxfGnibV.js";import"./svgIconContainer-DYavZBCX.js";import"./PdfViewerSearchBar-id85QfC4.js";import"./chevron-up-B366UYAE.js";import"./chevron-down-2p6Ee397.js";import"./cross-DX5M9gAF.js";import"./PdfViewerSidebar-oZJsfQKa.js";import"./index-D-GgPzMj.js";import"./index-BPZGrXj8.js";import"./index-CxEs7fW4.js";import"./PdfViewerToolbar-C7XdtizR.js";import"./Button-kErr3Na-.js";import"./chevron-right-B6u8M_5E.js";import"./Input-jGQQmaCN.js";import"./search-lklVR3bN.js";import"./spin-Cyd6_8OC.js";import"./error-WnyZ_TXe.js";import"./withOsdkMetrics-D5QjWVGm.js";import"./makeExternalStore-B2yZ_Kza.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
