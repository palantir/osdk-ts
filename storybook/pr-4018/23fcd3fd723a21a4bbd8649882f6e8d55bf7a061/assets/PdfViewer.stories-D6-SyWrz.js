import{j as r,M as s}from"./iframe-BRGzDqju.js";import{P as p}from"./pdf-viewer-9aBxwL35.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-KGHkSBkr.js";import"./preload-helper-5JQdMdM9.js";import"./PdfViewer-B8Z3CyCn.js";import"./index-En-TUnJd.js";import"./BasePdfViewer-qL-_DHZc.js";import"./BasePdfViewer.module.css-DiMliPgG.js";import"./PdfViewerAnnotationLayer-BstHBzPM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CK1DZUto.js";import"./PdfViewerOutlineSidebar-Df9ACM-o.js";import"./PdfViewerSidebarHeader-B6GAPbKz.js";import"./useBaseUiId-B3wooVnn.js";import"./useControlled-DJDqOS1V.js";import"./CompositeRoot-C6sEfeh1.js";import"./CompositeItem-q2WRXYZP.js";import"./ToolbarRootContext-67BQ7bpF.js";import"./composite-C-AGstI3.js";import"./svgIconContainer-BQAEO-7W.js";import"./PdfViewerSearchBar-B5cQANCG.js";import"./chevron-up-DRyL9cLD.js";import"./chevron-down-CLb4G2AF.js";import"./cross-CQP7lInb.js";import"./PdfViewerSidebar-9X3BFMo6.js";import"./index-CNqdpeI1.js";import"./index-DPkAIY9Y.js";import"./index-Bad5TxyQ.js";import"./PdfViewerToolbar-JbO1hHrO.js";import"./Button-0cGInffD.js";import"./chevron-right-XKsvKtZW.js";import"./Input-DmzPzGey.js";import"./search-asFq5N8L.js";import"./spin-DyHqn69a.js";import"./error-CoQddkwW.js";import"./withOsdkMetrics-DO5dBBXm.js";import"./makeExternalStore-B-5KvZfn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
