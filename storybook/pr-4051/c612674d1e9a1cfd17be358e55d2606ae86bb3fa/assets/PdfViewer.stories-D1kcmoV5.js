import{j as r,M as s}from"./iframe-UjTNASi3.js";import{P as p}from"./pdf-viewer-CneU4YGb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BwEPoGle.js";import"./preload-helper-ChUqF7Rx.js";import"./PdfViewer-BUZgOnaC.js";import"./index-CBLOqz9O.js";import"./BasePdfViewer-Cwv9h0Ue.js";import"./BasePdfViewer.module.css-7Q9RDijX.js";import"./PdfViewerAnnotationLayer-DJUrDImW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CgweKzwb.js";import"./PdfViewerOutlineSidebar-DhBa6u_e.js";import"./PdfViewerSidebarHeader-DtfQsWRL.js";import"./useBaseUiId-DbZZYE7u.js";import"./useControlled-C5YhSjey.js";import"./CompositeRoot-BdPnDRlp.js";import"./CompositeItem-B-v9FANt.js";import"./ToolbarRootContext-BlxyZF17.js";import"./composite-BsaBRbEf.js";import"./svgIconContainer-BnZ--aX4.js";import"./PdfViewerSearchBar-BHCDFtHb.js";import"./chevron-up-CGTmJszk.js";import"./chevron-down-B950jIbn.js";import"./cross-BEq_sPpX.js";import"./PdfViewerSidebar-UmhIRu2c.js";import"./index-CCVIwSxo.js";import"./index-bodWc-gm.js";import"./index-D5cIctx_.js";import"./PdfViewerToolbar-_K74t-B1.js";import"./Button-DAjQjRlz.js";import"./chevron-right-DgzF9X7p.js";import"./Input-BLyk5LFB.js";import"./search-4dG4ZP2W.js";import"./spin-DeMX_DEY.js";import"./error-K7GcRxh8.js";import"./withOsdkMetrics-viX3FGJl.js";import"./makeExternalStore-BAIn4U_g.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
