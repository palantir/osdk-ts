import{j as r,M as s}from"./iframe-C1uIQEe6.js";import{P as p}from"./pdf-viewer-CIP9PqMK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C0hvPM28.js";import"./preload-helper-DF4UQXjd.js";import"./PdfViewer-DjEP1NnQ.js";import"./index-nY9pkPDF.js";import"./BasePdfViewer-CYynSaBX.js";import"./BasePdfViewer.module.css-oHl07ucU.js";import"./PdfViewerAnnotationLayer-CxfeC9NQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DCZFW9Ho.js";import"./PdfViewerOutlineSidebar-ClbxJfsX.js";import"./PdfViewerSidebarHeader-DwrAJ_C6.js";import"./useBaseUiId-CeyDEbyZ.js";import"./useControlled-BLqDTZmr.js";import"./CompositeRoot-CG6nAjLQ.js";import"./CompositeItem-BvnjdHPq.js";import"./ToolbarRootContext-BwNqm28T.js";import"./composite-kICLPGef.js";import"./svgIconContainer-BGeGsGPX.js";import"./PdfViewerSearchBar-Cl58ngzN.js";import"./chevron-up-B7c8m0Vb.js";import"./chevron-down-Bo5GDX8K.js";import"./cross-C9ubRsWO.js";import"./PdfViewerSidebar-DprkVMOA.js";import"./index-BkXU4FNm.js";import"./index-CRvA4CpE.js";import"./index-Bnj0fwTZ.js";import"./PdfViewerToolbar-BwGrfCbD.js";import"./Button-BJ7Nz25q.js";import"./chevron-right-D9cgPWvU.js";import"./Input-Bqj-jOKY.js";import"./search-CfgnKZCI.js";import"./spin-LGZFMd97.js";import"./error-Qui232U8.js";import"./withOsdkMetrics-Dccwzuy3.js";import"./makeExternalStore-CD_wbIQr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
