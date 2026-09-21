import{j as r,M as s}from"./iframe-Dqi9AKQ4.js";import{P as p}from"./pdf-viewer-DVLp3uWl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DjH79YXK.js";import"./preload-helper-Bt4Y1gaG.js";import"./PdfViewer-1L7PcYt0.js";import"./index-DUzHQ-g1.js";import"./BasePdfViewer-BosJi71e.js";import"./BasePdfViewer.module.css-B0eIAA1G.js";import"./PdfViewerAnnotationLayer-Bqq6WZy5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C-SuDC7r.js";import"./PdfViewerOutlineSidebar-DFAMYdDr.js";import"./PdfViewerSidebarHeader-B54Ml9uW.js";import"./useBaseUiId-D9DZyJv1.js";import"./useControlled-Bofva4ix.js";import"./CompositeRoot-B7naGCOz.js";import"./CompositeItem-D9oAX4d7.js";import"./ToolbarRootContext-D53iOUwp.js";import"./composite-BrE87LEg.js";import"./svgIconContainer-DBFNWjmD.js";import"./PdfViewerSearchBar-CWKm3qqZ.js";import"./chevron-up-CXJTRYvq.js";import"./chevron-down-B-x5XAQs.js";import"./cross-CViy1YB1.js";import"./PdfViewerSidebar-BEZNvGlC.js";import"./index-CJftUKPV.js";import"./index-BTd5eHZp.js";import"./index-B4xagMAY.js";import"./PdfViewerToolbar-B3zl4R-0.js";import"./Button-qQ4ULf31.js";import"./chevron-right-t-xrO6c-.js";import"./Input-Bbb9NzYy.js";import"./search-DGlyxpi9.js";import"./spin-GoqnaVHQ.js";import"./error-Bfb1Ifz6.js";import"./withOsdkMetrics-B-BQZlvM.js";import"./makeExternalStore-Ckysxwb8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
