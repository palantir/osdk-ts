import{j as r,M as s}from"./iframe-BfxMX6cT.js";import{P as p}from"./pdf-viewer-Bv5GtMsG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BoSD97fn.js";import"./preload-helper-BPDao22J.js";import"./PdfViewer-Bt6B5OOQ.js";import"./index-D5QdHG6c.js";import"./BasePdfViewer-BgT4FHgK.js";import"./BasePdfViewer.module.css-BGVcOmwo.js";import"./PdfViewerAnnotationLayer-CNTk4cwa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DpqtsGdz.js";import"./PdfViewerOutlineSidebar-DvxPTIOC.js";import"./PdfViewerSidebarHeader-DojvcOYE.js";import"./useBaseUiId-Diys5Rd8.js";import"./useControlled-AEJbE5Jc.js";import"./CompositeRoot-BnpeQnUg.js";import"./CompositeItem-BPbSYDgv.js";import"./ToolbarRootContext-DYeN6dWB.js";import"./composite-CX7YV8L_.js";import"./svgIconContainer-B11i6ssl.js";import"./PdfViewerSearchBar-ph1_MVm7.js";import"./chevron-up-DXYJxj0k.js";import"./chevron-down-3tdgVjjI.js";import"./cross-BQzi9cCY.js";import"./PdfViewerSidebar-DnUaNUzM.js";import"./index-DBgFz0Qc.js";import"./index-CgOKnRwH.js";import"./index-DGcqs1ai.js";import"./PdfViewerToolbar-CI1-fnlJ.js";import"./Button-4wSek2R3.js";import"./chevron-right-s9dwPl5F.js";import"./Input-C-zjcWJd.js";import"./search-D1ZDVnFF.js";import"./spin-l6SQTipy.js";import"./error-Cw0OZsfU.js";import"./withOsdkMetrics-DLVxiL_Q.js";import"./makeExternalStore-Cp6FC4H6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
