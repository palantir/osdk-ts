import{j as r,M as s}from"./iframe-Brmfbmz5.js";import{P as p}from"./pdf-viewer-BZdQAerA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DDVwF2l5.js";import"./preload-helper-DOndN82M.js";import"./PdfViewer-MFQlTWNj.js";import"./index-CdHtMllz.js";import"./BasePdfViewer-DjZf9ThD.js";import"./BasePdfViewer.module.css-BhRXpktF.js";import"./PdfViewerAnnotationLayer-BBNd8lYX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CsyREVUO.js";import"./PdfViewerOutlineSidebar-DrD2WPz7.js";import"./PdfViewerSidebarHeader-BeyHZlvn.js";import"./useBaseUiId-DOGmrDtt.js";import"./useControlled-B9XW-ROk.js";import"./CompositeRoot-CuDRvtQN.js";import"./CompositeItem-CAOvInfw.js";import"./ToolbarRootContext-DJZTCp8t.js";import"./composite-RDVcdR-R.js";import"./svgIconContainer-Cy0NnLfo.js";import"./PdfViewerSearchBar-gXkwDrGA.js";import"./chevron-up-CzrM3MPI.js";import"./chevron-down-Bstv9WV1.js";import"./cross-fGiz3Rjs.js";import"./PdfViewerSidebar-D7X8GckO.js";import"./index-DTHd-YPe.js";import"./index-DIAM2hNo.js";import"./index-Dr0L57xQ.js";import"./PdfViewerToolbar-DbX6fOra.js";import"./Button-BUGtRXvM.js";import"./chevron-right-CfV7BU8n.js";import"./Input-BEXhNqGp.js";import"./search-DtsbzCVy.js";import"./spin--ttpcR3z.js";import"./error-CqVZQ730.js";import"./withOsdkMetrics-By8VTH2x.js";import"./makeExternalStore-BLoslo8k.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
