import{j as r,M as s}from"./iframe-ue9bX3Iv.js";import{P as p}from"./pdf-viewer-bIWRkm1A.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DvPJ0K0N.js";import"./preload-helper-C3Wvffv1.js";import"./PdfViewer-Iz9T5tlI.js";import"./index-IcNnhROh.js";import"./BasePdfViewer-Anp9rEEk.js";import"./BasePdfViewer.module.css-DB8jSocz.js";import"./PdfViewerAnnotationLayer-DvSmzOxj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BxxlaAgj.js";import"./PdfViewerOutlineSidebar-LO_-jDGq.js";import"./PdfViewerSidebarHeader-CoZXhJ8A.js";import"./useBaseUiId-cGzETZoK.js";import"./useControlled-yUsh7HNb.js";import"./CompositeRoot-BVs8gZ8W.js";import"./CompositeItem-IO3qOv2K.js";import"./ToolbarRootContext-C5ppRaBq.js";import"./composite-BhWJUn6b.js";import"./svgIconContainer-BZgEOtnq.js";import"./PdfViewerSearchBar-CUSoQIZU.js";import"./chevron-up-STR6iC5E.js";import"./chevron-down-97bKRBG5.js";import"./cross-U1hVGtzD.js";import"./PdfViewerSidebar-Bpz4raxu.js";import"./index-BXYXQLwX.js";import"./index-DPlEBhdl.js";import"./index-5SMiFPmq.js";import"./PdfViewerToolbar-C98v6TQV.js";import"./Button-C0tazeAS.js";import"./chevron-right-B1s_GAuW.js";import"./Input-CRAGtCFZ.js";import"./search-Bid3yFjL.js";import"./spin-Co7zB7Io.js";import"./error-Bv66Pch2.js";import"./withOsdkMetrics-DwrnzR-_.js";import"./makeExternalStore-DCh8aI2s.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
