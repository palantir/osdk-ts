import{j as r,M as s}from"./iframe-DyhO41Rj.js";import{P as p}from"./pdf-viewer-3ojeB__i.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-FJkHd5_n.js";import"./preload-helper-CIbx8URd.js";import"./PdfViewer-BPo7sobv.js";import"./index-DwI7CQqH.js";import"./BasePdfViewer-CWkC3km0.js";import"./BasePdfViewer.module.css-Bq72qBSN.js";import"./PdfViewerAnnotationLayer-DH7Eytk0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-pw9OIuvb.js";import"./PdfViewerOutlineSidebar-DB2HpC-H.js";import"./PdfViewerSidebarHeader-Cm3rByTm.js";import"./useBaseUiId-Bew9-MTU.js";import"./useControlled-BDcMaUKC.js";import"./CompositeRoot-C4L7PKop.js";import"./CompositeItem-B1D8TqxB.js";import"./ToolbarRootContext-CekAQhO_.js";import"./composite-Brg7gMZI.js";import"./svgIconContainer-DEkY-HLY.js";import"./PdfViewerSearchBar-CWpNNHUc.js";import"./chevron-up-Bj6qH8rB.js";import"./chevron-down-D6leDeN-.js";import"./cross-CrdS3els.js";import"./PdfViewerSidebar-B1wqCTrK.js";import"./index-DVDXXnZb.js";import"./index-UqD0hRj3.js";import"./index-DR9hE8qy.js";import"./PdfViewerToolbar-CeSvHqJc.js";import"./Button-fa-PaPuc.js";import"./chevron-right-56SAa2wq.js";import"./Input-dlG_yuK1.js";import"./search-D8ph0Tmj.js";import"./spin-CDy5U7kk.js";import"./error-DLjCGmmk.js";import"./withOsdkMetrics-rGISHWN9.js";import"./makeExternalStore-CEyr08K1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
