import{j as r,M as s}from"./iframe-0F7DfPLe.js";import{P as p}from"./pdf-viewer-DMK7bF58.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-FkuJhttp.js";import"./preload-helper-6mO-KnDD.js";import"./PdfViewer-Dj1vcllz.js";import"./index-Djr_Jop1.js";import"./BasePdfViewer-CXhdtK1t.js";import"./BasePdfViewer.module.css-Vr-ZfatB.js";import"./PdfViewerAnnotationLayer-Bx7CYAIH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DiUVKs2v.js";import"./PdfViewerOutlineSidebar-BCyLRokK.js";import"./PdfViewerSidebarHeader-CPoGkVL4.js";import"./useBaseUiId-SJpz-dQs.js";import"./useControlled-aWzuAlWu.js";import"./CompositeRoot-D3AJD8ZK.js";import"./CompositeItem-wpUfw-Sy.js";import"./ToolbarRootContext-RyDWl030.js";import"./composite-DHXjkz_4.js";import"./svgIconContainer-DTCoh7Fd.js";import"./PdfViewerSearchBar-DXnJItic.js";import"./chevron-up-D8kRfjfD.js";import"./chevron-down-CdGiAoum.js";import"./cross-BVUsmn4r.js";import"./PdfViewerSidebar-LEYVH2t9.js";import"./index-RC7u8s6f.js";import"./index-EJLGsV9R.js";import"./index-DwIy8s5K.js";import"./PdfViewerToolbar-BUzmRRDk.js";import"./Button-BmQF-Ia9.js";import"./chevron-right-CB7KLAIo.js";import"./Input-CAkxXyLf.js";import"./search-Ba_3E6-e.js";import"./spin-Bo_FtNMZ.js";import"./error-CEwiS4uA.js";import"./withOsdkMetrics-B8TnMVr-.js";import"./makeExternalStore-xL_Ap3fc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
