import{j as r,M as s}from"./iframe-_9fkTt32.js";import{P as p}from"./pdf-viewer-D7Fa74Kb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CpZNq5BS.js";import"./preload-helper-C1KDN5-b.js";import"./PdfViewer-C3EO0yFb.js";import"./index-cWweuLXs.js";import"./BasePdfViewer-BpOWEvxg.js";import"./BasePdfViewer.module.css-DRFbFcup.js";import"./PdfViewerAnnotationLayer-BvptQdWz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DmDge6bn.js";import"./PdfViewerOutlineSidebar-CGIjkKVF.js";import"./PdfViewerSidebarHeader-DSL1CkY3.js";import"./useBaseUiId-B9cqL2iw.js";import"./useControlled-MrPxBQF8.js";import"./CompositeRoot-DN9C83JT.js";import"./CompositeItem-_4ruefbl.js";import"./ToolbarRootContext-BGC6f2SR.js";import"./composite-Cv5hA45I.js";import"./svgIconContainer-Bj9lR9eQ.js";import"./PdfViewerSearchBar-D-tQzHWr.js";import"./chevron-up-BLdxhQEz.js";import"./chevron-down-YT2yainA.js";import"./cross-CLyRJbq3.js";import"./PdfViewerSidebar-Biugm-8Z.js";import"./index-DOjV8DU-.js";import"./index-Bmp8eXG6.js";import"./index-B3Qi-0mZ.js";import"./PdfViewerToolbar-BPbCLL4G.js";import"./Button-BQ2hDtz9.js";import"./chevron-right-DnpDB7CF.js";import"./Input-BJm5qzbn.js";import"./search-2EBlNsrp.js";import"./spin-DHd1_0ky.js";import"./error-BJKVIKgH.js";import"./withOsdkMetrics-lqXp9PIO.js";import"./makeExternalStore-vS9m26hr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
