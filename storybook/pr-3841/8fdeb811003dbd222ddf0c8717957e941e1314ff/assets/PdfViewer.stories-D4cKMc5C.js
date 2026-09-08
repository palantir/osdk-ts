import{j as r,M as s}from"./iframe-DmKkedGZ.js";import{P as p}from"./pdf-viewer-D_7cTguQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DfabJeXv.js";import"./preload-helper-V3mfUD4w.js";import"./PdfViewer-qwSP6Fx0.js";import"./index-5w_QhudL.js";import"./BasePdfViewer-DhJVIAyH.js";import"./BasePdfViewer.module.css-B8P3IrSy.js";import"./PdfViewerAnnotationLayer-C5VJL7BF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CC6q0V1i.js";import"./PdfViewerOutlineSidebar-BR7i474Y.js";import"./PdfViewerSidebarHeader-BsxD-fZq.js";import"./useBaseUiId-DNfqz0_E.js";import"./useControlled-DU4z2hem.js";import"./CompositeRoot-C86n7YeI.js";import"./CompositeItem-D1JLw8xz.js";import"./ToolbarRootContext-DEQXnygN.js";import"./composite-COYZrTxF.js";import"./svgIconContainer-DvNCuvEs.js";import"./PdfViewerSearchBar-BOtbysTc.js";import"./chevron-up-aDYxr8z-.js";import"./chevron-down-BfRThbY_.js";import"./cross-CpmvhUuW.js";import"./PdfViewerSidebar-Bqsj6_mJ.js";import"./index-C25z4X6E.js";import"./index-CPiWOVlX.js";import"./index-CNJ8NeHE.js";import"./PdfViewerToolbar-Bl-GpDt-.js";import"./Button-D6JtrfeD.js";import"./chevron-right-DUOJ1SgU.js";import"./Input-jwVhWV6R.js";import"./search-xXbvdTMv.js";import"./spin-CA8RB8pp.js";import"./error-ByC5dNyY.js";import"./withOsdkMetrics-Benbq0c_.js";import"./makeExternalStore-EEoAsRvH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
